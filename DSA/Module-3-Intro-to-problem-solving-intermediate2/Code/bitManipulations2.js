/*
5.
You are given two integers A and B.
If B-th bit in A is set, make it unset
If B-th bit in A is unset, make it set
Return the updated A value


Problem Constraints
1 <= A <= 109
0 <= B <= 30


Input Format
First argument A is an integer.
Second argument B is an integer.


Output Format
Return an integer.


Example Input
Input 1:
A = 4
B = 1
Input 2:
A = 5
B = 2


Example Output
Output 1:
6
Output 2:
1


Example Explanation
For Input 1:
Given N = 4 which is 100 in binary. The 1-st bit is unset
so we make it set
For Input 2:
 
Given N = 5 which is 101 in binary. The 2-nd bit is set
so we make it unset

Hints:
The value of the i-th bit is 2^i

Solution Approach:
The value of the B-th bit is 2^B
To toggle the B-th bit in A, we can directly
perform bitwise XOR operation between A and 2^B.
If the bit was set, this will unset the bit and
if the bit was unset, then this will set that 
bit

Time Complexity : O(1)
Space Complexity : O(1)


*/
function toggleIthBit(A,B){
    let num = 1 << B;
    return A ^ num;
}
/*
6.
Given an integer A. Unset B bits from the right of A in binary.

For example, if A = 93 and B = 4, the binary representation of A is 1011101.
If we unset the rightmost 4 bits, we get the binary number 1010000, which is equal to the decimal value 80.


Problem Constraints
1 <= A <= 1018
1 <= B <= 60


Input Format
The first argument is a single integer A.
The second argument is a single integer B.


Output Format
Return the number with B unset bits from the right.


Example Input
Input 1:-
A = 25
B = 3
Input 2:-
A = 37
B = 3


Example Output
Output 1:-
24
Output 2:-
32


Example Explanation
Explanation 1:-
A = 11001 to 11000
Explantio 2:-
A = 100101 to 100000

Hints:
Try using for loops iterate from 0 to B-1 and do the needful.

Solution Approach:
Try using for loops iterate from 0 to B-1 and do the needful.

Initialise a variable ans = A
Iterate from i = 0 to i = B - 1. If ith bit was set in A that is (A & (1<<i)) != 0, ans -= (1<<i), unset it from the answer. 
*/
function unsetSetBit(A, B){
    let ans = A;
    for(i=0; i<B; i++){
        if((A & BigInt(1)<<BigInt(i)) != 0)
        ans =  BigInt(ans) ^ (BigInt(1)<<BigInt(i))
        // ans = (ans ^ BigInt(1)<<BigInt(i))
    }
    return ans
}
/*
7.
Alex and Sam are good friends. Alex is doing a lot of programming these days. He has set a target score of A for himself.
Initially, Alex's score was zero. Alex can double his score by doing a question, or Alex can seek help from Sam for doing questions that will contribute 1 to Alex's score. Alex wants his score to be precisely A. Also, he does not want to take much help from Sam.

Find and return the minimum number of times Alex needs to take help from Sam to achieve a score of A.


Problem Constraints
0 <= A <= 10^9


Input Format
The only argument given is an integer A.


Output Format
Return the minimum number of times help taken from Sam.


Example Input
Input 1:
A = 5
Input 2:

A = 3


Example Output
Output 1:
2
Output 2:

2


Example Explanation
Explanation 1:
Initial score : 0
Takes help from Sam, score : 1
Alex solves a question, score : 2
Alex solves a question, score : 4
Takes help from Sam, score: 5
Explanation 2:

Initial score : 0
Takes help from Sam, score : 1
Alex solves a question, score : 2
Takes help from Sam, score : 3

//After discussion with TA, this is supposed to be count the number of set bits problem.

Scaler solution:
function(A){
	    
	    let ans = 0;
	    while( A > 0) {
	        
	        if( (A&1) > 0 ) ans++;
	        A/=2;
	    }
	    return ans;
	}
*/
function helpFromSam(A){
    if(A ==0){
        return 0
    }
    if(A == 1){
        return 1
    }
    let help = 1;
    let currScore = 1;
    while(currScore * 2 <= A){
            currScore = currScore * 2
    }
    if(currScore * 2 > A && currScore < A){
        help = help + A - currScore - 1
    }
    return help
}
// console.log(helpFromSam(7));

function helpFromSamForLoop(A){
    for(let i=0; i<32; i++){
        if(A & 1<<i){
            cnt++
        }
    }
    return cnt;
}
// console.log(helpFromSamForLoop(7));
/*
/*
8.

Alex has a cat named Boomer. He decides to put his cat to the test for eternity.

He starts on day 1 with one stash of food unit, every next day, the stash doubles.

If Boomer is well behaved during a particular day, only then she receives food worth equal to the stash produced on that day.

Boomer receives a net worth of A units of food. What is the number of days she received the stash?



Problem Constraints
1 <= A <= 231-1



Input Format
First and only argument is an integer A.



Output Format
Return an integer denoting the number of days Boomer was well behaved.



Example Input
Input 1:

A = 5
Input 2:

A = 8


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 To eat a total of 5 units of food, Boomer behaved normally on Day 1 and on the Day 3.
Explanation 2:

 To eat a total of 8 units of food, Boomer behaved normally only on day 4.

 Hints:
 Can you try thinking of each day as bits of A and
then thinking up a solution?

Solution Appraoch:
Since for each day, the food doubles up as the previous day with 1 unit on the first day, starting from i = 0,
the number of food units Boomer was supposed to get on ith day is 2i.

Only on the days he was well behaved did he get food. So adding the power of 2 on each day, he was well behaved,
gives the total number of food units, i.e., A.

Hence, the number of 1’s in the binary representation of A is the number of days he was well behaved.

Scaler Solution:
 let ans = 0;
 function (A){
	    while( A > 0) {
	        
	        if( (A&1) > 0 ) ans++;
	        A/=2;
	    }
	    return ans;
    }
*/
function findingGoodDays(A){
    let cnt = 0;
    for(let i=0; i<32; i++){
        if(A & (1<<i)){
            cnt++;
        }
    }
    return cnt;
}
/*
9.
Given an integer A, find and return the Ath magic number.

A magic number is defined as a number that can be expressed as a power of 5 or a sum of unique powers of 5.

First few magic numbers are 5, 25, 30(5 + 25), 125, 130(125 + 5), ….



Problem Constraints
1 <= A <= 5000



Input Format
The only argument given is integer A.



Output Format
Return the Ath magic number.



Example Input
Example Input 1:

 A = 3
Example Input 2:

 A = 10


Example Output
Example Output 1:

 30
Example Output 2:

 650


Example Explanation
Explanation 1:

 Magic Numbers in increasing order are [5, 25, 30, 125, 130, ...]
 3rd element in this is 30
Explanation 2:

 In the sequence shown in explanation 1, 10th element will be 650.

 
*/
/*
11.
Reverse the bits of an 32 bit unsigned integer A.



Problem Constraints
0 <= A <= 232



Input Format
First and only argument of input contains an integer A.



Output Format
Return a single unsigned integer denoting the decimal value of reversed bits.



Example Input
Input 1:

 0
Input 2:

 3


Example Output
Output 1:

 0
Output 2:

 3221225472


Example Explanation
Explanation 1:

        00000000000000000000000000000000    
=>      00000000000000000000000000000000
Explanation 2:

        00000000000000000000000000000011    
=>      11000000000000000000000000000000

Hints:

*/
function reverseBits(A){
    let i=31;
    let j = 0;
    while(i > j){
        console.log('i,j', i, j);
        if((A & 1<<i ) | (A  & 1<<j)){
         console.log('condition satisfied',i, j);
          A = (A ^ (1<<i));
          A = (A ^ (1<<j));
        }
        i--;
        j++;
    }
    return A;  
}
console.log(reverseBits(3));