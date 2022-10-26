/**
 * Write a function to find the longest common
 * prefix string amongst an array of strings.
If there is no common prefix, return an empty string ""

Input: strs = ["flower","flow","flight"]
Output: "fl"

 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // strs = ["flower","flow","flight"]
  const size = strs.length;
  const end = Math.min(strs[0].length, strs[size - 1].length);
  strs.sort();
  let i = 0;
  while (i < end && strs[0][i] === strs[size - 1][i]) { i++; }

  const pre = strs[0].substring(0, i);
  return pre;
};
longestCommonPrefix(['flower', 'flow', 'flight']);
longestCommonPrefix(['dog', 'racecar', 'car']);
