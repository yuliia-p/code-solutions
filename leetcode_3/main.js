/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly
one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// nums = [2,7,11,15], target = 9
var twoSum = function (nums, target) {
  const indexes = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes;
};
twoSum([2, 7, 11, 15], 9);
