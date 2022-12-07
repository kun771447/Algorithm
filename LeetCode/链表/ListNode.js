function ListNode(val) {
  this.val = val;
  this.next = null;
}

function ListNodeEach(nums) {
    if (nums == null || nums.length === 0) {
        throw new Error("arr can not be empty");
    }

    let head = new ListNode(nums[0]);
    let cur = head;
    for(let i = 1; i < nums.length; i++) {
        cur.next = new ListNode(nums[i]);
        cur = cur.next;
    }
    return head;
} 