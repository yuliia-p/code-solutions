// sequence: [1, 4, 10, 4, 2] => false
// loop array to compare each el to next one
// if smaller go next
// it not - push to new array
// if length of new array > than 1 => flase
// [1, 2, 3, 4, 3, 6] => true

function solution(sequence) {
  let count = 0;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false;
      }
      if (count > 1) return false;
    }
  }
  return true;
}

solution([1, 2, 3, 4, 3, 6]);
solution([1, 2, 3, 4, 5, 3, 5, 6]);
solution([1, 1, 3, 2]);
solution([1, 2, 1, 2]);
solution([3, 5, 67, 98, 3]);
solution([10, 1, 2, 3, 4, 5]);
solution([1, 2, 5, 3, 5]);
