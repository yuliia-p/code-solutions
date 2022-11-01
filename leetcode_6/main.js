/**
 * @param {string} s
 * @return {number}
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * For example, 2 is written as II in Roman numeral, just two ones added together.
 * 12 is written as XII, which is simply X + II.
 * The number 27 is written as XXVII, which is XX + V + II.
 */
var romanToInt = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let number = 0;
  // Input: s = "LVIII"
  for (var i = 0; i < s.length; i++) {
    const current = sym[s[i]];
    const next = sym[s[i + 1]];

    if (current < next) {
      number += next - current;
      i++;
    } else {
      number += current;
    }
  }
  return number;
};
romanToInt('III');
romanToInt('"LVIII"');
