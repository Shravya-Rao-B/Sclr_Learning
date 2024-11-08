/*
1.
Find the output 

Options:
15 after 6 seconds
15 after 7 seconds

Ans:
15 after 6 seconds
*/

function resolveAfterNSeconds(n, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, n);
    });
}

(function () {
    let a = resolveAfterNSeconds(1000, 1)
    a.then(async function (x) {
        let y = await resolveAfterNSeconds(2000, 2)
        let z = await resolveAfterNSeconds(1000, 3)
        let p = resolveAfterNSeconds(2000, 4)
        let q = resolveAfterNSeconds(1000, 5);
        console.log(x + y + z + await p + await q);
    })
})()

/*
2.
Find the output

Options:
1 2 3 4
4 2 1 3
4 2 3 1
4 3 2 1

Ans:
4 2 1 3
*/
const createPromise = () => Promise.resolve(1)

function func1() {
  createPromise().then(console.log)
  console.log(2)
}

async function func2() {
  await createPromise()
  console.log(3)
}

console.log(4)
func1()
func2()

/*
3.
Which of the following statement is correct

try ,catch is synchronous in nature
try ,catch does not work on syntatic errors
type error , range error occur at runtime
all of the above

Ans:
all of the above
*/

/*
5.
Which of the following correctly describes the behavior of the 
spread (…) and rest (…) operators in JavaScript?

Options:
The spread operator is used to merge multiple elements into an array, while the rest operator is used to split an array into multiple elements.
The spread operator is used to split an array into multiple elements, while the rest operator is used to merge multiple elements into an array.
Both the spread and rest operators are used to merge multiple elements into an array.
Both the spread and rest operators are used to split an array into multiple elements.

Ans:
The spread operator is used to split an array into multiple elements, 
while the rest operator is used to merge multiple elements into an array.

*/

//-------------------------------------class code trial---------------------------

const a = (async function() {
    return await Promise.resolve("Ankit");
})();
console.log(a);
a.then(function(data) {
    console.log(data);
})

// async function getdata(){
//     return 10
// }
// c = await getdata();
// console.log(c); //This will give an error

//Need to use the promise this way instead
// getdata().then(data => console.log("data",data));

// console.log("before");
// function cb(){
//     console.log("callback funciton called");
// }
// let timerId = setTimeout(cb, 1000);
// function canceller(){
//     console.log("canceller called");
//     clearTimeout(timerId);
// }
// setTimeout(canceller, 2000);
// console.log("after");

//---------------------- SetInterval

function mySetTimeout(timeout,cb){
    console.log("mySetTimeout called");
    let int = 0;
    while(int < timeout){
        int = int + 1000;
    }
    if(int >= timeout){
        console.log("timeout reached")
        cb();
    }
}

function sayHi(){
    return ("Hello from set timeout polyfill")
}

console.log(mySetTimeout(3000,sayHi));