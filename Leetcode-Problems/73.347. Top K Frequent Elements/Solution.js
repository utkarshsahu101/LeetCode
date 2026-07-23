// 1st approach - using sorting
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let heap = new MaxPriorityQueue((hash) => hash.freq);
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    hash.set(nums[i], (hash.get(nums[i]) ?? 0) + 1);
  }
  return [...hash]
    .sort((a, b) => b[1] - a[1])
    .map((a) => a[0])
    .slice(0, k);
};
// TC - O(nlogn)
// SC - O(n)

// 2nd approach - using min priority queue
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let heap = new MinPriorityQueue((hash) => hash.freq);
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    hash.set(nums[i], (hash.get(nums[i]) ?? 0) + 1);
  }

  for (let [key, val] of hash) {
    heap.enqueue({ val: key, freq: val });
    if (heap.size() > k) {
      heap.dequeue();
    }
  }
  return heap.toArray().map((a) => Number(a.val));
};
