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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  let level = 0;
  let queue = [root];
  while (queue.length) {
    let levelArray = [];
    let levelArraySize = queue.length;
    for (let i = 0; i < levelArraySize; i++) {
      let curr = queue.shift();
      if (level % 2 != 0) {
        levelArray.unshift(curr.val);
      } else {
        levelArray.push(curr.val);
      }
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }
    ans.push(levelArray);
    ++level;
  }
  return ans;
};

// 2nd approach - using recursion for zigzag level order traversal
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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  let level = 0;
  var traversal = function (curr, level) {
    if (!ans[level]) ans[level] = [];
    if (level % 2 == 0) {
      ans[level].push(curr.val);
    } else {
      ans[level].unshift(curr.val);
    }
    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  };
  traversal(root, 0);
  return ans;
};
