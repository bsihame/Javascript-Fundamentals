//  https://leetcode.com/problems/find-common-characters/
// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
// You may return the answer in any order.
// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]
// Note:
// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter
/**
//  * @param {string[]} A
//  * @return {string[]}
//  */
// var commonChars = function(A) {
  
  
// };

const findCommonCharacters = (A) => {
  let obj ={};
  let  counts = A[0]
  let output = [];
  for(let i=0; i<counts.length; i++){
   if(obj[counts[i]]){
     obj[counts[i]]++
    }else {
     obj[counts[i]]= 1
   }
  } 
  for (word in A){
    if(obj[key]=== word[i]){
      output.push(obj(word[i]))
    }
    return output
  }

  // return output
  }
  console.log(findCommonCharacters(["letter", "thank", "lol"]))