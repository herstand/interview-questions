function findPath(grid) {
  var steps = [];

  (function findPathRecursively(grid, r, c, steps) {
    if (
      r >= grid.length ||
      c >= grid[0].length ||
      (grid[r][c] === false)
    ) {
      return false
    } else if (
      (
        (c === grid.length - 1) &&
        (r === grid[0].length - 1)
      )
      ||
      findPathRecursively(grid, r, c+1, steps)
      ||
      findPathRecursively(grid, r+1, c, steps)
    ) {
      steps.unshift({"r" : r, "c" : c});
      return true;
    }
  }(grid, 0, 0, steps));

  return steps;
}