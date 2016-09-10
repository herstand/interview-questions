(function(){

  function findPath(grid) {
    var c = 0;
    var r = 0;
    var steps = [];
    var canGoRight = true;
    while (
      (c < grid.length - 1) ||
      (r < grid[0].length - 1)
    ){
      if (
        canGoRight &&
        (c <= grid[r].length - 2) &&
        grid[r][c+1]
      ) {
        steps.push("Right");
        c += 1;
      } else if (
        (r <= grid.length - 2) &&
        grid[r+1][c]
      ) {
        steps.push("Down");
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