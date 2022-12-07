var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let p = head;
  while (p && p.next) {
    if (p.val !== p.next.val) {
      p = p.next;
    } else {
      p.next = p.next.next;
    }
  }
  return head;
};
