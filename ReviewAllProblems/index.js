//leetcode.com/problems/find-common-characters/
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
// var commonChars = function(A) {};
// ----------------------------------------
// my whiteboard
// first to not loop  many times
// lets create count of the letter function

const countLetters = (str) => {
  let countObj = {};
  for (let i = 0; i < str.length; i++) {
    if (countObj[str[i]]) {
      countObj[str[i]]++;
    console.log(31, countObj);
    } else {
      countObj[str[i]] = 1;
      console.log(34, countObj);
    }
  }
  return countObj;
};

function FindCommonCharacter(str1, str2) {
  let commonLetters = "";
  let obj1 = countLetters(str1);
  let obj2 = countLetters(str2);
  for (let key in obj1){
    if(obj2[key]){
      if(obj1[key]<= obj2[key]){
        while(obj1[key]> 0){
        commonLetters += key
        obj1[key]--
      }
    } else {
      while(obj2[key] >0) {
        commonLetters += key
        obj2[key]--
        
      }
    }
    }
  }
  return commonLetters
}
const commonChars = (array) => {
  let chars = FindCommonCharacter(array[0], array[0]);
  for(let i = 1; i< array.length; i++) {
    chars = FindCommonCharacter(chars, array[i]);
  }
  return chars.split("")
}
console.log(commonChars(["letter", "thank", "lol"]))
console.log(commonChars(["letter", "letter", "letter"]))
console.log(commonChars(["letter", "thank", "lol"]))
console.log(commonChars(["letter", "label", "lollipep"]))
console.log(commonChars(["letter"]))