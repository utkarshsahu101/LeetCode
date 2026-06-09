/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(max, area);
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return max;
};
// TC - O(n) for traversing the height array with two pointers
// SC - O(1) for using constant space to store the pointers and variables
