/*
Max distance between 2 1s
*/

function countMaxDist1(A){
    let prevIndex = -1;
    let ans = 0;
    for(let i=0; i<=30; i++){
        if((A>>i)&1 == 1){
            console.log('bit is 1');
            if(prevIndex != -1){
                ans = Math.max(ans, i - prevIndex);
            }
            prevIndex = i;
        }
    }
    return ans;
}
console.log(countMaxDist1(110));
console.log(countMaxDist1(12));

function maxSubArray(A){
    let maxSum = A[0];
    let total  = A[0];
    for(let i=1; i<A.length; i++){
        if(A[i] > A[i -1]){
           total = total+A[i] 
           maxSum = Math.max(maxSum, total)
           console.log('maxSum', maxSum)
        }
        else {
            total = A[i];
            maxSum = Math.max(maxSum, A[i])
        }
    }
    return maxSum;
}
// console.log(maxSubArray([1,2,3,4,5]));
// console.log(maxSubArray([9,2,4,2]));
// console.log(maxSubArray([9,17,19,13,13,20,13,2,18,2]))
