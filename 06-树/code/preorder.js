// 先序遍历
// 根左右
const bt = require("./bt");

// const preorder = (root) => {
//   if (!root) {
//     return;
//   }
//   console.log(root.val);
//   preorder(root.left);
//   preorder(root.right);
// };

const preorder = (root) => {
  if (!root) {
    return;
  }
  const stack = [root];
  while (stack.length) {
    let n = stack.pop();

    console.log(n.val);

    // 将右子树压入栈底
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};

preorder(bt);

// 1
// 2
// 4
// 5
// 3
// 6
// 7
