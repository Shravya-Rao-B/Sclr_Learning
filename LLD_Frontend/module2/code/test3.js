//--1
/*
var counter = (function() {
var count = 0;
return function() {
return ++count;
}
})();
console.log(counter());
console.log(counter());

//Options: 0,1  , 1,1    , 0,0   , 1,2
*/

//--2
/*
function Person(name){
this.name = name;
}
Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}
var person1 = new Person("Alice");
var person2 = Object.create(Person.prototype);
person2.name = "Bob";
person1.greet();
person2.greet();
Ans: hello my name is Alice Hello, my name is Bob

Options: 
Hello my name is undefined and Hello my name is Bob
Error
Hello my name is Alice Hello, my name is undefined
Hello my name is Alice Hello, my name is Bob
*/

//3
/*
function add(x,y){
    return x+y;
}
console.log(add(2,3,4));
ans: 5
Options:
NaN , 9 , Error, 5
*/

//4
/*
function Dog(name){
    this.name = name;
}
Dog.prototype.bark = function(){
    console.log(`${this.name} says woof`);
}
var dog = new Dog("Buddy");
dog.bark();

Options:
Undefined says Woof
TypeError
Buddy says woof!
Buddy says meow

*/

//5
var x = 10;
/*
function foo(){
    var x = 20;
    console.log(x);
}
foo();

//options: 10 20 undefined referecneerror
*/

//6
/*
var x = 5;
function outer(){
    function inner(){
        console.log(x);
    }
    var x = 10;
    inner();
}
outer();
//options 5 10 15 undefined
Ans: 10
*/

//7
/*
console.log(typeof null);

//options: object string undefined null
//Ans: object
*/

//8
/*
console.log('Start');
setTimeout(function(){
    console.log('Async task completed');
}, 2000);
console.log('End');

Options:
Start, Async Task Completed , End
Start , End, Async Task Completed
End, Start, Async Task Completed
Async Task Completed, Start, End

//Ans: Start end Async task completed
*/

//9
/*
function outer(){
    var x = 10;
    function inner(){
        console.log(x);
    }
    return inner;
}
var foo = outer();
foo();

//Options: reference error, undefined, 10, Type error
//Ans: 10
*/

//10
/*
var arr = [1,2,3];
console.log(arr.push(1000));
//console.log(arr.push(1000));
//Options: [1,2,3], 1000, [1,2,3,4], 4
//Console basically returns the length of the array.

Ans: 4
*/

//11
/*
var person = {
    name: 'John',
    age: 30,
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}
person.greet();

//Options that confused me: typeerror, Hello , my name is John and I am 30 years old.
// Ans: Hello , my name is John and I am 30 years old
*/

//12 -- Ask
/*
var x = 10;
function foo(){
    console.log(x);
}
(function (){
    var x = 20;
    foo();
})();
// Options: 10, 20, reference error, undefined
//Ans: 10
*/

//13
/*
var a = 10;
function bar(){
    console.log(a);
}
(function (){
    var a = 20;
    bar();
})();

// Options: 10, 20, reference error, undefined
//Ans: 10
*/

//14
/*
function greet(){
    console.log('Hello!');
}
setTimeout(greet, 1000);

//Options: Hello!, Function will not be executed, Error, Undefined
*/

//15
// console.log(typeof 43);

//Options NaN, undefined, number, string


let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
  ]

function sortLibrary(library){
    return library.sort((a,b) => {
        if(a.title > b.title) return 1;
        else if (a.title < b.title) return -1;
        else return 0;
    })
}
console.log(sortLibrary(library));