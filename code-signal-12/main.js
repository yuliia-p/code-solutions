/*
picture = ["abc",
           "ded"]

solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/

function solution(picture) {
  const newArr = [];
  for (const el of picture) {
    const newEl = '*' + el + '*';
    newArr.push(newEl);
  }
  const border = picture[0].length + 2;
  let borderStr = '';
  for (let i = 0; i < border; i++) {
    borderStr += '*';
  }
  newArr.unshift(borderStr);
  newArr.push(borderStr);
  return newArr;
}
solution(['abc', 'ded']);
