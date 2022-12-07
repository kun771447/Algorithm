var reverseList = function (head) {
  let head2 = head;
  let head3 = head;
  let eles = [];
  while (head2) {
    eles.push(head2.val);
    head2 = head2.next;
  }
  while (head3) {
    head3.val = eles.pop();
    head3 = head3.next;
  }
  return head;
};
