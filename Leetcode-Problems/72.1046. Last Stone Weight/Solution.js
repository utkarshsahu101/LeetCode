/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let n = stones.length;
  //   let heap = new MaxPriorityQueue();

  //   for (let i = 0; i < n; i++) {
  //     heap.enqueue(stones[i]);
  //   }

  let heap = MaxPriorityQueue.fromArray(stones); // by this also

  while (heap.size() > 1) {
    let h1 = heap.dequeue();
    let h2 = heap.dequeue();
    let diff = h1 - h2;
    if (diff > 0) {
      heap.enqueue(diff);
    }
  }
  return heap.dequeue() || 0;
};
