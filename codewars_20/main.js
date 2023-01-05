const reverseSeq = n => {
  const array = [];
  for (let i = n; i > 0; i--) {
    array.push(i);
  }
  return array;
};
reverseSeq(21);
/*
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};
*/
