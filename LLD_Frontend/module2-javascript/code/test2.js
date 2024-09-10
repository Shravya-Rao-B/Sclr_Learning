// const number = 5;

// function multiplyByTwo(x){
//     number = x * 2;
// }
// multiplyByTwo(10);
// console.log(number);

//----2
// function outer(){
//     let x = 5;
//     return function inner(y){
//         x+= y;
//         return x;
//     }
// }
// let closureFn = outer();
// console.log(closureFn(3));
// console.log(closureFn(2));

// function delay(ms){
// return new Promise((resolve ) => {
//     setTimeout(() => {
//         resolve(ms);
//     }, ms);
// })
// }
 
// async function foo(){
//     console.log("start");
//     await delay(1000);
//     console.log('middle');
//     await delay(2000);
//     console.log("end");
// }
// foo();
// console.log("After foo");

//---3
// class Shape{
//     constructor(name){
//         this.name = name;
//     }
//     getName(){
//         return this.name
//     }
// }
// class Circle extends Shape{
//     constructor(){
//         super();
//         this.radius = 5;
//     }
//     getName(){
//         return super.getName() + '(Circle)';
//     }
// }
// const circle = new Circle();
// console.log(circle.getName());

//---4
// function delay(ms){
//     return new Promise((resolve ) => {
//         setTimeout(() => {
//             resolve("Done");
//         }, ms);
//     })
// }
// async function foo(){
//     console.log("start");
//     await delay(2000);
//     console.log('end');
// }
// foo();
// console.log("After foo");

// //--- 5
// function outer(){
// let x = 10;

// function inner(){
//     console.log(x);
// }
// x =20;
// return inner;
// }
// let closureFn = outer();
// closureFn();

//6
/*
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

Test cases:
lookUpProfile("Kristian", "lastName") should return the string Vos
lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes") should return an array
lookUpProfile("Bob", "number") should return the string No such contact
lookUpProfile("Bob", "potato") should return the string No such contact
lookUpProfile("Akira", "address") should return the string No such property

*/

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  let reqObj = contacts.filter(contact => contact.firstName === name);
  if(reqObj.length){
    return reqObj[0][prop] || "No such property";
  }
  else if (reqObj.length == 0){
    return "No such contact";
  }
    // Only change code above this line
  }
  
console.log(lookUpProfile("Akira", "address"));
//   console.log(lookUpProfile("Akira", "likes"));

//Reduce polyfill

