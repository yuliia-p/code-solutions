/*
Given a string, find out if its characters can be rearranged to form a palindrome.

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/

function solution(inputString) {
  const array = inputString.split('');
  // "abbcabb"
  if (inputString.length === 1) return true;

  let odd = 0;
  let el;
  let index;

  while (array.length) {
    el = array.pop();
    index = array.indexOf(el);
    if (index < 0) {
      odd++;
    } else {
      array.splice(index, 1);
    }
  }
  return odd < 2;
}

solution('aabb');
solution('abbcabb');

/*
function solution(inputString) {
    return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2;
}
*/
