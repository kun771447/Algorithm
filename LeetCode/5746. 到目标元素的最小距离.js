var getMinDistance = function (nums, target, start) {
  let min = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (min === -1 || min > Math.abs(i - start)) {
        min = Math.abs(i - start);
      }
      if (min === 0) {
        break;
      }
    }
  }
  return min;
};
