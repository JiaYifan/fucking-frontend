/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  function find(parent, child) {
    if (parent[child] != child) {
      return find(parent, parent[child]);
    }
    return child;
  }
  var parent = {};
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }
  var sum = 0;
  connections.forEach(([from, to]) => {
    parentTo = find(parent, to);
    if (find(parent, from) === 0 && parentTo !== 0) {
      parent[parentTo] = 0;
      sum++;
    } else {
      if (parent[from] !== 0) parent[from] = parentTo;
    }
  });
  return sum;
};
