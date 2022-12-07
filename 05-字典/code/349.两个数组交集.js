var intersection = function (nums1, nums2) {
  const m = new Map();

  nums1.forEach((n) => {
    m.set(n, true);
  });

  const res = [];

  nums2.forEach((n) => {
    if (m.get(n)) {
      res.push(n);
      m.delete(n);
    }
  });

  return res;
};
