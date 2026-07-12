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
var isValidBST = function (root) {
  var isBST = (curr, low, high) => {
    if (!curr) return true;
    if (
      (low != null && curr.val <= low) ||
      (high != null && curr.val >= high)
    ) {
      return false;
    }
    let leftSubTree = isBST(curr.left, low, curr.val);
    let rightSubTree = isBST(curr.right, curr.val, high);
    return leftSubTree && rightSubTree;
  };
  return isBST(root, null, null);
};
