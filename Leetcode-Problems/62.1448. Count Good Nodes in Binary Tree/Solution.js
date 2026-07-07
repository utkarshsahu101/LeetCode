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
 * @return {number}
 */
var goodNodes = function (root) {
  let goods = 0;
  var trav = function (curr, max) {
    if (curr.val >= max) {
      ++goods;
      max = curr.val;
    }
    curr.left && trav(curr.left, max);
    curr.right && trav(curr.right, max);
  };
  trav(root, -Infinity);
  return goods;
};
