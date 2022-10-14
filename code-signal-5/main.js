/* Given two strings, find the number of common characters between them.
For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.
Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function solution(s1, s2) {
  // debugger;
  let count = 0;
  // a b c a
  // x y z b a c
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      count++;
    }
  }
  return count;
}

solution('abca', 'xyzbac');
