/*
Write a function that takes an array of characters and reverses the letters in place.
An in-place function modifies data structures or objects outside of its own stack frame
(i.e.: stored on the process heap or in the stack frame of a calling function). Because
of this, the changes made by the function remain after the call completes.
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
