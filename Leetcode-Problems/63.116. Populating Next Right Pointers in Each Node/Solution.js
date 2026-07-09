/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return root;
  let queue = [root];
  while (queue.length) {
    let levelOrderSize = queue.length;
    for (let i = 0; i < levelOrderSize; i++) {
      let curr = queue.shift();
      if (i !== levelOrderSize - 1) {
        curr.next = queue[0];
      }
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }
  }
  return root;
};
// TC - O(n)
// SC - O(n)

// 2nd approach - Preorder traversal
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return root;
  var traversal = function (curr) {
    if (curr.left) {
      curr.left.next = curr.right;
    }
    if (curr.right && curr.next) {
      curr.right.next = curr.next.left;
    }
    curr.left && traversal(curr.left);
    curr.right && traversal(curr.right);
  };
  traversal(root);
  return root;
};
// TC - O(n)
// SC - O(h)
