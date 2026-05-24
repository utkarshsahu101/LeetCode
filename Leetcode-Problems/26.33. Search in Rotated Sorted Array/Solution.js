// 1st approach - find index of rotation and then apply binary search on both sides of the rotation index to find the target element
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let high = nums[0];
  let rI = -1;
  let l1 = 0;
  let r1 = -1;
  let l2 = -1;
  let r2 = nums.length - 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > high) {
      high = nums[i];
    } else {
      rI = i;
      if (nums[rI] == target) {
        return rI;
      }
      r1 = rI - 1;
      l2 = rI + 1;
      break;
    }
  }
  if (rI < 0) {
    return bsa(nums, l1, r2, target);
  }
  const left = bsa(nums, l1, r1, target);
  const right = bsa(nums, l2, r2, target);
  if (left == -1 && right == -1) return -1;
  if (left !== -1) return left;
  else return right;
};

const bsa = (nums, l, r, target) => {
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
};
// TC - O(log n) for finding the rotation index and then applying binary search on both sides of the rotation index to find the target element
// SC - O(1) for using constant space to store the pointers and variables

// 2nd approach - using binary search and checking if the left half of the array is sorted or the right half of the array is sorted and then checking if the target element is in the sorted half of the array and then applying binary search on that half of the array to find the target element
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (target === nums[mid]) return mid;

    if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
