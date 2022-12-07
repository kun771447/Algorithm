/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }
  let res = false;
  let dfs = (n, x) => {
    if (!n.left && !n.right && sum === x) {
      res = true;
    }

    if (n.left) dfs(n.left, x + n.left.val);
    if (n.right) dfs(n.right, x + n.right.val);
  };
  dfs(root, root.val);
  return res;
};
