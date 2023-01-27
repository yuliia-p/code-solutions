function maxPossibleScore(obj, arr) {
  // {"a": 1, "b": 2, "c": 3}
  // ["a", "c"]
  let sum = 0;
  for (const key in obj) {
    if (arr.includes(key)) {
      sum += obj[key] * 2;
    } else {
      sum += obj[key];
    }
  }
  return sum;
}

maxPossibleScore({ a: 1 }, []);
maxPossibleScore({ a: 1 }, ['a']);
maxPossibleScore({ a: 1, b: 14 }, ['b']);
maxPossibleScore({ a: 1, b: 2, c: 4 }, ['a', 'b', 'c']);
maxPossibleScore({ a: 2, b: 5, c: 8 }, ['c']);
