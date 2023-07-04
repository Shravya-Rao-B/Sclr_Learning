/*
1.
The Fibonacci numbers are the numbers in the following integer sequence.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation:
Fn = Fn-1 + Fn-2

Given a number A, find and return the Ath Fibonacci Number using recursion.

Given that F0 = 0 and F1 = 1.

Problem Constraints
0 <= A <= 20

Input Format
First and only argument is an integer A.

Output Format
Return an integer denoting the Ath term of the sequence.

Example Input
Input 1:
 A = 2

Input 2:
 A = 9

Example Output
Output 1:
 1
Output 2:
 34

Example Explanation
Explanation 1:
 f(2) = f(1) + f(0) = 1

Explanation 2:
 f(9) = f(8) + f(7) = 21 + 13  = 34

Hints:
Hint 1:
Think of how a given term relates to the others.
The recurrence and the base case are given to us. Just try to write those cases in code.

Solution Approach:
Use recursion to apply the formula. Do not forget to add base cases or else you might run into an infinite loop.

Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential.
We can observe that this implementation does a lot of repeated work (see the following recursion tree). 
So this is a bad implementation for nth Fibonacci number.

                       fib(5)   
                     /                \
               fib(4)                fib(3)   
             /        \              /       \ 
         fib(3)      fib(2)         fib(2)   fib(1)
        /    \       /    \        /      \
  fib(2)   fib(1)  fib(1) fib(0) fib(1) fib(0)
  /     \
fib(1) fib(0)
Extra Space: O(n) if we consider the function call stack size, otherwise O(1).
*/
function findFibbonacci(A){
//Main logic : fib(A) = fib(A-1) + fib(A-2)
//Base condition: n>=1
//Main logic fails if n=0 and for also n = 1. Hence we add two base conditions.
if(A==0){
    return 0;
}
if(A == 1){
    return 1
}
return findFibbonacci(A-1) + findFibbonacci(A-2)
}
// console.log(findFibbonacci(9));

/*
2.
Write a program to find the factorial of the given number A using recursion.

Note: The factorial of a number N is defined as the product of the numbers from 1 to N.

Problem Constraints
0 <= A <= 12

Input Format
First and only argument is an integer A.

Output Format
Return an integer denoting the factorial of the number A.

Example Input
Input 1:
 A = 4
Input 2:
 A = 1

Example Output
Output 1:
 24
Output 2:
 1

Example Explanation
Explanation 1:
 Factorial of 4 = 4 * 3 * 2 * 1 = 24
Explanation 2:
 Factorial of 1 = 1

 Hints:
 Hint 1:
Factorial of a number N is the product of all numbers from 1 to N.
Also factorial of 0 is 1 i.e <strong>0! = 1</strong>

Solution Approach:
Factorial of a number N is the product of all numbers from 1 to N.

Factorial can be calculated using following recursive formula.

n! = n * (n-1)!
n! = 1 if n = 0 or n = 1

Note: Factorial of 0 is 1.
*/

function factorial(A){
    if(A == 0 || A == 1){
        return A
    }
    else {
        return A * factorial(A-1)
    }
}
// console.log(factorial(4));
/*
3.
Write a recursive function that checks whether string A is a palindrome or Not.
Return 1 if the string A is a palindrome, else return 0.

Note: A palindrome is a string that's the same when read forward and backward.

Problem Constraints
1 <= |A| <= 50000
String A consists only of lowercase letters.

Input Format
The first and only argument is a string A.

Output Format
Return 1 if the string A is a palindrome, else return 0.

Example Input
Input 1:
 A = "naman"
Input 2:
 A = "strings"
Example Output
Output 1:
 1
Output 2:
 0

Example Explanation
Explanation 1:
 "naman" is a palindomic string, so return 1.
Explanation 2:
 "strings" is not a palindrome, so return 0.

 Hints:
 Hint 1:
 Think about the base case and how you can break down the problem into smaller subproblems.
In this case, you can check whether the first and last characters of the string are equal.
If they are, you can recursively check whether the substring formed
by excluding these characters is also a palindrome.
Continue this process until the base case is reached.
Caution: Be careful to set appropriate recursion limits in languages like Python.

Solution Approach 1:
Consider two indexes i and j, initially at the first and last index of the string, respectively.
If the character at both i and j index is the same, check recursively for i+1, j-1.
We can say that, F(i, j) tell if the string from i to j is palindrome or not:
if(A[i] == A[j])
F(i, j) = F(i+1, j-1)
else
F(i, j) = 0
*/
function isPalindrome(A)
{
    function check_palindrome(A,left,right) {
        if(left >= right)
            return 1;
        if(A[left] == A[right])
            return check_palindrome(A,left+1,right-1);
        else 
            return 0;
    }

    let n = A .length;
    return check_palindrome(A,0,n-1);
}
// console.log(isPalindrome('naman'));
// console.log(isPalindrome("strings"));
/*
4.
You are given an integer A, print 1 to A using using recursion.

Note :- After printing all the numbers from 1 to A, print a new line.

Problem Constraints
1 <= A <= 104

Input Format
First argument A is an integer.

Output Format
Print A space-separated integers 1 to A.
Note: There should be exactly one space after each integer. After printing all the integers, print a new line

Example Input
Input 1:
A = 10
Input 2:
A = 5

Example Output
Output 1:
1 2 3 4 5 6 7 8 9 10 
Output 2:
1 2 3 4 5 

Example Explanation
Explanation 1:
Print 1 to 10 space separated integers.
Explanation 2:
Print 1 to 5 space separated integers.

Hints:

Hint 1: 
Recursive call the function for all values from A to 1. 
Start from A and print till we reach 1, which is the base case.
Think about when to print the values of A.

Solution Approach:
We write a recursive function.
The base case is when A = 0 when we return from
the function.
Otherwise, we call the recursive function for (A - 1)
and after that print A followed by space.

Outside the recursion we print new line.

Time Complexity : O(A)
Space Complexity : O(A)
*/

function oneToA(A) {
    function printNumbers(n) {
      if (n <= 0) {
        return;
      } else {
        printNumbers(n - 1); // Recursively call the function with n-1
        process.stdout.write(n + " "); // Print the current number
      }
    }
    printNumbers(A); // Start the recursion with the given value A
    console.log(); // Print newline
  }
//   console.log(oneToA(10));

/*
5.
Write a recursive function that takes a string, S, as input and prints the characters of S in reverse order.

Problem Constraints
1 <= |s| <= 1000

Input Format
First line of input contains a string S.

Output Format
Print the character of the string S in reverse order.

Example Input
Input 1:
 scaleracademy
Input 2:
 cool

Example Output
Output 1:
 ymedacarelacs
Output 2:
 looc

 Hints:
 Hint 1:
 How can we reverse a String?
We can put all the characters in a stack and then pop them out.
Since recursion is implemented through stack, can you implement the stack solution through recursion?

Approach 1:
To reverse the string, we have to implement the LIFO nature of stack with recursion.
Take the current character, and recursively solve the problem for then remaining portion of the string.
The base case is when the entire string has been traversed.

Time Complexity: O(n)
*/
function outerString(A)
{
let left = 0;
let right = A.length -1;
let splitA = A.split("");
// console.log("splitA", splitA);
function reverseAndPrintString(A,left,right){
// console.log('left, right', left, right);
if(left > right){
    return A;
}
else {
    let temp = A[left];
    A[left] = A[right];
    A[right] = temp;
    reverseAndPrintString(A, left+1, right-1);
}
}
reverseAndPrintString(splitA,left,right);
console.log(splitA.join(""));
}
// console.log(outerString("Shravya"));


/*
6.
Given a number A, we need to find the sum of its digits using recursion.

Problem Constraints
1 <= A <= 109

Input Format
The first and only argument is an integer A.

Output Format
Return an integer denoting the sum of digits of the number A.

Example Input
Input 1:
 A = 46
Input 2:
 A = 11


Example Output
Output 1:
 10
Output 2:
 2

Example Explanation
Explanation 1:

 Sum of digits of 46 = 4 + 6 = 10
Explanation 2:

 Sum of digits of 11 = 1 + 1 = 2

 Hints:
 Hint 1:
 Any number can be written in the sum of the power of 10’s
For example: 123 = (1 * 100) + (2 * 10) + (3)
Similarly, 1234 = (1 * 1000) + (2 * 100) + (3 * 10) + 4
Try to use the above fact to find a solution to the problem.

Solution approach:
Step by step process for better understanding of how the algorithm works.
Let the number be 12345.
Step 1-> 12345 % 10 which is equal-too 5 + ( send 12345/10 to next step ),
Step 2-> 1234 % 10 which is equal-too 4 + ( send 1234/10 to next step ),
Step 3-> 123 % 10 which is equal-too 3 + ( send 123/10 to next step ),
Step 4-> 12 % 10 which is equal-too 2 + ( send 12/10 to next step ),
Step 5-> 1 % 10 which is equal-too 1 + ( send 1/10 to next step ),
Step 6-> 0 algorithm stops.
Following diagram will illustrate the process of recursion.

*/

function recursiveSumOfDigits(A){
    function sumOfDigitsInA(A){
    if(A == 0){
        return 0
    }
    else {
        return (Math.floor(A % 10)) + (sumOfDigitsInA(Math.floor(A/10)))
    }
}
return sumOfDigitsInA(A); // Start the recursion with the given value A
}
// console.log(recursiveSumOfDigits(12345));

/*
7. 
What will be the output of following program ?

int bar(int x, int y){
    if(y==0) 
    return 0
    return (x + bar(x, y-1));
}
int foo(int x, int y){
    if(y==0)
    return 1;
    return bar(x, foo(x, y-1))
}
int main(){
    count << foo(3,5)
}

Options:
243
15
18
125

Ans : 243
*/

/*
8.
What will be the output of following program ?

What will be the output of the following
int fun(int x, int y){
    if(n==0)
    return 1;
    else if (n % 2 == 0) 
    return fun(x*x, n/2);
    else 
    return x * fun(x*x, (n-1)/2)
}
Options:
1023
2048
1024
None of these

Ans: 1024

tracing :
fun(2,10)
n =10  x=4  10%2 = 0 => fun(4,5)
n = 5  x=4  10%2 !=0 => 4 * fun(16, 2)
                     => 4 * fun(16 * 16 , 1)
                     => 4 * fun()
*/

/*
9.
You are given an integer A, print A to 1 using using recursion.
Note :- After printing all the numbers from A to 1, print a new line.

Problem Constraints
1 <= A <= 104

Input Format
First argument A is an integer.

Output Format
Print A space-separated integers A to 1.
Note: There should be exactly one space after each integer. Print a new line after printing the A integers

Example Input
Input 1:
10
Input 2:
5

Example Output
Output 1:
10 9 8 7 6 5 4 3 2 1 
Output 2:
5 4 3 2 1 

Example Explanation
Explanation 1:
Print 10 to 1 space separated integers.
Explanation 2:
Print 5 to 1 space separated integers.
*/
function printA(A)
{
function printAtoOne(A){
    if(A <= 0){
        return ;
    }
    else
    {
 process.stdout.write(A + " ");
 printAtoOne( A - 1);
}
}
printAtoOne(A);
process.stdout.write("\n");
}
// console.log(printA(10));