const swap = require("./swap");
function buddle(nums) {
  for (let i = 1; i < nums.length; i++) {
    let x = 0;
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        x = 1;
      }
    }
    if (x === 0) {
      break;
    }
  }
}
let nums = [1, 7, 5, 4, 3, 5, 60, 99];
buddle(nums);
console.log(nums);
