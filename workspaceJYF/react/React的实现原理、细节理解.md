## 总结性文章

[React 专题：react，redux 以及 react-redux 常见一些面试题](https://segmentfault.com/a/1190000017140200)

## React Virtual DOM

> [知乎 paper](https://zhuanlan.zhihu.com/p/62555421)

> [比较细致](https://zhuanlan.zhihu.com/p/20346379)

计算一棵树形结构转换成另一棵树形结构的最少操作，传统 diff 算法的时间复杂度是 O(n^3)

### React 虚拟 DOM 原理，为什么虚拟 DOM 能提高性能

1. 用 js 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中。
2. 当状态变更的时候，重新构造一棵新的对象树。然后对比新旧虚拟 DOM 树，记录两棵树差异。
3. 把 2 所记录的差异应用到步骤 1 所构建的真正的 DOM 树上，视图就更新了。

原因：虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法**减少了对真实 DOM 的操作次数**，从而提高性能。

### 虚拟 DOM diff 算法

1. tree diff: 把树形结构按照层级分解，只比较同级元素。
2. element diff: 允许开发者对同一层级的同组子节点，添加唯一 key 进行区分，这样对于只是位置发生了变化的节点只是移动而不会做增删的操作。
3. component diff: React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）
4. 合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty。到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制。
5. 选择性渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。

## fiber

> [React Fiber 是什么](https://zhuanlan.zhihu.com/p/26027085)

把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会。

React Fiber 一个更新过程被分为两个阶段(Phase)

第一阶段：

- componentWillMount
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate

第二阶段：

- componentDidMount
- componentDidUpdate
- componentWillUnmount

在 React Fiber 中，第一阶段中的生命周期函数在一次加载和更新过程中可能会被多次调用！

## 合成事件

1. React 组件上声明的事件最终绑定到了 document 这个 DOM 节点上，而不是 React 组件对应的 DOM 节点。故只有 document 这个节点上面才绑定了 DOM 原生事件，其他节点没有绑定事件。这样简化了 DOM 原生事件，减少了内存开销
2. React 以队列的方式，从触发事件的组件向父组件回溯，调用它们在 JSX 中声明的 callback。也就是 React 自身实现了一套事件冒泡机制。我们没办法用 event.stopPropagation()来停止事件传播，应该使用 event.preventDefault()
3. React 有一套自己的合成事件 SyntheticEvent，不同类型的事件会构造不同的 SyntheticEvent
4. React 使用对象池来管理合成事件对象的创建和销毁，这样减少了垃圾的生成和新对象内存的分配，大大提高了性能
