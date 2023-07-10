/*
1.
Given two binary numbers A = 1001011 and B = 11001001. What is their sum?

Options:

100100100
100010100
101000100
100010010

Ans:100010100

*/

/*
2.
Which of the following is the correct conversion of 10101101(base 2) to decimal?

Options:
175
173
171
169

Ans:
173
*/

/*
3.
Which of the following is a correct conversion of 76 (base 10) to binary?

Options:
1010000
1001010
1001100
1001110

Ans:
1001100
*/

/*
3.

Given a = 1010011 and b = 1001001, their OR, XOR and AND are -

Options:
OR = 1011011 , XOR = 0011010 , AND = 1000001
OR = 1011101 , XOR = 1011010 , AND = 1000001
OR = 1011011 , XOR = 1000001 , AND = 0011010
OR = 1011101 , XOR = 1000001 , AND = 0011010

Ans:
OR = 1011011 , XOR = 0011010 , AND = 1000001

Steps tried:
1010011
1001001

OR: 1011011
XOR:0011010
AND:1000001
*/

/*
5.
If a&1 = 1, then a is?

Options:
even
odd
can be either odd or even

Ans:
odd
*/

/*
6.
What are the values of a&a, a|a, a^a?

Options:
a&a = a , a|a = a , a^a = a
a&a = a , a|a = a , a^a = 0
a&a = 0 , a|a = a , a^a = a
a&a = 0 , a|a = a , a^a = 0

Ans:
a&a = a , a|a = a , a^a = 0
*/

/*
7.
You are given a number A. You are also given a base B. A is a number on base B.
You are required to convert the number A into its corresponding value in decimal number system.


Problem Constraints
0 <= A <= 109
2 <= B <= 9


Input Format
First argument A is an integer.
Second argument B is an integer.


Output Format
Return an integer.


Example Input
Input 1:
A = 1010
B = 2
Input 2:
A = 22 
B = 3


Example Output
Output 1:
10
Output 2:
8


Example Explanation
For Input 1:
The decimal 10 in base 2 is 1010.
For Input 2:
The decimal 8 in base 3 is 22.

Hints:
Can we extract each digit from A and
multiply it with some powers of B to get 
our final result ?

Solution appraoch:
We extract 1 digit from the end of the number A and 
multiply it with the respective power of the given base 
B and finally add it to the answer. This process continues 
until the number A becomes 0, i.e. all the digits of A have 
been extracted.

Time Complexity : O(logA)
Space Complexity : O(1)
*/

function anyBaseToDecimal(A,B){
    let res = 0, multiplier = 1;
    while (A > 0) {
      let digit = A % 10;
      res += multiplier * digit;
      A = Math.floor(A / 10);
      multiplier *= B;
    }
    return res;
}
// console.log(anyBaseToDecimal(1010,2));
// console.log(anyBaseToDecimal(22,3));
/*

/*
8.
Given a decimal number A and a base B, convert it into its equivalent number in base B.


Problem Constraints
0 <= A <= 512
2 <= B <= 10


Input Format
The first argument will be decimal number A.
The second argument will be base B.


Output Format
Return the conversion of A in base B.


Example Input
Input 1:
A = 4
B = 3
Input 2:
A = 4
B = 2 


Example Output
Output 1:
11
Output 2:
100


Example Explanation
Explanation 1:
Decimal number 4 in base 3 is 11.
Explanation 2:
Decimal number 4 in base 2 is 100. 

Hints:
repeatedly divide A by the base B and note the remainders at each step.

Solution Approach:
Step 1:- Divide the decimal number to be converted by the value of the new base.
Step 2:- Get the remainder from Step 1 as the rightmost digit (least significant digit) of new base number.
Step 3:− Divide the quotient of the previous divide by the new base.
Step 4 − Record the remainder from Step 3 as the next digit (to the left) of the new base number.

*/
function decimalToAnyBase(A, B){
    let pow = 1;
    let ans = 0;
    while (A > 0) {
      let digit = A % B;
      ans += digit * pow;
      pow *= 10;
      A = Math.floor(A / B);
    }
    return ans;
}
// console.log(decimalToAnyBase(4,3));
// console.log(decimalToAnyBase(4,2));

/*
9.
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

Solution Approach:
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
    let ans = 0;
    for(let i=0; i<A.length; i++){
        ans = BigInt(BigInt(ans) ^ BigInt(A[i]))
    }
    return Number(ans);
}
// console.log(singleNumber([1, 2, 2, 3, 1]));
// console.log(singleNumber([1,2,2]));

/*
10.
Given two integers A and B. Find the minimum value (A ⊕ X) + (B ⊕ X) that can be achieved for any X.

where P ⊕ Q is the bitwise XOR operation of the two numbers P and Q.

Note: Bitwise XOR operator will return 1, if both bits are different. If bits are same, it will return 0.


Problem Constraints
1 <= A, B <= 109


Input Format
The first argument is a single integer A.
The second argument is a single integer B.


Output Format
Return the minimum value (A ⊕ X) + (B ⊕ X) that can be achieved for any X.


Example Input
Input 1:-
A = 6
B = 12
Input 2:-
A = 4
B = 9


Example Output
Output 1:-
10
output 2:-
13


Example Explanation
Expanation 1:-
X ^ A + X ^ B = 10 when X = 4
Explanation 2:-
X ^ A + X ^ B = 13 when X = 0

Hints:
We can choose any X. So lets try to choose optimally. Say for any ith bit in binary values of A and B, the bit is set for both A and B.
Then we can also set it in X such that XOR with both becomes 0.
Similarly, if for both A and B the bit was unset, we unset it for X as well. XOR of that bit remains 0.
Now try to think if the bit is set for one and unset for other what will X and our result be.

Solution Approach:
We can choose any X. So lets try to choose optimally. Say for any ith bit in binary values of A and B, the bit is set for both A and B.
Then we can also set it in X such that XOR with both becomes 0.
Similarly, if for both A and B the bit was unset, we unset it for X as well. XOR of that bit remains 0.
Now try to think if the bit is set for one and unset for other what will X and our result be.

That's right doesnt matter if the bit is set or unset that bit will be added to our answer as either A ^ X != 0 or B ^ X != 0 for that bit.
Now did you take the observation? If we are adding a bit to out answer if that bit is set for one number and unset for another,
then it is A ^ B operation itself. So A ^ B is our answer.

*/
function XORSum(A,B){
    return (A^B); 
}
// console.log(XORSum(6,12));
// console.log(XORSum(4,9));
/*
11.
You have an array A with N elements. We have two types of operation available on this array :
We can split an element B into two elements, C and D, such that B = C + D.
We can merge two elements, P and Q, to one element, R, such that R = P ^ Q i.e., XOR of P and Q.
You have to determine whether it is possible to convert array A to size 1, containing a single element equal to 0 after several splits and/or merge?



Problem Constraints
1 <= N <= 100000

1 <= A[i] <= 106



Input Format
The first argument is an integer array A of size N.



Output Format
Return "Yes" if it is possible otherwise return "No".



Example Input
Input 1:

 A = [9, 17]
Input 2:

 A = [1]


Example Output
Output 1:

 Yes
Output 2:

 No


Example Explanation
Explanation 1:

 Following is one possible sequence of operations -  
 1) Merge i.e 9 XOR 17 = 24  
 2) Split 24 into two parts each of size 12  
 3) Merge i.e 12 XOR 12 = 0  
 As there is only 1 element i.e 0. So it is possible.
Explanation 2:

 There is no possible way to make it 0.

 Hints:
Xor has a property that A XOR A = 0.
Can we use this property to check if the answer is possible or not?

Solution Approach:
If any element in the array is even then, it can be made 0. Split that element into two equal parts of A[i]/2 and A[i]/2. XOR of two identical numbers is zero. Therefore this strategy makes an element 0.

If any element is odd. Split it in two-part: 1, A[i]-1. Since A[i]-1 is even, it can be made 0 by the above strategy. Therefore an odd element can reduce its size to 1.

Therefore, two odd elements can be made 0 by following the above strategy and finally XOR them (i.e., 1) as 1 XOR 1 = 0.

Therefore if the number of odd elements in the array is even, the answer is possible. Otherwise, an element of value 1 will be left, and it is impossible to satisfy the condition.

Ans explanation:
if the element is even, it can be made 0 by xor operator. A^A is always 0.
If the elemt is odd, it can be split as A[i]-1 + 1
if the number of odd integers is even, then all the 1s can later be added and then array can be made 0
if the number of odd integers is not even, there'll be 1 left and we cannot make array 0.
*/

function interestingArray(A){
    let countOfOdds = 0;
    if(A.length <=1){
        'No'
    }
    for(let i=0; i<A.length; i++){
        if(A[i] % 2 != 0)
        {
            countOfOdds++;
        }
    }
    if(countOfOdds % 2 == 0)
    {
    return 'Yes'
    }
    else
    return 'No'
}
// console.log(interestingArray([9,17]));
// console.log(interestingArray([5030,7120,5995,237,7582,8476,2174,8787,7611,6616,4640,8907,2164,
//     2753,8246,3858,8795,2762,3378,1527,4725,8119,4447,4834,8465,3253,5664,4404,3114,8380,7844,
//     7975,8413,8338,1682,6535,5500,5400,4160,1849,9472,3114,8330,1255,753,4995,4090,7392,4297,65,
//     384,2354,847,3906,4016,4424,3316,709,6140,5437,2440,2189,130,5699,9506,1243,2862,1141,6659,
//     964,7918,5976,5490,9903,9106,2042,2676,3231,3580,299,9134,8663,5389,3268,6394,3092,5235,5109,
//     6224,3314,4611,5381,6032,230,5363,3807,3176,4085,966,2880,2591,9157,2971,8330,692,5620,7286,665,
//     7865,6799,1393,4977,3075,2960,5979,9158,7903,4771,8390,5238,9661,9410,4020,9300,2499,6477,6404,
//     8553,6809,2659,1930,2559,763,2818,9021,5318,9321,286,4721,8026,8236,7179,5207,6036,5518,3781,4672,
//     4357,1274,2218,2158,3079,6340,8790,7674,4099,9847,424,3323,7658,2716,2036,6562,1319,5228,433,1287,
//     6290,5199,2479,770,5397,6168,1824,1119,7176,8299,3045,6480,7447,764,3381,1095,1318,8162,4862,6442,
//     3061,6213,9495,9439,5961,7153,2888,7218,4371,7009,6645,3701,8882,666,9485,8833,3391,4508,1982,4984,
//     6911,711,1902,9143,7240,5051,1199,7843,3519,9739,7046,4694,4537,1014,5507,6184,3731,9066,2129,3345,
//     145,5094,4371,7354,6262,9790,8190]))

/*
12.
Given an array B of length A with elements 1 or 0. Find the number of subarrays such that the bitwise OR of all the elements present in the subarray is 1.
Note : The answer can be large. So, return type must be long.



Problem Constraints
1 <= A <= 105


Input Format
The first argument is a single integer A.
The second argument is an integer array B.


Output Format
Return the number of subarrays with bitwise array 1.


Example Input
Input 1:
 A = 3
B = [1, 0, 1]
Input 2:
 A = 2
B = [1, 0]


Example Output
Output 1:
5
Output2:
2


Example Explanation
Explanation 1:
The subarrays are :- [1], [0], [1], [1, 0], [0, 1], [1, 0, 1]
Except the subarray [0] all the other subarrays has a Bitwise OR = 1
Explanation 2:
The subarrays are :- [1], [0], [1, 0]
Except the subarray [0] all the other subarrays has a Bitwise OR = 1

Hints:
We know that if all the elements of a subarray are 0, then bitwise OR of that subarray will be equal to 0.
So, can you find the number of subarrays with bitwise OR 0.

And, apply the formula -

Number of subarrays with bitwise OR 1 = Total no. of subarrays - no. of subarrays with bitwise OR 0.

Note: Be careful to handle overflow issues.

Solution Approach:
If the array size is A -
Total number of subarrays are = A(A+1)/2

To find the number of subarrays with bitwise OR 0, find the subarrays with all elements equal to 0.
So, basically consider group of consecutive 0’s and their contribution in the count of subarrays.

Let’s assume the given array is - [1, 0, 0, 0, 1]
There is one group with three consecutive zeroes. Out of this group, number of subarrays with all elements equal to zero are 3*(3+1)/2 = 6.
And the 6 subarrays are -
subarray from index 1 to 1
subarray from index 1 to 2
subarray from index 1 to 3
subarray from index 2 to 2
subarray from index 2 to 3
subarray from index 3 to 3

So, if there are x consecutive zeroes, add x(x+1)/2 in the count of subarrays with all elements equal to 0.

So, finally the approach is -

count = 0 (count is representing the count of subarrays with bitwise OR 0)
zeroes = 0 (zeroes is representing the count of continuous zeroes)
iterate on all the elements of the array
if ith element is 0 -> zeroes += 1
if ith element is 1 -> count += (zeroes * (zeroes + 1)) / 2 and reset zeroes to 0
Final ans will be A(A+1)/2 - count
*/
function subArraysWithBitOR1(A,B){
 let zerosCount = 0;
 let cnt = 0;
 for(let i=0; i<B ; i++){
    if(A[i] == 0){
        zerosCount++; 
    }
    else if(A[i] !== 0){
       cnt = cnt + (zerosCount * (zerosCount + 1))/2
       zerosCount = 0;
    }
 }
 //For cases when there are Zeros at the end of the array. eg: [1,0,0,0,1,0,0]
 cnt = cnt + (zerosCount * (zerosCount + 1))/2
 return (B *(B+1)/2)  - cnt;
}
// console.log(subArraysWithBitOR1([0,1,1,0,1], 5));
// console.log(subArraysWithBitOR1([0,1,0,0,0],5))
// console.log(subArraysWithBitOR1([0,0,1],3));

/*
13.

Given a=10, what will be the 0-th bit in a|1 ?

Options:
0
1
Cannot be determined

Ans:
1
*/

/*
14.

What happens to the 0-th bit in a when we perform a = a^1 ?

Options:
It gets toggled
It gets unset
It gets set
It remains same

Ans:
It gets toggled
*/