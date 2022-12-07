function insertSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    let temp = nums[i];
    for (j = i; j > 0; j--) {
      if (temp < nums[j - 1]) {
        nums[j] = nums[j - 1];
      } else {
        break;
      }
    }
    nums[j] = temp;
  }
  console.log(nums);
}
insertSort([9, 3, 4, 45, 5, 5]);
