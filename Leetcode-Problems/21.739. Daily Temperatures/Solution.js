/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (s) {
  let stack = [];
  stack.push(s.length - 1);
  const ans = [];
  ans[s.length - 1] = 0;
  for (let i = s.length - 2; i >= 0; i--) {
    while (stack.length) {
      if (s[i] >= s[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        ans[i] = stack[stack.length - 1] - i;
        stack.push(i);
        break;
      }
    }
    if (!stack.length) {
      ans[i] = 0;
      stack.push(i);
    }
  }
  return ans;
};
// TC - O(n) for iterating through the array and then iterating through the stack to find the next greater element for each element in the array and pushing it to answer array
// SC - O(n) for stack and O(n) for answer array
