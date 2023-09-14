/*
Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be
solution(inputString) = '1';
For inputString = "q2q-q", the output should be
solution(inputString) = '2';
For inputString = "0ss", the output should be
solution(inputString) = '0'.
*/
function solution(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(parseInt(inputString[i]))) {
      return inputString[i];
    }
  }
  // Return a default value if no digit is found (optional)
  return null; // or any other default value you prefer
}

// Example usage:
const inputString1 = 'var_1__Int';
const inputString2 = 'q2q-q';
const inputString3 = '0ss';

console.log(solution(inputString1)); // Output: '1'
console.log(solution(inputString2)); // Output: '2'
console.log(solution(inputString3)); // Output: '0'
