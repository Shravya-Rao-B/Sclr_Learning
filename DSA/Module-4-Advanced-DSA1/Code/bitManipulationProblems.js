function bitXor(A){
let ans = 0 ;
for(let i=0; i<A.length; i++){
    console.log('ans previously', ans);
    console.log('current item of the array', A[i])
    ans = ans ^ (A[i])
    console.log('ans later', ans);
}
return ans;
}

// console.log(bitXor([1,1,3,7,2,2,3]));
