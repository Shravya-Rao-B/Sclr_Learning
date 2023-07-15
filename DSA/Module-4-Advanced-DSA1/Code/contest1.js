/*
Max distance between 2 1s
*/

function countMaxDist1(A){
    let prevIndex = -1;
    let ans = 0;
    for(let i=0; i<=30; i++){
        if((A>>i)&1 == 1){
            if(prevIndex != -1){
                ans = Math.max(ans, i - prevIndex);
            }
            prevIndex = i;
        }
    }
    return ans;
}
// console.log(countMaxDist1(110));
// console.log(countMaxDist1(12));

//Find the max increasing subArray
//Kadane's algo
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


function countFact(A){
    let count = 0;
    for(let i=1; i*i <= A; i++){
        if(A%i ==0 && i<A/i){
            count = count + 2
        }   
        else if(A%i ==0 && i== A/i){
            count = count + 1
        }
    }
    return count;
}
// console.log(countFact(32));

//
function countPrimeFactors(A){
let ans = [];
let sieve = new Array(A+1).fill(0);
for(let i=2; i<=A;i++){
    console.log('i', i);
     if(sieve[i] == 0){
        for(j=i*2; j<=A; j+=i){
            console.log('j', j);
            sieve[j] = sieve[j] + 1
        }
        console.log(sieve);
    }
}
console.log(sieve);
for(let i=2; i<=A; i++){
    if(sieve[i] >= 2){
        ans.push(i)
    }
}
return ans;
}
console.log(countPrimeFactors(12));