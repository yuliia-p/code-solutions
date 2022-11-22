/*
In other words, it's a string of four numbers each between 0 and 255 inclusive,
with a "." character in between each number. All numbers should be present without leading zeros.

Examples:

192.168.0.1 is a valid IPv4 address
255.255.255.255 is a valid IPv4 address
280.100.92.101 is not a valid IPv4 address because 280 is too large to be an 8-bit integer (the largest 8-bit integer is 255)
255.100.81.160.172 is not a valid IPv4 address because it contains 5 integers instead of 4
1..0.1 is not a valid IPv4 address because it's not properly formatted
17.233.00.131 and 17.233.01.131 are not valid IPv4 addresses because they contain leading zeros
*/
function solution(inputString) {
  const toArr = inputString.split('.');

  if (toArr.length !== 4) return false;

  for (let i = 0; i < 4; i++) {
    if (isNaN(toArr[i]) || parseInt(toArr[i]) > 255 || parseInt(toArr[i]) < 0 || toArr[i] === '' || (toArr[i].length > 1 && toArr[i][0] === '0')) {
      return false;
    }
  }
  // return toArr.length===4&&toArr.every(element => element !== ""&&!isNaN(element)&&element>=0&&element<256)
  return true;
}
solution('0.254.255.0');
solution('64.233.161.00');
solution('1.1.1.1.1');
solution('1a.1.1.1a');
solution('172.16.254');
