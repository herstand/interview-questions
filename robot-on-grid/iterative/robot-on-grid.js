function findPath(grid) {
  var c = 0;
  var r = 0;
  var steps = [];
  var canGoRight = true;
  steps.push({"r" : 0, "c" : 0});
  while (
    (c < grid.length - 1) ||
    (r < grid[0].length - 1)
  ){
    if (
      canGoRight &&
      (c <= grid[r].length - 2) &&
      grid[r][c+1]
    ) {
      steps.push({"r" : r, "c" : c+1});
      c += 1;
    } else if (
      (r <= grid.length - 2) &&
      grid[r+1][c]
    ) {
      steps.push({"r" : r+1, "c" : c});
      r+=1;
      canGoRight = true;
    } else if (
      (r === 0 && c === 0) ||
      (grid[r][c-1] === false) ||
      (c-1 < 0)
    ) {
      return false;
    } else {
      steps.pop();
      canGoRight = false;
      c -= 1;
    }
  }
  return steps;
}
