// Given the string, check if it is a palindrome.

function solution(inputString) {
  var reverseW = '';
  var strToArray = inputString.split(''); // [a, a, b, a, a]
  for (let y = strToArray.length - 1; y >= 0; y--) {
    reverseW += strToArray[y];
  }
  return inputString === reverseW;
}

solution('aabaa');
solution('abac');
