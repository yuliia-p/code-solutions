function elevator(left, right, call) {
  // code on! :)
  const diffLeft = Math.abs(call - left); // -2
  const diffRight = Math.abs(call - right); // -1
  return diffLeft < diffRight ? 'left' : 'right';
}
elevator(0, 1, 0);
elevator(0, 1, 1);
