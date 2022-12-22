/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/
function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0);
}
// function multipleOfIndex(array) {
//   const newArray = [];
//   array.map((x, index) => {
//     if (Number.isInteger(x / index)) {
//       newArray.push(x);
//     }
//     return newArray;
//   });
//   return newArray;
// }
multipleOfIndex([22, -6, 32, 82, 9, 25]);
multipleOfIndex([68, -1, 1, -7, 10, 10]);
multipleOfIndex([28, 38, -44, -99, -13, -54, 77, -51]);
