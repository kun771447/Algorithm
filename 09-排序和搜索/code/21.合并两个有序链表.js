/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  let res = new ListNode();
  let p = res;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      p.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    p = p.next;
  }
  if (l1) {
    p.next = l1;
  } else {
    p.next = l2;
  }
  return res.next;
};
