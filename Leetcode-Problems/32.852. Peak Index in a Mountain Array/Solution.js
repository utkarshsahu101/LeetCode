/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] > arr[m + 1]) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
// TC - O(log n) for binary search
// SC - O(1) for using constant space to store the left, right and middle pointers
