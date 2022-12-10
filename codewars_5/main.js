function elevator(left, right, call) {
  // code on! :)
  if (call === left && call === right) return 'right';
  if (call === left) return 'left';
  if (call === right) return 'right';

  const diffLeft = call - left; // -2
  const diffRight = call - right; // -1
  // 2,1,0
  if (diffLeft < diffRight) {
    return 'left';
  } else {
    return 'right';
  }
}
elevator(0, 1, 0);
elevator(0, 1, 1);
