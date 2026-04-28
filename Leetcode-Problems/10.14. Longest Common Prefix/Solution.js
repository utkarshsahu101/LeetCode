/**
 * @param {string[]} strs
 * @return {string}
 */
// 1st approach
var longestCommonPrefix = function (strs) {
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== strs[0][j] || j === strs[i].length) {
        return strs[0].substring(0, j);
      }
    }
  }
  return strs[0];
};
// TC - O(n) since longest 1st string is of constant length
// SC - O(1)
