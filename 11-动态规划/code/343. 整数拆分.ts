function integerBreak(n: number): number {
  let nums: number[] = [];
  const breakInteger: (n) => number = n => {
    if (n === 1) {
      return 1;
    }
    if (nums[n] != undefined && nums[n] != -1) {
      return nums[n];
    }
    let res: number = -1;
    for (let i = 1; i < n; i++) {
      res = Math.max(res, i * (n - i), i * breakInteger(n - i));
    }
    nums[n] = res;
    return res;
  }
  return breakInteger(n);
};

console.log(integerBreak(10));