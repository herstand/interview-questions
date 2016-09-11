(function(){

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

  function testFinder() {
    var grid1 = [
      [true, true, true],
      [true, true, true],
      [true, true, true]
    ];
    var grid1_solution = [
      {"r" : 0, "c" : 0},
      {"r" : 0, "c" : 1},
      {"r" : 0, "c" : 2},
      {"r" : 1, "c" : 2},
      {"r" : 2, "c" : 2}
    ];
    var grid2 = [
      [true, true, true],
      [true, true, false],
      [true, true, true]
    ];
    var grid2_solution = [
      {"r" : 0, "c" : 0},
      {"r" : 0, "c" : 1},
      {"r" : 1, "c" : 1},
      {"r" : 2, "c" : 1},
      {"r" : 2, "c" : 2}
    ];
    var grid3 = [
      [true, true, true],
      [true, false, false],
      [true, true, true]
    ];
    var grid3_solution = [
      {"r" : 0, "c" : 0},
      {"r" : 1, "c" : 0},
      {"r" : 2, "c" : 0},
      {"r" : 2, "c" : 1},
      {"r" : 2, "c" : 2}
    ];
    var grid4 = [
      [true, false, true],
      [true, false, true],
      [true, true, true]
    ];
    var grid4_solution = [
      {"r" : 0, "c" : 0},
      {"r" : 1, "c" : 0},
      {"r" : 2, "c" : 0},
      {"r" : 2, "c" : 1},
      {"r" : 2, "c" : 2}
    ];
    var grid5 = [
      [true, false, true],
      [false, false, true],
      [true, true, true]
    ];
    var grid5_solution = false;
    var grid6 = [
      [true,  false,  false,  false,  false,  false],
      [true,  true,   false,  true,   true,   true],
      [false, true,   true,   true,   false,  true],
      [false, false,  false,  false,  false,  true],
    ];
    var grid6_solution = false;

    console.log(deepEquals(findPath(grid1),grid1_solution));
    console.log(deepEquals(findPath(grid2),grid2_solution));
    console.log(deepEquals(findPath(grid3),grid3_solution));
    console.log(deepEquals(findPath(grid4),grid4_solution));
    console.log(deepEquals(findPath(grid5),grid5_solution));
    console.log(deepEquals(findPath(grid6),grid6_solution));
  }
  testFinder();

  function deepEquals(test, solution) {
    if (typeof test === "boolean") {
      return test === solution;
    }
    return test.every(function(test_obj, obj_i){
      return test_obj.r === solution[obj_i].r &&
        test_obj.c === solution[obj_i].c;
    });
  }
}());