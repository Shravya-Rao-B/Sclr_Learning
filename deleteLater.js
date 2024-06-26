//call

Array.prototype.last = function(){
    let arr = this;
    if(arr.length === 0){
        return -1
    }
    else {
        return arr[arr.length -1]
    }
}

let arr = []
console.log(arr.last());


//Bind polyfill

Function.prototype.myBind = function(obj){
    let func = this;
    return function(...args){
        func.call(obj, ...args)
    }
}
let obj1 = {
    name:"Steve",
    sayHi: function(){
        console.log(` ${this.name} says Hi`);
    }
}

let obj2 = {
    name:"Jasbir"
}

let one = obj1.sayHi.bind(obj2);
one();
let two = obj1.sayHi.myBind(obj2);
two();

//Deep copy of object passed

let obj = {
    name:"Steve",
    address: {
        state: "Newyork",
        city: "Manhatten"
    },
    sayHi: function () {
        console.log(`${this.name} say's Hi`);
    }
};

function deepCopy(obj){
    let newObj = {};
    for(let key in obj){
       if(typeof obj[key] === "object"){
            newObj[key] = deepCopy(obj[key]);
       }
       else{
           newObj[key] = obj[key];
       }
    }
    return newObj;
}

console.log(deepCopy(obj));

function flattenArray(arr){
    let newArr = []
    for(let item of arr){
        if(Array.isArray(item)){
           newArr = newArr.concat(flattenArray(item)); 
    }
    else {
        newArr.push(item)
    }
}
return newArr;
}

console.log(flattenArray([1,2,[3,4],[[5,6,7]]]));

Array.prototype.myMap = function(cb){
    let newArr = [];
    for(let i=0; i<this.length ; i++){
        newArr.push(cb(this[i]));
    }
    return newArr;
}

let arr3 = [[1,2],[3,4],[5,6]];
console.log(arr3.myMap((item) => item[0]));
console.log(arr3.map(item => item[0]));

Array.prototype.myFilter = function(cb){
    let newArr = [];
    for(let i=0; i<this.length; i++){
        if(cb(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr;
}

let arr4 = [1,2,3,4,5];
console.log(arr4.myFilter((item) => item % 2 === 0));