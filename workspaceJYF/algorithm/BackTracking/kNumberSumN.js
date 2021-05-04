// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
// 说明：
// 所有数字都是正整数。
// 解集不能包含重复的组合。

// 示例 1:
// 输入: k = 3, n = 7
// 输出: [[1,2,4]]

// 示例 2:
// 输入: k = 3, n = 9
// 输出: [[1,2,6], [1,3,5], [2,3,4]]

function dfs(n, restK, start, sum) {
  const nextSum = start + sum;
  if (restK === 0 || nextSum > n) {
    // 这条路径不行
    return false;
  }
  if (n === nextSum && restK === 1) {
    // 这条路径可以
    return [[start]];
  }
  if (start >= 9) {
    return false;
  }
  const result = [];
  for (let i = start + 1; i <= 9; i++) {
    const flag = dfs(n, restK - 1, i, nextSum);
    if (flag) {
      flag.forEach((e) => {
        e.unshift(start);
        result.push(e);
      });
    }
  }
  return result;
}

function find(n, k) {
  const result = [];
  for (let i = 1; i <= 9; i++) {
    const flag = dfs(n, k, i, 0);
    flag && result.push(...flag);
  }
  console.log(result);
}

find(9, 3);
find(7, 3);
