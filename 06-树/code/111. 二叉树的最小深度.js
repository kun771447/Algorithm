var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  let bfs = (n) => {
    const q = [[root, 1]];

    while (q.length) {
      const [x, l] = q.shift();

      if (!x.left && !x.right) {
        return l;
      } else {
        if (x.left) q.push([x.left, l + 1]);
        if (x.right) q.push([x.right, l + 1]);
      }
    }
  };

  return bfs(root);
};
