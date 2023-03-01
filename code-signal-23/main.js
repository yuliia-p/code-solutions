/*
In the popular Minesweeper game you have a board with some mines and those cells
that don't contain a mine have a number in it that indicates the total number
of mines in the neighboring cells. Starting off with some arrangement of mines
we want to create a Minesweeper game setup.

Example

For
matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be
solution(matrix) = [[1, 2, 1],
                    [2, 1, 1],
                    [1, 1, 1]]
*/

// eslint-disable-next-line no-unused-vars
function solution(matrix) {
  return matrix.map((row, i) => row.map((col, j) => {
    return countBombs(matrix, i, j);
  }));
}

function countBombs(array, x, y) {
  let count = 0;

  for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, array.length); i++) {
    for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, array[i].length); j++) {
      if (i === x && j === y) continue;
      else if (array[i][j] === true) { count++; }
    }
  }

  return count;
}
