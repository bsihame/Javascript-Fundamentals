let fruits = ["Blueberry", "Banana",
"orange", "kiwi", "Cherry"];
console.log(fruits); // [ 'Blueberry', 'Banana', 'orange', 'kiwi', 'Cherry' ]
// length property
console.log(fruits.length); // ==>5
// index start at 0
console.log(fruits[0]);//==>Blueberry
console.log(fruits[fruits.length-1]); // Cherry
// I can reassign the specific array
console.log(fruits[0]="apple");
console.log(fruits);
let num = [13, 14, 15, 16];// [ 15 ]
console.log(num.slice(2, 3));//[ 15, 16 ]
console.log(num.slice(2));
console.log(num.slice(0,2));//[ 13, 14 ]
console.log(num.slice(2,2));//[]
let string = "My dog has fleas";
console.log(string.split(" ")); // [ 'My', 'dog', 'has', 'fleas' ] // split change the string to array 
console.log(fruits.join(" "));// apple Banana orange kiwi Cherry  //join change the array to sting
console.log(typeof(fruits.join(" "))); //sting
fruits.push("milk")
console.log(fruits.push("milk")); //6===> gives length
console.log(fruits);//['apple',  'Banana','orange', 'kiwi', 'Cherry', 'milk', 'milk']

