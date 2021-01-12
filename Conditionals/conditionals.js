const howOldAreYou = (age) => {
  if (age >= 21) {
    return "You are old enough to  drink" 
  } else if (age >= 18) {
    return "You're a sober adult" 
  } else if (age > 12) {
    return "You're a teenager!"
  } else {
    return "You're a child"
  }
}

console.log(howOldAreYou(5));
console.log(howOldAreYou(45));
console.log(howOldAreYou(25));
console.log(howOldAreYou(18));
console.log(howOldAreYou(15));
// ======= the re
// You're a child
// You are old enough to  drink
// You are old enough to  drink
// You're a sober adult
// You're a teenager!