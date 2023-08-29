function removeOneElement(A){
    let countPos = 0;
    let count = 0;
for(let i=0; i<A.length; i++){
    console.log('loop', A[i]);
    if(A[i+1] >= A[i]){
        console.log('1',A[i+1], A[i]);
        countPos = countPos + 1;
    }
    else if(A[i+1] < A[i]){
        console.log('2',A[i+1], A[i]);
        count = count + 1;
    }
}
    if(count == 1 || countPos == A.length-1)
    {
    return true;
    }
    return false;

}
// console.log(removeOneElement([1,2,3]));
// console.log(removeOneElement([3,3,5,0,1]));

function niceSubArray(A){
    let ans = 0;
    for(let i=0; i<A.length;i++){
        let a0 = 0;
        let b1 = 0;
        let c2 = 0;
        for(let j=A.length-1; j>=i; j--){
            console.log('i,j', i,j);
            if(A[j] == 0){
                a0 = a0 + 1;
            }
            else if(A[j] == 1){
                b1 = b1 + 1
            }
            else if(A[j] == 2){
                c2 = c2 + 1;
            }
        }
        if(a0!= 0 && b1!= 0 && c2!= 0){
            ans = ans + 1;
        }
    }
    return ans;
}
// console.log(niceSubArray([0,1,2,0]));
// console.log(niceSubArray([0,1,0,0,2]));
