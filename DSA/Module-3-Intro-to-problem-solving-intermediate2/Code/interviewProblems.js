/*
1.
Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.


Input Format

The only argument given is string A.
Output Format

Return the length of the longest consecutive 1’s that can be achieved.
Constraints

1 <= length of string <= 1000000
A contains only characters 0 and 1.
For Example

Input 1:
    A = "111000"
Output 1:
    3

Input 2:
    A = "111011101"
Output 2:
    7
*/
function lonhestConsecutiveOnes(A){
let leftOnes = [0];
let rightOnes = [];
let maxLen = 0;
let setAllZero = true;
    for(let i=0; i<A.length; i++){
        if(A[i] == 1)
        setAllZero = false;
    }
    if(setAllZero){
        return 0
    }
for(let i=1; i<A.length; i++){
    let count = 0;
    let e = i-1;
    while(e>=0){
            if(A[e] == 1)
            {
            count++;
            e--;
            }
            else {
                break;
            }
        }
    leftOnes.push(count);
}
for(let i=0; i<A.length; i++){
    let count = 0;
    let s = i+1;
    while(s<A.length){
            if(A[s] == 1)
            {
            count++;
            s++;
            }
            else {
                break;
            }
        }
        rightOnes.push(count);
}
for(let i=0; i<A.length; i++){
    if(A[i] == 0){
        let len = leftOnes[i] + rightOnes[i] + 1;
        maxLen = Math.max(maxLen, len)
    }
}
return maxLen;
}
// console.log(lonhestConsecutiveOnes("111011101"));
// console.log(lonhestConsecutiveOnes("111"));
console.log(lonhestConsecutiveOnes("0000"))
