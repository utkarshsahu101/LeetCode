/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length;
  let count = 0;

  let maxL = [];
  maxL[0] = height[0];
  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(maxL[i - 1], height[i]);
  }

  let maxR = [];
  maxR[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    maxR[i] = Math.max(maxR[i + 1], height[i]);
  }

  for (let i = 0; i < n; i++) {
    let waterTrapped = Math.min(maxL[i], maxR[i]) - height[i];
    count = count + Math.max(waterTrapped, 0);
  }

  return count;
};
// TC - O(n) for traversing the height array three times to calculate the maxL, maxR and count the water trapped
// SC - O(n) for the maxL and maxR arrays to store the maximum height to the left and right of each index
