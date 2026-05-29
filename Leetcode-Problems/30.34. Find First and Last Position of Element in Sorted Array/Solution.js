// 1st approach - using binary search to find the leftmost and rightmost index of the target element in the sorted array and then returning the leftmost and rightmost index as the answer
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = -1;
  let right = -1;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  if (target == nums[l]) {
    left = l;
  }
  l = 0;
  r = nums.length - 1;
  while (l < r) {
    let m = l + Math.ceil((r - l) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m;
    }
  }
  if (nums[l] == target) {
    right = l;
  }
  return [left, right];
};
// TC - O(log n) for binary search
// SC - O(1) for using constant space to store the left, right and middle pointers

// 2nd approach
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ans = [-1, -1];
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] == target) {
      ans[0] = m;
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] == target) {
      ans[1] = m;
      l = m + 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return ans;
};
