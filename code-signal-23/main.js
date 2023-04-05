/*
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
*/

function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(elem => (elem === elemToReplace) ? substitutionElem : elem);
}

solution([1, 2, 1], 1, 3);
