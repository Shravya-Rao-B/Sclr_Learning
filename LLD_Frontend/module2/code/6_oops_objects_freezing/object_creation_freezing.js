/*
1.

Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

Example 1:

Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstance(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

Example 3:

Input: func = () => checkIfInstanceOf(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.

Example 4:

Input: func = () => checkIfInstanceOf(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".

Solution Approach:

The given problem can be solved by using the instanceof operator in a recursive manner.
Start with the given object and check if it is an instance of the class using the instanceof operator. If it is, return true.
If the object is not an instance of the class, get the prototype of the object using Object.getPrototypeOf(obj).
Repeat the process recursively by checking if the prototype object is an instance of the class. If it is, return true.
Keep iterating up the prototype chain until either the object is found to be an instance of the class or the prototype chain ends (i.e., the prototype is null).
If none of the prototypes in the chain are instances of the class, return false.

*/
//Scaler solution
function checkIfInstanceOf(obj, classFunction) {
    while(obj!=null)
    {
        if(obj.constructor === classFunction)
        {
            console.log("obj.constructor", obj.constructor);
            return true;
        }

        obj = Object.getPrototypeOf(obj);

    }
    return false;
};
class Animal {};
class Dog extends Animal {};
console.log('instace of :',checkIfInstanceOf(new Dog(), Animal));
console.log("instance of number", checkIfInstanceOf(5, Number));

//One liner solution from Scaler discussions

function checkIfInstanceOfFunc(obj, classFunction) {
    // Write the solution here ==================================
return !(!obj || !(obj instanceof classFunction))
}
/*
2.
*/
/*
3.
WHat is the output

Options:
Rabbit undefined undefined undefined
Rabbit Rabbit undefined undefined
Rabbit undefined Rabbit undefined
Rabbit Rabbit undefined Rabbit

Ans:
Rabbit undefined undefined undefined
*/
// function Rabbit(name){
//     this.name = name;
// }
// Rabbit.prototype.sayHi = function(){
//     console.log(`Hi from ${this.name}`);
// }
// let rabbit = new Rabbit(' Rabbit');
// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit._proto_.sayHi();

/*
4.
What is the output of the following

Options:
true
false
undefined
Error

Answer:
*/
// function A() {};
// function B() {};
// A.prototype = B.prototype = {};
// let a = new A();
// console.log(a instanceof B);
/*
5.
What is the output of the following

Options:
White Rabbit
undefined
Error

Ans:
Error
*/

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name){
//         // super();
//         this.name = name;
//         this.created = Date.now();
//     }
// }
// let rabbit2 = new Rabbit('White Rabbit');
// console.log(rabbit2.name);

/*
7.
what is the output of the following

Options:
White Rabbit
undefined
Error

Ans:
White Rabbit
*/
// class Animal{
//     constructor(name){
//         this.name = name;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name){
//         super(name);
//         this.name = name;
//         this.created = Date.now();
//     }
// }
// let rabbit = new Rabbit('White Rabbit');
// console.log(rabbit.name);

/*
8.
what is the output of the following

Options:
0 1 1 1 1
1 1 1 1 1
1 0 1 1 1
1 0 1 0 1

Ans:
0 1 1 1 1

Let's dry run the code:

Initially, the value of val is 0.

When we access b.foo, it calls the getter method foo() in class A, which returns the value of val, which is 0. So, the first output is 0.

When we assign a value of 1 to b.foo, it calls the setter method foo(_val) in class A, which updates the value of val to 1. So, the second output is 1.

When we create an instance c of class C and access c.foo, it calls the getter method foo() in class C. However, the getter in class C refers to the global val, which was updated to 1. So, the third output is 1.

When we assign a value of 2 to c.foo, it calls the setter method foo(_val) in class A, which updates the global val to 2. So, the fourth output is 1.

Finally, when we access b. foo again, it calls the getter method foo() in class A, which returns the updated value of the global val, which is 2. Hence, the fifth output is 1.
*/

// let val = 0;
// class A {
//     set foo(_val){
//         val = _val;
//     }
//     get foo()
//     {
//         return val;
//     }
// }
//  class B extends  A{}

//  class C extends  A{
//     get foo(){
//         return val;
//     }
//  }
// const b = new B();
// console.log(b.foo);
// b.foo = 1;
// console.log(b.foo);
// const c = new C();
// console.log(c.foo);
// c.foo = 2;
// console.log(c.foo);
// console.log(b.foo);

/*
9.
what is the output of the following

Options:
true null undefined
undefined null undefined
false undefined undefined
null true undefined

Ans:
true null undefined
*/

let animal  = {
    jumps: null
};
let rabbit = {
    _proto_ : animal,
    jumps: true
};
console.log(rabbit.jumps);
delete rabbit.jumps;
console.log(rabbit.jumps);
delete animal.jumps;
console.log(rabbit.jumps);

/*
10.
what is the output of the following

Options:
a undefined c a b c
a b c a b c
a undefined c a undefined c
undefined b c a b c

Ans:
a undefined c a b c
*/
class A {
    a = 'a'
}
A.prototype.c = 'c';

class B extends A {
    b = 'b'
}
const a = new A();
const b = new B();

console.log(a.a);
console.log(a.b);
console.log(a.c);
console.log(b.a);
console.log(b.b);
console.log(b.c);


