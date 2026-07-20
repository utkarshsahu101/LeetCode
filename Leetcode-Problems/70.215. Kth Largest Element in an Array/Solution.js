// Approach 1 - Using Sorting
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};
// TC - O(nlogn)
// SC - O(n) or O(log n) depending on JS engine

// Approach 2 - Using MinPriorityQueue
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let pq = new MinPriorityQueue(); // leetcode imbuilt
  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }
  return pq.front();
};
// TC - O(nlogk)
// SC - O(k)

// Approach 3 - Using MinHeap
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let h1 = new MinHeap(); // leetcode inbuilt
  for (let i = 0; i < nums.length; i++) {
    h1.insert(nums[i]);
    if (h1.size() > k) {
      h1.extractRoot();
    }
  }
  return h1.root();
};

// Approach 4 - Custom Min Heap
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let h1 = new MyMinHeap();

  for (let i = 0; i < nums.length; i++) {
    h1.insert(nums[i]);
    if (h1.size() > k) {
      h1.extract();
    }
  }
  return h1.top();
};

class MyMinHeap {
  constructor() {
    this.heap = [];
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }
  heapifyUp(i) {
    if (i < 1) return;
    let parentIndex = this.getParentIndex(i);
    if (this.heap[parentIndex] < this.heap[i]) {
      return;
    } else {
      this.swap(i, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }
  extract() {
    if (this.heap.length === 0) return undefined;
    let minElement = this.heap[0];
    let lastIndex = this.heap.length - 1;
    this.heap[0] = this.heap[lastIndex];
    this.heap.pop();
    this.heapifyDown(0);
    return minElement;
  }
  heapifyDown(i) {
    let leftChildIndex = this.getLeftChildIndex(i);
    let rightChildIndex = this.getRightChildIndex(i);
    let smallest = i;
    let n = this.heap.length;

    if (leftChildIndex < n && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex;
    }
    if (
      rightChildIndex < n &&
      this.heap[rightChildIndex] < this.heap[smallest]
    ) {
      smallest = rightChildIndex;
    }
    if (smallest != i) {
      this.swap(smallest, i);
      this.heapifyDown(smallest);
    }
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  size() {
    return this.heap.length;
  }
  top() {
    return this.heap[0];
  }
}
