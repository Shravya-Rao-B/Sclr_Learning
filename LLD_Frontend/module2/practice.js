/*
polyfill of call

Copy the original function to new object
Execute and return the result
Delete the copied function
*/

Function.prototype.myCall = function(obj, ...args){
    let functionToBeInvoked = this;
    obj.tempFunction = functionToBeInvoked;
    obj.tempFunction(...args);
    delete obj.tempFunction;
}

let cap = {
    firstName:"Shravya",
    lastName: "Rao",
    fullName:  (fn, ln) => {
        return (`${fn} ${ln}`)
    },
    printNames: function (...name){
        for(let i = 0; i < name.length; i++){
            console.log(name[i]);
        }
    }
}

let cap1 = {
    firstName:"Anup",
    lastName: "Maiya",
}

// console.log(cap.fullName.call(cap1, "Anup", "Maiya"));
// console.log(cap.fullName.myCall(cap1, "Anup", "Maiya"));

Function.prototype.myApply = function(obj, args){
    let functionToBeInvoked = this;
    obj.tempFunction = functionToBeInvoked;
    obj.tempFunction(...args);
    delete obj.tempFunction;
}

cap.printNames.myApply(cap1,["Anup","Shravya","A","B","Z"]);
cap.printNames.apply(cap1,["Anup","Shravya","A","B","Z"]);

function flatArray(arr){
    let newArr = [];
    for(let item of arr){
        if(Array.isArray(item)){
            let falttenedArray = (flatArray(item));
            newArr.push(...falttenedArray); //append to array after spreading the values returned from flattendarray
        }
        else {
            newArr.push(item)
        }
    }
    return newArr;
}
console.log(flatArray([1,2,[[[3,5]]],[7,10]]));


var func = function (){
    console.log("Hi");
}
var func = function (){
    console.log("Hello");
}
var func = function (){
    console.log("How are you");
}

console.log(func());