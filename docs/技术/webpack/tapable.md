# tapable
tapble 是webpack的一个核心库。它提供了注册各种钩子的函数方法。有一点类似vue中的on, 和emit.

**专注于自定义事件的触发和处理。**

> 这篇文章，可以看作是一个阅读笔记， 具体的了解可以阅读参考文献中的文章。
> 这是讲述使用的，原理文章参考

## 简单使用
这里需要注意一下，ts使用时需要传递泛型， 才能确定参数个数
```ts
// 初始化同步钩子
const hook = new SyncHook<[string, string, string]>(["arg1", "arg2", "arg3"]);

// 注册事件
hook.tap('flag1', (arg1,arg2,arg3) => {
    console.log('flag1:',arg1,arg2,arg3)
})

hook.tap('flag2', (arg1,arg2,arg3) => {
    console.log('flag2:',arg1,arg2,arg3)
})

// 调用事件并传递执行参数
hook.call('19Qingfeng','wang','haoyu')

// 打印结果
flag1: 19Qingfeng wang haoyu
flag2: 19Qingfeng wang haoyu
```
## tapable 导出的类
这里我简单说一下，具体示例可以看[参考文献1](https://zhuanlan.zhihu.com/p/470657214);

- SyncHook, 同步类型， 最基础的钩子
- SyncBailHook, 如果任何事件函数存在返回值，那么会立即中断后续事件函数的调用：
- SyncWaterfallHook 瀑布钩子会将上一个函数的返回值传递给下一个函数作为参数
- SyncLoopHook 会在任意一个被监听的函数存在非 undefined 返回值时返回重头开始执行
- AsyncSeriesHook 表示异步串联执行
- AsyncSeriesBailHook 表示异步串行保险钩子
- AsyncSeriesWaterfallHook 异步串行瀑布钩子
- AsyncSeriesLoopHook 异步串行循环钩子
- AsyncParallelHook 异步并行钩子，会并发执行所有异步钩子
- AsyncParallelBailHook 这个钩子就比较有意思了，异步并行保险钩子。

[具体可以直接看这个, 官方readme](https://github.com/webpack/tapable#hook-types)

两种分类模式：
### 同步，异步分类
![异步同步分类](/tapable/tapable-type.webp)
针对同步钩子来 tap 方法是唯一的注册事件的方法，通过 call 方法触发同步钩子的执行。
异步钩子可以通过 tap、tapAsync、tapPromise三种方式来注册，同时可以通过对应的 call、callAsync、promise 三种方式来触发注册的函数。

这个就比较简单， 按照提供的方法名就可以区分
- Sync[xx] 同步钩子， 具体有 SyncHook, SyncBailHook, SyncWaterfallHook， SyncLoopHook
- AsyncSeries[xx] 异步串行, 具体有 AsyncSeriesHook, AsyncSeriesBailHook, AsyncSeriesLoopHook, AsyncSeriesWaterfallHook
- AsyncParallel[xx] 异步并行， 具体有 AsyncParallelHook, AsyncParallelBailHook
### 工作流程分类
- **Basic Hook** : 基本类型的钩子，它仅仅执行钩子注册的事件，并不关心每个被调用的事件函数返回值如何。
- **Waterfall** : 瀑布类型的钩子，瀑布类型的钩子和基本类型的钩子基本类似，唯一不同的是瀑布类型的钩子会在注册的事件执行时将事件函数执行非 undefined 的返回值传递给接下来的事件函数作为参数。
- **Bail** : 保险类型钩子，保险类型钩子在基础类型钩子上增加了一种保险机制，如果任意一个注册函数执行返回非 undefined 的值，那么整个钩子执行过程会立即中断，之后注册事件函数就不会被调用了。
- **Loop** : 循环类型钩子，循环类型钩子稍微比较复杂一点。循环类型钩子通过 call 调用时，如果任意一个注册的事件函数返回值非 undefeind ,那么会立即重头开始重新执行所有的注册事件函数，直到所有被注册的事件函数都返回 undefined。

## 提供的其他方法
### 拦截器
可以类似axios 一样，在各种阶段执行任务
我们可以通过拦截器对整个 Tapable 发布/订阅流程进行监听，从而触发对应的逻辑。
```
const hook = new SyncHook(['arg1', 'arg2', 'arg3']);

hook.intercept({
  // 每次调用 hook 实例的 tap() 方法注册回调函数时, 都会调用该方法,
  // 并且接受 tap 作为参数, 还可以对 tap 进行修改;
  register: (tapInfo) => {
    console.log(`${tapInfo.name} is doing its job`);
    return tapInfo; // may return a new tapInfo object
  },
  // 通过hook实例对象上的call方法时候触发拦截器
  call: (arg1, arg2, arg3) => {
    console.log('Starting to calculate routes');
  },
  // 在调用被注册的每一个事件函数之前执行
  tap: (tap) => {
    console.log(tap, 'tap');
  },
  // loop类型钩子中 每个事件函数被调用前触发该拦截器方法
  loop: (...args) => {
    console.log(args, 'loop');
  },
});
```
- register: 每次通过 tap、tapAsync、tapPromise 方法注册事件函数时，会触发 register 拦截器。这个拦截器中接受注册的 Tap 作为参数，同时可以对于注册的事件进行修改。
- call: 通过调用 hook 实例对象的 call 方法时执行。（包括 callAsync, promise）接受的参数为调用 Hook 时传入的参数。
- tap: 在每一个被注册的事件函数调用之前执行，接受参数为对应的 Tap 对象。
- loop: loop类型钩子中 每次重新开始 loop 之前会执行该拦截器，拦截器函数接受的参数为调用时传入的参数。

### HookMap 
创建hook的一个对象，来管理
### MultiHook
创建批量的hook, 来统一处理
![工作流程分类](/tapable/tapable-work.webp)

参考文献：

[深度解析webpack核心模块 - 详细](https://zhuanlan.zhihu.com/p/470657214)

[tapable源码解析-简版](https://juejin.cn/post/7164175171358556173?searchId=20230805153604FB6BFEAFFE47629AAFD8#heading-10)