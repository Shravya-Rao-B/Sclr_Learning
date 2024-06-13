/*
polyfill of call

Copy the original function to new object
Execute and return the result
Delete the copied function
*/

// Function.prototype.myCall = function (obj, ...args) {
//     let functionToBeInvoked = this;
//     obj.tempFunction = functionToBeInvoked;
//     obj.tempFunction(...args);
//     delete obj.tempFunction;
// }

// let cap = {
//     firstName: "Shravya",
//     lastName: "Rao",
//     fullName: (fn, ln) => {
//         return (`${fn} ${ln}`)
//     },
//     printNames: function (...name) {
//         for (let i = 0; i < name.length; i++) {
//             console.log(name[i]);
//         }
//     }
// }

// let cap1 = {
//     firstName: "Anup",
//     lastName: "Maiya",
// }

// // console.log(cap.fullName.call(cap1, "Anup", "Maiya"));
// // console.log(cap.fullName.myCall(cap1, "Anup", "Maiya"));

// Function.prototype.myApply = function (obj, args) {
//     let functionToBeInvoked = this;
//     obj.tempFunction = functionToBeInvoked;
//     obj.tempFunction(...args);
//     delete obj.tempFunction;
// }

// cap.printNames.myApply(cap1, ["Anup", "Shravya", "A", "B", "Z"]);
// cap.printNames.apply(cap1, ["Anup", "Shravya", "A", "B", "Z"]);

// function flatArray(arr) {
//     let newArr = [];
//     for (let item of arr) {
//         if (Array.isArray(item)) {
//             let falttenedArray = (flatArray(item));
//             newArr.push(...falttenedArray); //append to array after spreading the values returned from flattendarray
//         }
//         else {
//             newArr.push(item)
//         }
//     }
//     return newArr;
// }
// console.log(flatArray([1, 2, [[[3, 5]]], [7, 10]]));


// var func = function () {
//     console.log("Hi");
// }
// var func = function () {
//     console.log("Hello");
// }
// var func = function () {
//     console.log("How are you");
// }

// console.log(func());

// function outerFunction() {
//     var count = 0;
//     function innerFunction() {
//         count++;
//         return count;
//     }
//     return innerFunction;
// }

// const innerFunc = outerFunction(); //0
// console.log(innerFunc()); //1
// console.log(innerFunc()); //2
// const innerFunc2 = outerFunction();

// function createCounter(init, delta) {
//     console.log("init and delta passed", init, delta);
//     function count() {
//         console.log("In count", init, delta)
//         init = init + delta;
//         return init;
//     }
//     return count;
// }

// let c1 = createCounter(10, 5);
// let c2 = createCounter(5, 2);

// console.log(c1()); //15
// console.log(c2()); //7

// console.log(c1()); //20
// console.log(c2()); //9

// function outer() {
//     let arr = [];
//     for (var i = 0; i < 3; i++) {
//         arr.push(function fn() {
//             i++;
//             console.log(i);
//         })
//     }
//     return arr;
// }

// let newArrOfFncs = outer();
// newArrOfFncs[0]();
// newArrOfFncs[1]();
// newArrOfFncs[2]();

// function sum(val) {
//     return function (val2) {
//         if (!val2) {
//             return val
//         }
//         else {
//             return sum(val + val2)
//         }
//     }
// }

// console.log("sum", sum(1)(2)(3)(4)());

// function fn() {
//     // Write your solution here ========================
//     let count = 2;
//     return function innerFn(arg) {
//         if (arg == 0) {
//             return count;
//         }
//         else {
//             count++;
//             return innerFn;
//         }
//     }
// }

// console.log(fn()()(0));

// function mul(num){
//     return function(num2){
//         if(!num2){
//             return num
//         }
//         else {
//             return mul(num*num2)
//         }
//     }
// }
// console.log("mul", mul(1)(2)(3)(4)());
// console.log("mul 2", mul(2)(3));

function flattenObject(obj){
    let  flattenedObj= {};
    let nestedFlattenedObj = {};
    for(let key in obj){
        if(typeof obj[key] === "object" && obj[key]!= null){
            nestedFlattenedObj = flattenObject(obj[key]);
            console.log("nestedFlattenedObj",nestedFlattenedObj);
        }
        else {
            flattenedObj[key] = obj[key];
        }
                for(let nestedKey in nestedFlattenedObj){
                flattenedObj[`${key}.${nestedKey}`] = nestedFlattenedObj[nestedKey];
            }

    }
    return flattenedObj;
}

const obj = {
    newObj: {
      obj2: {
        obj5: {
          one: 1,
        },
      },
    },
    obj3: {
      obj4: { 
        two: 2 
      },
    },
  };

  console.log("flatten Object",flattenObject(obj));


//   function mulTwoInOne(...args){
//     if(args.length === 2){
//         return args[0] * args[1]
//     }
//     else 
//     {
//      function innerFn(num2){
//         return (args[0] *num2)
//     }
//   }
//   return innerFn;
// }
//   console.log("mulTwoInOne", mulTwoInOne(2)(3));
//   console.log("mulTwoInOne", mulTwoInOne(2,3));

  //Polyfill of map

  Array.prototype.myMap = function(cb){
    let newArr = [];
    for(let item of this){
        newArr.push(cb(item));
  }
return newArr;
  }

const squarer = function(num){
    return (num*num);
}
let arr = [1,2,3,4,5];
console.log("squarer",arr.myMap(squarer));


Array.prototype.myForEach = function(cb){
    for(let item of this){
         console.log(cb(item))
    }
} 

arr.myForEach(squarer);

const filterLogic = function(ip){
    return (ip%2 === 0);
}

Array.prototype.myFilter = function(cb){
    let newArr = [];
    for(let item of this){
        let val = cb(item);
        if(val)
        newArr.push(item);
    }
    return newArr;
}

let arr2 = [1,2,3,4,5,6];
console.log(arr2.myFilter(filterLogic));

const sumOfAll = function(sum,item) {
    return (sum * item);
}

Array.prototype.myReduce = function(acc,logic){
    let final;
    if(acc){
        final = acc;
    }
     for(item of this){
      let val = logic(final,item);
      final = val;
     }
     return final;
}

let arr3 = [1,2,3,4,5];
console.log("reduce",arr3.myReduce(2,sumOfAll));

