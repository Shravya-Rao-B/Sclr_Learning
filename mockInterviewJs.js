// write your code here...

let obj = {
    name:"Shravya",
    age: "33",
    address: {
        city:"Bangalore",
        pin:"575001"
    }
}

function deepCopy(obj){
    let newObj = {};
    
    for(let key in obj){
        if(typeof obj[key] === "object"){
           newObj[key] = deepCopy(obj[key])
        }
        else {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}

function flattenObj(obj){
    let newObj = {};
    
    for(let key in obj){
        if(typeof key != object){
            newObj[`obj.${key}`] = obj[key]
        }
        else {
            newObj[`obj.${key}`] = flattenObj(obj[key])
        }
    }
    return newObj;
}


//arr.reduce(acc,val,index,arr)

Array.prototype.myReduce = function(cb, initialValue){
    let arr = this;
    let accumulator = initialVale === undefined ? arr[0] : initialValue;
    
    for(let i= initialValue === undefined ? 0:1; i<arr.length; i++){
        acc = cb(accumulator, arr[i],i,this)
    }
    return accumulator
}

// counter()()()(0)

function counter(arg){
    let count = 0;
    count++;
    if(arg == 0){
        return count;
    }
    function innerCounter(arg){
        count++;
        if(arg == 0){
            return count;
        }
        else {
            return innerCounter;
        }
    }
    return innerCounter;
}

console.log(counter()()()(0));