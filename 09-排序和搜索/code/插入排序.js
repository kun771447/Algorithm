const swap = require("./swap");

function insertSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let middle = nums[i];
    let j;
    for (j = i; j > 0; j--) {
      if (middle < nums[j - 1]) {
        nums[j] = nums[j - 1];
      } else {
        break;
      }
    }
    nums[j] = middle;
  }
}
let nums = [3, 5, 60, 99, 1, 7, 5, 4];
insertSort(nums);
console.log(nums);
