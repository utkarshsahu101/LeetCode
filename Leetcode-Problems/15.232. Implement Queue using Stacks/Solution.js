// 1st approach - Using 2 stacks and moving all elements from s1 to s2 and then popping the last element from s1 in pop and peek methods. This way we can maintain the order of elements in the queue.
var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let n = this.s1.length;
  for (let i = 0; i < n - 1; i++) {
    this.s2.push(this.s1.pop());
  }
  let lastEle = this.s1.pop();
  for (let i = 0; i < n - 1; i++) {
    this.s1.push(this.s2.pop());
  }
  return lastEle;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let n = this.s1.length;
  for (let i = 0; i < n - 1; i++) {
    this.s2.push(this.s1.pop());
  }
  let lastEle = this.s1.pop();
  this.s2.push(lastEle);
  for (let i = 0; i < n; i++) {
    this.s1.push(this.s2.pop());
  }
  return lastEle;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// 2nd approach - Using 2 stacks and only moving elements from s1 to s2 when s2 is empty. This way we can reduce the number of operations in pop and peek methods.
var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
// Worst Case - O(n) when s2 is empty and we have to move all elements from s1 to s2
// Average Case - O(1) when s2 is not empty and we can directly pop the last element from s2
MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    // O(n) when s2 is empty then we have to move all elements from s1 to s2
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop(); // O(1) when s2 is not empty then we can directly pop the last element from s2
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
