// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1: 输入: "abcabcbb" 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
function find(str) {
  if (str.length <= 1) return str;
  var i = 0,
    j = i,
    map = {};
  var max = 1;
  while (j <= str.length - 1) {
    if (map[str[j]]) {
      map[str[i]] = false;
      i++;
    } else {
      map[str[j]] = true;
      var currentLength = j - i + 1;
      if (currentLength > max) max = currentLength;
      j++;
    }
  }
  return max;
}
console.log(find("abcabcbb"));
console.log(find("abccadtydtz7iopyabc"));
