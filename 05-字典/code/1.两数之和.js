var twoSum = function (nums, target) {
  let map = new Map();
  let s = [];
  nums.some((n, i) => {
    console.log(map);
    console.log(target - n);
    if (map.get(target - n) !== undefined) {
      console.log(map.get(target - n));
      return true;
    } else {
      map.set(n, i);
    }
  });
  return s;
};

twoSum([1, 2, 3], 3);
