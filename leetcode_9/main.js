/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

  const wordsArray = s.trim().split(' ');
  return wordsArray.length > 0 ? wordsArray[wordsArray.length - 1].length : 0;

};
lengthOfLastWord('Hello World');
lengthOfLastWord('   fly me   to   the moon  ');
