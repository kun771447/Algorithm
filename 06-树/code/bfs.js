const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "c",
          children: [],
        },
      ],
    },
    {
      val: "d",
      children: [],
    },
  ],
};

const bfs = (root) => {
  const q = [root];
  while (q.length > 0) {
    // 出队
    const n = q.shift();
    console.log(n.val);
    // 子元素入队
    n.children.forEach((child) => {
      q.push(child);
    });
  }
};

bfs(tree);
