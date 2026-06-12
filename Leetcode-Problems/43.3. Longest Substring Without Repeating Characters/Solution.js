/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = (j = 0);
  const map = {};
  let maxWS = 0;
  while (j < s.length) {
    if (map[s[j]] !== undefined && map[s[j]] >= i) {
      i = map[s[j]] + 1;
    }
    map[s[j]] = j;
    let ws = j - i + 1;
    maxWS = Math.max(maxWS, ws);
    j++;
  }
  return maxWS;
};
// TC - O(n) for traversing the string s with two pointers
// SC - O(1) or O(m) where m is the size of the character set (number of unique characters in the string s) for using a hash map to store the last index of each character in the string s
