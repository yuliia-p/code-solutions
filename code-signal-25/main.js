// Check if all digits of the given integer are even.

function solution(n) {
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
solution(642386);
