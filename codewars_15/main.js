// 1989 => 20
// 1654 => 17
// 1800 => 18
// 2019 => 21
// Math.ceil(1905 / 100)
function century(year) {
  if (year < 100) {
    return 1;
  }
  return Math.ceil(year / 100);
}
century(1705);
century(1601);
