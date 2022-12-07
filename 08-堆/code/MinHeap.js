class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 获取父节点
  getParentIndex(i) {
    // 右移除
    return (i - 1) >> 1;
  }

  // 获取左子节点
  getLeftIndex(i) {
    return i * 2 + 1;
  }

  // 获取右子节点
  getRightIndex(i) {
    return i * 2 + 2;
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  shiftUp(index) {
    if (index == 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      this.shiftUp(parentIndex);
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (this.heap[index] > this.heap[leftIndex]) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }
    if (this.heap[index] > this.heap[rightIndex]) {
      this.swap(index, rightIndex);
      this.shiftDown(rightIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  // 删除堆顶
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

const h = new MinHeap();

h.insert(3);
h.insert(2);
h.insert(1);
h.pop();

console.log(h.heap);
