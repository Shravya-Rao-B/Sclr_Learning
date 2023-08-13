/*
sum of n numbers
*/

function sumOfN(n){
    if(n ==1){
        return 1;
    }
    return sumOfN(n-1)+ n
}
// console.log(sumOfN(3));

/*
Fibonacci
Starts with 0
Sum of last two numbers
0 1 1 2 3 5
*/
function fib(n){
  if(n<=1){
    return n;
  }
  else {
    return fib(n-1)+fib(n-2)
  }  
}
// console.log(fib(3));
/*
1.
Given an integer A pairs of parentheses, write a function to generate all combinations of well-formed parentheses of length 2*A.



Problem Constraints
1 <= A <= 10



Input Format
First and only argument is integer A.



Output Format
Return a sorted list of all possible parenthesis.



Example Input
Input 1:

A = 3
Input 2:

A = 1


Example Output
Output 1:

[ "((()))", "(()())", "(())()", "()(())", "()()()" ]
Output 2:

[ "()" ]


Example Explanation
Explanation 1:

 All paranthesis are given in the output list.
Explanation 2:

 All paranthesis are given in the output list.

 Hints:
 Hint 1:
 You can try thinking of recursion such that our solution is valid at every step.

How to define this valid thing now?
Again, think recursion.
At every step, you have two options :
1) Add ‘(‘ to the string.
OR
2) Add ‘)’ to the string.
However, you need to make sure that the number of closing brackets does not exceed the number of opening brackets at any point in time.
Also, make sure that the number of opening brackets never exceeds n.

The list of strings would be sorted by default as in our recursive function we first handle the case of ‘(‘ and then ‘)’.
*/
function generateAllParenthesis(A){
    let ans  = [];
    let s = '';
    let o = 0;
    let c = 0;
  function generateBalancedBrackets(s, o, c, n){
    console.log('recursive call', s, o, c, n);
    if(o > n){
        return;
    }
    if(c > o){
        return;
    }
    if(o == n && c == n){
        ans.push(s);
    }
  }
  generateBalancedBrackets(s + "(", o+1, c, A);
//   generateBalancedBrackets(s + ")", o, c+1, A);
  return ans;
}
console.log(generateAllParenthesis(3));