// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1];
// const twoSum = ( arr, target) => {
//   let output = [];
//   let
//   let difference = num[i] - target
//   arr.map(num =>{
//     if(num[i] ==)
//   })
// }

const twoNumberSum = function (arr, target) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    //=> 0(n)
    for (let j = i + 1; j < arr.length; j++) {
      //=> 0(n)
      if (arr[i] + arr[j] === target) {
        //=> 0(1)
        output.push(i, j); // => 0(1)
        return output; // => 0(1)
      }
    }
  }
};
console.log(twoNumberSum[[2, 7, 11, 15]], 9);
// console.log(twoNumberSum([3, 5, 4, 8, 11, 1, -1, 6], 10))
// console.log(twoNumberSum([], 10))

// const twoSum = (nums, target) => {
//   let output = [];
//   let temp = {};
//   for(let i = 0; i < nums.length; i++){
//       if(temp[target - nums[i]] != undefined){
//           output.push(temp[target - nums[i]], i);
//           return output;
//       }
//       temp[nums[i]] = i;
//   }
//   return output;
// };
// console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([3,2,4],6))
// console.log(twoSum([3,2,3],6));
// console.log(twoSum([3, 5, 2, 4, 3],9));
