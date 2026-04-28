/**
 * @param {string[]} strs
 * @return {string}
 */
// 1st approach
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  if (strs[0] === "") return "";
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== strs[0][j] || j === strs[i].length) {
        return strs[0].substring(0, j);
      }
    }
  }
  return strs[0];
};
// TC - O(n*m) where n is the number of strings and m is the length of the longest common prefix
// SC - O(m) where m is the length of the longest common prefix
