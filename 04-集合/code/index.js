// 去重
const arr = [1, 1, 2, 3];

const arr2 = [...new Set(arr)];
console.log(arr2);

// 判断元素是否在集合中
const set = new Set(arr);
const has = set.has(3);
console.log(has);

// 求交集
const set2 = new Set([2, 3, 4]);
const set3 = new Set([...set].filter((item) => set2.has(item)));
console.log(set3);
