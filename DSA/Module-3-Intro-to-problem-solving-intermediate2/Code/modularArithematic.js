/*
1.
You are given A, B and C .
Calculate the value of (A ^ B) % C


Problem Constraints
1 <= A <= 109
0 <= B <= 105
1 <= C <= 109


Input Format
Given three integers A, B and C.


Output Format
Return an integer.


Example Input
Input 1:
A = 2
B = 3
C = 3
Input 2:
A = 5
B = 2
C = 4


Example Output
Output 1:
2
Output 2:
1


Example Explanation
For Input 1:
(2 ^ 3) % 3 = 8 % 3 = 2
For Input 2:
(5 ^ 2) % 4 = 25 % 4 = 1

Hints:
You can just simulate the entire process.
Keep a watch on integer overflow

Solution approach:
We will have to find the value of (A ^ B) % C.
We initialize our result with 1 and then traverse 
a loop B times and multiply A to our result everytime.
We keep doing modulo C in every step to prevent overflow.

Time Complexity : O(B)
Space Complexity : O(1)

*/

function powerWithModules(A, B, C){
    let ans = 1n;
    for(let i=0; i<B; i++){
        ans = (ans * BigInt(A)) % BigInt(C)
    }
    return Number(ans);
	}
// console.log(powerWithModules(2,3,3));

/*
2.
You are given a large number in the form of a array A of size N where each element denotes a digit of the number.
You are also given a number B. You have to find out the value of A % B and return it.



Problem Constraints
1 <= N <= 105
0 <= Ai <= 9
1 <= B <= 109


Input Format
The first argument is an integer array A.
The second argument is an integer B.


Output Format
Return a single integer denoting the value of A % B.


Example Input
Input 1:
A = [1, 4, 3]
B = 2
Input 2:

A = [4, 3, 5, 3, 5, 3, 2, 1]
B = 47


Example Output
Output 1:
1
Output 2:

20


Example Explanation
Explanation 1:
143 is an odd number so 143 % 2 = 1.
Explanation 2:

43535321 % 47 = 20

Hints:
How can you use the distributive properties of modular arithmetic to solve this problem?
The properties we need here are:
We can use the two following properties:

(a * b) mod x = [(a mod x) * (b mod x)] mod x

(a + b) mod x = [(a mod x) + (b mod x)] mod x

Solution Approach:
We can use the two following properties:

(a * b) mod x = [(a mod x) * (b mod x)] mod x

(a + b) mod x = [(a mod x) + (b mod x)] mod x


We can represent a number [a, b, c, d] as (a * 1000) + (b * 100) + (c * 10) + (d * 1).
We can use the above properties of modular arithmetic to solve the problem.

We will iterate from the end of the array (least significant digit).
We will keep a variable that will store the values of powers of 10 modulo B at every step.
Then, we will perform the operations accordingly.
Be careful of integer overflows.

Refer to the complete solution for more implementation details.

Time Complexity : O(N)
Space Complexity : (1)
*/

function modArray(A, B){
    let n = A.length;
    let ans = 0;
    let t = 1n;
    for(let i=n-1; i>=0; i--){
        let x = (t * BigInt(A[i])) % BigInt(B)
        ans = (BigInt(ans) + x) % BigInt(B)
        t = (t * 10n) % BigInt(B)
    }
    return Number(ans); 
        }

// console.log(modArray([1,4,3],2));
// console.log(modArray([4, 3, 5, 3, 5, 3, 2, 1],47));

/*
3.
Given a number in the form of an array A of size N. Each of the digits of the number is represented by A[i]. Check if the number is divisible by 3.


Problem Constraints
1 <= N <= 105

0 <= A[i] <= 9

A[1] ≠ 0



Input Format
Given an integer array representing the number



Output Format
Return 1 if the number is divisible by 3 and return 0 otherwise.



Example Input
Input 1:
A = [1, 2, 3]
Input 2:
A = [1, 0, 0, 1, 2]


Example Output
Output 1:
1
Output 2:
0


Example Explanation
For Input 1:
The number 123 is divisible by 3.
For Input 2:
The number 10012 is not divisible by 3.

Hints:
Whether a number is divisible by 3 can be found out
by calculating the sum of its digits.

Solution Approach:
We will calculate the sum of all the digits of the number. 
If the sum is divisble by 3, then our number is divisible by 3.
Otherwise, it is not divisible by 3.

Time Complexity : O(N)
Space Complexity : O(1)
*/

function divisibleByThree(A){
    let n = A.length;
    let ans = 0;
    let t = 1n;
    for(let i=n-1; i>=0; i--){
        let x = (t * BigInt(A[i])) % 3n
        ans = (BigInt(ans) + x) % 3n
        t = (t * 10n) % 3n
    }
    if(Number(ans) == 0)
    return 1
    return 0;
        }
// console.log(divisibleByThree([1,2,3]));
// console.log(divisibleByThree([1, 0, 0, 1, 2]));
/*
4.
Given an integer A representing a year, Return 1 if it is a leap year else, return 0.

A year is a leap year if the following conditions are satisfied:

The year is multiple of 400.
or the year is multiple of 4 and not multiple of 100.

Problem Constraints

1 <= A <= 109



Input Format

First and only argument is an integer A



Output Format

Return 1 if it is a leap year else return 0



Example Input

Input 1

 A = 2020
Input 2:

 A = 1999


Example Output

Output 1

 1
Output 2:

 0


Example Explanation

Explanation 1

 2020 is a leap year. 
 2020 is not a multiple of 400 but it is divisible by 4 and also at the same time not divisible by 100.
Explanation 2:

 1999 is not a leap year.
 199 is not a multiple of 400. It is not divisible by 4 and also at the same time not divisible by 100.
 All the conditions fail.

Hints:
Write the Python code that gets a paramater A from the function solve() and prints if an year is a leap year or not.

The algorithm uses a series of conditions to determine if a given year is a leap year or not.
Pay attention to the order of the conditions. The conditions are checked in a specific order, and once a condition is satisfied, the corresponding result is returned. Think of using nedted if-else statements.
Think about the purpose of each condition. Each condition checks a specific divisibility rule for leap years.
Consider the concept of leap years and how they are defined. This will help in understanding the conditions used to identify leap years.

Solution Approach:
Here is a step by step explanation of the code

A function solve() is defined
The function solve() takes a parameter ‘A’.
Check if ‘A’ is divisible by 400 by using the condition A%400 == 0.
If true, return 1, indicating that ‘A’ is a leap year.
If step 2 is false, check if ‘A’ is divisible by 100 by using the condition A%100 == 0.
If true, return 0, indicating that ‘A’ is not a leap year.
If step 3 is false, check if ‘A’ is divisible by 4 by using the condition A%4 == 0.
If true, return 1, indicating that ‘A’ is a leap year.
If none of the previous conditions are met, return 0, indicating that ‘A’ is not a leap year.

*/
function checkifLeapYear(A){
    if((A % 400 == 0) || (A % 4 == 0 && A%100 != 0))
    return 1
    return 0
}
// console.log(checkifLeapYear(2020));
// console.log(checkifLeapYear(2019));
/*
5.
You are given a number A in the form of a string. Check if the number is divisible by eight or not.

Return 1 if it is divisible by eight else, return 0.


Problem Constraints
1 <= length of the String <= 100000
'0' <= A[i] <= '9'


Input Format
The only argument given is a string A.


Output Format
Return 1 if it is divisible by eight else return 0.


Example Input
Input 1:
A = "16"
Input 2:

A = "123"


Example Output
Output 1:
1
Output 2:

0


Example Explanation
Explanation 1:
 16 = 8 * 2
Explanation 2:

123 = 15 * 8 + 3

Hints:
Since the input number may be huge, we cannot use n % 8 to check if a number is divisible by eight or not, especially in languages like C/C++. The idea is based on the following fact.

Scaler Solution:
function(A){
	    
    	function check_divisible(A) {
            
            let num = Number(A);
            if(num % 8 == 0)
                return 1;
            else
                return 0;
        }
        
	    let n = A.length;
	    
	    if( n == 1) {
	        return check_divisible(A.substr(n-1,n));
	    }
	    else if( n == 2) {
	        return check_divisible(A.substr(n-2,n));
	    }
	    else
	        return check_divisible(A.substr(n-3,n));
	}
*/
function divisbleByEight(A){
    if (BigInt(A)%BigInt(8) ==0 )
    return 1;
    return 0;
}
// console.log(divisbleByEight("16"));
// console.log(divisbleByEight("123"));
/*
6.
Given three 2-digit integers, A, B, and C, find out the minimum number obtained by concatenating them in any order.

Return the minimum result obtained.

Problem Constraints
10 <= A, B, C <= 99

Input Format
The first argument of input contains an integer, A.

The second argument of input contains an integer, B.

The third argument of input contains an integer, C.



Output Format
Return an integer representing the answer.



Example Input
Input 1:

 A = 10
 B = 20
 C = 30
Input 2:

 A = 55
 B = 43
 C = 47 


Example Output
Output 1:

 102030 
Output 2:

 434755 


Example Explanation
Explanation 1:

 10 + 20 + 30 = 102030 
Explanation 2:

 43 + 47 + 55 = 434755 

 Hints:
 There are only 3! = 6 ways of arranging the numbers.

You can generate and compare all.

The general solution is easy to see though.

Solution Appraoch:
The minimum number will always be formed if the smallest number is taken first, the second smallest is taken second, and the largest is taken last.

This will be true only if the numbers have the same length.

So, you can also sort the numbers and concatenate them to get the answer.

Scaler Solution:
module.exports = { 
 //param A : integer
 //param B : integer
 //param C : integer
 //return an integer
	solve : function(A, B, C){
        if(A <= B && B <= C)
            return A*10000 + B*100 + C;
        else if(A <= C && C <= B)
            return A*10000 + C*100 + B;
        else if(B <= A && A <= C)
            return B*10000 + A*100 + C;
        else if(B <= C && C <= A)
            return B*10000 + C*100 + A;
        else if(C <= A && A <= B)
            return C*10000 + A*100 + B;
        else
            return C*10000 + B*100 + A;
	}
};

*/
