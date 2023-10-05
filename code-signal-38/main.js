/*
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
solution(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
*/
function solution(inputArray, k) {
  if (k <= 0 || k > inputArray.length) {
    // Handle invalid input values
    return 0;
  }

  let maxSum = 0;

  // Calculate the initial sum of the first k elements
  for (let i = 0; i < k; i++) {
    maxSum += inputArray[i];
  }

  let currentSum = maxSum;

  // Iterate through the array to find the maximum sum
  for (let i = k; i < inputArray.length; i++) {
    // Calculate the current sum by adding the next element and subtracting the first element of the previous k elements
    currentSum = currentSum + inputArray[i] - inputArray[i - k];

    // Update maxSum if the currentSum is greater
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

// Example usage:
const inputArray = [2, 3, 5, 1, 6];
const k = 2;
const result = solution(inputArray, k);
console.log(result); // Output: 8
