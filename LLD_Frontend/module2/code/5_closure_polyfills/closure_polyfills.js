/*
1.

FLatten an Object
You are given an object that contains nested objects. The task is to write a function to flatten the object, bringing all the keys of nested objects to the same level. Flattening means to create new key-value pairs where the keys represent the nested structure using dot notation.

Function Signature:
function flattenObject(obj) => Object
Constraints:
The input object can have nested objects of arbitrary depth.
The input object can have various data types as values, including objects, arrays, strings, numbers, etc.
Example:
Input:
const obj = {
  newObj: {
    obj2: {
      obj5: {
        one: 1,
      },
    },
  },
  obj3: {
    obj4: { 
      two: 2 
    },
  },
};
Output:
{
  'newObj.obj2.obj5.one': 1,
  'obj3.obj4.two': 2,
}
*/
function flattenObject(obj){
    let newObj = {};
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            for(let key2 in obj[key]){
                newObj[`${key}.${key2}`] = obj[key][key2];
            }
        }
        else{
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
console.log('flatten Object',flattenObject({
    newObj: {
      obj2: {
        obj5: {
          one: 1,
        },
      },
    },
    obj3: {
      obj4: { 
        two: 2 
      },
    },
  }));
/*
2.
You are tasked with creating a function fn that allows for function chaining and keeps track of the number of function calls made. Each time the function is called, it returns another function, and the count of function calls is incremented. The function chain can be terminated by passing a specific value.

Constraints:
The function chain can have an arbitrary number of function calls.
The function chain is terminated by passing the value 0 to the innermost function.
Examples:
Example 1:
fn()()()()(0)
Output:
4
Example 2:
fn()()()(0)
Output:
3
Example 3:
fn()()()()()(0)
Output:
5

Solution Approach:

Start by defining the function fn. Inside fn, initialize a count variable with an initial value of 1.
Create an inner function, let's call it innerFn, within fn. This inner function will be returned by fn.
Implement innerFn such that it checks if the argument passed to it is 0. If it is, return the current count value.
If the argument is not 0, increment the count variable by 1 and return innerFn itself.
Make sure to update the count variable within the scope of fn and maintain its value across multiple calls to innerFn.
Return innerFn from fn.
Test the function by calling fn and chaining multiple function calls. Pass 0 as the argument to the innermost function to terminate the chain and obtain the count value.

*/
function fn() {
  // Write your solution here ========================
  let count = 1; //Because if its called once count should be incremented from 0 to 1.
  function innerFn(arg){ //To handle the next function call create a closure.
  if(arg == 0){  //If the argument passed is 0 stop the chain and return
  return count  //stop the chain and return exsisting value of count
  }
  else {
  count++     // Increment oherwise
  return innerFn; // return this inner function to be used for all the consecutive calls
  }
  }
  return innerFn; // This for the first function call
}

console.log(fn()()()()(0));
/*
3

Options:

error
10 20
20 20
20 10

Ans:
10 20
*/

var varName = 10;
function b() {
    console.log(varName);
}function fn() {
    var varName = 20;
    b();
    console.log(varName);
} fn();

/*
4.
Guess the output of the below function

Options:
3 3 3
Error
1 2 3
3 2 1

Ans:
3 3 3
*/

function outer() {
    let arrFn = [];
    let i;
    for (i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i);
        })
        console.log('arr after function', arrFn);
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();

/*
5.
You are required to implement a function f that calculates the product of two numbers, x and y. The function should support two different function call patterns: f(x, y) and f(x)(y).

Constraints:
The function f should be able to handle positive and negative integer values for x and y.
The function call patterns f(x, y) and f(x)(y) will only involve numerical inputs.
Example:
f(3, 4);
f(3)(4);
Output:
12
12

Start by defining the function f with two parameters, x and y.
Check the number of arguments passed to f using the arguments object or the length property.
If arguments.length is equal to 1, return a new function that takes the second argument and computes the product.
Inside the new function, multiply the captured x value (from the outer scope) with the second argument (y) and return the result.
If arguments.length is equal to 2, directly calculate the product of x and y and return the result.
Test the function using both function call patterns, such as f(3, 4) and f(5)(2), and verify that the correct products are returned.
Remember to handle both function call patterns correctly and capture the necessary values in the inner function for the second pattern.
*/
function f(y, x) {
  // Write your solution here ========================
  if(!x){
  return function innerFunc(num){
  return (y*num)
  }
  }
  else {
  return (y * x)
  }
}
/*
6.
Find the output of the following

Options:
undefined 2 2 2
undefined 3 2 3
Error
3 3 2 2

Ans:
undefined 2 2 2
*/

let a;
console.log(a);   //undefined
function A() {
  let a = 2;
  console.log(a);  //2

  function C() {
    console.log(a); //2

    function D() {
      console.log(a); //2

      a = 2;
    }
    D();
    a = 3;
  }
  C();
}
a = 3;
A();


/*
Find the output of the following

Options:
undefined undefined 6 6
Error
3 undefined 3 6
undefined 3 6 6

Ans:
undefined undefined 6 6
*/

// let a;
// console.log(a); //undefined
// function B() {
//   let a;
//   console.log(a); //undefined

//   function E() {
//     a = 6;
//     console.log(a); //6

//   }
//   a = 2;
//   E();
//   console.log(a); //6
// }
// a = 3;
// B();

/*
8.
Find the output of the following
*/

let c;
console.log(c);
function F() {
  console.log(c);
  c = 3;
}
c = 2;
F();

/*
9.

Guess the output of the following


Options:
15 7 20 9
7 15 20 9
9 7 20 15
15 20 7 9

Ans:


*/

function createCounter(init, delta) { //10, 5  ; 5,2
    function count() {
        init = init + delta  //init = 15; 7
        return init
    }
    return count
}
let c1 = createCounter(10, 5); 
let c2 = createCounter(5, 2);

console.log(c1())
console.log(c2())
console.log(c1())
console.log(c2())
