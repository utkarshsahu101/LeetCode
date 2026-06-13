/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let i = 0,
    j = 0;
  let maxWindow = 0;
  let map = {};
  map[s[0]] = 1;
  while (j < s.length) {
    if (isWindowValid(map, k)) {
      maxWindow = Math.max(maxWindow, j - i + 1);
      ++j;
      map[s[j]] = !map[s[j]] ? 1 : ++map[s[j]];
    } else {
      --map[s[i]];
      ++i;
    }
  }
  return maxWindow;
};

var isWindowValid = function (map, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let k = 0; k < 26; k++) {
    let char = String.fromCharCode(k + 65);
    if (map[char]) {
      totalCount = totalCount + map[char];
      maxCount = Math.max(map[char], maxCount);
    }
  }
  return totalCount - maxCount <= k;
};

// TC - O(n) for traversing the string s with two pointers and checking the validity of the window with a hash map
// SC - O(1) or O(m) where m is the size of the character set (number of unique characters in the string s) for using a hash map to store the count of each character in the current window
