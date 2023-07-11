// function bitXor(A){
// let ans = 0 ;
// for(let i=0; i<A.length; i++){
//     console.log('ans previously', ans);
//     console.log('current item of the array', A[i])
//     ans = ans ^ (A[i])
//     console.log('ans later', ans);
// }
// return ans;
// }

// console.log(bitXor([1,1,3,7,2,2,3]));

/*
1.
Given an array of positive integers A, two integers appear only once, and all the other integers appear twice.
Find the two integers that appear only once.

Note: Return the two numbers in ascending order.


Problem Constraints
2 <= |A| <= 100000
1 <= A[i] <= 109



Input Format
The first argument is an array of integers of size N.



Output Format
Return an array of two integers that appear only once.



Example Input
Input 1:
A = [1, 2, 3, 1, 2, 4]
Input 2:

A = [1, 2]


Example Output
Output 1:
[3, 4]
Output 2:

[1, 2]


Example Explanation
Explanation 1:
3 and 4 appear only once.
Explanation 2:

1 and 2 appear only once.

Hints:
Hint 1:
How can we use the properties of the XOR operator to solve this problem?
Remember, XOR of 2 same numbers is 0.

Solution Approach:
If we use additional memory, we can directly store the count and find the integers which occur only once.
To solve without additional memory, We can use the xor operation, as the Xor of two integers gives 0.
Take the Xor of all the integers of the array. Integers that occur twice will not contribute anything to the xor value.
Suppose that the ith bit is set in the xor value, which means that exactly one of the two required numbers has that bit set.
If we then divide the array integers into two groups: one group contains all integers with the ith bit set, and the other group contains integers with 0 at the ith bit.
Each group includes one of the two required numbers, and for the rest of the numbers, both of their occurrences will be in the same group.
Now, Xor of integers in the first group gives a number that occurs exactly once. Xor of integers in the second group provides another number that appears exactly once.

*/
function bruteForceSingleNumberIII(A){
    let ans = [];
    for(let i=0; i<A.length; i++){
      let currElement = A[i];
      let count = 1;
      for(let j=0; j<A.length; j++){
        if(A[j] == currElement && i!==j){
            count++;
        }
      }
      if(count < 2){
        ans.push(currElement)
      }  
    }
    return ans;
}
// console.log(bruteForceSingleNumberIII([1, 2, 3, 1, 2, 4]));
// console.log(bruteForceSingleNumberIII([1, 2]));
//TC: Big O(n2)
//SC: O(1)

function bruteForceSingleNumberHashmap(A){
    let ans = [];
    let hashMap = new Map();
    for(let i=0; i<A.length; i++){
        if(hashMap.has(A[i])){
            hashMap.set(A[i], hashMap.get(A[i]) + 1)
        }
        else {
            hashMap.set(A[i], 1)
        }
    }
    for(let i=0; i<A.length; i++){
        if(hashMap.get(A[i]) == 1){
            ans.push(A[i])
        }
    }
    return ans;
}

// console.log(bruteForceSingleNumberHashmap([1, 2, 3, 1, 2, 4]));
// console.log(bruteForceSingleNumberHashmap([1,2]));
//SC: Big O(n)
// TC: Big O(n)

function singleNumberIII(A){
function checkSetBit(num,bit){
return ((num>>bit)& 1 == 1)
}
 let a = 0;
 let b = 0;
 let v =0;
 let pos = 0;
 //XOR all elements
 for(let i=0; i<A.length;i++){
    v= v^A[i];
 }
 //Find any set bit position
 for(let i=0; i<32; i++){
 if(checkSetBit(v,i)){
  pos = i; 
  break; 
 }
 }
 //if pos'th bit is set XOR with a, else with b
 for(let i=0; i<A.length; i++){
    if(checkSetBit(A[i],pos)){
        a = a ^ A[i]
    }
    else {
        b = b ^ A[i]
    }
 }
 if(a < b)
 return [a,b]
 return [b,a]
}
// console.log(singleNumberIII([1, 2, 3, 1, 2, 4]));
// console.log(singleNumberIII([2308,1447,1918,1391,2308,216,1391,410,1021,537,1825,1021,1729,669,216,1825,537,1995,805,410,805,602,1918,1447,90,1995,90,1540,1161,1540,2160,1235,1161,602,880,2160,1235,669]))

/*
2.
Given an array A. For every pair of indices i and j (i != j), find the maximum A[i] & A[j].


Problem Constraints
1 <= len(A) <= 105
1 <= A[i] <= 109


Input Format
The first argument is an integer array A.


Output Format
Return a single integer that is the maximum A[i] & A[j].


Example Input
Input 1:-
A = [53, 39, 88]
Input 2:-
A = [38, 44, 84, 12] 


Example Output
Output 1:-
37
Output 2:-
36


Example Explanation
Explanation 1:-
53 & 39 = 37
39 & 88 = 0
53 & 88 = 16
Maximum among all these pairs is 37
Explanation 2:-
Maximum bitwise and among all pairs is (38, 44) = 36

Hints:
Hint 1:
2^i is larger than sum of all 2^j for j in range(0,i-1). 
So try to greedily include the largest bits in the final answer and minimize the array.

Solution Approach:
2^i is larger than sum of all 2^j for j in range(0,i-1). 
So try to greedily include the largest bits in the final answer and minimize the array.

Iterate from the largest possible bit to smallest bit 0. Create another empty set of numbers say st.
Iterate over the current set of numbers, if the number has the current bit set then include this number in st.
If size of st is greater than 1 that is atleast one pair is possible then replace current set with st. 
Else continue to next bit.
Finally after and of any two elements in the current set will have the largest ands as we have removed the lower and pairs.

Time Complexity - O(32 * N). Since there can be upto 32 bits, we iterate and 
create new sets 32 times reducing the set everytime.
Space Complexity - O(N)
*/
function maxAND(A){
    let ans =0;
    function checkSetBit(num, bit){
        return ((Number(num)>>Number(bit))&1 == 1)
    }
    for(let bit=31; bit>=0; bit--) {
        let setBitCount = 0;
    for(let j=0; j<A.length; j++){
        if(checkSetBit(A[j],bit)){
            setBitCount++
        }
    }
    if(setBitCount > 1){
        console.log('setBitCount, bit', setBitCount, bit);
        let leftShift = 1<<bit
        ans = ans + leftShift;
        for(let k=0; k<A.length;k++){
            if(!checkSetBit(A[k],bit)){
                A[k] = 0
            }
        }
    }
}
return ans;
}
// console.log(maxAND([53, 39, 88]));
// console.log(maxAND([38, 44, 84, 12] ));
/*
3.
Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.

NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?



Problem Constraints
1 <= |A| <= 2000000

0 <= A[i] <= INTMAX



Input Format
The first and only argument of input contains an integer array A.



Output Format
Return a single integer denoting the single element.



Example Input
Input 1:

 A = [1, 2, 2, 3, 1]
Input 2:

 A = [1, 2, 2]


Example Output
Output 1:

 3
Output 2:

 1


Example Explanation
Explanation 1:

3 occurs once.
Explanation 2:

1 occurs once.

Hints:
Let us look at every bit’s position.

Every number that occurs twice will either contribute 2 ‘1’s or 2 ‘0’s to the position.

The number that occurs once-‘X’ will contribute exactly one 0 or 1 to the position depending on whether it has 0 or 1 in that position.

So:

If X has 1 in that position, we will have an odd number of 1s in that position.

If X has 0 in that position, we will have an odd number of 0s in that position.

Can you think of a solution using the above observation?

Solution Appraoch:
We have noticed that if X has 1 in that position, we will have an odd number of 1s in that position.

If X has 0 in that position, we will have an odd number of 0 in that position.

Looking at the bit operators, XOR is what we need.

XOR will return 1 only on two different bits. So if two numbers are the same, XOR will return 0.

Finally, there is only one number left.

A ^ A = 0 and A ^ B ^ A = B.

So, all the even occurrences will cancel out using XOR.

Time Complexity : O(n)
Space Complexity(extra) : O(1)
*/

function singleNumber(A){
    let v = 0;
    for(let i=0; i<A.length; i++){
        v = BigInt(v)^BigInt(A[i])
    }
    return Number(v);
}
// console.log(singleNumber([1, 2, 2, 3, 1]));
// console.log(singleNumber([1, 2, 2]));

/*
4.
Given an array of integers, every element appears thrice except for one, which occurs once.

Find that element that does not appear thrice.

NOTE: Your algorithm should have a linear runtime complexity.

Could you implement it without using extra memory?




Problem Constraints
2 <= A <= 5*106

0 <= A <= INTMAX



Input Format
First and only argument of input contains an integer array A.



Output Format
Return a single integer.



Example Input
Input 1:

 A = [1, 2, 4, 3, 3, 2, 2, 3, 1, 1]
Input 2:

 A = [0, 0, 0, 1]


Example Output
Output 1:

 4
Output 2:

 1


Example Explanation
Explanation 1:

 4 occurs exactly once in Input 1.
 1 occurs exactly once in Input 2.

 Hints:
 Let us look at every bit position.

Every number that occurs thrice will either contribute 3 ‘1’s or 3 ‘0’s to the position.

The number that occurs once X will contribute exactly one 0 or 1 to the position depending on whether it has 0 or 1 in that position.

So:

If X has 1 in that position, we will have (3x+1) number of 1s in that position.
If X has 0 in that position, we will have (3x+1) number of 0s in that position.
Can you think of a solution using the above observation?

Solution Approach:
Find count of set-bits for all bit positions one by one for all numbers.
If, for ith bit -
count of set-bits % 3 is equal to 0, that means ith bit in the number is unset.
count of set bits % 3 is equal to 1, that means ith bit in the number is set.
*/

function singleNumberII(A){
    function checkBit(num,bit){
        return ((num>>bit)&1 == 1)
    }
    let ans = 0;
    for(let bit=0; bit<32; bit++){
        let cnt = 0;
        for(let j = 0; j<A.length; j++){
            if(checkBit(A[j],bit))
            {
            cnt = cnt + 1
            }
        }
        if(cnt % 3 == 1){
            // console.log('cnt, bit, 1<<bit',cnt, bit, 1<<bit)
            ans = ans + (1<<bit)
            // console.log('ans', ans);
        }
    }
    return ans;
}
// console.log(singleNumberII([1, 2, 4, 3, 3, 2, 2, 3, 1, 1]));
// console.log(singleNumberII([0, 0, 0, 1]));
// console.log(singleNumberII([890,992,172,479,973,901,417,215,901,283,788,102,726,609,379,587,630,283,10,707,203,417,382,601,713,290,489,374,203,680,108,463,290,290,382,886,584,406,809,601,176,11,554,801,166,303,308,319,172,619,400,885,203,463,303,303,885,308,460,283,406,64,584,973,572,194,383,630,395,901,992,973,938,609,938,382,169,707,680,965,726,726,890,383,172,102,10,308,10,102,587,809,460,379,713,890,463,108,108,811,176,169,313,886,400,319,22,885,572,64,120,619,313,3,460,713,811,965,479,3,247,886,120,707,120,176,374,609,395,811,406,809,801,554,3,194,11,587,169,215,313,319,554,379,788,194,630,601,965,417,788,479,64,22,22,489,166,938,66,801,374,66,619,489,215,584,383,66,680,395,400,166,572,11,992]))