/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right.
You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

*/

function solution(inputArray) {
  inputArray = inputArray.sort((a, b) => {
    return a - b;
  });
  const lastEl = inputArray[inputArray.length - 1];
  for (let i = 1; i <= lastEl + 1; i++) {
    if (inputArray.every(element => {
      return element % i !== 0;
    })) {
      return i;
    }
  }
}
solution([5, 3, 6, 7, 9]);
solution([2, 3]);
