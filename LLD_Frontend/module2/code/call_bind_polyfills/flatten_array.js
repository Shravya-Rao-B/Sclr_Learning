let ansArray = [];
function flattenArray(arr){
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            flattenArray(arr[i]);
        }
        else {
            ansArray.push(arr[i]);
        }
    }
    return ansArray;
}

console.log(flattenArray([1,2,[3,4],[[5,6,7]]]));