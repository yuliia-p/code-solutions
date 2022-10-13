function matrixElementsSum(matrix) {
  let sum = 0;
  // [[1, 1, 1],
  // [2, 2, 2],
  // [3, 3, 3]]
  for (var i = 0; i < matrix.length; i++) {
    for (var x = 0; x < matrix[0].length; x++) {
      if (matrix[i][x] === 0 && i + 1 < matrix.length) {
        matrix[i + 1][x] = 0;
      }
      sum += matrix[i][x];
    }
  }
  return sum;
}
const matrix = [[0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]];

matrixElementsSum(matrix);
