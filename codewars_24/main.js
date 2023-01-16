/* eslint-disable no-unused-vars */
function distanceBetweenPoints(a, b) {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.sqrt(x * x + y * y);
}
distanceBetweenPoints();
