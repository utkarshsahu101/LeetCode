/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let i = 0,
    j = s1.length - 1;
  let map = {};
  for (let k = 0; k < s1.length; k++) {
    if (map[s1[k]]) {
      ++map[s1[k]];
    } else {
      map[s1[k]] = 1;
    }
  }
  while (j < s2.length) {
    let k = i;
    let tempMap = { ...map };
    for (k = i; k < j + 1; k++) {
      if (tempMap[s2[k]]) {
        if (tempMap[s2[k]] > 1) {
          --tempMap[s2[k]];
        } else {
          delete tempMap[s2[k]];
        }
        continue;
      } else {
        ++i;
        ++j;
        break;
      }
    }
    if (k == j + 1) {
      return true;
    }
  }
  return false;
};
// TC - O(n * m) for traversing the string s2 with two pointers and checking the validity of the window with a hash map where n is the length of the string s2 and m is the length of the string s1
// SC - O(1) or O(m) where m is the size of the character set (number of unique characters in the string s1) for using a hash map to store the count of each character in the string s1 and a temporary hash map to check the validity of the current window in the string s2

// 2nd Approach - using two hash arrays to store the count of each character in the string s1 and the current window in the string s2 and then comparing the two hash arrays to check if they are the same or not
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let hashW = new Array(26).fill(0);
  let hashS = new Array(26).fill(0);

  let window_size = s1.length;
  for (let i = 0; i < window_size; i++) {
    ++hashS[s1.charCodeAt(i) - 97];
    ++hashW[s2.charCodeAt(i) - 97];
  }

  let i = 0,
    j = window_size - 1;
  while (j < s2.length) {
    if (isHashSame(hashW, hashS)) {
      return true;
    } else {
      --hashW[s2.charCodeAt(i) - 97];
      ++i;
      ++j;
      ++hashW[s2.charCodeAt(j) - 97];
    }
  }
  return false;
};

var isHashSame = function (hashW, hashS) {
  for (let i = 0; i < 26; i++) {
    if (hashW[i] !== hashS[i]) {
      return false;
    }
  }
  return true;
};

// TC - O(n * m) for traversing the string s2 with two pointers and checking the validity of the window by comparing the two hash arrays where n is the length of the string s2 and m is the size of the character set (number of unique characters in the string s1)
// SC - O(m) for using two hash arrays to store the count of each character in the string s1 and the current window in the string s2 where m is the size of the character set (number of unique characters in the string s1)
