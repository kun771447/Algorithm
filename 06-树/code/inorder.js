// 中序遍历
// 左根右
const bt = require("./bt");

// const inorder = (root) => {
//   if (!root) {
//     return;
//   }
//   inorder(root.left);
//   console.log(root.val);
//   inorder(root.right);
// };

const inorder = (root) => {
  if (!root) {
    return;
  }

  const stack = [];
  let p = root;

  while (stack.length || p) {
    // 入栈左子树
    while (p) {
      stack.push(p);
      p = p.left;
    }
    let n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};

inorder(bt);

// 4
// 2
// 5
// 1
// 6
// 3
// 7
