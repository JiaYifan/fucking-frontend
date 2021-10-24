# 创建

1. 如果是 JSX 会专成 React.createElement
2. createElement()方法会先通过遍历 config 获取所有的参数，然后获取其子节点以及默认的 props 的值。然后将值传递给 ReactElement()调用并返回 JS 对象
3. 之后将这些节点组成 fiber tree，没有 root 之前我们首先需要创建一个 root
   - root 对象同样也被挂载在了 `container._reactRootContainer`
   - 内部有一个 `_internalRoot` 对象就是 `fiber` 对象
4. 创建好后，调用 `root.render(children, callback)`方法把生成的 fiber tree 转换成真实 dom

# 更新

react 在 tree diff 和 component diff 中，两棵树只会对同层次的节点进行比较。如果同层级的树发生了更新，则会将该节点及其子节点同时进行更新，这样避免了递归遍历更加深入的节点的操作。在后面渲染性能优化部分，对于同一类型的组件如果能够准确的知道 VDOM 是否变化，使用 shouldComponentUpdate 来判断该组件是否需要 diff，能够节省大量的 diff 运算时间。

当 react 进行 element diff 操作中，在元素中添加唯一的 key 来进行区分，对其进行算法优化。所以像大数据量的列表之类的组件中最好添加 key 属性，能够带来一定的性能提升。
