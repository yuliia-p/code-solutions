/*
Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

Example

For inputArray = ["aba", "bbb", "bab"], the output should be
solution(inputArray) = false.

There are 6 possible arrangements for these strings:

["aba", "bbb", "bab"]
["aba", "bab", "bbb"]
["bbb", "aba", "bab"]
["bbb", "bab", "aba"]
["bab", "bbb", "aba"]
["bab", "aba", "bbb"]
None of these satisfy the condition of consecutive strings
differing by 1 character, so the answer is false.

For inputArray = ["ab", "bb", "aa"], the output should be
solution(inputArray) = true.

It's possible to arrange these strings in a way that each consecutive
pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.string inputArray

A non-empty array of strings of lowercase letters.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 15.

[output] boolean

Return true if the strings can be reordered in such a way
that each neighbouring pair of strings differ by exactly one character (false otherwise).
*/

function solution(inputArray) {
  function areConsecutive(str1, str2) {
    let diffCount = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        diffCount++;
        if (diffCount > 1) {
          return false;
        }
      }
    }
    return diffCount === 1;
  }

  function permute(arr, startIndex) {
    if (startIndex === arr.length - 1) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (!areConsecutive(arr[i], arr[i + 1])) {
          return false;
        }
      }
      return true;
    }

    for (let i = startIndex; i < arr.length; i++) {
      [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
      if (permute(arr, startIndex + 1)) {
        return true;
      }
      [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]]; // backtrack
    }

    return false;
  }

  return permute(inputArray, 0);
}

// Example usage:
const input1 = ['aba', 'bbb', 'bab'];
console.log(solution(input1)); // false

const input2 = ['ab', 'bb', 'aa'];
console.log(solution(input2)); // true
