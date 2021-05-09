// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Input: root = [2,1,3]
// Output: [2,3,1]
// Input: root = []
// Output: []
var invertTree = function (root) {
  if (root.length === 0) return root;
  function reverse(arr) {
    if (arr.length === 2) {
      [arr[0], arr[1]] = [arr[1], arr[0]];
      return arr;
    }
    return [...reverse(arr.slice(arr.length / 2)), ...reverse(arr.slice(0, arr.length / 2))];
  }
  const result = [];
  let i = 0;
  let level = 0;
  while (i < root.length) {
    if (i === 0) {
      result.push(root[i]);
      i++;
    } else {
      const nodeNum = Math.pow(2, level);
      result.push(...reverse(root.slice(i, i + nodeNum)));
      i = i + nodeNum;
    }
    level++;
  }
  return result;
};
