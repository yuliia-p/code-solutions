/*
Consider integer numbers from 0 to n - 1 written down along the circle
in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written
in the radially opposite position to firstNumber.

Example

For n = 10 and firstNumber = 2, the output should be
solution(n, firstNumber) = 7.
*/

function solution(n, firstNumber) {
  // Calculate the opposite position by adding half of n and taking modulo n
  // This works because the circle is symmetric and the opposite position is exactly halfway around
  const oppositePosition = (firstNumber + Math.floor(n / 2)) % n;

  return oppositePosition;
}
solution(6, 3);
console.log(solution(6, 3));
console.log(solution(18, 6));
