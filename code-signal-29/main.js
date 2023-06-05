/*
Given a string, your task is to replace each of its characters by the next one in the
English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be solution(inputString) = "dsbaz".
*/

function solution(inputString) {
  let outputString = '';
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (char === 'z') {
      outputString += 'a';
    } else {
      outputString += String.fromCharCode(char.charCodeAt(0) + 1);
    }
  }
  return outputString;
}

const inputString = 'crazy';
console.log(solution(inputString));
