/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 0;
  while (j < nums.length) {
    if (nums[i] == 0 && nums[j] == 0) {
      ++j;
      continue;
    } else if (nums[i] == 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
    ++i;
    ++j;
  }
};
// TC - O(n) for traversing the nums array with two pointers
// SC - O(1) for using constant space to store the pointers and variables
