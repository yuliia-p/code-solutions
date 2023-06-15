/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
solution(cell1, cell2) = true.
*/

function solution(cell1, cell2) {
  const row1 = parseInt(cell1[1]);
  const col1 = cell1.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  const row2 = parseInt(cell2[1]);
  const col2 = cell2.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

  return (row1 + col1) % 2 === (row2 + col2) % 2;
}

const cell1 = 'A1';
const cell2 = 'C3';
console.log(solution(cell1, cell2));
