/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let q = [];

  let i = 0,
    j = 0;
  while (j < nums.length) {
    while (q.length && nums[j] > q[q.length - 1]) {
      q.pop();
    }
    q.push(nums[j]);

    if (j >= k - 1) {
      res.push(q[0]);
      if (nums[i] == q[0]) {
        q.shift();
      }
      ++i;
    }
    ++j;
  }
  return res;
};
// TC - O(n) for traversing the nums array and maintaining the deque
// SC - O(k) for maintaining the deque of size k
