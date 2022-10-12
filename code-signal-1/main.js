/*
Ratiorg got statues of different sizes as a
present from CodeMaster for his birthday, each
statue having an non-negative integer size. Since
he likes to make things perfect, he wants to arrange
them from smallest to largest so that each statue will
be bigger than the previous one exactly by 1. He may need some additional
statues to be able to accomplish that. Help him figure
out the minimum number of additional statues needed.
*/

// statues = [6, 2, 3, 8]
// solution(statues) = 3.
// needs statues of sizes 4, 5 and 7.
// start with smallest and then +1 if not there push to new array
// sort?
function solution(statues) {
  const arr = statues.sort((a, b) => a - b); // [2, 3, 6, 8] // [3, 6]
  const holder = [];
  var end = arr[arr.length - 1];
  for (let i = arr[0]; i < end; i++) {
    if (!arr.includes(i)) {
      holder.push(i);
    }
  }
  return holder.length;
}

solution([6, 2, 3, 8]);
