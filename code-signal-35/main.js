/*
Given array of integers, remove each kth element from it.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].
*/
function solution(inputArray, k) {
  const result = [];

  for (let i = 0; i < inputArray.length; i++) {
    if ((i + 1) % k !== 0) {
      result.push(inputArray[i]);
    }
  }

  return result;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;
const outputArray = solution(inputArray, k);
console.log('inputArray', inputArray);
console.log('result', outputArray); // Output: [1, 2, 4, 5, 7, 8, 10]
