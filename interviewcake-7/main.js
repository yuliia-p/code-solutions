/* eslint-disable no-unused-expressions */
const string = '5.0, 100, 5.5, 101, 6.0, 102: L10; 5.0, 99, 5.5, 100, 6.0, 101: L20;';
/*
        10      20
5.0     100     99
5.5     101     100
6.0     102     101
*/

function createTwoDimArr(string) {
  const str = string.replace(/\s/g, '');
  const lines = str.split(';');
  const columns = [''];
  const arr = [];

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (!l) continue;
    const elements = l.split(',');
    let k = 0;
    for (let j = 0; j < elements.length; j++) {
      if (elements[j].includes(':')) {
        const twoEl = elements[j].split(':');
        arr[k].push(twoEl[0]);
        columns.push(twoEl[1]);
      } else {
        if (j % 2 === 0) {
          if (!arr[k]) {
            arr[k] = [];
          }
          if (arr[k].indexOf(elements[j]) === -1) {
            !arr[k].push(elements[j]);
          }
        } else {
          if (arr[k].indexOf(elements[j]) === -1) {
            !arr[k].push(elements[j]);
          }
          k++;
        }
      }
    }
  }
  arr.unshift(columns);
  // console.log('arr', arr);
  return arr;
}

createTwoDimArr(string);
