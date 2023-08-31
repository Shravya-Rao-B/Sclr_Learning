/*
1.
Given an expression string A, examine whether the pairs and the orders of “{“,”}”, ”(“,”)”, ”[“,”]” are correct in A.

Refer to the examples for more clarity.



Problem Constraints
1 <= |A| <= 100



Input Format
The first and the only argument of input contains the string A having the parenthesis sequence.



Output Format
Return 0 if the parenthesis sequence is not balanced.

Return 1 if the parenthesis sequence is balanced.



Example Input
Input 1:

 A = {([])}
Input 2:

 A = (){
Input 3:

 A = ()[] 


Example Output
Output 1:

 1 
Output 2:

 0 
Output 3:

 1 


Example Explanation
You can clearly see that the first and third case contain valid paranthesis.

In the second case, there is no closing bracket for {, thus the paranthesis sequence is invalid.

Hints:
For every bracket, you need to find the latest opening bracket and check if they are matching with each other or not.
To find the the latest opening bracket, we need to keep opening brackets in STACK.

So, iterate on the string -
if current character is an opening bracket, push it in the stack
if current character is a closing bracket, there can be three conditions

if stack is empty. So, opening bracket is not present for current closing bracket, return false
if top of the stack doesn’t contains its opening counterpart ,return false
if top of the stack contains its opening counterpart, pop the opening bracket from the stack.
At last, don’t forget to check the size of the stack.
If stack is empty, then return true
otherwise return false.

Solution Approach:
First, let us look at the impossible cases:
1) [() : There is no corresponding closing bracket for an opening bracket.
2) [) : Incorrect closing bracket for an opening bracket.
3) } : No opening bracket for a closed bracket.

Now, we can observe that the earlier a bracket is encountered in the string, the later it is closed.
We can guess that the Stack Data Structure will be used using this observation.

We traverse the given string from the left. If the i-th character is an opening bracket, we push it onto the stack.
If it is a closing bracket, we check for the impossible case 2 and case 3. If they are being violated, then we can simply return 0. Otherwise, we can pop the topmost bracket from the stack.
To check for case 1, if our stack is not empty at the end of our traversal, then we can say that the brackets are not correctly matched.

If all the conditions are fulfilled, then we can return 1.
*/
//if the sequence of braces are one type only (()) or {{}} or [[]]
function balancedBracesWithArray(A){
if(A[0] == ')' || A[0] == '}' || A[0] == ']'){
    return 0
}
let open = 0;
let close = 0;
for(let i=0; i<A.length; i++){
    if(A[i] == '(' || A[i] == '{' || A[i] == '['){
        open++;
    }
    else {
        close++;
        if(close>open)
        return 0
    }
}
if(close!=open){
    return 0
}
return 1;
}
// console.log(balancedBracesWithArray('((((()))))'));

function balancedBracesWithStack(A){
let n = A.length;
let stk = [];
function peek(s){
    return s[s.length-1];
}
function isEmpty(s){
    return s.length == 0;
}
for(let i = 0; i<n; i++){
    if(A[i] == '(' || A[i] == '{' || A[i] == '['){
        stk.push(A[i])
    }
    else if(isEmpty(stk) && (A[i] == ')' || A[i] == '}' || A[i] == ']')){
        return 0
    }
    else if (!isEmpty(stk) && (A[i] == ')' || A[i] == '}' || A[i] == ']')){
        console.log('in else');
        if(A[i] == ')' && peek(stk) == '('){
                stk.pop();
        }
        else if (A[i] == '}' && peek(stk) == '{'){
            stk.pop();

        }
        else if(A[i] == ']' && peek(stk) == '['){
            stk.pop();
        }
        else {
            return 0;
        }

    }
}
if(isEmpty(stk)){
    return 1;
}
return 0;
}
// console.log(balancedBracesWithStack('({}{}[])'));
// console.log(balancedBracesWithStack('))))'));

//TC: O(n), SC: O(n)
/*
2.
You have a string, denoted as A.

To transform the string, you should perform the following operation repeatedly:
Identify the first occurrence of consecutive identical pairs of characters within the string.
Remove this pair of identical characters from the string.
Repeat steps 1 and 2 until there are no more consecutive identical pairs of characters.
The final result will be the transformed string.


Problem Constraints
1 <= |A| <= 100000



Input Format
First and only argument is string A.



Output Format
Return the final string.



Example Input
Input 1:

 A = "abccbc"
Input 2:

 A = "ab"


Example Output
Output 1:

 "ac"
Output 2:

 "ab"


Example Explanation
Explanation 1:

The Given string is "abccbc".

Remove the first occurrence of consecutive identical pairs of characters "cc".
After removing the string will be "abbc".

Again Removing the first occurrence of consecutive identical pairs of characters "bb".
After remvoing, the string will be "ac".

Now, there is no consecutive identical pairs of characters.
Therefore the string after this operation will be "ac".
Explanation 2:

 No removals are to be done.

 Hints:
 Hint 1:
Consider an example string “abba”.
When you remove bb, the remaining string is “aa” which has to be removed as well.
So, we need to keep a track of the characters before the first occurrence of similar consecutive characters.
Stack can be used for this.

Solution Approach:
Consider an example string abba.
When we remove the “bb”, the remaining string is “aa” which has to be removed as well.
So we need to keep track of the characters before the first occurrence of similar consecutive characters.
We can do this using a stack.
We keep pushing the characters in a stack, if the current character is equal to the top of the stack,
we pop from the stack since they represent
a pair of similar characters.
Finally, we print the stack in reverse.

*/
function doubleCharTrouble(A){
    let stack = [];
    function peek(s){
        return s[s.length -1]
    }
    function isEmpty(s){
        return s.length == 0
    }
    for(let i=0; i<A.length; i++){
        if(A[i] !== peek(stack)){
            stack.push(A[i])
        }
        else if (A[i] == peek(stack)){
            stack.pop();
        }
    }
    if(!isEmpty(stack)){
        return stack.join("");
    }
    else if(isEmpty(stack)){
        return ""
    }
}
// console.log(doubleCharTrouble('abccbc'))
// console.log(doubleCharTrouble('abba'));

/*
3.
An arithmetic expression is given by a string array A of size N. Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each string may be an integer or an operator.

Note: Reverse Polish Notation is equivalent to Postfix Expression, where operators are written after their operands.



Problem Constraints
1 <= N <= 105



Input Format
The only argument given is string array A.



Output Format
Return the value of arithmetic expression formed using reverse Polish Notation.



Example Input
Input 1:
A =   ["2", "1", "+", "3", "*"]
Input 2:
A = ["4", "13", "5", "/", "+"]


Example Output
Output 1:
9
Output 2:
6


Example Explanation
Explaination 1:
starting from backside:
    * : () * ()
    3 : () * (3)
    + : (() + ()) * (3)
    1 : (() + (1)) * (3)
    2 : ((2) + (1)) * (3)
    ((2) + (1)) * (3) = 9
Explaination 2:
starting from backside:
    + : () + ()
    / : () + (() / ())
    5 : () + (() / (5))
    13 : () + ((13) / (5))
    4 : (4) + ((13) / (5))
    (4) + ((13) / (5)) = 6

*/

function evaluateExpression(A){
    let stack = [];
    function peek(s){
        return s[s.length -1]
    }
    function isEmpty(s){
        return s.length == 0
    }
    function performOp(val1, val2, op){
        switch(op){
            case '+':
                return val1 + val2
            case '-':
                return val1 - val2;
            case '*':
                return val1 * val2;
            case '/':
                return Math.floor(val1 / val2);
        }
    }
    for(let i=0; i<A.length; i++){
        if(!isEmpty(stack) && (A[i] == '+' || A[i] == '*' || A[i] == '/' || A[i] == '-')){
            let val2 = stack.pop();
            let val1 = stack.pop();
            let operator = A[i]
            let res = performOp(Number(val1), Number(val2), operator);
            stack.push(res);
        }
    else {
        stack.push(A[i])
    }
    }
    return peek(stack);
}
// console.log(evaluateExpression(["2", "1", "+", "3", "*"]));
// console.log(evaluateExpression(["4", "13", "5", "/", "+"]));

/*
4.

There is a football event going on in your city. In this event, you are given A passes and players having ids between 1 and 106.

Initially, some player with a given id had the ball in his possession. You have to make a program to display the id of the player who possessed the ball after exactly A passes.

There are two kinds of passes:

1) ID

2) 0

For the first kind of pass, the player in possession of the ball passes the ball "forward" to the player with id = ID.

For the second kind of pass, the player in possession of the ball passes the ball back to the player who had forwarded the ball to him.

In the second kind of pass "0" just means Back Pass.

Return the ID of the player who currently possesses the ball.



Problem Constraints
1 <= A <= 100000

1 <= B <= 100000

|C| = A



Input Format
The first argument of the input contains the number A.

The second argument of the input contains the number B ( id of the player possessing the ball in the very beginning).

The third argument is an array C of size A having (ID/0).



Output Format
Return the "ID" of the player who possesses the ball after A passes.



Example Input
Input 1:

 A = 10
 B = 23
 C = [86, 63, 60, 0, 47, 0, 99, 9, 0, 0]
Input 2:

 A = 1
 B = 1
 C = [2]


Example Output
Output 1:

 63
Output 2:

 2


Example Explanation
Explanation 1:

 Initially, Player having  id = 23  posses ball. 
 After pass  1,  Player having  id = 86  posses ball. 
 After pass  2,  Player having  id = 63  posses ball. 
 After pass  3,  Player having  id = 60  posses ball. 
 After pass  4,  Player having  id = 63  posses ball. 
 After pass  5,  Player having  id = 47  posses ball. 
 After pass  6,  Player having  id = 63  posses ball. 
 After pass  7,  Player having  id = 99  posses ball. 
 After pass  8,  Player having  id = 9   posses ball. 
 After pass  9,  Player having  id = 99  posses ball. 
 After pass  10, Player having  id = 63   posses ball.
Explanation 2:

 Ball is passed to 2.

 Hints:
 Hint 1:
 We need to remove and add the player ids who currently hold the ball.
We have a data structure that supports this operation.
Can we use that for this problem?

Approach :

character backgroundcharacter
Solution Approach
This question depends on your data structure knowledge as you can quickly solve this question using a suitable data structure which is the stack in our question.
You have two types of instructions in this question:

So you can easily push the new id in the stack to keep track of the latest player
who has the ball.
Now, you should pass the ball to the previous player who forwarded you the ball, so you can easily pop the last player from the stack.
Time Complexity:- O(A)

 */

 function passignGame(A, B, C){
let stack = [];
function isEmpty(s){
    return s.length == 0
}
function peek(s){
    return s[s.length -1]
}
for(let i=0; i<A; i++){
    if(C[i]!= 0){
        stack.push(C[i])
    }
    if(C[i] ==0 && !isEmpty(stack)){
        stack.pop()
    }
}
if(!isEmpty(stack))
return peek(stack);
else
return B;
 }
//  console.log(passignGame(10,23,[86, 63, 60, 0, 47, 0, 99, 9, 0, 0]));
//  console.log(passignGame(10,38,[23,0,2,0,39,28,19,0,0,0]));