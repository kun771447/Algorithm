var maximumElementAfterDecrementingAndRearranging = function (arr) {
  arr.sort((a, b) => a - b);
  if (arr[0] != 1) {
    return arr.length;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) <= 1) {
      max = max < arr[i] ? arr[i] : max;
    } else {
      arr[i] = arr[i - 1] + 1;
      max = arr[i];
    }
  }
  return max;
};

console.log(maximumElementAfterDecrementingAndRearranging([73, 98, 9]));
