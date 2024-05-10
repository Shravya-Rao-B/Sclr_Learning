/*
3.
WHat is the output

Options:
Rabbit undefined undefined undefined
Rabbit Rabbit undefined undefined
Rabbit undefined Rabbit undefined
Rabbit Rabbit undefined Rabbit

Ans:
Rabbit undefined undefined undefined
*/
function Rabbit(name){
    this.name = name;
}
Rabbit.prototype.sayHi = function(){
    console.log(`Hi from ${this.name}`);
}
let rabbit = new Rabbit(' Rabbit');

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit._proto_.sayHi();
/*
5.
What is the output of the following

Options:
White Rabbit
undefined
Error

Ans:
Error
*/

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name){
//         // super();
//         this.name = name;
//         this.created = Date.now();
//     }
// }
// let rabbit2 = new Rabbit('White Rabbit');
// console.log(rabbit2.name);