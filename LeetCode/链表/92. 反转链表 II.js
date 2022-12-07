function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var reverseBetween = function (head, left, right) {
  let root = new ListNode(-1);
  root.next = head;
  for (let i = 0; i < left - 1; i++) {
    root = root.next;
  }
  let pre = root;
  let rightNode;
  for (let i = 0; i < right - left - 1; i++) {
    root = root.next;
  }
  let leftNode = pre.next;
  rightNode = root.next;
  root.next = null;
  let reverseList = null;
  while (leftNode) {
    let temp = leftNode.next;
    leftNode.next = reverseList;
    reverseList = leftNode;
    leftNode = temp;
  }
  console.log(leftNode);
  console.log(root);
  return;
};
