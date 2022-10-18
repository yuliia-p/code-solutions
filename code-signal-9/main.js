/*
Write a function that reverses characters in
(possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.
*/
// inputString = ""foo(bar(baz))blim" => "foo(barzab)blim" => "foorabbazmilb"
// inputString = "foo(bar)baz" => "foorabbaz"
// "foo(bar)baz(blim)"

// inputString.split('')
function solution(inputString) {
  let str = inputString;
  const re = /\([A-Za-z]*\)/g;

  while (re.test(str)) {
    str = str.replace(re, substr => substr.slice(1, substr.length - 1).split('').reverse().join(''));
  }

  return str;
}
solution('foo(bar)baz');
