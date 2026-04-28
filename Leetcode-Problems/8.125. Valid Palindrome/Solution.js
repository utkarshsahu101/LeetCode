/**
 * @param {string} s
 * @return {boolean}
 */

// 1st approach
var isPalindrome = function (s) {
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (isAlphaNumeric(s[i])) {
      temp = temp + s[i];
    }
  }
  temp = temp.toLowerCase();
  let n = temp.length;
  let mid = Math.floor(n / 2);
  for (let i = 0; i < mid; i++) {
    if (temp[i] !== temp[n - 1 - i]) {
      return false;
    }
  }
  return true;
};
// TC - O(n)
// SC - O(n)

// 2nd approach - Two pointer
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let first = 0;
  let second = s.length - 1;
  while (first <= second) {
    if (!isAlphaNumeric(s[first])) {
      first++;
      continue;
    }
    if (!isAlphaNumeric(s[second])) {
      second--;
      continue;
    }
    if (s[first].toLowerCase() !== s[second].toLowerCase()) {
      return false;
    }
    first++;
    second--;
  }
  return true;
};

const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);
  return (
    (code > 47 && code < 58) ||
    (code > 64 && code < 91) ||
    (code > 96 && code < 123)
  );
};

// TC - O(n)
// SC - O(1)

// 3rd approach - Using built in functions
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString += s[i];
    }
  }
  let rev = filteredString.split("").reverse().join("");
  return filteredString === rev;
};

// 4th approach - Using built in functions - without using split, reverse & join function
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString += s[i];
      rev = s[i] + rev;
    }
  }
  return filteredString === rev;
};

// TC - O(n)
// SC - O(n)
