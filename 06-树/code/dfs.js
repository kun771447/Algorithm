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

const dfs = (root) => {
  console.log(root.val);
  root.children.forEach(dfs);
};

dfs(tree);
