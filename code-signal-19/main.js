/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.
*/

function solution(inputArray) {
  let diff = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const subDiff = Math.abs(inputArray[i + 1] - inputArray[i]);
    if (subDiff > diff) {
      diff = subDiff;
    }
  }
  return diff;
}
solution([2, 4, 1, 0]);
solution([1, 1, 1, 1]);
solution([-1, 4, 10, 3, -2]);
