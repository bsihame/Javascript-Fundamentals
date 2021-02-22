// Object are aa data structure that store  and value pairs
// let fruits =["apple", "orange"]
// console.log(fruits[1]); // orange
// fruits[1]= "Strawberry";  //assign 1st index to have value of strawberry
// console.log(fruits[1]);// strawberry
// console.log(fruits);

// objects don't have the length or size property

// Objects
// {key/ property: value}
// all keys in objects are strings
// all values can be any form of data

// let fruits = {
//   0: "apple",
//   1: "orange",
//   2: "pear",
// };
// console.log(fruits[1])// orange
// fruits[1] = "Strawberry";
// console.log(fruits[1]); // Strawberry
// console.log(fruits);

// let person = {
//   firstName: "Corey",
//   lastName: "Ladovsky",
//   age: 100,
//   weight: 200,
//   42: "Answer of Universe",
//   favoriteAnimal: ["cats", "monkey", "birds"]
// };
// console.log(person["height"]);//==> undefine : any key doesn't have a value gives back undefined;
// console.log(person);

// let variableLastName = "lastName"

// console.log(person[variableLastName]);

// person["firstName"] = "Flower";
// console.log(person["firstName"]);
// console.log(person);

// obj[key ] => retrieve  value;
//obj[value]= value set key to value in obj

let person = {
  name: "Corey",
  age: 2,
  hair: true,
  size: "large",
  favoriteData: [],
  "likes-to-eat": true
};
console.log(person["age"] = person["age"] + 1)

person["married"] = true;
console.log(person);
person.hair = false;
console.log(person.hair);
console.log(person);


