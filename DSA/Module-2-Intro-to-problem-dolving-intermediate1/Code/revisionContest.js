/*
1.
Sum of numbrs in an array greater than its left number
*/
function sumOfGreatNumbers(A){
    let n = A.length;
    let sum = 0;
    for(let i=n-1; i>=1; i--){
        if(A[i] > A[i-1]){
            sum = sum + A[i];
        }
    }
    return sum % 1000000007;
}
// console.log(sumOfGreatNumbers([1,2,3]));
// console.log(sumOfGreatNumbers([12,5,7,6,19]));

/*
2
*/

function printIfNoConsecutiveSetBits(A){
let num =  Math.pow(2,A); 
for(let i=1; i<=num ; ++i)
{
    if((i & (i >> 1)) == 0){
        process.stdout.write(i + " ");
    }
}
}
console.log(printIfNoConsecutiveSetBits(2));

function consecutiveSetBits(A){
    let num = Math.pow(2,A);
    for(let i=1; i<=num ; ++i){
        if((i & (i >> 1)) == 0)
        for(let j=0; j<=32; j++){
            if((i) & 1 == 0){
                count++;  
            }
        }
            process.stdout.write(i + " ");
    }
}
// console.log(consecutiveSetBits(2));

function divisibleBy7(A){
    let ans = 0;
    for(let i=0; i<A.length; i++){
        let count = 0;
        if(A[i] % 7 == 0){
            for(let j=0; j<A.length; j++){
                if(A[j] > A[i] && A[j]!= A[i])
                {
                count++;
                }
            }
            if(count >=2){
                ans++;
        }
        }
    }
    return ans;
}
// console.log(divisibleBy7([8,7,11,9,14]));
// console.log(divisibleBy7([14,7,21,45,23,14,14]));