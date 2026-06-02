/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] == t[j]) {
      ++i;
      ++j;
    } else {
      ++j;
    }
  }
  if (i == s.length) return true;
  return false;
};
// TC - O(n) for traversing the string t with two pointers
// SC - O(1) for using constant space to store the pointers and variables
