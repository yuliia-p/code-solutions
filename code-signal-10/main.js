// statues = [6, 2, 3, 8]
// solution(statues) = 3.
// needs statues of sizes 4, 5 and 7.
// start with smallest and then +1 if not there push to new array
// sort?
function solution(statues) {
  const arr = statues.sort((a, b) => a - b); // [2, 3, 6, 8] // [3, 6]
  const holder = [];
  var start = arr[0];
  var end = arr[arr.length - 1];
  for (let i = start; i < end; i++) {
    if (!arr.includes(i)) {
      holder.push(i);
    }
  }
  return holder.length;
}
solution([5, 4, 6]);
solution([2, 3, 6, 8]);
