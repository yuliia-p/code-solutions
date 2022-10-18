/*
Input:
a: [-1, 150, 190, 170, -1, -1, 160, 180]
Expected Output:
[-1, 150, 160, 170, -1, -1, 180, 190]
*/
// sort array
// put back -1 at indexes from holder
function solution(a) {
  const indexHolder = [];
  const valueHolder = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      indexHolder.push(i); // [0, 4, 5]
    } else {
      valueHolder.push(a[i]);
    }
  }
  valueHolder.sort(function (a, b) { return a - b; });
  for (let i = 0; i < indexHolder.length; i++) {
    valueHolder.splice(indexHolder[i], 0, -1);
  }
  return valueHolder;
}

solution([-1, 150, 190, 170, -1, -1, 160, 180]);
solution([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]);
