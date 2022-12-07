// 给定一个m×n网格，左上角起点标记为"Start"，每次移动一步，求走到Finish总共有多少条不同的路径？
// 输入: m = 3, n = 2
// 输出: 3
// 解释:
// 从左上角开始，总共有 3 条路径可以到达右下角。

// 向右 -> 向右 -> 向下
// 向右 -> 向下 -> 向右
// 向下 -> 向右 -> 向右

function uniquePaths(m, n) {
  if (m == 1) {
    return n;
  }
  if (n == 1) {
    return m;
  }
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m);
  }
  for (let i = 0; i < n; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < m; j++) {
    dp[0][j] = 1;
  }
  //   填充剩余空间;
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[n - 1][m - 1];
}

console.log(uniquePaths(4, 1));
console.log(uniquePaths(1, 4));
