function invert(array) {
  if (array.length === 0) return [];

  const invertArray = [];
  array.map(el => {
    if (el < 0) {
      invertArray.push(Number(el.toString().slice(1)));
    }
    if (el >= 0) {
      invertArray.push(Number('-' + el.toString()));
    }
    return el;
  });
  return invertArray;
}
invert([1, 2, 3, 4, 5]);
invert([1, -2, 3, -4, 5]);
