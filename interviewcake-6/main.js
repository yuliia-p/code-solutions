/*
I have an array of n + 1n+1 numbers. Every number in the range 1..n1..n
appears once except for one number that appears twice.
*/
function findRepeat(numbers) {
  //  (n * n + n) / 2;
  const n = numbers.length - 1;
  const sumNoDublicate = (n * n + n) / 2;

  const sumWithDub = numbers.reduce((a, b) => {
    return a + b;
  }, 0);

  return sumWithDub - sumNoDublicate;
}

findRepeat([1, 5, 9, 7, 2, 6, 3, 8, 2, 4]);
