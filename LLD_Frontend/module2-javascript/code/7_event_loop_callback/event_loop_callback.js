/*
1.
You are given a coding assignment where your task is to implement a custom mySetInterval function using the built-in setTimeout function in JavaScript. The mySetInterval function should allow you to repeatedly execute a callback function at a specified time interval until a given end time is reached.

You need to complete the main function, which has the following signature:
function main(intervalTime, endTime, message, arr) {
    // Write Code Here
}
The main function takes four parameters:

intervalTime (integer): The time interval, in milliseconds, at which the callback function should be executed.
endTime (integer): The time, in milliseconds, when the interval execution should stop.
message (string): The message to be appended to the array arr during each execution of the callback function.
arr (array): An array where the messages from the callback function will be stored.
Your task is to implement the mySetInterval function and use it within the main function.

The mySetInterval function should have the following signature:

function mySetInterval(callback, time) {
    // Write Code Here
}

The mySetInterval function takes two parameters:

callback (function): The callback function to be executed repeatedly at the specified time interval.
time (integer): The time interval, in milliseconds, at which the callback function should be executed.
Inside the mySetInterval function, you need to implement the logic to execute the callback function repeatedly at the specified time interval until explicitly stopped.

Please note that:
Don't make changes to the boilerplate code.
Use of in-built setInterval function is prohibited.

Hint:
Here are some hints without providing the actual code:

Create an object, let’s call it interval, with a property working that is initially set to true. This object will be used to control the execution of the interval.

Define an internal function, let’s call it setter, which will be responsible for executing the callback function and scheduling the next execution.

Inside the setter function, invoke the callback function. This will execute the desired logic at each interval.

Check the interval.working property. If it is true, schedule the next execution of the setter function using setTimeout with the specified time interval. This will ensure that the callback function is executed repeatedly until explicitly stopped.

Call the setter function once initially to start the interval execution.

To stop the interval execution, you need to modify the working property of the interval object. Consider using a separate setTimeout function with a callback that sets interval.working to false. This will prevent further executions of the callback function.

Solution Appraoch:
Inside the mySetInterval function, you need to implement the logic to execute the callback function repeatedly at the specified time interval until explicitly stopped.

Your implementation of mySetInterval should adhere to the following guidelines:

Create an object, interval, with a property working initialized to true. This object will be used to control the execution of the interval.
Define an internal function, setter, which will be responsible for executing the callback function and scheduling the next execution.
Inside setter, invoke the callback function.
Check the interval.working property. If it is true, schedule the next execution of setter using setTimeout with the specified time interval.
Call setter once initially to start the interval execution.

After implementing the mySetInterval function, you should use it within the main function to execute the callback function at the specified time interval and stop the execution after the given end time.

To stop the interval execution after the specified endTime, you need to do the following:

After calling mySetInterval, create a new setTimeout function with a callback that sets i.working to false. This will stop the interval execution.
The endTime parameter specifies the time, in milliseconds, at which the interval execution should stop.
*/

function fetchByCb(fileName, cb) {
    setTimeout(function () {
        cb(`content : ${fileName}`);
    }, 100 * Math.random());
}
// function twoSeries(file1, file2, ansArray) {
//     //write your code here =========================================
//    fetchByCb(file1,cb1);
//    function cb1(data){
//     ansArray.push(data);
//     console.log("ansarray after file1", ansArray);
//     fetchByCb(file2, cb2)
//    }
//    function cb2(data)
//    {
//    ansArray.push(data);
//    ansArray.push("All files haven been read")
//    }
//    return ansArray;
// }

function twoSeries(file1, file2, ansArray) {
    //write your code here =========================================
   fetchByCb(file1,cb1);
   function cb1(data){
    ansArray.push(data);
    fetchByCb(file2, cb2)
    function cb2(data)
    {
    ansArray.push(data);
   }
    ansArray.push("All files haven been read")
}
    return ansArray;
}
console.log("twoSeries",twoSeries("./f1.txt","./f2.txt",[]));


function twoSeriesDiscussion(file1, file2, ansArray) {
    fetchByCb(file1, function(data) {
        ansArray.push(data);
        fetchByCb(file2, function(data) {
            ansArray.push(data);
            ansArray.push('All files have been read');
            return ansArray;
        })
    });
    console.log("ansArray",ansArray);
}
/*
2.
Which component handles the execution of asynchronous code/callbacks

Options:
Callback Queue
Call Stack
Heap
Event Loop

Ans:
Event Loop

3.
What is the main idea behind asynchronous programming in JavaScript?

Options:
To execute code sequentially and block the main thread.
To handle long-running tasks without blocking the main thread.
To enforce strict order of execution for better performance.
To execute code in parallel and improve responsiveness.

Ans:
To handle long-running tasks without blocking the main thread.

*/

/*
4.
What is the output

Options:
1 2 3
1 3 2
2 1 3
3 1 2

Ans:
1 3 2
*/

console.log('1'); 

setTimeout(function(){
    console.log('2');
})

console.log('3');

/*
5.
What will be the output

Options:
1 1 1
2 2 2
3 3 3
Error

Ans:
3 3 3
*/

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
}
/*
6.
Raw Problem
Complete the function twoSeries(file1, file2, ansArray),
which takes in two file names as file1 and file2 and ansArray

Write the code such that:
1. Both the files are serially read using the fetchByCb(fileName, callback)
2. Add the content of both files in the ansArray.
3. At the end of the contents, the ansArray should hold string "All files have been read"

Example:

Input:
let ansArray = [];
twoSeries('FILE 1', 'FILE 2', ansArray)';

Output:
ansArray = ['content : FILE 1', 'content : FILE 2', 'All files have been read']
*/
/*
8.
What will be the output

Options:

Before After
Error
Before After I broke the while loop
Before undefined After

Ans:
Before After
*/

// let a = true;
// console.log("Before");
// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop");
// }, 1000);
// console.log("After");

// while(a){

// }

/*
9.
What will be the output
*/

console.log("Before");

const cb2 = () => {
    console.log("set timeout 1");
    while (1) {
    }
}
const cb1 = () => console.log("hello");
setTimeout(cb2, 1000)

setTimeout(cb1, 2000)

console.log("After");

