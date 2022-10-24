/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  const noDup = [];
  for (let i = 0; i < nums.length; i++) {
    if (!noDup.includes(nums[i])) {
      noDup.push(nums[i]);
    }
  }
  for (let i = 0; i < noDup.length; i++) {
    nums[i] = noDup[i];
  }

  return noDup.length;
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
