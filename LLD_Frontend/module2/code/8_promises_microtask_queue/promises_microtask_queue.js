let fs = require("fs");
const { callbackify } = require("util");
/*
1.
What will be the output

Options:
1 4 6 5 3 2
1 3 4 5 2 6
1 4 5 6 3 2
1 3 6 5 3 2

Ans:
1 4 6 5 3 2
*/

// console.log(1);
// setTimeout(function () {
//     console.log(3);
// });
// console.log(4);
// setTimeout(function () {
//     console.log(2);
// });
// Promise.resolve().then(function () {
//     console.log(5);
// });
// console.log(6);

/*
2.
What will be the output 

Options:
1 2 some error some error
error
Not work
1 2 some value some value

Ans:

Dry run:
You create a new Promise p with a callback function that has three setTimeout calls, two of which call resolve and one calls reject. However, the first resolve and reject calls are ignored because they are followed by another resolve and reject call respectively.

You attach a .then handler to the Promise p, providing a callback function for handling rejected promises (null is passed as the first argument, indicating that you want to handle only rejections).

console.log(1); prints "1".

console.log(err); prints the error message "some value".

You attach a .catch handler to the Promise p. This is another way of handling rejections.

console.log(2); prints "2".

console.log(err); prints the error message "some value".

You attach a .finally handler to the Promise p. This block will execute regardless of whether the Promise is resolved or rejected.

console.log(1); prints "1".

You attach another .finally handler to the Promise p. This block will also execute regardless of whether the Promise is resolved or rejected.

console.log(2); prints "2".

You attach another .then handler to the Promise p, providing both resolve and reject callbacks.

Since there is no resolved value to pass, and the Promise was rejected with an error message "some value", the reject callback is invoked.

console.log(err); prints the error message "some value".

The Promise chain has now ended, and the final result of p is undefined because no resolved value was provided.
*/
// let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");

//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");

//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);
// });

// p.then(null, function (err) {
//     console.log(1);
//     console.log(err);
// });

// p.catch(function (err) {
//     console.log(2);
//     console.log(err);
// });

// p.finally(function () {
//     console.log(1);
// })

// p.finally(function () {
//     console.log(2);
// }).then(function (val) {
//     console.log(val);
// })

// p.then(
//     function (val) {
//         console.log(val);
//     },
//     function (err) {
//         console.log(err);
//     }
// );

/*
3.
What will be the output?

Options:
undefined error undefined 2 error2
error
undefined error
undefined 2 undefined

Ans:
undefined error undefined 2 error2

Dry run:
Here's why:

1. `Promise.resolve(1)` creates a resolved promise. The value `1` is not used anywhere, so it doesn't affect the output.

2. The first `.finally()` block doesn't receive any data, so `data` is `undefined`. It logs `undefined` and returns a rejected promise with the value `'error'`.

3. The `.catch()` block receives the rejected promise, logs the error `'error'`, and throws a new error `'error2'`.

4. The second `.finally()` block doesn't receive any data, so `data` is `undefined`. It logs `undefined` and returns a resolved promise with the value `2`, which is logged by `.then(console.log)`.

5. Finally, the `.catch(console.log)` logs the error `'error2'` thrown in step 3.

Please note that `.finally()` does not handle errors or change promise values. It just allows you to run some code after a promise is settled, regardless of its outcome. Also, it does not receive any arguments unless it follows a `.catch()` or `.then()`. In this case, it receives the value that was thrown or returned from the previous block.
*/

// Promise.resolve(1)
// .finally((data) => {
//   console.log(data)
//   return Promise.reject('error')
// })
// .catch((error) => {
//   console.log(error)
//   throw 'error2'
// })
// .finally((data) => {
//   console.log(data)
//   return Promise.resolve(2).then(console.log)
// })
// .then(console.log)
// .catch(console.log)

/*
4.
What will be the output?

Options:
1
2
3
4
Error
*/

const promise1 = Promise.resolve(1)
const promise2 = Promise.resolve(2)
const promise3 = Promise.resolve(3)
const promise4 = Promise.reject(4)

const promiseAll = async () => {
  const group1 = await Promise.all([promise1, promise2])
  const group2 = await Promise.all([promise3, promise4])
  return [group1, group2]
}

promiseAll().then(console.log).catch(console.log);

/*
5.
You are tasked with creating a promisify function that can turn any given function into a promisified version of itself. The objective is to convert a function that uses traditional callback-based asynchronous programming into a function that returns a promise.

The promisify function should accept a single argument fn, which is the function to be promisified. The promisified function should have the same behavior as the original function but should return a promise instead of using a callback.

The function fn to be promisified will always have a callback as its last argument. The callback function will have the following signature:

function(result) {}
The promisify function should return a new function that wraps the original function fn. Once you have implemented promisify, you should apply it to the provided function exampleFn and assign the resulting promisified function to a variable called promisified. The promisified function should be invoked with the appropriate arguments and then chained with .then() calls to handle the resolved value of the promise. This is how the function should work:

Example:
function exampleFn(a, b, cb) {
    cb(a + b);
}

const promisified = promisify(exampleFn);
promisified(5, 15).then(res => console.log(res)); 

Output: 20


*/
/*
6.
Guess the output

Options:
timeout promise
promise timeout
timeout
promise
error

Ans:
promise timeout
*/
setTimeout(() => console.log('timeout'), 0)

Promise.resolve().then(() => console.log('promise'))

/*
7.
Guess the output

Options:
one two
two one
one
two

Ans:
two
*/
const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
   });
   
   const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
   });
   Promise.race([firstPromise, secondPromise]).then(res => console.log(res));


/*
8.
Why promises are better then cbs ?

Options:
It solves problem of inversion of control
microtask task queue has higher priority then cb queue
promises can be resolved or rejected once in the life time after that there
all of the above

Ans:
all of the above
*/

/*
9.
Complete the function twoSeries(file1, file2, ansArray), which takes in two file names as file1 and file2 and ansArray

Write the code such that:

Both the files are serially read using the fetchByPromise(fileName)
Add the content of both files in the ansArray.
At the end of the contents, the ansArray should hold string "All files have been read"
Example:
Input:
let ansArray = [];
twoSeries('FILE 1', 'FILE 2', ansArray)';

Output:
ansArray = ['content : FILE 1', 'content : FILE 2', 'All files have been read']

Hint:
1. The function twoSeries takes three parameters: file1, file2, and ansArray.
2. It is assumed that there is a function called fetchByPromise that returns a promise for fetching data from a file.
3. Inside the function, a promise chain is created to fetch data from file1 and file2 sequentially.
4. The result of the first fetch is pushed into the ansArray using the .push() method.
5. The second fetch is performed within the .then() block of the first fetch’s promise.
6. The result of the second fetch is also pushed into the ansArray.
7. Another .then() block is used to push the message “All files have been read” into the ansArray.
8. The code assumes that the ansArray is an array provided as an argument, where the results will be stored.

Solution Appraoch:
1. Understanding the Inputs: The twoSeries function takes three parameters: file1, file2, and ansArray. file1 and file2 represent the names or paths of the files to be fetched, and ansArray is an array provided as an argument to store the results.

2. Fetching Data with Promises: Inside the twoSeries function, a promise chain is created to fetch data from file1 and file2 sequentially.

3. Fetching file1: The promise chain starts by calling the fetchByPromise function, assuming it is a function that returns a promise for fetching data from a file. The fetched result is passed to the first .then() method.

4. Pushing file1 Result to ansArray: In the first .then() block, the fetched result (res) is pushed into the ansArray using the .push() method. This ensures that the result of file1 is stored in the array.

5. Fetching file2: Within the first .then() block, after file1 is processed, another call to fetchByPromise is made to fetch data from file2. The fetched result is passed to the second .then() method.

6. Pushing file2 Result to ansArray: In the second .then() block, the fetched result (res) from file2 is pushed into the ansArray using the .push() method. This ensures that the result of file2 is stored in the array.

7. Pushing Completion Message: After both fetch operations are completed, a third .then() block is used. Inside this block, the message “All files have been read” is pushed into the ansArray using the .push() method. This indicates that all files have been processed.

8. Completing the Promise Chain: The promise chain is now complete. The function will exit, and the caller can access the ansArray to retrieve the stored results.

By following this solution approach, the twoSeries function fetches data from two files sequentially using promises. The results are stored in the ansArray provided as an argument, ensuring that the results are processed and accessible in the desired order.
*/

function twoSeries(file1, file2, ansArray) {
  //write your code here =========================================
  fetchByPromise(file1)
  .then((data) => {
  ansArray.push(data);
  return fetchByPromise(file2)
  }).then(data => {
  ansArray.push(data)
  ansArray.push("All files have been read");
  }).catch(err => {
  console.log(err)
  })
  return ansArray;
  }

//Scaler given function
  function fetchByPromise(fileName) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`content : ${fileName}`);
        }, 100 * Math.random());
    });
}
  console.log("twoSeries",twoSeries("./f1.txt", "./f2.txt", []));

function mySetInterval(func, interval){
  while(true){
  let int = 0;
  while(int< interval){
    int = int+1000;
  }
  if(int >= interval){
    func();
    int = 0;
  }
}
}
//callback hell explanation

function cb1(){
  fs.readFile("./f1.txt",(err,data)=> {
    if(err){
      console.log("err at cb1",err);
    }
    else{
      console.log('f1', data.toLocaleString());
      fs.readFile("./f2.txt",(err,data)=> {
        if(err){
          console.log("err at cb2",err)
        }
        else{
          console.log("f2:", data.toLocaleString()); 
          fs.readFile("./f3.txt",(err,data)=> {
            if(err){
              console.log("err at cb3", err)
            }
            else {
              console.log("f3:", data.toLocaleString());
            }
        })
    }
    })
}
  })
}

// cb1();

//One way to prevent callback chaining like thing
function calBacks(){
  fs.readFile("./f1.txt",f1cb)
}

function f1cb(err, data){
    if(err){
      console.log("err at cb1",err);
    }
    else if(data){
      console.log('f1', data.toLocaleString());
      fs.readFile("./f2.txt",f2cb)
    }
}

function f2cb(err, data){ 
  if(err){
  console.log("err at cb2",err);
}
else if(data){
  console.log('f2', data.toLocaleString());
  fs.readFile("./f3.txt",f3cb)
}
}

function f3cb(err, data){
  if(err){
    console.log("err at cb3", err);
  }
  else if(data){
    console.log('f3', data.toLocaleString());
  }
}

// calBacks();

//We are calling the similar function multiple times. WHich means there is a recursive solution.

let files = ["f3.txt", "f2.txt", "f1.txt"];
function readFiles(){
  if(files.length == 0){
    return;
  }
  else {
    let currFile = files.pop();
    fs.readFile(currFile,(err, data) => {
      if(err){
        console.log(`err reading file:, ${currFile} and error is ${err}`);
      }
      else {
        console.log(`Data of ${currFile}: ${data.toLocaleString()}`);
        readFiles();
      }
    })
  }
}
// readFiles();

//Trying the same with prmosie
function cbsToPromise()
{
fs.promises.readFile("./f1.txt")
.then((data) => {
  console.log("f1", data.toLocaleString());
return fs.promises.readFile("./f2.txt");
}).then((data) => {
  console.log("f2", data.toLocaleString());
return fs.promises.readFile("./f3.txt");
}).then((data) => {
  console.log("f3", data.toLocaleString());
}).catch(err => {
  console.log("err", err);
});
}
// cbsToPromise();





