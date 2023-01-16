function iceBrickVolume(radius, bottleLength, rimLength) {
  return (bottleLength - rimLength) * radius * 2 * radius;
}
iceBrickVolume(5, 30, 7);
