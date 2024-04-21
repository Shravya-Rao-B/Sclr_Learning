/*
3.
What will be the output?

let cap = {
    name: "Steve",
    sayHi: function(){
        console.log(`Hi from ${this.name}`);
    }
}
cap.sayHi();
let sayHiAdd = cap.sayHi;
sayHiAdd();

Options:
Hi from Steve Hi from undefined
Hi from Steve Hi from Steve
Hi from undefined Hi from undefined
Some Error

Ans:
Hi from Steve Hi from undefined

*/

let cap = {
    name: "Steve",
    sayHi: function(){
        console.log(`Hi from ${this.name}`);
    }
}
cap.sayHi();
let sayHiAdd = cap.sayHi;
sayHiAdd();

/*
4.
What will be the output?

const cap = {
    name: "Steve",
    sayHi: function(){
        console.log(`53 ${this.name}`);
        const iAmInner = () => {
            console.log(`55 ${this.name}`);
        }
        iAmInner();
    }
}
cap.sayHi();

Options:
53 Steve 55 undefined
53 Steve 55 Steve
53 undefined 55 Steve
Some Error

Ans:
53 Steve 55 Steve
*/

const capTwo= {
    name: "Steve",
    sayHi: function(){
        console.log(`53 ${this.name}`);
        const iAmInner = () => {
            console.log(`55 ${this.name}`);
        }
        iAmInner();
    }
}
capTwo.sayHi();

/*
7.
What will be the output?
const cap = {
    name: "Steve",
    sayHi: function(){
        console.log(`53 ${this.name}`);
        function iAmInner(){
            console.log(`55 ${this.name}`);
        }
        iAmInner();
    }
}

Options:
53 Steve 55 undefined
53 Steve 55 Steve
53 undefined 55 undefined
Some Error

Ans:
53 Steve 55 undefined
*/
const capThree = {
    name: "Steve",
    sayHi: function(){
        console.log(`53 ${this.name}`);
        function iAmInner(){
            console.log(`55 ${this.name}`);
        }
        iAmInner();
    }
}
cap.sayHi();

/*
8.
What will be the output?
const cap = {
    name: "Steve",
    sayHi: () => {
        console.log(`Hi from ${this.name}`);
    }
}
cap.sayHi();
let sayHiAdd = cap.sayHi;
sayHiAdd();

Options:
Hi from undefined Hi from undefined
Hi from Steve Hi from undefined
Hi from undefined Hi from Steve
Hi from Steve Hi from Steve

Ans:
Hi from undefined Hi from undefined
*/
const capFour = {
    name: "Steve",
    sayHi: () => {
        console.log(`Hi from ${this.name}`);
    }
}
capFour.sayHi();
let sayHiAdd2 = capFour.sayHi;
sayHiAdd2();

/*
9.
What will be the output?

Options:
Steve say's Hi inside inner Jasbir
Steve say's Hi inside inner Steve
undefined say's Hi inside inner Jasbir
Steve say's Hi inside inner undefined
Some Error

Ans:
Steve say's Hi inside inner Jasbir

*/
Function.prototype.myBind = function(obj){
    obj.fnRef = this;
    return function(...args){
        obj.fnRef.apply(...args);
    }
}
let abc = {
    name:"Jasbir"
}
let obj = {
    name:"Steve",
    sayHi: function(){
        console.log(` ${this.name} says Hi`);
        function inner(){
            console.log(` Inside inner ${this.name}`);
        }
        let boundThisFN = inner.myBind(abc);
        boundThisFN();
    }
}
obj.sayHi();