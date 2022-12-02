/*
Write a function that takes an array of characters and reverses the letters in place.

Why an array of characters instead of a string?

The goal of this question is to practice manipulating strings in place.
Since we're modifying the input, we need a mutable ↴
type like an array, instead of JavaScript's immutable strings.
*/

function reverse(arrayOfChars) {

  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {

    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }

  return arrayOfChars;
}

reverse(['A', 'B', 'C', 'D', 'E']);

// function reverse(arrayOfChars) {

//   // Reverse the input array of characters in place
//   // reverse(['A', 'B', 'C', 'D', 'E'])
//   return arrayOfChars.reverse().join('')
// }
