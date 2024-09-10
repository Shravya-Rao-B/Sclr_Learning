// function counter(args){
//     let count = 0;
//     if(args === 0){
//         return count;
//     }
//     else {
//         return function inner(){
//             return count++;
//         }
//     }
// }

// console.log(counter(0));

// Array.prototype.myMap = function (squarer){
//     let arr = [];
//     for(let i=0; i<this.length; i++){
//         arr.push(squarer(this[i]));
//     }
//     return arr;
//     }

// function squarer (elem){
//     return elem * elem;
// }

// function isGreaterThanFive(elem){
//     return (elem > 5)
// };
// // console.log([1,2,3,4].map(squarer))

// Array.prototype.myFilter = function(callback){
// let arr = [];
// for(num of this){
//     if(callback(num)){
//         arr.push(num)
//     }
// }
// return arr;
// }
// // console.log([5,6,7,8].myFilter(isGreaterThanFive));

// function add(sumSoFar, num){
//     return sumSoFar + num;
// }

// Array.prototype.myReduce = function(callback){
//     let sum = 0;
//     for(elem of this){
//        sum = callback(sum,elem);
//     }
//     return sum;
// }

let s = true;
console.log("Beofre")
setTimeout(function(){
    s = false;    
    console.log(s);
}, 1000);
console.log("After");
// this runs infinite loop because its in the main stack and our set timeout function which sets the 
//value of s to false keeps waiting in the callback queue. 
// while(s){
// console.log('still running')
// }
// let futureTime = Date.now() + 5000;
// while(Date.now()<futureTime){
//     console.log("I am running",Date.now());
// }

// async function getData(){
//     return 10;
// }
// let a = await getData();
// console.log(a);


let q = "This only works if and only if"; // "q = This only works if and only if"
let r = q.slice(q.indexOf("only")); // r = only works if and only if
let t = r.lastIndexOf("only");
// console.log('t',t); //t = 18, did not consider white spaces
// console.log('r[t]',r[t]); //r[t] is r[18] which is letter 'i' last word 'if'
r[t]= "g"; // This doesn't work
console.log(q);
console.log(r);

var a = 10;
console.log("a before function", a);
function fn(){
    console.log("a inside function", a)
    var a = 20;
}
fn();
console.log("a after function",a);
