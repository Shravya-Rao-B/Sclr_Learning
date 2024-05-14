// const number = 5;

// function multiplyByTwo(x){
//     number = x * 2;
// }
// multiplyByTwo(10);
// console.log(number);

//----2
// function outer(){
//     let x = 5;
//     return function inner(y){
//         x+= y;
//         return x;
//     }
// }
// let closureFn = outer();
// console.log(closureFn(3));
// console.log(closureFn(2));

// function delay(ms){
// return new Promise((resolve ) => {
//     setTimeout(() => {
//         resolve(ms);
//     }, ms);
// })
// }

// async function foo(){
//     console.log("start");
//     await delay(1000);
//     console.log('middle');
//     await delay(2000);
//     console.log("end");
// }
// foo();
// console.log("After foo");

//---3
// class Shape{
//     constructor(name){
//         this.name = name;
//     }
//     getName(){
//         return this.name
//     }
// }
// class Circle extends Shape{
//     constructor(){
//         super();
//         this.radius = 5;
//     }
//     getName(){
//         return super.getName() + '(Circle)';
//     }
// }
// const circle = new Circle();
// console.log(circle.getName());

//---4
// function delay(ms){
//     return new Promise((resolve ) => {
//         setTimeout(() => {
//             resolve("Done");
//         }, ms);
//     })
// }
// async function foo(){
//     console.log("start");
//     await delay(2000);
//     console.log('end');
// }
// foo();
// console.log("After foo");


function outer(){
let x = 10;

function inner(){
    console.log(x);
}
x =20;
return inner;
}
let closureFn = outer();
closureFn();