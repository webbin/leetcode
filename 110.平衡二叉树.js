/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node15 = new TreeNode(15, null, null);
const node7 = new TreeNode(7, null, null);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9, null, null);
const node3 = new TreeNode(3, node9, node20);

const node4a = new TreeNode(4, null, null);
const node4b = new TreeNode(4, null, null);
const node3a = new TreeNode(3, node4a, node4b);
const node3b = new TreeNode(3, null, null);
const node2b = new TreeNode(2, null, null);
const node2a = new TreeNode(2, node3a, node3b);
const node1 = new TreeNode(1, node2a, node2b);

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let node = root;
  let layer = 0;
  let max = 0;
  while (node) {
    const { left, right } = node;
    if (!left && !right) {
      if (Math.abs(layer - max) > 1) {
        return false;
      }
      if (layer > max) {
        max = layer;
      }
      continue;
    }
    layer += 1;
    node = left || right;
  }
  return true;
};
// @lc code=end
