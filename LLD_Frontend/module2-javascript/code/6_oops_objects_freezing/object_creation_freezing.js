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

You are tasked with creating a polyfill for the Object.create method in JavaScript. The Object.create method is a built-in function in JavaScript that allows you to create a new object with a specified prototype object.

Your goal is to create a function called myObjectCreate that emulates the functionality of Object.create. The myObjectCreate function should accept a single argument, proto, which represents the prototype object for the new object to be created.

However, there are a few requirements and constraints for your implementation:

If the proto argument is null, undefined, or not an object, your function should throw an Error. This is to ensure that the proto argument is a valid object to be used as the prototype.

Your implementation should create a new object that inherits from the proto object. This means that any properties or methods defined on the proto object should be accessible by the newly created object.

The newly created object should not have any own properties initially. Any properties or methods accessed on the new object that are not defined directly on the object should be looked up in the prototype chain.

Sample Test Case:
To demonstrate the usage of your myObjectCreate function, consider the following example:

// Step 1: Define a prototype object
const personPrototype = {
  greet: function() {
    console.log("Hello, my name is " + this.name + ".");
  }
};

// Step 2: Call myObjectCreate and pass the prototype object
const person = myObjectCreate(personPrototype);

// Step 3: Assign the returned object to a variable

// Step 4: Use the newly created object
person.name = "John";
person.greet(); // Output: Hello, my name is John.
In this example, we first define a personPrototype object that contains a greet method. We then use the myObjectCreate function to create a new object person based on the personPrototype. After assigning a name property to the person object, we call the greet method on the person object, which logs a greeting message with the assigned name.

Your myObjectCreate function should be able to replicate this behavior, allowing the user to create new objects with a specified prototype and access properties and methods defined on the prototype object.

Solution Approach:
The goal is to replicate the functionality of the Object.create method, which allows creating a new object with a specified prototype object.
The myObjectCreate function should throw an error if the proto argument is null, undefined, or not an object.
To achieve inheritance, a new function f is created, and its prototype is set to the proto object.
The function f acts as a constructor function, and when called with the new keyword, it returns a new instance that inherits from the proto object.
The returned instance from f is the newly created object that emulates the behavior of Object.create.
Test the implementation by creating a prototype object and using myObjectCreate to create a new object based on that prototype. Verify that the properties and methods of the prototype object are accessible on the newly created object.
By following these hints and the solution approach, you should be able to implement the myObjectCreate function, which acts as a polyfill for the Object.create method.
*/
let p = {
    name: "Shravya",
    address:{
        city: "Bangalore",
        state: "Karnataka"
    },
    sayHi: function(){
        console.log(`Hi from ${this.name}`);
    }
}
// let person = Object.create(p);
// person.age = 29;
// person.color =  "red";
// let goodPerson = Object.create(person);
// console.log('person prototype',Object.getPrototypeOf(goodPerson));

function myObjectCreate(proto){
    if(!proto || proto=== "undefined" || typeof proto !=="object"){
        throw new Error("Invalid argument");
    }
    function f(){}
    f.prototype = proto;
    return new f();
}

const newPerson = myObjectCreate(p);
console.log('new person prototype',Object.getPrototypeOf(newPerson));
newPerson.name = "John";
newPerson.sayHi();

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
6.
You are tasked with creating a polyfill for the Object.seal method in JavaScript. The Object.seal method is a built-in function that seals an object, preventing new properties from being added and marking all existing properties as non-configurable.

Your goal is to create a function called sealPolyfill that emulates the functionality of Object.seal. The sealPolyfill function should be added to the Object.prototype object to make it accessible on all objects.

However, there are a few requirements and constraints for your implementation:

If the Object.seal method is already defined, your polyfill should not override it. You should only provide the polyfill if it doesn't exist.

The polyfill implementation should check if the value on which sealPolyfill is called is a valid object. If it's not an object or is null, a TypeError should be thrown.

The polyfill should iterate over all the properties of the object and mark them as non-configurable using Object.defineProperty. This prevents the properties from being deleted or having their attributes modified.

After sealing all existing properties, the polyfill should call Object.preventExtensions to prevent any new properties from being added to the object. This ensures that the object becomes a sealed object.

The sealed object should be returned by the polyfill function.

Example:
To demonstrate the usage of your sealPolyfill function, consider the following example:

const obj = {
  name: 'John',
  age: 30
};

console.log(Object.isSealed(obj)); // Output: false

obj.sealPolyfill();

console.log(Object.isSealed(obj)); // Output: true

obj.name = 'Jane'; // Existing property can still be modified
console.log(obj.name); // Output: Jane

obj.gender = 'Female'; // Attempt to add a new property
console.log(obj.gender); // Output: undefined (property was not added)

delete obj.age; // Attempt to delete an existing property
console.log(obj.age); // Output: 30 (property was not deleted)
In this example, we start with an object obj with two properties: name and age. Initially, the object is not sealed, as confirmed by Object.isSealed(obj) returning false.

We then call the sealPolyfill function on the obj object, which seals the object using the polyfill implementation. After sealing, Object.isSealed(obj) returns true.

Once sealed, we can still modify the value of existing properties (obj.name = 'Jane'), but we cannot add new properties (obj.gender = 'Female') as the property addition is prevented. Similarly, attempting to delete an existing property (delete obj.age) does not work, as the property deletion is prevented.

Your sealPolyfill function should be able to replicate this behavior, allowing users to seal objects and prevent the addition of new properties while preserving the existing ones.

Hint:
Understand the purpose of the Object.seal method and its functionality. Research its usage and behavior in JavaScript.
Start by checking if the Object.seal method already exists on the Object.prototype object. You can do this by checking if Object.prototype.seal is undefined.
Define the sealPolyfill function and add it to the Object.prototype object. This will make the function accessible on all objects.
Within the sealPolyfill function, check if this is a valid object by ensuring it is of type "object" and not null. If it fails this check, throw a TypeError using the throw keyword.
Iterate over all the properties of the object using a for...in loop.
For each property, use Object.defineProperty to define the property with configurable: false. This will mark the property as non-configurable, preventing it from being deleted or having its attributes modified.
After sealing all existing properties, call Object.preventExtensions(this) to prevent any new properties from being added to the object. This ensures that the object becomes sealed.
Return this to maintain the chaining behavior often associated with method calls in JavaScript.

Solution Approach:
The goal is to replicate the functionality of the Object.seal method using a polyfill called sealPolyfill.
Check if the Object.seal method already exists on the Object.prototype object to avoid overriding it.
Define the sealPolyfill function and add it to the Object.prototype object to make it accessible on all objects.
Within the sealPolyfill function, check if this is a valid object by ensuring it is of type "object" and not null. If it fails this check, throw a TypeError.
Iterate over all properties of the object using a for...in loop.
For each property, use Object.defineProperty to define the property with configurable: false. This makes the property non-configurable, preventing deletion or modification.
After sealing all existing properties, call Object.preventExtensions(this) to prevent any new properties from being added to the object.
Return this to maintain the chaining behavior.
Test the implementation by creating an object and calling sealPolyfill on it. Verify that existing properties cannot be deleted or modified, and new properties cannot be added.
*/

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


