function lateRide(n) {
  let sum = 0;
  if (n < 100) {
    const c = n.toString().split('');
    sum = c.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0);
  }

  if (n > 100) {
    const a = Math.floor(n / 60);
    const b = n - a * 60;
    const h = a.toString().split('');
    const min = b.toString().split('');
    sum = h.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue)) + min.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue));

  }
  return sum;
}
lateRide(99);
lateRide(40);
lateRide(808);
