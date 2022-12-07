var climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }
  let arr = [1, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr[n]);
};
climbStairs(3);
