// 1st approach
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (
      (nums[l] < nums[m] && nums[l] < nums[r]) ||
      (nums[m] <= nums[l] && nums[m] < nums[r])
    ) {
      r = m;
    } else if (nums[r] < nums[m] && nums[r] < nums[l]) {
      l = m + 1;
    }
  }
  return nums[l];
};
// TC - O(log n) for binary search
// SC - O(1) for using constant space to store the left, right and middle pointers

// 2nd approach - using binary search and checking if the middle element is less than the previous element and if it is then we know that the middle element is the minimum element and if it is not then we can check if the left half of the array is non sorted and if it is then we can apply binary search on the left half of the array to find the minimum element and if it is not then we can apply binary search on the right half of the array to find the minimum element
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    // if searching space is already sorted
    if (nums[l] <= nums[r]) return nums[l];
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < nums[m - 1]) return nums[m];
    // if left half is non sorted
    if (nums[l] > nums[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return nums[l];
};
