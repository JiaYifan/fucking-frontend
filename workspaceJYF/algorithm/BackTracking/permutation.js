var permutation = function (s) {
  function sub(arr) {
    if (arr.length === 1) return arr;
    const result = {};
    for (let i = 0; i < arr.length; i++) {
      if (result[arr[i]]) {
        continue;
      }
      var tmp = [...arr];
      tmp.splice(i, 1);
      result[arr[i]] = sub(tmp);
    }
    return Object.entries(result).reduce((acc, [k, v]) => {
      return acc.concat(v.map((e) => k + e));
    }, []);
  }
  return sub(s.split(""));
};

console.log(permutation("abc"));
console.log(permutation("abb"));
