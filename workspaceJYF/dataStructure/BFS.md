```javascript
/** bfs
 * tree: interface ITree{id:number,value:number,children:ITree[]|null}
 * hook: (node:ITree)=>boolean
 */
function bfs(tree, hook) {
  const root = tree;
  const queue = [root];
  while (queue.length !== 0) {
    if (queue[0].children !== null) {
      queue.push(...queue[0].children);
    }
    const shouldWeContinue = hook(queue.shift());
    if (!shouldWeContinue) break;
  }
}
```
