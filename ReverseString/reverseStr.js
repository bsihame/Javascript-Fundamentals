// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


const reverse = (str) => {
  let strToArray = str.split("").reverse().join("")
  return strToArray
}
console.log(reverse('apple'));
console.log(reverse('hello'));
console.log(reverse('Greetings!'));


const reverse2 = (str) => {
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
console.log(reverse2('apple'));
console.log(reverse2('hello'))
console.log(reverse2('Greetings!'))



