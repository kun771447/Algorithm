// 原地快排
/// i ->  <-j
// [d, a, b, c, e, f, g, h]
// i 找到比 e 大的
// j 找到比 e 小的
// i 和 j 的值交换一下位置
// 到最后 i 和 j 遇见

const quick = (arr, start, end) => {
  // 双指针
  let init = start;
  let flag = arr[init];

  start++;
  while (start <= end) {
    while (arr[end] > flag) {
      end--;
    }
    while (arr[start] < flag) {
      start++;
    }

    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]];
  return start;
};

const quickSort = (arr, start, end) => {
  if (start < end) {
    const index = quick(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index, end);
  }

  return arr;
};

const arr = [9, 8, 1, 5, 3, 7, 2];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
