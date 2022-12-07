function integerBreak(n: number): number {
  let nums: number[] = new Array(n + 1);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = -1;
  }
  nums[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      nums[i] = Math.max(nums[i], j * (i - j), j * nums[i - j]);
    }
  }
  console.log(nums);
  return nums[n];
};

console.log(integerBreak(10));