/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let n = haystack.length;
  let k = needle.length;
  for (let i = 0; i <= n - k; i++) {
    if (haystack.slice(i, i + k) == needle) {
      return i;
    }
  }
  return -1;
};
// TC - O(n * k) for traversing the haystack string and slicing it to compare with the needle string
// SC - O(k) for slicing the haystack string to compare with the needle string

// 2nd approach - KMP (Knuth-Morris-Pratt) Algorithm
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  let lps = [0];
  let i = 0;
  let j = 1;

  while (j < m) {
    if (needle[i] == needle[j]) {
      lps[j] = i + 1;
      ++i;
      ++j;
    } else {
      if (i == 0) {
        lps[j] = 0;
        ++j;
      } else {
        i = lps[i - 1];
      }
    }
  }

  i = j = 0;
  while (i < n) {
    if (haystack[i] == needle[j]) {
      ++i;
      ++j;
    } else {
      if (j == 0) {
        ++i;
      } else {
        j = lps[j - 1];
      }
    }
    if (j == m) {
      return i - m;
    }
  }
  return -1;
};
// TC - O(n + m) for traversing the needle string to create the lps array and then traversing the haystack string to find the needle string
// SC - O(m) for the lps array to store the longest prefix suffix values for the needle string
