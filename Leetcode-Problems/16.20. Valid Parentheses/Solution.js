// 1st approach
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let n = s.length;
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let topEle = stack.pop();
      if (
        (topEle === "(" && s[i] === ")") ||
        (topEle === "{" && s[i] === "}") ||
        (topEle === "[" && s[i] === "]")
      ) {
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// 2nd approach - using map
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let n = s.length;
  let stack = [];
  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i = 0; i < n; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let topEle = stack.pop();
      if (s[i] === map[topEle]) {
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// TC - O(n)
// SC - O(n)
