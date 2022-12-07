const minimumTotal = (triangle) => {
  // 数组长度
  const h = triangle.length;
  // 初始化 dp 数组
  const dp = new Array(h);
  for (let i = 0; i < h; i++) {
    dp[i] = new Array(triangle[i].length);
  }
  for (let i = h - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i == h - 1) {
        dp[i][j] = triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
  }
  console.log(dp[0][0]);
};
minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
