// 1st approach - using stack to store the parentheses and topVal to keep track of the number of open parentheses at that point
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let topVal = 0;
  let stack = [];
  let ansString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (stack.length === 0) {
        stack.push(s[i]);
      }
      topVal++;
      if (topVal > 1) {
        ansString += s[i];
      }
    } else {
      topVal--;
      if (topVal > 0) {
        ansString += s[i];
      } else {
        stack.pop();
      }
    }
  }
  return ansString;
};

//2nd approach - using only stack to store the parentheses and checking the length of stack to decide whether to add the parentheses to answer string or not
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        ans += s[i];
      }
    } else {
      if (stack.length > 1) {
        ans += s[i];
      }
      stack.pop();
    }
  }
  return ans;
};
// TC - O(n) for all approaches
// SC - O(n) for stack & O(n) for ans for 1st and 2nd approach

// 3rd approach - using only topVal to keep track of the number of open parentheses at that point and checking the value of topVal to decide whether to add the parentheses to answer string or not
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let topVal = 0;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      topVal++;
      if (topVal > 1) {
        ans += s[i];
      }
    } else {
      if (topVal > 1) {
        ans += s[i];
      }
      topVal--;
    }
  }
  return ans;
};
// SC - O(n) for ans & O(1) for extra variables
