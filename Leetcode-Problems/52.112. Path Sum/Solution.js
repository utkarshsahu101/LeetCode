// Top down approach
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let total = 0;
  let flag = false;
  var sum = function (curr, total) {
    total += curr.val;
    if (!curr.left && !curr.right) {
      if (targetSum == total) {
        flag = true;
      }
    }
    curr?.left && sum(curr.left, total);
    curr?.right && sum(curr.right, total);
  };
  sum(root, total);
  return flag;
};

// Bottom up approach
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return root.val == targetSum;
  }
  let leftSubTreePathSum = hasPathSum(root.left, targetSum - root.val);
  let rightSubTreePathSum = hasPathSum(root.right, targetSum - root.val);
  return leftSubTreePathSum || rightSubTreePathSum;
};
