// - 找到数组中的最小值，选中它并将其放置在第一位
// - 接着找到第二小的值，选中它并将器放置在第二位
// - 以此类推，执行 n - 1 轮

const swap = require("./swap");
function selectSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(nums, i, minIndex);
    }
  }
}
let nums = [1, 7, 5, 4, 3, 5, 60, 99];
selectSort(nums);
console.log(nums);
