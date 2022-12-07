let nums = [5, 4, 3, 2, 1];
quickSort(nums);

function quickSort(arr) {
  const res = rec(arr);
  console.log(res);
}

function rec(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const left = [];
  const right = [];
  const mid = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...rec(left), mid, ...rec(right)];
}
