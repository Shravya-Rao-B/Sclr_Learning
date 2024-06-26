/*
1.
Write a polyfill of 'reduce'

You need to complete the function reduce, which receives 2 inputs:
1. 'arr'
1.1. An array of numbers
2. 'reducer'
2.1. A function that does some mathematical operation on 2 input numbers and returns the resultant.
2.2. reducer(num1, num2) returns a resultant.

The function reduce(arr, reducer), when called, should behave in a similar fashion as the inbuilt Array.prototype.reduce() function in JavaScript.
Refrain from using the inbuilt Array.prototype.reduce() function in JS, a trivial test case would check for that.

Input :
arr = [2, 3, 4, 5]
reducer = fn(a,b){ return a+b }

reduce(arr, reducer)

Output :
14

Input :
arr = [2, 3, 4]
reducer = fn(a,b){ return a-b }

reduce(arr, reducer)

Output :
-5

Solution Approach:
1. The function reduce takes an array arr and a reducer function reducer as parameters.
2. Initialize a variable ans with the first element of the array arr (at index 0).
3. Use a loop to iterate over the remaining elements of the array, starting from index 1.
4. Within each iteration, update ans by calling the reducer function with ans and the current element of arr.
5. Return the final value of ans as the result of the reduction.

This approach effectively applies the reducer function to all elements of the array and accumulates the result in the ans variable.
*/

function reduce(arr, reducer) {
    // Write your solution here ========================
    let ans = arr[0];
    for(let i=1; i<arr.length; i++){
        ans = reducer(ans,arr[i]);
    }
    return ans;
}

//Reduce syntax : array.reduce(accumulator, currentValue, index, array)
function customReduce(callback,initialValue){
let acc = initialValue === undefined ? this[0] : initialValue;
for(let i= initialValue === undefined ? 1 :0 ;i<this,length; i++){
    acc= callback(acc,this[i],i,this)
}
return acc;
}
Function.prototype.customReduce = customReduce;
/*
2.

Write a function 'number' which accepts three inputs two numbers x, y and a function (fn).
The number function applies a function (fn) to x and y and returns the result.

Input :
3, 4, sum

Output :
7

Note that you have been provided with sum, mult, diff functions in the boilerplate. Corresponding to the following output:
number(3,4,sum); 7
number(3,4,mult); 12
number(3,4,diff); -1

Here is the detailed solution approach:


Start by defining the number function with the following signature: function number(x, y, fn).
Inside the number function, call the fn function and pass x and y as arguments.
Store the result of the fn function call in a variable.
Return the stored result as the output of the number function.

Ans:

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>JS</title>
</head>

<body>
    <!-- mult, diff and sum functions -->
    <script defer>
        function sum(x, y) {
            return x + y;
        }

        function mult(x, y) {
            return x * y;
        }

        function diff(x, y) {
            return x - y;
        }
    </script>
    <!-- Write your code solution here, inside the number function -->
    <!-- WARNING:
        Don't make any changes outside the given function. (would fail test cases)
        Write the required code and return the correct answer. -->
    <script id='solution' defer>
        function number(x, y, fn) {
            //write your code here ===============================================
        return fn(x,y)
        }
    </script>
</body>
</html>
*/
/*
3.
You are given an array of objects representing books in a library.
Each object contains details such as the author, title, and library ID of a book.
Your task is to write a program that sorts the array in alphabetical order based on the book titles.

Example
Input
[
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
]
Output
[
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 },
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }
]
Note: The sortLibrary function takes the library array as input.

Example usage:

const library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

const sortedLibrary = sortLibrary(library);
console.log(sortedLibrary);

Detailed Solution Approach

Define a comparison function that takes two book objects as input and compares their titles.
Inside the comparison function, use conditional statements to compare the titles of the two books.
If the title of the first book is greater than the title of the second book, return a positive value (e.g., 1).
If the title of the first book is less than the title of the second book, return a negative value (e.g., -1).
If the titles of both books are the same, return 0.
Use the sort() method on the library array and pass the comparison function as an argument to perform the sorting operation.
The sort() method will rearrange the elements in the library array based on the comparison function.
The sorted array will be returned by the sort() method.
Output the sorted array to verify the correctness of your solution.
*/

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

/*
4.

Options:
"Hello, John!"
"Hello, undefined!"
"Hello, null!"
SyntaxError: Unexpected token '('

Ans:
"Hello, John!"
*/
var result = (function(){
        var name = 'John'
        return 'Hello',+ name + '!'
    })();
console.log(result);
/*
5.
Which of the following statements accurately describes the concept of Higher Order Functions in JavaScript?

Options:
Higher Order Functions are functions that take other functions as arguments or return functions as their results.
Higher Order Functions are functions that only operate on primitive data types.
Higher Order Functions are functions that modify the global state of the program.
Higher Order Functions are functions that execute asynchronously.

Ans:
Higher Order Functions are functions that take other functions as arguments or return functions as their results.

*/
/*
6.

Write a polyfill of 'map'

You need to complete the function reduce, which receives 2 inputs:
1. 'arr'
1.1. An array of numbers
2. 'callback'
2.1. A function that takes a number as input, performs some mathematical operation on that number and returns the end value.
2.2. callback(num) returns a new number.
2.3. For each element of the input arr, you need to store the returned number in the answer. (mapped array)

The function map(arr, callback), when called, should behave in similar fashion as inbuilt Array.prototype.map() function in JavaScript.
Refrain from using the inbuilt Array.protoype.map() function in JS, trivial test case would check for that.


Example 1:
arr = [1, 2, 3, 4, 5];
callback = fn(num) => num * num;

Output:
[1, 4, 9, 16, 25]

Example 2:
arr = [1, 2, 3, 4, 5];
callback = fn(num) => num * 2;

Output:
[2, 4, 6, 8, 10]

Sure! Here is a detailed solution approach for implementing the map polyfill:

1. Start by defining the map function that takes two parameters: arr (the input array) and callback (the function to be applied to each element).
2. Create an empty array called mappedArray to store the mapped values.
3. Use a for loop to iterate over each element of the input array arr.
4. Inside the loop, call the callback function with the current element as its argument and assign the result to a variable, let’s call it result.
5. Append the result to the mappedArray using the push method, which adds the value to the end of the array.
6. Repeat steps 4-5 for each element in the input array until the loop is complete.
7. Once the loop finishes, return the mappedArray as the final result.
8. The map function is now complete.
*/

function map(arr, callback) {
    // Write your solution here ========================
    let newArr = [];
    for(let item of arr){
    newArr.push(callback(item))
    }
    return newArr;
}
/*
8.
What is the output of the following

Options:
"Hello, World!"
undefined
TypeError: getResult is not a function
ReferenceError: getResult is not defined

Ans:
TypeError: getResult is not a function
*/
// console.log(getResult());
var getResult = function(){
    return 'Hello John'
}

/*
9.

What will be the output?

Options:
5
10
15
ReferenceError: multiplyByTwo is not defined

Ans:
10
*/
var x = 5;
function multiplyByTwo(){
    x*= 2
}
multiplyByTwo();
console.log('x',x);

/*
10.
what will be the output 

Options:
[ 6 ]
[ 3, 6 ]
[ 3 ]
[ 2, 4, 6, 8, 10 ]

Ans:
[6]
*/
const resultAns = [1,2,3,4,5].map(num => num * 2).filter(num => num % 3 === 0);
console.log('result',resultAns);