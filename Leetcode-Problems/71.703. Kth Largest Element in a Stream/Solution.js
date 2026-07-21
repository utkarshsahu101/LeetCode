/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new MinPriorityQueue();
  this.k = k;

  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
  return null;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.enqueue(val);
  console.log(
    val,
    this.heap,
    this.heap.size(),
    this.heap.size() > this.k,
    this.heap.front(),
  );
  if (this.heap.size() > this.k) {
    this.heap.dequeue();
  }
  return this.heap.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// TC - O(nlogk)
// SC - O(k)

// 2nd approach - Custom
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;

  let n = nums.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    this.heapifyDown(nums, i, n);
  }
  this.nums = [...nums];
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  // let n = this.nums.length
  // for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
  //     this.heapifyDown(this.nums, i, n)
  // }
  this.nums.push(val);
  let lastIndex = this.nums.length - 1;
  this.heapifyUp(this.nums, lastIndex);
  while (this.size(this.nums) > this.k) {
    this.extract(this.nums);
  }
  let top = this.front(this.nums);
  return top;
};
KthLargest.prototype.heapifyUp = function (arr, i) {
  if (i < 1) return;
  let parentIndex = Math.floor((i - 1) / 2);
  if (arr[parentIndex] < arr[i]) {
    return;
  } else {
    [arr[parentIndex], arr[i]] = [arr[i], arr[parentIndex]];

    this.heapifyUp(arr, parentIndex);
  }
};
KthLargest.prototype.front = function (arr) {
  return arr[0];
};
KthLargest.prototype.extract = function (arr) {
  if (arr.length < 1) return null;
  let minElement = arr[0];
  let lastIndex = arr.length - 1;
  arr[0] = arr[lastIndex];
  arr.pop();
  let n = this.size(arr);
  this.heapifyDown(arr, 0, n);
  return minElement;
};
KthLargest.prototype.size = function (arr) {
  return arr.length;
};
KthLargest.prototype.heapifyDown = function (arr, i, n) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let smallest = i;

  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }
  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }
  if (smallest != i) {
    [arr[smallest], arr[i]] = [arr[i], arr[smallest]];

    this.heapifyDown(arr, smallest, n);
  }
};
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// TC - O(nlogn)
// SC - O(k)
