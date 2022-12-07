var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let res = 0;
  const dfs = (n, l) => {
    if (!n) return;
    res = res < l ? l : res;
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  };

  dfs(root, 1);
  return res;
};
