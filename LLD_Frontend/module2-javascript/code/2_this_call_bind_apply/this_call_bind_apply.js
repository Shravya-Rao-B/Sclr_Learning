/*
1.
Make Array.last() method
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element.
If there are no elements in the array, it should return -1.

Write your solution inside the main() method, the test cases will be evaluated in the backend.

Sample Test Case 1:
Input:
let nums = [1,2,3];
main(); // calling the main function that would contain your solution.
console.log(nums.last());

Output:
3

Explanation: Calling nums.last() should return the last element: 3.

Sample Test Case 2:
Input:
let nums = [];
main();
console.log(nums.last());

Output:
-1

Explanation: Because there are no elements, return -1.

Hints:
1. Add a method to the Array prototype: Use Array.prototype to add a new method called last to the Array object, allowing it to be called on any array instance.
2. Return the last element: Use the this keyword inside the last method to refer to the current array instance. Use this.length - 1 to access the index of the last element and return it.
3. Handle empty arrays: Use the nullish coalescing operator (??) to check if the last element exists. If it does not exist (the array is empty), return -1 as the default value.

Hope these concise hints help you understand the solution approach!

Solution Approach:
1. Enhancing the Array prototype: Add a method called last to the Array prototype using Array.prototype.
2. Returning the last element: Inside the last method, use this to refer to the current array instance and access the last element using this[this.length - 1].
3. Handling empty arrays: Use the nullish coalescing operator (??) to check if the last element exists. If it does not exist (array is empty), return -1 as the default value.

By following these steps, you should be able to enhance all arrays to have the last method, which returns the last element or -1 if the array is empty.

Hope this concise solution approach helps you!

Scaler solution:
function main() {

Array.prototype.last = function () {</div>

return this[this.length - 1] ?? -1;</div>

};</div> }

*/
 Array.prototype.last = function(){
    return this[this.length - 1] ?? -1;
}
console.log([1,2,3,4,5,6,7,8,9,10].last());

/*
2.
Implement bind method below
THANOS has snapped the finger, use the bind method in such a way that now iron man should be able to snap the finger again.

Explanation:

1. You are given boilerplate JS code with the following objects:

const thanos = {
name: "THANOS",
snap: function () {
return this.name + " snapped the finger and half of the universe " + (this.name == "THANOS" ? "disappeared" : "came back")
}
}

const ironman = {
name: "IRON MAN"
}

console.log(thanos.snap())

2. Notice that ironman object doesn't have a snap method.
3. You need to utilise Javascript binding facility to make a binded function.
4. This function will be a bind of :
4.1. snap function from thanos object
4.2. and ironman object

A variable called 'bindedFunction' has been declared in the main function.
You need to update the main function and initialise the bindedFunction, such that the main function returns this bindedFunction.
Test cases will then be evaluated in the backend.

Hints:

Solution Approach:

*/
/*
3.
What will be the output?

let cap = {
    name: "Steve",
    sayHi: function(){
        console.log(`Hi from ${this.name}`);
    }
}
cap.sayHi();
let sayHiAdd = cap.sayHi;
sayHiAdd();

Options:
Hi from Steve Hi from undefined
Hi from Steve Hi from Steve
Hi from undefined Hi from undefined
Some Error

Ans:
Hi from Steve Hi from undefined

*/

let cap = {
    name: "Steve",
    sayHi: function(){
        console.log(`Hi from ${this.name}`);
    }
}
cap.sayHi();
let sayHiAdd = cap.sayHi;
sayHiAdd();

/*
4.
What will be the output?

const cap = {
    name: "Steve",
    sayHi: function(){
        console.log(`53 ${this.name}`);
        const iAmInner = () => {
            console.log(`55 ${this.name}`);
        }
        iAmInner();
    }
}
cap.sayHi();

Options:
53 Steve 55 undefined
53 Steve 55 Steve
53 undefined 55 Steve
Some Error

Ans:
53 Steve 55 Steve
*/

const capTwo= {
    name: "Steve",
    sayHi: function(){
        console.log(`53 ${this.name}`);
        const iAmInner = () => {
            console.log(`55 ${this.name}`);
        }
        iAmInner();
    }
}
capTwo.sayHi();
/*
5.
Write a polyfill for the apply method in JavaScript.

You need to complete the function applyPolyfill which takes three inputs:
1. fn - A function on which apply method needs to be polyfilled.
2. context - The value of this to be used when calling the function.
3. args - An array of arguments to be passed to the function.

The function applyPolyfill(fn, context, args), when called, should behave in a similar fashion as the inbuilt Function.prototype.apply() function in JavaScript.
Refrain from using the inbuilt Function.protoype.apply() function in JS, trivial test case would check for that.


Example:

function greet(country) {

return 'Hello, ' + this.name + ' from '+ country;
}

const person = {
name: 'John',
};

const result = applyPolyfill(greet, person, ['India']);
console.log(result);


Output:
Hello, John! from India
*/

/*
7.
What will be the output?
const cap = {
    name: "Steve",
    sayHi: function(){
        console.log(`53 ${this.name}`);
        function iAmInner(){
            console.log(`55 ${this.name}`);
        }
        iAmInner();
    }
}

Options:
53 Steve 55 undefined
53 Steve 55 Steve
53 undefined 55 undefined
Some Error

Ans:
53 Steve 55 undefined

*/
const capThree = {
    name: "Steve",
    sayHi: function(){
        console.log(`53 ${this.name}`);
        function iAmInner(){
            console.log(`55 ${this.name}`);
        }
        iAmInner();
    }
}
cap.sayHi();

/*
8.
What will be the output?
const cap = {
    name: "Steve",
    sayHi: () => {
        console.log(`Hi from ${this.name}`);
    }
}
cap.sayHi();
let sayHiAdd = cap.sayHi;
sayHiAdd();

Options:
Hi from undefined Hi from undefined
Hi from Steve Hi from undefined
Hi from undefined Hi from Steve
Hi from Steve Hi from Steve

Ans:
Hi from undefined Hi from undefined

TA explanation:
You define an object called cap with a name property set to "Steve" and a sayHi method as an arrow 
function.When you call cap.sayHi();, it triggers the sayHi method. However, arrow functions capture the 
this value from their surrounding context. In this case, the surrounding context is the global scope,
 where there is no name property. So, it logs "hi from undefined."

sayHi is inside cap object and it will take the context from cap right.

const cap= {
name: "Steve",
sayHi: function(){
console.log(`53 ${this.name}`);
const iAmInner = () => {
console.log(`55 ${this.name}`);
}
iAmInner();
}
}
cap.sayHi();

In this case how is iAmInner able to capture context of cap object.
sayHi belongs to cap object, surrounding context means outside of cap i.e. global
*/
const capFour = {
    name: "Steve",
    sayHi: () => {
        console.log(`Hi from ${this.name}`);
    }
}
capFour.sayHi();
let sayHiAdd2 = capFour.sayHi;
sayHiAdd2();

/*
9.
What will be the output?

Options:
Steve say's Hi inside inner Jasbir
Steve say's Hi inside inner Steve
undefined say's Hi inside inner Jasbir
Steve say's Hi inside inner undefined
Some Error

Ans:
Steve say's Hi inside inner Jasbir

*/
Function.prototype.myBind = function(obj){
    obj.fnRef = this;
    return function(...args){
        obj.fnRef.apply(...args);
    }
}
let abc = {
    name:"Jasbir"
}
let obj = {
    name:"Steve",
    sayHi: function(){
        console.log(` ${this.name} says Hi`);
        function inner(){
            console.log(` Inside inner ${this.name}`);
        }
        let boundThisFN = inner.myBind(abc);
        boundThisFN();
    }
}
obj.sayHi();