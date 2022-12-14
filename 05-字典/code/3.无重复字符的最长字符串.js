var lengthOfLongestSubstring = function (s) {
  // 用双指针维护一个滑动窗口，用来剪切子串
  // 不断移动右指针，遇到重复字符，就把左指针移动到重复字符的下一位
  // 过程中，记录所有窗口的长度，并返回最大值
  let l = 0;
  let res = 0;
  const map = new Map();
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r - l + 1);
    map.set(s[r], r);
  }
  return res;
};
