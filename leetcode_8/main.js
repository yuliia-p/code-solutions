/**
 * @param {number} x
 * @return {boolean}
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */
var isPalindrome = function (x) {
  // to str
  // loop backwards
  // compare str
  // if starts with '-' false
  let backwards = '';
  const n = x.toString();
  if (n.charAt(0) === '-') {
    return false;
  } else {
    for (let i = n.length - 1; i >= 0; i--) {
      backwards += n[i];
    }
  }
  return n === backwards;
};
isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);
