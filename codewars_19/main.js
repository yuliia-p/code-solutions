function arrayPlusArray(arr1, arr2) {
  const sum1 = arr1.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  const sum2 = arr2.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  return sum1 + sum2;
}
arrayPlusArray([-1, -2, -3], [-4, -5, -6]);
arrayPlusArray([0, 0, 0], [4, 5, 6]);
