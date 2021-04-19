// Warmup-1 -- mixStart
// Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.

// Examples

// mixStart('mix snacks') → true
// mixStart('pix snacks') → true
// mixStart('piz snacks') → false

function mixStart(str){
  let checkStr = "ix";
  let sliceStr = str.slice(1,3);
  if(sliceStr === checkStr ) {
    return true
  } else {
    return false 
}
}
console.log(mixStart('mix snacks'));
console.log(mixStart('pix snacks'));
console.log(mixStart('piz snacks'));
console.log(mixStart('nix'));
console.log(mixStart('ni'));
console.log(mixStart('n'));


// Test → Expected	
// mixStart('mix snacks') → true	
// mixStart('pix snacks') → true	
// mixStart('piz snacks') → false	
// mixStart('nix') → true	
// mixStart('ni') → false	
// mixStart('n') → false	

