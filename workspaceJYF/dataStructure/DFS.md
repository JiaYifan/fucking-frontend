```javascript
/** dfs
 * tree: interface ITree{id:number,value:number,children:ITree[]|null}
 * hook: (node:ITree)=>boolean
 */
function dfs(tree, hook) {
  const root = tree;
  const queue = [root];
  while (queue.length !== 0) {
    const last = queue.pop();
    const shouldWeContinue = hook(last);
    if (!shouldWeContinue) break;
    if (last.children !== null) {
      queue.push(...last.children);
    }
  }
}
```
