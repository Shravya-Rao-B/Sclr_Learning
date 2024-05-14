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