/*
1.
Complete the function 'makeDeepCopy(object)',

such that it returns a deep copy of the object being passed as a parameter.
Below is the definition of a deep copy of an object, to understand the problem task.

Deep Copy:
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too

Note:
A simple object would be provided to you,
and the returned object from the function you write would be evaluated in the backend to ensure its a deep copy.

Example:
let ingredients_list = { dish: "noodles", recipe: { list: ["eggs", "flour", "water"] } };

If a change is being made to the list array of the deep copy of the above object 'ingredients_list',
it should not cause any change to the list elements of the original object.

*/
function makeDeepCopy(object) {
    let newObject = {};
    for (let key in object) {
        if (typeof object[key] === 'object') {
            newObject[key] = makeDeepCopy(object[key]);
        } else {
            newObject[key] = object[key];
        }
    }
    return newObject;
}
console.log('deep copy:',makeDeepCopy({ dish: "noodles", recipe: { list: ["eggs", "flour", "water"] } }));
/*
3

What will be the output
*/
function modifier(a,b){
    console.log('input',a,b);
    a= 10;
    b= 20;
    console.log('output',a,b);
}
let p = [4,7,9]
let q = [3,6,8]
modifier(p,q);
console.log(p,q);

/*
4.
Differende between deep copy and shallow copy

Options:
Deep copy creates a new object with the same references as the original object, while shallow copy creates an exact copy of the original object.
Deep copy creates an exact copy of the original object, including all its nested objects, while shallow copy only creates copies of the top-level properties.
Deep copy creates a new object with copies of all the data within the original object, while shallow copy creates a new object with a completely separate memory space.
Deep copy and shallow copy are essentially the same, and there is no difference between them.

Ans:
Deep copy creates an exact copy of the original object, including all its nested objects, while shallow copy only creates copies of the top-level properties.
*/

/*

/*
5.

Which of the following methods can be used to create a shallow copy of an object in JavaScript?

a) spread operator
b) object.assign
c) JSON.stringify and JSON.parse the object
d) a and b

Ans:
d) a and b
*/


/*
6.
Write a polyfill for the call method in JavaScript.

You need to create a polyfill for the call method, which allows you to invoke a function with a specified context and any number of arguments.

Your task is to implement a function customCall on the Function.prototype object. This function should accept two or more arguments: obj, which represents the context (the value of this) to be used when calling the function, and ...args, which represents the arguments to be passed to the function.

When the customCall method is called on a function, it should execute the original function with the specified context (obj) and the provided arguments (args).

Your implementation should not rely on the inbuilt call method in JavaScript.

Note: Avoid using the inbuilt call method in JavaScript, as trivial test cases will check for that.



Example:
function greet() {
return 'Hello, ' + this.name + '!';
}

const person = {
name: 'John',
};

const result = greet.customCall(person);
console.log(result);

Output:
Hello, John!
*/
Function.prototype.customCall = function (obj) {
}
const customCall =  function (obj, ...args) {
    let functionToBeCalled = this;
    let tempFunction = functionToBeCalled(...args)
}
/*
7.
such that it takes an array and returns a single flattened array of values,
regardless of how many nested arrays are in the input array.

Below is an example to further understand the requirement of the question.

Example:

let array = [1,2,3,[4,5],[6,7,8,[9,10,11]]];

console.log(flatten(array));

Output:

[1,2,3,4,5,6,7,8,9,10,11]


Note:
Please note that you need to create a new array which is flattened and then return it from the function.

*/
function flattenArray(arr){
    let newArr = [];
    for(let i=0; i<arr.length; ++i){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flattenArray(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/*
9.
What will be the output?

Options:
[4, 7, 9] [3, 6, 8]
10 20
Error
None of the above

Ans:
10 20
*/

function modifier(a,b){
    a= 10;
    b= 20;
    console.log('output',a,b);
}
let p1 = [4,7,9];
let q1 = [3,6,8];
modifier(p1,q1);

/*
10
what will be the output

Options:
[10, 7, 9] [20, 6, 8]
[4, 7, 9] [3, 6, 8]
Error
None of the above

Ans:
[10, 7, 9] [20, 6, 8]
*/

function modifier(a,b){
    a[0]= 10;
    b[0]= 20;
}
let p2 = [4,7,9];
let q2 = [3,6,8];
modifier(p2,q2);
console.log('p2, q2',p2,q2);

/*
11.

Which of the following methods can be used to create a deep copy of an object in JavaScript?

Options:
spread operator
object.assign
JSON.stringify and JSON.parse the object
none of the above

Ans:
JSON.stringify and JSON.parse the object

*/
