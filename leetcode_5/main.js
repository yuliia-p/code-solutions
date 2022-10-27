/**
 * @param {string} s
 * @return {boolean}
 * Given a string s containing just the
 * characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */
var isValid = function (s) {
  // "()[]{}"
  // [')']
  const arr = [];
  const obj = { '(': ')', '[': ']', '{': '}' };
  for (const character of s) {
    if (obj[character]) {
      arr.push(obj[character]);
    } else if (arr.length > 0 && arr[arr.length - 1] === character) {
      arr.pop();
    } else {
      return false;
    }
  }
  return arr.length === 0;
};
isValid('()');
isValid('()[]{}');
