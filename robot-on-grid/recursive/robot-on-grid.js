(function(){

  function findPath(grid) {

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
    }(grid, 0, 0, []));

    return steps;
  }

  function testFinder() {
    var grid1 = [
      [true, true, true],
      [true, true, true],
      [true, true, true]
    ];
    var grid2 = [
      [true, true, true],
      [true, true, false],
      [true, true, true]
    ];
    var grid3 = [
      [true, true, true],
      [true, false, false],
      [true, true, true]
    ];
    var grid4 = [
      [true, false, true],
      [true, false, true],
      [true, true, true]
    ];
    var grid5 = [
      [true, false, true],
      [false, false, true],
      [true, true, true]
    ]; //FAIL
    var grid6 = [
      [true,  false,  false,  false,  false,  false],
      [true,  true,   false,  true,   true,   true],
      [false, true,   true,   true,   false,  true],
      [false, false,  false,  false,  false,  true],
    ]; //FAIL
    console.log(findPath(grid1));
    console.log(findPath(grid2));
    console.log(findPath(grid3));
    console.log(findPath(grid4));
    console.log(findPath(grid5));
    console.log(findPath(grid6));
  }
  testFinder();

}());