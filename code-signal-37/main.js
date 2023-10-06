/*
Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be
solution(s) = 3.

There are 3 different characters a, b and c.
*/
function solution(s) {
  // Create an empty Set to store unique characters
  const uniqueChars = new Set();

  // Iterate through the string
  for (let i = 0; i < s.length; i++) {
    // Add each character to the Set
    uniqueChars.add(s[i]);
  }

  // Return the size (number of unique characters) of the Set
  return uniqueChars.size;
}

// Example usage:
const s = 'cabca';
const result = solution(s);
console.log(result); // Output: 3
