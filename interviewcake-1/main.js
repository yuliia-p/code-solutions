/*
Write a function that takes an array of characters and reverses the letters in place.
*/

function reverse(arrayOfChars) {

  // Reverse the input array of characters in place
  // reverse(['A', 'B', 'C', 'D', 'E'])
  return arrayOfChars.reverse().join('');
}
reverse(['A', 'B', 'C', 'D', 'E']);

// Tests

let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
