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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let ans = true;
  var getHeight = function (root) {
    if (!root) return 0;
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) return (ans = ans && false);
    return 1 + Math.max(leftHeight, rightHeight);
  };
  getHeight(root);
  return ans;
};
