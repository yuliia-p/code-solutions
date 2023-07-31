/*
Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
(where abs denotes the absolute value)

If there are several possible answers, output the smallest one.
*/

function solution(a) {
  let result = a[0];
  let total = Number.MAX_VALUE;

  for (let i = 0; i < a.length; i++) {
    let tmp = 0;
    for (let j = 0; j < a.length; j++) {
      tmp += Math.abs(a[j] - a[i]);
    }
    if (tmp < total) {
      result = a[i];
      total = tmp;
    }
  }
  return result;
}
const array1 = [2, 4, 7];
const result1 = solution(array1);
console.log('Closest element:', result1); // Output: 4

const array2 = [2, 3];
const result2 = solution(array2);
console.log('Closest element:', result2); // Output: 2
