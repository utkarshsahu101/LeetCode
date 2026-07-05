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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;
  if (isSame(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSame = function (a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.val !== b.val) return false;
  return isSame(a.left, b.left) && isSame(a.right, b.right);
};
// TC - O(n*m)
// SC - O(n+m)

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let hashRoot = serialize(root);
  let hashSubRoot = serialize(subRoot);
  if (hashRoot.includes(hashSubRoot)) {
    return true;
  }
  return false;
};

var serialize = function (root) {
  let hash = "";
  var traversal = function (curr) {
    if (!curr) {
      hash = hash + "-#";
      return;
    }
    hash = hash + "-" + curr.val;
    traversal(curr.left);
    traversal(curr.right);
  };
  traversal(root);
  return hash;
};
// TC - O(n*m) but if use KMP algo for string matching then it becomes O(n+m)
// SC - O(n+m)
