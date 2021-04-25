// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG';
//=================================
// 1 Turn the string to an Array
// 2 Call reverse method on the Array
// 3 Join back the Array to the string 
// 4 Return the result

const reverse = (str) => {
  let strToArray = str.split("").reverse().join("")
  return strToArray
}
console.log(reverse('apple'));
console.log(reverse('hello'));
console.log(reverse('Greetings!'));
//=========================

// create an empty string called reverseStr
// loop backward 
// concat the character into reverseStr

const reverse2 = (str) => {
  let reverseStr = "";
  for(let i = str.length-1; i >= 0 ; i--){
    reverseStr+=(str[i])
  }
  return reverseStr
}
console.log(reverse2('apple'));
console.log(reverse2('hello'))
console.log(reverse2('Greetings!'))

//========================

// create an empty string called reverseStr
// for each character in the provided string
//  take a character and add it to start of reverseStr
// return reverseStr

const reverse3 = (str) => {
  let reverseStr = "";
  for(let char of str){
    reverseStr = char + reverseStr
  }
  return reverseStr
}
console.log(reverse3('apple'));
console.log(reverse3('hello'))
console.log(reverse3('Greetings!'))

//========================

const reverse4 = (str) => {
    let reverseStr = "";
    let stack = [];
    for(let i = 0; i < str.length; i++){
      // push the letters into stack
      stack.push(str[i])
    }
  //  pop the letter and concat to reverseStr
    while(stack.length > 0){
      let poppedLetter = stack.pop();
      reverseStr += poppedLetter
    }
    return reverseStr
}
console.log(reverse4('apple'));
console.log(reverse4('hello'))
console.log(reverse4('Greetings!'))
//===================
const reverse5 = (str) => {
  return str.split("").reduce((reversed, character)=> character + reversed, "")
}
console.log(reverse5('apple'));
console.log(reverse5('hello'))
console.log(reverse5('Greetings!'))



