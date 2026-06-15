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
var preorderTraversal = function (root) {
  let ans = [];
  // traversal(ans, root)
  function traversal(curr) {
    if (!curr) return;
    ans.push(curr.val);
    traversal(curr.left);
    traversal(curr.right);
  }
  traversal(root);
  return ans;
};
// TC - O(n) for traversing all the nodes in the binary tree
// SC - O(n) for storing the answer in the array and O(h) for the recursive stack space where h is the height of the binary tree

// 2nd approach - using stack to traverse the binary tree iteratively and storing the answer in the array
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
var preorderTraversal = function (root) {
  if (!root) return [];
  let ans = [];
  let stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    ans.push(curr.val);
    curr?.right && stack.push(curr.right);
    curr?.left && stack.push(curr.left);
  }
  return ans;
};
