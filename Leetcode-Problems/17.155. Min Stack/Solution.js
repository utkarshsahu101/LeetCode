// 1st approach - using array to store both value and min value at that point
var MinStack = function () {
  this.s = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.s.length === 0) {
    this.s.push([val, val]);
  } else {
    if (this.s[this.s.length - 1][1] > val) {
      this.s.push([val, val]);
    } else {
      this.s.push([val, this.s[this.s.length - 1][1]]);
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// TC - O(1) for all operations
// SC - O(n)

// 2nd approach - using string to store both value and min value at that point

var MinStack = function () {
  this.s = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.s.length === 0) {
    let temp = `${val},${val}`;
    this.s.push(temp);
  } else {
    let minEl = this.s[this.s.length - 1].split(",")[1];
    if (minEl > val) {
      minEl = val;
    }
    this.s.push(`${val},${minEl}`);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return Number(this.s[this.s.length - 1].split(",")[0]);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Number(this.s[this.s.length - 1].split(",")[1]);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
