/* Given an array of integers,
find the pair of adjacent elements that has the
largest product and return that product.
*/

// inputArray length ?
// break into arrays? no
// [9, 5, 10, 2, 24, -1, -48] => 50
function solution(inputArray) {
  var holder = [];
  for (var i = 0; i < inputArray.length - 1; i++) {
    var product = inputArray[i] * inputArray[i + 1];
    holder.push(product);
  }
  let maxProduct = holder[0];
  for (var y = 0; y < holder.length; y++) {
    if (maxProduct < holder[y]) {
      maxProduct = holder[y];
    }
  }
  return maxProduct;
}
solution([3, 6, -2, -5, 7, 3]);
