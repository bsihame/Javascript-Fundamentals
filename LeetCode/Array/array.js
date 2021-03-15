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

function twoNumberSum(array, targetSum) {

	let output = [];
  if(!array.length) return output 
	array.map((num)=> {
    let difference = targetSum - num;
    if(difference=== 0){
      output =output.push(num) 
      console.log(39, output)
    }
    // return num
		// if(num)
	})
  return output

}
console.log(twoNumberSum([3, 5, 4, 8, 11, 1, -1, 6], 10))
console.log(twoNumberSum([], 10))

