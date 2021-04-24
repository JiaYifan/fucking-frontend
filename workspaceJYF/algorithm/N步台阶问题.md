## 有 n 步台阶，一次只能上 1 步或 2 步，共有多少种走法

```javascript
// 暂时没想出maxStepsPerMove为n时的组合公式
function main(totalSteps, maxStepsPerMove = 2) {
  const solution = Array.from({ totalSteps }, () => 0);
  function fn(n) {
    if (n <= 2) {
      return n;
    }
    if (solution[n] > 0) {
      return solution[n];
    } else {
      return (solution[n] = fn(n - 1) + fn(n - 2));
    }
  }
  return fn(totalSteps);
}
```
