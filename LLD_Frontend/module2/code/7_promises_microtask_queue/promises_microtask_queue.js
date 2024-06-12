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
cbsToPromise();