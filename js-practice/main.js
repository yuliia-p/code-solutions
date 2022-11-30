// find smallest

function smallest(array) {
  // use sort
  const sortedArray = array.sort((a, b) => {
    return a - b;
  });
  return sortedArray[0];
}

smallest([0, 4, 66, 85, 8]);
smallest([-98, 14, 6, 15, 8, 0, -5]);

// 1989 => 20
// 1654 => 17
// 1800 => 18
// 2019 => 21
// Math.ceil(1905 / 100)
function solution(year) {
  if (year < 100) {
    return 1;
  }
  return Math.ceil(year / 100);
}
solution(1905);
