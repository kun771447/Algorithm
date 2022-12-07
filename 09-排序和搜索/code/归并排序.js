function rec(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  const orderLeft = rec(left);
  const orderRight = rec(right);

  const res = [];
  while (orderLeft.length || orderRight.length) {
    if (orderLeft.length && orderRight.length) {
      const minEle =
        orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift();
      res.push(minEle);
    } else if (orderLeft.length) {
      res.push(orderLeft.shift());
    } else if (orderRight.length) {
      res.push(orderRight.shift());
    }
  }
  return res;
}

const arr = [5, 4, 3, 2, 1];
const res = rec(arr);
console.log(res);
