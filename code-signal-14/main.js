/*
Two arrays are called similar if one can be obtained
from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.
*/
// a = [1, 2, 3]
// b = [2, 1, 3]

function solution(a, b) {
  if (a.join('') === b.join('')) return true;
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      arr1.push(a[i]);
      arr2.push(b[i]);
    }
  }
  arr1 = arr1.join('');
  arr2 = arr2.reverse().join('');
  return arr1 === arr2;
}
solution([1, 2, 3], [2, 1, 3]);
solution([1, 2, 2], [2, 1, 1]);
