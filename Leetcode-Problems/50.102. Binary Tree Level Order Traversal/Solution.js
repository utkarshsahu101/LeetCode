/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let ans = [];
  while (queue.length) {
    let levelOrderArr = [];
    let levelOrderArrSize = queue.length;
    for (let i = 0; i < levelOrderArrSize; i++) {
      let curr = queue.shift();
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
      levelOrderArr.push(curr.val);
    }
    ans.push(levelOrderArr);
  }
  return ans;
};
// TC - O(n) for traversing all the nodes in the binary tree
// SC - O(n) for storing the answer in the array and O(h) for the queue space where h is the height of the binary tree

// 2nd approach - using recursion
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  let traversal = function (curr, level) {
    if (!ans[level]) ans[level] = [];
    ans[level].push(curr.val);
    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  };
  traversal(root, 0);
  return ans;
};
