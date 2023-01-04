# Sentry 源码
sentry 是一个错误监控。
这里主要分析sentry-javascript/browser

## 初始化sdk
```ts
export function init(options: BrowserOptions = {}): void {
   // 默认集成
  if (options.defaultIntegrations === undefined) {
    options.defaultIntegrations = defaultIntegrations;
  }
  if (options.release === undefined) {
    const window = getGlobalObject<Window>();
    // This supports the variable that sentry-webpack-plugin injects
    if (window.SENTRY_RELEASE && window.SENTRY_RELEASE.id) {
      options.release = window.SENTRY_RELEASE.id;
    }
  }
  if (options.autoSessionTracking === undefined) {
    options.autoSessionTracking = false;
  }
 const clientOptions: BrowserClientOptions = {
    ...options,
    // 栈解析器
    stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
    // 拿到所有的集成
    integrations: getIntegrationsToSetup(options),
    // 发送的方式，没有自定义的就用fetch, 没有fetch 就是XHR
    transport: options.transport || (supportsFetch() ? makeFetchTransport : makeXHRTransport),
  };
  initAndBind(BrowserClient, clientOptions);
  if (options.autoSessionTracking) {
    startSessionTracking();
  }
}
```
如果没有传入defaultIntegrations，release，autoSessionTracking 就给默认值
initAndBind 是创建SDK实例并绑定到hub上。

## defaultIntegrations

```ts
export const defaultIntegrations = [
  new CoreIntegrations.InboundFilters(), // 数据过滤器
  new CoreIntegrations.FunctionToString(), // 原始函数和方法名称
  new TryCatch(), // 包装api 处理异步异常
  new Breadcrumbs(), // 面包屑
  new GlobalHandlers(), // 捕获未处理的异常和拒绝
  new LinkedErrors(), // 配置link的错误
  new Dedupe(), // 去重
  new HttpContext(), // 之前的UserAgent
];
```
### CoreIntegrations.InboundFilters
数据过滤模块， 给全局的事件进程添加一些过滤
```ts
export interface InboundFiltersOptions {
  allowUrls: Array<string | RegExp>; // 允许的url
  denyUrls: Array<string | RegExp>; // 过滤的url
  ignoreErrors: Array<string | RegExp>; // 过滤的错误类型/消息
  ignoreInternal: boolean; // 是否忽略sdk内部错误
}
```
### CoreIntegrations.FunctionToString
就是toString方法，只是拿到原函数，看起来sentery给函数提供了一个包装对象。
这个没有添加到事件处理中，给 Function.prototype.toString 封装了一下
即使我们的错误或面包屑包装了原始函数，此集成也可以使SDK提供原始函数和方法名称

### TryCatch 重点
错误处理的捕获

```ts
  // 绑定到 Hub 上执行
  public setupOnce(): void {
    // 默认存在setTimeout , 封装一层
    if (this._options.setTimeout) {
      fill(WINDOW, 'setTimeout', _wrapTimeFunction);
    }

    if (this._options.setInterval) {
      fill(WINDOW, 'setInterval', _wrapTimeFunction);
    }

    if (this._options.requestAnimationFrame) {
      fill(WINDOW, 'requestAnimationFrame', _wrapRAF);
    }

    if (this._options.XMLHttpRequest && 'XMLHttpRequest' in WINDOW) {
      fill(XMLHttpRequest.prototype, 'send', _wrapXHR);
    }

    const eventTargetOption = this._options.eventTarget;
    if (eventTargetOption) {
      const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
      eventTarget.forEach(_wrapEventTarget);
    }
  }
```
#### 包装函数fill
就是将 source 的 name 属性指向 replacement 函数
```ts
// source 源对象 可以 理解 为 window 对象
// name 要包装的对象上的 key
// 替换的包装函数
export function fill(source: { [key: string]: any }, name: string, replacementFactory: (...args: any[]) => any): void {
  if (!(name in source)) {
    return;
  }
  // 原函数
  const original = source[name] as () => any;
  // 替换工厂函数
  const wrapped = replacementFactory(original) as WrappedFunction;

  // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
  // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
  // 标记包装函数
  if (typeof wrapped === 'function') {
    try {
    // 给包装函数 添加__sentry_original__执向源函数
      markFunctionWrapped(wrapped, original);
    } catch (_Oo) {
      // This can throw if multiple fill happens on a global object like XMLHttpRequest
      // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
    }
  }

  source[name] = wrapped;
}
// ======= markFunctionWrapped =======
export function markFunctionWrapped(wrapped: WrappedFunction, original: WrappedFunction): void {
  const proto = original.prototype || {};
  // 给包装对象加原型, 只有这样添加属性才不会报错
  wrapped.prototype = original.prototype = proto;
  // 给加一个 __sentry_original__的 key  指向原始对象
  addNonEnumerableProperty(wrapped, '__sentry_original__', original);
}
export function addNonEnumerableProperty(obj: { [key: string]: unknown }, name: string, value: unknown): void {
  Object.defineProperty(obj, name, {
    // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
    value: value,
    writable: true,
    configurable: true,
  });
}
```
#### _wrapTimeFunction
简单说下 setTimeout的包装函数
```ts
function _wrapTimeFunction(original: () => void): () => number {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: any[]): number {
    // 回调函数， setTimeout 的第一个参数
    const originalCallback = args[0];
    // 包装参数
    args[0] = wrap(originalCallback, {
      mechanism: {
        data: { function: getFunctionName(original) },
        handled: true,
        type: 'instrument',
      },
    });
    return original.apply(this, args);
  };
}
```

#### wrap 函数
就是给源函数（参数函数）添加__sentry_wrapped__属性，给包装函数（返回值）添加__sentry_original__属性
> 示例:
wrapped = wrap(original);
original.__sentry_wrapped__ -> wrapped
wrapped.__sentry_original__ -> original

```ts
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 * 每次函数抛出异常，检测给定的函数并向Sentry 发送事件
 *
 * @param fn A function to wrap. It is generally safe to pass an unbound function, because the returned wrapper always
 * has a correct `this` context.
 * @returns The wrapped function.
 * @hidden
 */
 // option 是 报错的时候上传用的
export function wrap(
  fn: WrappedFunction,
  options: {
    mechanism?: Mechanism;
  } = {},
  before?: WrappedFunction,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  // for future readers what this does is wrap a function and then create
  // a bi-directional wrapping between them.
  //
  // example: wrapped = wrap(original);
  //  original.__sentry_wrapped__ -> wrapped
  //  wrapped.__sentry_original__ -> original
  // 非函数就直接返回
  if (typeof fn !== 'function') {
    return fn;
  }

  try {
    // if we're dealing with a function that was previously wrapped, return
    // the original wrapper.
    // 如果已经被包装过了就直接返回包装函数
    const wrapper = fn.__sentry_wrapped__;
    if (wrapper) {
      return wrapper;
    }

    // We don't wanna wrap it twice
    // fn.__sentry_original__
    // 如果就是一个wrapper ,那也直接返回
    if (getOriginalFunction(fn)) {
      return fn;
    }
  } catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    // Bail on wrapping and return the function as-is (defers to window.onerror).
    return fn;
  }

  /* eslint-disable prefer-rest-params */
  // It is important that `sentryWrapped` is not an arrow function to preserve the context of `this`
  const sentryWrapped: WrappedFunction = function (this: unknown): void {
    // 参数的副本
    const args = Array.prototype.slice.call(arguments);

    try {
      // 如果存在before，就先执行before
      if (before && typeof before === 'function') {
        before.apply(this, arguments);
      }
      // 所有参数如果是函数的话也包装一层
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
      const wrappedArguments = args.map((arg: any) => wrap(arg, options));

      // Attempt to invoke user-land function
      // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
      //       means the sentry.javascript SDK caught an error invoking your application code. This
      //       is expected behavior and NOT indicative of a bug with sentry.javascript.
      return fn.apply(this, wrappedArguments);
    } catch (ex) {
      ignoreNextOnError();

      withScope((scope: Scope) => {
        scope.addEventProcessor((event: SentryEvent) => {
          if (options.mechanism) {
            addExceptionTypeValue(event, undefined, undefined);
            addExceptionMechanism(event, options.mechanism);
          }

          event.extra = {
            ...event.extra,
            arguments: args,
          };

          return event;
        });

        captureException(ex);
      });

      throw ex;
    }
  };
  /* eslint-enable prefer-rest-params */

  // Accessing some objects may throw
  // ref: https://github.com/getsentry/sentry-javascript/issues/1168
  // 将源函数上的属性也直接拿到包装函数上
  try {
    for (const property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        sentryWrapped[property] = fn[property];
      }
    }
  } catch (_oO) { } // eslint-disable-line no-empty

  // Signal that this function has been wrapped/filled already
  // for both debugging and to prevent it to being wrapped/filled twice
  // 给sentryWrapped 添加 __sentry_original__
  markFunctionWrapped(sentryWrapped, fn);
  // 给源函数 添加 __sentry_wrapped__
  addNonEnumerableProperty(fn, '__sentry_wrapped__', sentryWrapped);

  // Restore original function name (not all browsers allow that)
  // 将包装函数的name 指向源函数的name
  try {
    const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name') as PropertyDescriptor;
    if (descriptor.configurable) {
      Object.defineProperty(sentryWrapped, 'name', {
        get(): string {
          return fn.name;
        },
      });
    }
    // eslint-disable-next-line no-empty
  } catch (_oO) { }

  return sentryWrapped;
}
```

#### _wrapXHR
```ts
function _wrapXHR(originalSend: () => void): () => void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: XMLHttpRequest, ...args: any[]): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const xhr = this;
    const xmlHttpRequestProps: XMLHttpRequestProp[] = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
    // 如果有这几个函数，就给这几个函数都包装一下
    xmlHttpRequestProps.forEach(prop => {
      if (prop in xhr && typeof xhr[prop] === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // fill 的 第三个参数 是包装函数，其中参数是源函数
        fill(xhr, prop, function (original: WrappedFunction): () => any {
          const wrapOptions = {
            mechanism: {
              data: {
                function: prop,
                handler: getFunctionName(original),
              },
              handled: true,
              type: 'instrument',
            },
          };

          // If Instrument integration has been called before TryCatch, get the name of original function
          // __sentry_original__
          const originalFunction = getOriginalFunction(original);
          if (originalFunction) {
            wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
          }

          // Otherwise wrap directly
          return wrap(original, wrapOptions);
        });
      }
    });

    return originalSend.apply(this, args);
  };
}
```

## Breadcrumbs
收集所有的操作，变动。包括，console, xhr，fetch, dom事件，popstate。会将记录添加到Hub._stack[0].scope._breadcrumbs中
```ts
  // ...省略
  public setupOnce(): void {
    if (this.options.console) {
      // handles 添加回调_consoleBreadcrumb
      // 就是添加breadcrumb 信息
      addInstrumentationHandler('console', _consoleBreadcrumb);
    }
    if (this.options.dom) {
      // 同上
      // 包装全局keypress ,click
      // 包装addEventListener, removeEvevtListener， 触发breadcrumb添加
      addInstrumentationHandler('dom', _domBreadcrumb(this.options.dom));
    }
    if (this.options.xhr) {
      // 同上
      // 包装 open, send 方法，绑定__sentry_xhr
      // 监听 readystatechange 事件， 触发回调 _xhrBreadcrumb
      addInstrumentationHandler('xhr', _xhrBreadcrumb);
    }
    if (this.options.fetch) {
      // 同上
      // 发送之前触发回调， 请求回来之后也会触发回调
      addInstrumentationHandler('fetch', _fetchBreadcrumb);
    }
    if (this.options.history) {
      // 同上
      // onpopstate 触发回调
      addInstrumentationHandler('history', _historyBreadcrumb);
    }
  }
}
// ...省略
```

## GlobalHandlers
添加全局 onError, 和 onunhandledrejection
注意： window.onerror 只能捕获运行时错误。无法获取资源加载异常。

## LinkedErrors
这个集成允许配置链接错误。它们将被递归地读取到指定的限制，并由特定的键执行查找。默认情况下，Sentry SDK 将限制limit设置为5，使用的密钥为 cause。

## Dedupe
去重的。

## HttpContext
曾用名 UserAgent。这个集成给event上附加了URL, UA, referer(从哪个页面来的) ，header等，它允许我们用特定的操作系统、浏览器和版本信息分类和标记。
```ts
  public setupOnce(): void {
    addGlobalEventProcessor((event: Event) => {
      if (getCurrentHub().getIntegration(HttpContext)) {
        // if none of the information we want exists, don't bother
        if (!WINDOW.navigator && !WINDOW.location && !WINDOW.document) {
          return event;
        }

        // grab as much info as exists and add it to the event
        const url = (event.request && event.request.url) || (WINDOW.location && WINDOW.location.href);
        const { referrer } = WINDOW.document || {};
        const { userAgent } = WINDOW.navigator || {};

        const headers = {
          ...(event.request && event.request.headers),
          ...(referrer && { Referer: referrer }),
          ...(userAgent && { 'User-Agent': userAgent }),
        };
        const request = { ...(url && { url }), headers };

        return { ...event, request };
      }
      return event;
    });
  }
}
```

## clientOptions
构建实例选项
```ts
  const clientOptions: BrowserClientOptions = {
    ...options,
    // 栈解析器
    stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
    // 安装集成，就是绑定到Sentry上
    integrations: getIntegrationsToSetup(options),
    // 自定义的transport , fetch || XHR
    transport: options.transport || (supportsFetch() ? makeFetchTransport : makeXHRTransport),
  };
```

## initAndBind
初始化实例并且绑定
```ts
export function initAndBind<F extends Client, O extends ClientOptions>(
  clientClass: ClientClass<F, O>,
  options: O,
): void {
  if (options.debug === true) {
    if (__DEBUG_BUILD__) {
      logger.enable();
    } else {
      // use `console.warn` rather than `logger.warn` since by non-debug bundles have all `logger.x` statements stripped
      // eslint-disable-next-line no-console
      console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
    }
  }
  //获取 控制中心 Hub， 一个stack scope[]
  const hub = getCurrentHub();
  // 栈顶的scope 事件需要的额外信息
  const scope = hub.getScope();
  if (scope) {
    scope.update(options.initialScope);
  }
  // 生成sdk 的实例
  const client = new clientClass(options);
  // 将所有 集成 绑定到 Hub上
  hub.bindClient(client);
}
```
getCurrentHub
```ts
export function getCurrentHub(): Hub {
  // Get main carrier (global for every environment)
  // window
  const registry = getMainCarrier();

  // If there's no hub, or its an old API, assign a new one
  // 没有hub的时候
  if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
  // 绑定hub 到window上 , hub 是一个带有 _stack [] 里面存放scope 相关信息 (user, context 等等)
    setHubOnCarrier(registry, new Hub());
  }

  // Prefer domains over global if they are there (applicable only to Node environment)
  if (isNodeEnv()) {
    return getHubFromActiveDomain(registry);
  }
  // Return hub that lives on a global object
  // 返回全局的单例 hub
  return getHubFromCarrier(registry);
}
```