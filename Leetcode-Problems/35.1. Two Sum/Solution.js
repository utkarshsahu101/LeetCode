// 1st approach - using two nested loops to iterate through the array and find the target element and then returning the indices of the target element as the answer
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [j, i];
      }
    }
  }
};
// TC - O(n^2) for using two nested loops to iterate through the array and find the target element
// SC - O(1) for using constant space to store the pointers and variables

// 2nd approach - using a hash map to store the indices of the elements in the array and then iterating through the array and checking if the target element minus the current element is present in the hash map and if it is present then returning the indices of the current element and the target element as the answer
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i]) && i !== map.get(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
  }
};
// TC - O(n) for using two loops to iterate through the array and find the target element
// SC - O(n) for using a hash map to store the indices of the elements in the array
