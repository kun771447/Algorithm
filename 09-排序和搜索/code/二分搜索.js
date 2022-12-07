Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = this.length - 1;
  console.log(this);
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (this[mid] === item) {
      return mid;
    } else if (this[mid] < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

const res = [1, 2, 3, 4, 5].binarySearch(0);
console.log(res);
