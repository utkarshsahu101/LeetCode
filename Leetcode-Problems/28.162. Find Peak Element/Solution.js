/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] > nums[m + 1] && nums[m] > nums[m - 1]) return m;
    if (m == 0) {
      if (nums[m + 1]) {
        if (nums[m] > nums[m + 1]) return m;
        else return m + 1;
      } else {
        return m;
      }
    }
    if (m == nums.length - 2) {
      if (nums[m + 1] > nums[m]) {
        return m + 1;
      } else {
        return m - 1;
      }
    }

    if (nums[m + 1] > nums[m]) {
      l = m;
    } else {
      r = m;
    }
  }
};
// TC - O(log n) for binary search
// SC - O(1) for using constant space to store the left, right and middle pointers

// 2nd approach - using binary search and checking if the middle element is less than the next element and if it is then we know that there is a peak element in the right half of the array and if it is not then we know that there is a peak element in the left half of the array and then we can apply binary search on that half of the array to find the peak element
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < nums[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
};
