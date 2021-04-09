// Function countCharacter 
// words = arrayWord
// chars = Str characters
// Check all words from the array can be formed using the Str characters
// Return the #str that can be formed of the characters.

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 2; Because [Cat, hat] can be formed

// [] include num ⇒ only letters
// Always lowerCase 
// ! Special Characters
// !duplicate words
// Yes duplicate chars
// Chars str.length >=1
// Output = 0 if no word formed
// ex1:
// Input => 1st argument :words = ["cat","bt","hat","tree"];
// 	    2st argument :chars =  "atach"
// Output => [cat, hat]
// Ex2 :
// Input arg1 : words = [“car”, “chiken”, “flour”];
// 	 Arg2 : chars = “atbc”
// Output = 0
// Ex2 :
// Input arg1 : words = [“car”, “chiken”, “flour”];
// 	 Arg2 : chars = “atbcr”
// Output = 1

// O(n), n = chars.length
const countChars = (chars) => {
	let objCharsCount = {}
	for(let i =0; i < chars.length ; i++){
		if(objCharsCount[chars[i]]) {
			objCharsCount[chars[i]]++
      console.log(36 + " objCharsCount: ", objCharsCount)
		}else {
			objCharsCount[chars[i]] = 1
      console.log(39 + " objCharsCount: ", objCharsCount)
	}
  console.log(39 + " objCharsCount: ", objCharsCount)
	return objCharsCount
}
}

// O(m), m = word.length; 
const canBeFormedByChars = ( word , objCharsCount ) => {
  for(let i = 0; i < word.length; i++) {
    // console.log(45+"word:", word, 45+"objCharsCount: ", objCharsCount )
		if(objCharsCount[word[i]]) {
			objCharsCount[word[i]]--
      console.log(49 ,objCharsCount[word[i]])

		} else if(!objCharsCount[word[i]] || objCharsCount[word[i]]=== 0) {
      console.log(52,objCharsCount[word[i]])
		return false
}
console.log(58 +"word: ", word, 58 +" objCharsCount: ", objCharsCount )
}
return true
}

const countCharacters = ( words, chars ) => {
  console.log(64+" words: ",words)
  console.log(65+" chars", chars)

 let count = 0;
	let obj = countChars(chars) //O(n) chars.length
	for( let word in words) { //O(x)
		if ( canBeFormedByChars(word, obj)){ //O(m), m = word.length
			count++ 	
}
}
console.log(74 + " count: ", count)
return count
}

console.log(countCharacters(["car", "chiken", "flour"], "atbcr"));
console.log(countCharacters(["car", "chiken", "flour"], "atbcr"));
console.log(countCharacters(["cat","bt","hat","tree"], "atach"));

