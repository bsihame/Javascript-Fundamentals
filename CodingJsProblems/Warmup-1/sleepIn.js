// Warmup-1 -- sleepIn
// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

// Examples

// sleepIn(true, true) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

 

// const sleepIn = (weekday, vacation) =>{
//   if( "weekday" && "vacation" ){
//     return true;
//   } else if( "weekday" && !"vacation" ){
//     return false;
//   } else {
//    return true;
//   }
// }
// console.log(sleepIn(weekday, vacation));
// console.log(sleepIn(weekday, !vacation));
// console.log(sleepIn(!weekday, !vacation));


function notString(str){
  let arr = str.split(" ")
  for(let i = 0; i < arr.length; i++) {
    // console.log(28, arr[i])
    if(arr[0].includes("not")) {
      // console.log(29, arr[0])
    return arr.join(" ")
  } 
  else {
  return "not " + str
}
}
}
console.log(notString('candy'))
console.log(notString('x'))
console.log(notString('not bad'))

function missingChar(str, n){
  for(let i = 0; i < str.length; i++) {
    if(i === n ){
      console.log( 46 ,str[i], n)
     return str = str.split(str[i]).join("")
  
}
  }
}
console.log(missingChar('kitten', 1))
