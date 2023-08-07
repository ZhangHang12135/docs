# tapable 源码
tapble 是webpack的一个核心库。它提供了注册各种钩子的函数方法。有一点类似vue中的on, 和emit.

**专注于自定义事件的触发和处理。**

## tapable的使用
```ts

const synchooks = new SyncHook(['name']);
// 注册事件
synchooks.tap('test1', (name) => {
    console.log(name);
})
// 触发事件
synchooks.call('你好');
```
会发现和我们平常写的发布订阅是一模一样的，所以是不是可以推测内部是这样的呢？

## 简单功能实现
这里会发现是一个非常简单的发布订阅模式， 利用tap 添加订阅，利用call去通知订阅
```ts
class MySyncHook<T> {
    taps: any[];
    constructor(args: Array<T>) {
        this.taps = []
    }
    tap(name: string, fn: Function) {
        this.taps.push(fn);
    }
    call(...args: any[]) {
        this.taps.forEach(fn => fn(...args));
    }
}

const myhooks = new MySyncHook(['age', 'name']);

myhooks.tap('test', (age: any, name: any) => {
    console.log('test', age, name);
});

myhooks.call('18', 'zh');
```
参考文献：

[深度解析webpack核心模块 - 详细](https://zhuanlan.zhihu.com/p/470657214)

[tapable源码解析-简版](https://juejin.cn/post/7164175171358556173?searchId=20230805153604FB6BFEAFFE47629AAFD8#heading-10)