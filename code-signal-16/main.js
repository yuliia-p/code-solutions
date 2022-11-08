/*
You are given an array of integers. On each move you are allowed to increase
exactly one of its element by one. Find the minimal number of moves
required to obtain a strictly increasing sequence from the input.

For inputArray = [1, 1, 1], the output should be
solution(inputArray) = 3.
*/

function solution(inputArray) {
  // debugger;
  // [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]
  var max = inputArray[0];
  var moves = 0;
  for (var i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= max) {
      moves += max - inputArray[i] + 1;
      inputArray[i] = max + 1;
    }
    max = inputArray[i];
  }
  return moves;
}
solution([-1000, 0, -2, 0]);
solution([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]);
