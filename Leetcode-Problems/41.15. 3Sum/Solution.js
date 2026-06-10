/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      twoSum(nums, i, ans);
    }
  }
  return ans;
};

var twoSum = (nums, x, ans) => {
  let l = x + 1;
  let r = nums.length - 1;
  while (l < r) {
    let sum = nums[l] + nums[r] + nums[x];
    if (sum === 0) {
      ans.push([nums[l], nums[r], nums[x]]);
      ++l;
      --r;
      while (l < r && nums[l] == nums[l - 1]) {
        ++l;
      }
    } else if (sum > 0) {
      --r;
    } else {
      ++l;
    }
  }
};

// TC - O(n^2) for traversing the array with two nested loops and two pointers while the nested while inside twoSum function is not taking whole array elements as it is skipping the duplicate elements and also skipping the elements which are less than the current element in the outer loop
// SC - O(1) as here array is not taking whole array elements
