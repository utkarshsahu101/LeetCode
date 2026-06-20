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
var postorderTraversal = function (root) {
  let ans = [];
  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    traversal(curr.right);
    ans.push(curr.val);
  }
  traversal(root);
  return ans;
};
// 2nd approach - using 2 stack to traverse the binary tree iteratively and storing the answer in the array
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
var postorderTraversal = function (root) {
  if (!root) return [];
  let s1 = [root];
  let s2 = [];
  while (s1.length) {
    let curr = s1.pop();
    s2.push(curr);
    curr?.left && s1.push(curr.left);
    curr?.right && s1.push(curr.right);
  }
  let ans = [];
  while (s2.length) {
    ans.push(s2.pop().val);
  }
  return ans;
};
// TC - O(n) for traversing all the nodes in the binary tree
// SC - O(n) for storing the answer in the array and O(h) for the stack space where h is the height of the binary tree

// 3rd approach - using 1 stack
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
var postorderTraversal = function (root) {
  let stack = [];
  let ans = [];
  let curr = root;
  let lastVisitedNode = null;
  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    let peekNode = stack[stack.length - 1];
    if (peekNode.right && peekNode.right != lastVisitedNode) {
      curr = peekNode.right;
    } else {
      ans.push(peekNode.val);
      lastVisitedNode = stack.pop();
    }
  }
  return ans;
};
