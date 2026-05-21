// 1st approach - using double the array to handle the CIRCULAR nature of the problem and then using stack to store the elements of the new array and answer array to store the next greater element for each element in the new array and then iterating through the answer array to get the next greater element for each element in the original array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (arr) {
  const newArr = new Array(arr.length).fill();
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
    newArr[i + arr.length] = arr[i];
  }

  const stack = [];
  stack.push(newArr[newArr.length - 1]);

  const ans = new Array(2 * arr.length).fill(-1);
  ans[newArr.length - 1] = -1;

  for (let i = newArr.length - 2; i >= 0; i--) {
    while (stack.length) {
      if (newArr[i] >= stack[stack.length - 1]) {
        stack.pop();
      } else {
        ans[i] = stack[stack.length - 1];
        break;
      }
    }
    if (!stack.length) {
      ans[i] = -1;
    }
    stack.push(newArr[i]);
  }

  const newAns = [];
  for (let i = 0; i < ans.length / 2; i++) {
    newAns[i] = ans[i];
  }

  return newAns;
};

// 2nd approach - not using double the array instead hypothetically iterating through the array twice to handle the CIRCULAR nature of the problem and then using stack to store the elements of the array and answer array to store the next greater element for each element in the array and then iterating through the answer array to get the next greater element for each element in the original array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (arr) {
  let n = arr.length;

  const stack = [];
  stack.push(arr[n - 1]);

  const ans = new Array(n).fill(-1);
  ans[n - 1] = -1;

  for (let i = 2 * n - 2; i >= 0; i--) {
    while (stack.length) {
      if (arr[i % n] >= stack[stack.length - 1]) {
        stack.pop();
      } else {
        ans[i % n] = stack[stack.length - 1];
        break;
      }
    }
    if (!stack.length) {
      ans[i % n] = -1;
    }
    stack.push(arr[i % n]);
  }

  return ans;
};
// TC - O(n) for iterating through the array and then iterating through the stack to find the next greater element for each element in the array and pushing it to answer array
// SC - O(n) for stack and O(n) for answer array
