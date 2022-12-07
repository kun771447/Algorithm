const a = {
  val: "a",
};
const b = {
  val: "b",
};
const c = {
  val: "c",
};

a.next = b;
b.next = c;

// 插入元素 d, 在 b 和 c 之间
const d = { val: "d" };
d.next = c;
b.next = d;

// 删除元素
b.next = c;

// 遍历链表
let p = a;
while (p) {
  console.log(p.val);
  p = p.next;
}
