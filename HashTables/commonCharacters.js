// //  https://leetcode.com/problems/find-common-characters/
// // Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
// // You may return the answer in any order.
// // Example 1:

// // Input: ["bella","label","roller"]
// // Output: ["e","l","l"]
// // Example 2:

// // Input: ["cool","lock","cook"]
// // Output: ["c","o"]
// // Note:
// // 1 <= A.length <= 100
// // 1 <= A[i].length <= 100
// // A[i][j] is a lowercase letter
// /**
// //  * @param {string[]} A
// //  * @return {string[]}
// //  */
// // var commonChars = function(A) {


// // };

// const countCharacters = (str) => {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     // if the current letter exist in the obj
//     if (obj[str[i]]) {
//       obj[str[i]]++
//     } else {
//       obj[str[i]] = 1
//     }
//   }
//   return obj
// }
// const findCommonCharacters = (str1, str2) => {
//   let commonLetters = ""
//   let obj1 = countCharacters(str1)
//   let obj2 = countCharacters(str2);
//   // looping over each key in obj1
//   for (let key in obj1) {
//     //  if the key  exist and the count is truthy then
//     if (obj2[key]) {
//       //  if count the key in obj1 is less or equal than the count in obj2
//       if (obj1[key] <= obj2[key]) {
//         while (obj1[key] > 0) {
//           commonLetters += key
//           obj1[key]--
//         }
//       } else {
//         while (obj2[key] > 0) {
//           commonLetters += key
//           obj2[key]--
//         }
//       }
//     }
//   }
//   return commonLetters
// }

// const commonChars = (A) =>{
//   let chars = findCommonCharacters(A[0], A[0]);
//   for(let i = 1; i< A.length; i++){
//     chars = findCommonCharacters(chars, A[i])
//   }
//   return chars.split('')
//   };

// console.log(commonChars(["letter", "thank", "lol"]))
// console.log(commonChars(["letter", "letter", "letter"]))
// console.log(commonChars(["letter", "thank", "lol"]))
// console.log(commonChars(["letter", "label", "lollipep"]))
// console.log(commonChars(["letter"]))


// function LetterCountI(str) { 

 
//     let array  = str.split(" ");

//     let count = 0;
//     let word = "-1";

//   for (var i = 0; i < array.length; i++) {
//    for (var a = 0; a < array[i].length; a++) {
//      var countNew = 0;
//      for (var b = a + 1; b < array[i].length; b++) {
//        if(array[i][a] === array[i][b])
//           countNew += 1;
//      }
//      if (countNew > count) {
//        count = countNew;
//        word = array[i];
//      }
//    }
//    return word;
//   }


// }      

// function LetterCountI(str) {
  // let output = "" 
  // let count = {};

  // // console.log(array)
  // for(let i = 0; i < str.length; i++){
   
  //   // console.log(110,str[i][0])
  //   // console.log(array)
  //   let currentWord = str[i]
  // for(let j = 0; j < currentWord.length; j++){
 
  //   console.log(114, currentWord[j])
  // }
  //   // let count = {};
  //   // let currentChar = currentWord[j].toLowerCase();
  //   // if(count[currentChar]){
  //   //   count[currentChar]++
  //   // } else {
  //   //   count[currentChar]=1
  //   // }
  //   // return count
  //   }
  // //  console.log(116 ,currentChar)

//  let greaterCount=1;
//  let maxLetterCount;
//   let array = str.toLowerCase()
//   let newArr = array.split(" ")
//   console.log(131, newArr)
//   for(let i = 0; i < newArr.length; i++){
//     let count ={}
//     let currentWord = newArr[i]
//     for(let j = 0; j < currentWord.length; j++){
//       if(count[currentWord[j]]){
//         count[currentWord[j]]++ 
//       } else {
//         count[currentWord[j]] = 1
//       }
//       for(let key in count){
//         if( count[key]){
//           if(count[key] > greaterCount) {
//             greaterCount = count[key];
//             maxLetterCount = currentWord
//           }
//         }
//       }
//     }
//     if(greaterCount === 1){
//       return -1
//     } else {
//       return maxLetterCount
//     }
// }
// }




// console.log(LetterCountI("Hello apple pie"))



// 1160. Find Words That Can Be Formed by Characters
// Easy

// 590

// 92

// Add to List

// Share
// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

 

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: 
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: 
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
/**
//  * @param {string[]} words
//  * @param {string} chars
//  * @return {number}
 */
 const countCharacters = (words, chars) => {
   let count = 0
   let objCountOfChars;
   for( let currentWord of words) {
     let 
     if(checkWordsAndChars(currentWord, objCountOfChars)){
       count += words.length
     }
   }
    
};
// need obj where should have all the letters of chars and keep counting the letters
// declare an empty {}
// take our array of the chars we should loop through the length then check if 
const countChars = (chars) => {
  //  declare an object where we going to track the letters and its count
  let objCountOfChars = {};
  for( let i = 0; i < chars.length; i++) {
    if(objCountOfChars[chars[i]]) {
      objCountOfChars[chars[i]]++;
    } else {
      objCountOfChars[chars[i]] = 1;
    }
  }
  //  objCountOfChar{ w: 1, e: 3, l: 2, d: 1, o: 2, n: 2, h: 1, y: 1, r: 1 }
  return objCountOfChars
}
// we need a helper function where to check if the letters in the words includes in the chars letters and we should subtract 

const checkWordsAndChars = (currentWord, objCountOfChars) => {
  // need to loop through the length if the letter in the words exist in the objCountChars we should subtract buy 1 and set true
  for( let i = 0; i < currentWord.length; i++) {
    if(objCountOfChars[currentWord[i]]) {
      objCountOfChars--
      return true
    } else if(!objCountOfChars[currentWord[i]] || objCountOfChars[currentWord[i]] === 0){
      return false
    }
  }
}

console.log(countChars("welldonehoneyr"))


