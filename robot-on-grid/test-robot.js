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

  var testCases = "Test Cases" + "<br />" +
    deepEquals(findPath(grid1),grid1_solution) + "<br />" +
    deepEquals(findPath(grid2),grid2_solution) + "<br />" +
    deepEquals(findPath(grid3),grid3_solution) + "<br />" +
    deepEquals(findPath(grid4),grid4_solution) + "<br />" +
    deepEquals(findPath(grid5),grid5_solution) + "<br />" +
    deepEquals(findPath(grid6),grid6_solution) + "<br /><br />";
  window.document.write(testCases);
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
