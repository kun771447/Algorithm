function minPathSum(grid: number[][]): number {
  if (!grid.length) {
    return 0;
  }
  let row: number = grid.length;
  let column: number = grid[0].length;
  for (let i = 1; i < row; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let i = 1; i < column; i++) {
    grid[0][i] += grid[0][i - 1];
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
    }
  }
  return grid[row - 1][column - 1];
};
minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]);
minPathSum([[1, 2, 3], [4, 5, 6]]);