// //leetcode.com/problems/find-common-characters/
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
// // var commonChars = function(A) {};
// // ----------------------------------------
// // my whiteboard
// // first to not loop  many times
// // lets create count of the letter function

// const countLetters = (str) => {
//   let countObj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (countObj[str[i]]) {
//       countObj[str[i]]++;
//     console.log(31, countObj);
//     } else {
//       countObj[str[i]] = 1;
//       console.log(34, countObj);
//     }
//   }
//   return countObj;
// };

// function FindCommonCharacter(str1, str2) {
//   let commonLetters = "";
//   let obj1 = countLetters(str1);
//   let obj2 = countLetters(str2);
//   for (let key in obj1){
//     if(obj2[key]){
//       if(obj1[key]<= obj2[key]){
//         while(obj1[key]> 0){
//         commonLetters += key
//         obj1[key]--
//       }
//     } else {
//       while(obj2[key] >0) {
//         commonLetters += key
//         obj2[key]--

//       }
//     }
//     }
//   }
//   return commonLetters
// }
// const commonChars = (array) => {
//   let chars = FindCommonCharacter(array[0], array[0]);
//   for(let i = 1; i< array.length; i++) {
//     chars = FindCommonCharacter(chars, array[i]);
//   }
//   return chars.split("")
// }
// console.log(commonChars(["letter", "thank", "lol"]))
// console.log(commonChars(["letter", "letter", "letter"]))
// console.log(commonChars(["letter", "thank", "lol"]))
// console.log(commonChars(["letter", "label", "lollipep"]))
// console.log(commonChars(["letter"]));

// const findRecursivelyA = (str[], target) => {
//   let i = arr[0]
//   console.log(i)
//   let subArr = arr.slice(i, i+1)
//   console.log(80, subArr)
//   // base case when arr is empty
//   if(arr.length<1) return -1;
//   //  need to check for the target
//   console.log(target)
//   if(subArr === target){
//     return i , findRecursivelyA(arr.slice(i+1))
//   }
//   return findRecursivelyA(arr.slice(i+1))
// }
// console.log(findRecursivelyA([2,6],6));

// let array =[2,5,4,5]
// let i = array[0]
// console.log(96,i)
// let sliced = array[i  + 1]
// console.log(98, sliced)

// const findWords =(board, word) => {
//   let dfs = (board, i, j, word, count=(0))=>{
//     if(count ===  word.length) return true;
//     if(i<0 || i>board.length || j<0 || j>=board[0].length || board[i][j]!==word[count]) return false;
//     let temp = board[i][j];
//     board[i][j] = '';
//     let found = dfs(board, i-1, j, word, count+1) || dfs(board, i+1, j, word, count+1) || dfs(board, i, j-1, word, count+1) || dfs(board, i, j+1, word, count+1);
//     board[i][j] = temp;
//     return found;
//   }
//   // loop trough the board vertically and horizontally to find the first letter
//     for(let i = 0; i < board.length; i++){
//       for(let j = 0;j < board[i].length; j++){
//         // this is where we gonna start our DFS
//         //  we find the first letter we should make sure to find all other characters in our world then we want to return true so this is where we will  going to  write  our  DFS  function
//         // we need tp pass the board our row that we are on the column the count of how many letters we have found also we want to pass it our world that we are looking for
//         if(board[i][j] === word.charAt[0] && dfs(board, i, j, word, 0)){
//           return true
//         }
//       }

//     }
//     return false
// };

// console.log(findWords([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))
// console.log(findWords([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE"))
// console.log(findWords([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"))

// const findWords = (board, word) => {
//   if (!board) {
//       return false
//   }

//   const m = board.length
//   const n = board[0].length

//   for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//           if (helper(board, m, n, word, i, j)) {
//               return true
//           }
//       }
//   }
//   return false
// };

// const helper = (board, m, n, word, x, y) => {
//   if (word === null || word.length === 0) {
//       return true
//   }

//   if (x < 0 || x >= m || y < 0 || y >= n) {
//       return false
//   }

//   if (board[x][y] !== word.charAt(0)) {
//       return false
//   }

//   let find = (a, b) => helper(board, m, n, word.slice(1), a, b)

//   const c = board[x][y]
//   board[x][y] = '-'
//   const r = find(x, y - 1) || find(x, y + 1) || find(x - 1, y) || find(x + 1, y)
//   board[x][y] = c

//   return r
// }

// const findWords = (board, word) =>{
//   let dfs = (board, i, j, word, count=0) => {
//       if(count===word.length) return true;
//       console.log(172, count, word.length)
//       if(i<0 || i>=board.length || j<0 || j>=board[0].length || board[i][j]!==word[count]) return false;
//       let temp = board[i][j];
//       console.log(175,temp);
//       board[i][j] = '';
//       let found = dfs(board, i-1, j, word, count+1) || dfs(board, i+1, j, word, count+1) || dfs(board, i, j-1, word, count+1) || dfs(board, i, j+1, word, count+1);
//       board[i][j] = temp;
//       console.log(179,found)
//       return found;
//   }
//    // loop trough the board vertically and horizontally to find the first letter
//   for(let i = 0; i<board.length; i++){
//       for(let j = 0; j<board[0].length; j++){
//          // this is where we gonna start our DFS
//         //  we find the first letter we should make sure to find all other characters in our world then we want to return true so this is where we will  going to  write  our  DFS  function
//         // we need tp pass the board our row that we are on the column the count of how many letters we have found also we want to pass it our world that we are looking for
//           if(board[i][j]===word[0] && dfs(board, i, j, word)){
//             console.log(184, board[i][j]);
//             console.log(185, board[j]);

//               return true;
//           }
//       }
//   }
//   return false;
// };

// // console.log(findWords([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))
// console.log(findWords([
//                       ["A","B","C","E"],
//                       ["S","F","C","S"],
//                       ["A","D","E","E"]],"SEE"))
// // console.log(findWords([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"))
//==========================================

//  Middle of the Linked List

// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.

// Note:

// The number of nodes in the given list will be between 1 and 100.

// Input: [1,2,3,4,5]

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


function ListNode(val) {
  this.val = val;
  this.next = null;
}
let head = new ListNode(1);
let headTwo = new ListNode(2);
let headThree = new ListNode(3);
let headFour = new ListNode(4);
let headFive = new ListNode(5);

head.next = headTwo;
headTwo.next = headThree;
headThree.next = headFour;
headFour.next = headFive;
const middleOfLinkList = (head) => {
  let array = [];
  let currentNode = head;
  while(currentNode){
    array.push(currentNode);
    currentNode = currentNode.next
  }
    let node = array.length
   if(node % 2 === 0){
       node = array[node/2] 
   } else {
       node = array[Math.round(node/2)-1];
   } 
   console.log(node)
    return node;

}

// console.log(middleOfLinkList(ListNode))

// 349. Intersection of Two Arrays

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// const intersection = (nums1, nums2) =>{
//   const set1 = new Set(nums1)
//   console.log(1,set1)
//   const set2 = new Set(nums2)
//   console.log(2, set2)
//   return [...set1].filter(sameNum=> set2.has(sameNum))
// };
// console.log(intersection([1,2,2,1],[2,2]))
// console.log(intersection([4,9,5],[9,4,9,8,4]))
