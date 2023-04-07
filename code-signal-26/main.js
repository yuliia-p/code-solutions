/*
Correct variable names consist only of English letters,
digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
solution(name) = true;
For name = "qq-q", the output should be
solution(name) = false;
For name = "2w2", the output should be
solution(name) = false.
*/

function solution(name) {
  const array = name.split('');
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && isDigit(array[i])) {
      return false;
    }
    if (!(isDigit(array[i]) || isLetter(array[i]) || isUnderscore(array[i]))) {
      return false;
    }
  }
  return true;
}

function isDigit(c) {
  return '0123456789'.indexOf(c) !== -1;
}

function isUnderscore(c) {
  return '_'.indexOf(c) !== -1;
}

function isLetter(c) {
  return c.toLowerCase() !== c.toUpperCase();
}
solution('var_1__Int');
