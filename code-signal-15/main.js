/*
Given an array of strings, return another array containing all of its longest strings.

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].
*/
function solution(inputArray) {

  // ["aba", "aa", "ad", "vcd", "aba"]
  let maxLength = 0;
  const solutionArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length >= maxLength) {
      maxLength = inputArray[i].length;
    }
  }
  for (let x = 0; x < inputArray.length; x++) {
    if (inputArray[x].length === maxLength) {
      solutionArray.push(inputArray[x]);
    }
  }
  return solutionArray;
}
solution(['aba', 'aa', 'ad', 'vcd', 'aba']);
solution(['enyky',
  'benyky',
  'yely',
  'varennyky']);
solution(['a',
  'abc',
  'cbd',
  'zzzzzz',
  'a',
  'abcdef',
  'asasa',
  'aaaaaa']);
