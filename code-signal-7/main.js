/*
Ticket numbers usually consist of an even number of digits.
A ticket number is considered lucky if the sum of the first
half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.
*/
// n = 1230
// breack in half
// sum and compare
function solution(n) {
  // debugger;
  const strArr = n.toString().split(''); // ['1', '2', '3', '0', '5', '1']
  let firstSum = 0;
  for (let i = 0; i < strArr.length / 2; i++) {
    firstSum += Number(strArr[i]);
  }
  let secondSum = 0;
  for (let i = strArr.length / 2; i < strArr.length; i++) {
    secondSum += Number(strArr[i]);
  }
  return firstSum === secondSum;
}
solution(123051);
