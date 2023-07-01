/*
1.
Implement pow(A, B) % C.
In other words, given A, B and C, Find (AB % C).
Note: The remainders on division cannot be negative. In other words, make sure the answer you return is non-negative.

Problem Constraints
-109 <= A <= 109
0 <= B <= 109
1 <= C <= 109

Input Format
Given three integers A, B, C.

Output Format
Return an integer.

Example Input
Input 1:
A = 2
B = 3
C = 3
Input 2:
A = 3
B = 3
C = 1

Example Output
Output 1:
2
Output 2:
0

Example Explanation
Explanation 1:
23 % 3 = 8 % 3 = 2
Explanation 2:
33 % 1 = 27 % 1 = 0

Expected Output
Enter your input as per the following guideline:
There are 3 lines in the input

Line 1 ( Corresponds to arg 1 ) : A single integer

Line 2 ( Corresponds to arg 2 ) : A single integer

Line 3 ( Corresponds to arg 3 ) : A single integer

Hints:
Hint 1:
You need to develop a solution better than O(n).
Think recursively. You can think of an example like 2^8. 
How many multiplications do you really need to evaluate 2^8?

Solution Approach 1:
There are two important things to note here:
1) Overflow situation: Note that if x is large enough, multiplying x to the answer might overflow in integer.
2) Multiplying x one by one to the answer is O(n). We are looking for something better than O(n).

If n is even, note the following:
x ^ n = (x * x) ^ n/2
Can you use the above observation to develop a solution better than O(n)?
*/

// function powerFunc(A, B, C){  //(2,3,3)
// console.log('current A, B, C', A, B, C)
// if(A == 0){
//     return 0;
// }
// if(B == 0){
//     return 1
// }
// else {
//     let p =  BigInt(powerFunc(A, B/2, C));
//     if( A % 2 == 0){
//         return Number((p * p) % BigInt(C))
//     }
//     else {
//         return Number(((p * p)% BigInt(C) * BigInt(A)) % BigInt(C))
//     }
// }
// }

function powerFunc(A, B, C){  //(2,3,3)
    console.log('current A, B, C', A, B, C)
    if(A == 0){
        return 0;
    }
    if(B == 0){
        return 1
    }
    else {
        let p =  powerFunc(A, Math.floor(B/2), C);
        if( A % 2 == 0){
            return ((p * p) % C)
        }
        else {
            return (((p * p)% (C) * (A)) % (C))
        }
    }
    }
console.log(powerFunc(2,3,3));
/*
2.
What is the time complexity of the following code snippet?

q. int function(int n){
    if ( n % 2 == 0){
        return 0
    }
    return function(n-1) + function (floor(n/2))
}


Options:
O(n)
O(logn)
O(1)
None of these
O(n^2)

Answer: O(logn)

Hints:
Observe the base case and floor of odd numbers of the recursive function.

The floor function will always result an odd number if the number is 2 power k−1 .
Hence the time complexity will be o(logn)
*/

/*
3.
Given a number A, check if it is a magic number or not.

A number is said to be a magic number if the sum of its digits is calculated till a single digit recursively by adding the sum of the digits after every addition. If the single digit comes out to be 1, then the number is a magic number.



Problem Constraints
1 <= A <= 109



Input Format
The first and only argument is an integer A.



Output Format
Return an 1 if the given number is magic else return 0.



Example Input
Input 1:

 A = 83557
Input 2:

 A = 1291


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 Sum of digits of (83557) = 28
 Sum of digits of (28) = 10
 Sum of digits of (10) = 1. 
 Single digit is 1, so it's a magic number. Return 1.
Explanation 2:

 Sum of digits of (1291) = 13
 Sum of digits of (13) = 4
 Single digit is not 1, so it's not a magic number. Return 0.
*/