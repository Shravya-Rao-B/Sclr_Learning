/*
1.

Given an integer A, you need to find the count of it's factors.

Factor of a number is the number which divides it perfectly leaving no remainder.

Example : 1, 2, 3, 6 are factors of 6


Problem Constraints
1 <= A <= 109


Input Format
First and only argument is an integer A.


Output Format
Return the count of factors of A.


Example Input
Input 1:
5
Input 2:
10


Example Output
Output 1:
2
Output 2:
4


Example Explanation
Explanation 1:
Factors of 5 are 1 and 5.
Explanation 2:
Factors of 10 are 1, 2, 5 and 10.

Hints:
Hint 1:
Factors exist from 1 to A inclusive.

Hint 2:
If A is divisible by i, then i and A/i are factors of A.
Be careful of overflow issues when iterating for factors.

Solution approach:
Iterate over all numbers from 1 to root(A). 
For each number check if A % i == 0.
If yes, then increment count by 1 if i * i == A or 
by 2 otherwise.

Time Complexity : O(√A)
Space Complexity : O(1)
*/

function countFactors(A){
    let counter = 0;
    for(let i=1; i*i <= A; ++i){
        if(i < A/i)
        {
        if(A % i == 0)
        counter = counter +2;
        }
        if(i == A/i)
        ++ counter;
    }
    return counter;
}

// console.log(countFactors(5));
// console.log(countFactors(10));
//Scaler Code
function countFactors(A) {
    let count = 0;
    for (let i = 1; i * i <= A; i++) {
      if (A % i == 0) {
        if (i * i == A)
          count += 1;
        else
          count += 2;
      }
    }
    return count;
  }
  
  module.exports = {
    //param A : integer
    //return an integer
    solve: function (A) {
      return countFactors(A);
    },
  };
/*
2.
Given a number A. Return 1 if A is prime and return 0 if not. 

Note : 
The value of A can cross the range of Integer.


Problem Constraints
1 <= A <= 1012


Input Format
The first argument is a single integer A.


Output Format
Return 1 if A is prime else return 0.


Example Input
Input 1:
A = 5
Input 2:

A = 10


Example Output
Output 1:
1
Output 2:

0


Example Explanation
Explanation 1:
5 is a prime number.
Explanation 2:

10 is not a prime number.

Hints:
Hint 1:
When is a number, Prime?  
1. When a number is not divisible by any integer other than 1 and itself.
OR
2. When number of factor count for any number is exactly 2.
When searching for prime numbers, be careful of overflows in the problem.Use appropriate typecasting or datatypes.

Hint 2:
When checking if a number is prime, it's not necessary to check all possible divisors.

Instead, try to focus on a specific range of divisors
that can help determine if the number is prime or not.

Solution Approach:
Prime Number : If Number is divisible by 1 and itself where (N > 2) then number is Prime Number. 

1. If Number is 1, it is not prime because 1 is not a prime number. 

2. Now, for any number A, if is divisible by any number between 2 to A-1, that means it is not a prime number 

3. But instead iteration from 2 to A-1, we will iterate from 2 to sqrt(A) [Think why?]. 

4. While we are iterating, if at any moment a number can divide A, that means A is not a prime number. 

5. After successful Iteration we can say number A is prime Number

*/
function isPrimeusingFactors(A){
    let b = parseInt(A);
    if(b ==1)
    return 0;
    let counter = 0;
    for(let i=1; i*i <= b ; ++i){
        if( i < b/i ){
            if( b % i == 0){
                counter = counter + 2;
            }
        }
        if ( i == b/i) {
            ++ counter;
        }
    }
    if(counter > 2)
    return 0
    if( counter == 2)
    return 1;
}
// console.log(isPrimeusingFactors(5));
// console.log(isPrimeusingFactors(10));

function isPrime(A){
    if (A === BigInt(1)) return 0;
        for (let i = BigInt(2); i * i <= BigInt(A); i++) {
            if (BigInt(A) % i === BigInt(0)) return 0;
        }
        return 1;
	};
// console.log(isPrime(5));
// console.log(isPrime(10));

/*
3.
Given a number A. Return square root of the number if it is perfect square otherwise return -1.

Note: A number is a perfect square if its square root is an integer.

Problem Constraints

1 <= A <= 108
Input Format

First and the only argument is an integer A.
Output Format

Return an integer which is the square root of A if A is perfect square otherwise return -1.
Example Input

Input 1:
A = 4
Input 2:

A = 1001
Example Output

Output 1:
2
Output 2:

-1
Example Explanation

Explanation 1:
sqrt(4) = 2
Explanation 2:

1001 is not a perfect square.

Hints:
Hint 1:
Calculate the square root of A
Check if the square of the calculate square root is equal to A. If it is, return the value of sqrt.
If the square of sqrt is not equal to A, return -1.

Solution Approach:
The Solution class is defined with a method solve that takes an integer A as a parameter.
The variable sqrt is assigned the value of the square root of A using the expression A**0.5.
The code checks if the square of sqrt is equal to A using the equality comparison sqrt * sqrt == A.
If the condition is True, it means that A is a perfect square, so the method returns the value of sqrt.
If the condition is False, it means that A is not a perfect square, so the method returns -1.
*/

/*
4.

Find the number of times below code runs where N is a perfect square
for i -> 1 to N
if(i * i == N)

Options:
N
N/2
sqrt(N)
logN

Ans:
sqrt(N)
*/

/*
5.
The sum of n natural numbers is :

Options:
(n*(n+1))/2
(n*(n-1))/2
(n+1)/2
(n*(n+1)*(2*n+1))/6

Ans:
(n*(n+1))/2
*/

/*
6.
You are given an integer A. You have to tell whether it is a perfect number or not.

Perfect number is a positive integer which is equal to the sum of its proper positive divisors.

A proper divisor of a natural number is the divisor that is strictly less than the number.



Problem Constraints
1 <= A <= 106



Input Format
First and only argument contains a single positive integer A.



Output Format
Return 1 if A is a perfect number and 0 otherwise.



Example Input
Input 1:

A = 4
Input 2:

A = 6


Example Output
Output 1:

0 
Output 2:

1 


Example Explanation
Explanation 1:

For A = 4, the sum of its proper divisors = 1 + 2 = 3, is not equal to 4.
Explanation 2:

For A = 6, the sum of its proper divisors = 1 + 2 + 3 = 6, is equal to 6. 

Hints:
Hint 1:
The simplest solution would be to loop through all the numbers from 1 to A. 
If it divides A then it is a factor of A.
Find all such numbers which are less than A and take its sum.

Hint 2:
The solution can be optimised even furthur. If A is divisible by i, then i and A/i both are factors of A.
The intended solution is in O(sqrt(A)).

Solution Approach:
To check if a number is perfect number or not, you can find all the factors of that number and check if their sum (excluding the number itself as a factor) is equal to the number itself or not.

To do that iterate from 1 to sqrt(A).
Lets say A is divisible by i, then i and A/i are factors of A.
The only thing left is to check i and A/i are not same and none of them is equal to A.
Finally take their sum.

Time Complexity : O(√A) Space Complexity : O(1)
*/

function perfectNumbersMe(A){
    if(A == 1){
        return 0;
    }
    let sum = 0;
    for(let i=1; i*i <=A; i++){
        if(A > A/i)
        {
        if(A % i == 0){
            sum = sum + i + A/i
        }
    }
    else if(i == A/i){
        sum = sum + i
    }
}
if(sum + 1 == A){
    return 1
}
else 
return 0
}
// console.log(perfectNumbersMe(4));
// console.log(perfectNumbersMe(6));

function perfectNumbers(A){
    if(A == 1){
        return 0;
    }
    let sum = 1;
    for (let j = 2; j * j <= A; j++){
        if(A % j == 0){
            sum += j;
            if(j != A / j){
                sum += A / j;
            }
        }
    }
    if(sum == A){
        return 1;
    }
    return 0;
}

// console.log(perfectNumbers(4));
// console.log(perfectNumbers(6));

/*
6.
You will be given an integer n. You need to return the count of prime numbers less than or equal to n.


Problem Constraints
0 <= n <= 10^3


Input Format
Single input parameter n in function.


Output Format
Return the count of prime numbers less than or equal to n.


Example Input
Input 1:
19
Input 2:
1


Example Output
Output 1:
8
Output 2:
0


Example Explanation
Explanation 1:
Primes <= 19 are 2, 3, 5, 7, 11, 13, 17, 19
Explanation 2:
There are no primes <= 1

Hints :
Hint 1:
Prime numbers are those numbers which have exactly 2 factors.
*/

function countOfPrimesMe(A){
    let cnt = 0;
    // Looping from 1 to A
    for(let i=1; i<=A; i++){
        let factors = 0;
        // Looping from 1 to i
        for(let j=1; j<=i; j++) {
            if(i % j == 0){
                factors++;
            }
        }
        if(factors == 2) {
            cnt++;
        }
    }
    return cnt;
}
// console.log(countOfPrimesMe(19));

/*
8.
Given two integers A and B. A represents the count of mangoes and B represent the count of slices of mangoes. Mango can be cut into three slices of mangoes. A glass of mango shake can be formed by two slices of mangoes.

Find the maximum number of glasses of mango shakes you can make with A mangoes and B slices of mangoes initially.


Input Format

The First argument is an integer A.
The Second argument is an integer B.
Output Format

Return the maximum number of glasses of mango shakes you can make.
Constraints

0 <= A, B <= 10^8
For Example

Input 1:
    A = 19
    B = 0
Output 1:
    28

Input 2:
    A = 7
    B = 1
Output 2:
    11

Hints:
Hint 1:
Count the total number of mango slices then find how many glasses of mango shake 
can be made from that. Use Multiplication and Division operations. 

Solution Approach:
A mangoes will give 3*A mango slices and total mango slices will became B+3*A;
answer if integer division of (B+3*A)/2
*/

function makeIt(A,B){
    let slices = A * 3 + B;
    return Math.floor(slices/2)
}
// console.log(makeIt(19,0));
// console.log(makeIt(7,1));

/*
9.
How many elements are there between [135, 246] (inclusive of them) ?

Options:
111
112
113
114

Ans:
112

Explanation:
The number of elements in the range[a,b] is
b - a + 1
246 - 135 + 1 = 112
*/

/*
10.
What is the number of times we need to divide N by 2 till it reaches 1 ?

Options:
ceil(logN)
floor(logN)
logN
n/2

Ans:
floor(logN)

Explanation:
Let N be the number (N>1) that you want to divide. Say that you have to divide it k times. Then
1 <= N / 2^k < 2
Therefore, 
0 = log1 <= -k + logN < log2 = 1
k <= logN < k + 1
k = floor(logN)
*/

