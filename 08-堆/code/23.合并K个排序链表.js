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
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].value > this.heap[index].value
    ) {
      this.swap(index, parentIndex);
      this.shiftUp(parentIndex);
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex].value < this.heap[index].value
    ) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].value < this.heap[index].value
    ) {
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
    if (this.size() === 1) return this.heap.shift();
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

var topKFrequent2 = function (nums, k) {
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  const h = new MinHeap();
  map.forEach((value, key) => {
    console.log(h.heap);
    h.insert({ value, key });
    if (h.size() > k) {
      h.pop();
    }
  });
  console.log(h.heap);
  return h.heap.map((val) => val.key);
};
