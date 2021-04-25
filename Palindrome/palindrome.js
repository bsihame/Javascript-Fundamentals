// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str) =>{
  let reversed = str.split("").reduce((rev, char)=> char+ rev, "");
  console.log(17,reversed)
  if(str === reversed) {
    return true
  } else {
    return false
  }
}


console.log(palindrome("abba"))
console.log(palindrome("abcdefg"))
//====================
const palindrome2 = (str) =>{
  let reversed = str.split("").reverse().join("");
  return str === reversed
}


console.log(palindrome2("abba"))
console.log(palindrome2("abcdefg"))


