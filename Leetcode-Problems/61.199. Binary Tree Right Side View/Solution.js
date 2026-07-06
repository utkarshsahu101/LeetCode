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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  let ans = [];
  var traversal = function (curr, level) {
    if (ans[level] == undefined) {
      ans[level] = curr.val;
    }
    curr.right && traversal(curr.right, level + 1);
    curr.left && traversal(curr.left, level + 1);
  };
  traversal(root, 0);
  return ans;
};

// Iterative Approach
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  let ans = [];
  let queue = [root];
  while (queue.length) {
    let levelOrderSize = queue.length;
    for (let i = 0; i < levelOrderSize; i++) {
      let curr = queue.shift();
      curr.right && queue.push(curr.right);
      curr.left && queue.push(curr.left);
      if (i == 0) {
        ans.push(curr.val);
      }
    }
  }
  return ans;
};
// TC - O(n)
// SC - O(n)
