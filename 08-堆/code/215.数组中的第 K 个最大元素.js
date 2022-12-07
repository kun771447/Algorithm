var findKthLargest = function (nums, k) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    swap(i1, i2) {
      const temp = this.heap[i1];
      this.heap[i1] = this.heap[i2];
      this.heap[i2] = temp;
    }

    getParentIndex(i) {
      return (i - 1) >> 1;
    }

    getLeftIndex(i) {
      return i * 2 + 1;
    }

    getRightIndex(i) {
      return i * 2 + 2;
    }

    shiftUp(index) {
      if (index == 0) {
        return;
      }
      const parentIndex = this.getParentIndex(index);
      if (this.heap[index] <= this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        this.shiftUp(parentIndex);
      }
    }

    shiftDown(index) {
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);
      if (this.heap[index] >= this.heap[leftIndex]) {
        this.swap(index, leftIndex);
        this.shiftDown(leftIndex);
      }
      if (this.heap[index] >= this.heap[rightIndex]) {
        this.swap(index, rightIndex);
        this.shiftDown(rightIndex);
      }
    }

    insert(n) {
      this.heap.push(n);
      this.shiftUp(this.heap.length - 1);
    }

    pop() {
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
    }

    size() {
      return this.heap.length;
    }
  }
  const h = new MinHeap();
  for (let i = 0; i < nums.length; i++) {
    h.insert(nums[i]);
    if (h.size() > k) {
      h.pop();
    }
  }
  return h.heap[0];
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
// 编程语言实现模式
