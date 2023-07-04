/*
1.Given an array of size 21, find the total number of subarrays of the array.

Options:
254
231
369
441

Ans: 231 (n * (n + 1)/2)

Complete solution:
Total number of subarrays of an array of size N is
N*(N + 1)/2
So, 21 * (21 + 1) / 2 = 21 * 11 = 231

*/

/*
2.
What is the time and space complexity for printing the sum of each subarray?

void printSums(int ar[]){

int n = ar.length;

for(int i = 0 ; i < n ; i++){

int sum = 0;

for(int j = i ; j < n ; j++){

sum = sum + ar[j];

print(sum)

}
}
}

Options:
TC = O(N) , SC = O(1)
TC = O(N^2) , SC = O(1)
TC = O(N) , SC = O(N)
TC = O(N^2) , SC = O(N)

Ans: O(N^2) , SC = O(1)
*/

/*
3.
Find the time and space complexity for printing sum of each subarray?

void printSums(int ar[]){

int n = ar.length;

int pf[N];

pf[0] = ar[0];

for(int i = 1 ; i < n ; i++){

pf[i] = pf[i - 1] + ar[i];

}

for(int i = 0 ; i < n ; i++){

for(int j = i ; j < n ; j++){

if(i == 0){

print(pf[j]);

}

else{

print(pf[j] - pf[i - 1]);

}

}

}

}

options:
TC = O(N) , SC = O(N)
TC = O(N^2) , SC = O(N)
TC = O(N) , SC = O(N^2)
TC = O(N^2) , SC = O(N^2)

Ans:
TC = O(N^2) , SC = O(N)
*/

/*
4.

Given an array A of length N, return the subarray from B to C.


Problem Constraints
1 <= N <= 105

1 <= A[i] <= 109

0 <= B <= C < N



Input Format
The first argument A is an array of integers

The remaining argument B and C are integers.



Output Format
Return a subarray


Example Input
Input 1:
A = [4, 3, 2, 6]
B = 1
C = 3
Input 2:

A = [4, 2, 2]
B = 0
C = 1


Example Output
Output 1:
[3, 2, 6]
Output 2:

[4, 2]


Example Explanation
Explanation 1:
The subarray of A from 1 to 3 is [3, 2, 6].
Explanation 2:
The subarray of A from 0 to 1 is [4, 2].

Hints:
Hint 1:
Just return the subarray from B to C.

Solution approach:
We return the subarray of A from B to C.
Time Complexity : O(N)
Space Complexity : O(N)

*/

function subArrayInGivenRange(A, B, C){
    let subArray = [];
    for(let i=B; i<=C; i++)
    {
        subArray.push(A[i]) 
    }
    return subArray;
}
// console.log(subArrayInGivenRange([4, 3, 2, 6],1,3));

/*
5.
You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
But the sum must not exceed B.


Problem Constraints
1 <= A <= 103
1 <= B <= 109
1 <= C[i] <= 106


Input Format
The first argument is the integer A.
The second argument is the integer B.
The third argument is the integer array C.


Output Format
Return a single integer which denotes the maximum sum.


Example Input
Input 1:
A = 5
B = 12
C = [2, 1, 3, 4, 5]
Input 2:

A = 3
B = 1
C = [2, 2, 2]


Example Output
Output 1:
12
Output 2:
0

Example Explanation
Explanation 1:
We can select {3,4,5} which sums up to 12 which is the maximum possible sum.
Explanation 2:

All elements are greater than B, which means we cannot select any subarray.
Hence, the answer is 0.

Hints:
Hint 1:
Try to find the sum of every subarray, and find one with largest sum not exceeding B.
Think how to speed it up with prefix sums.

Solution approach:
The most basic brute force approach would be to find the sum of every subarray and check if it less than B,
we will put it in a variable which will store the maximum value less than B.
The time complexity of this approach would be O(N ^ 3).

But, for the given constraints, the best we can do is O(N ^ 2).
We can do this easily just by modifying the way we iterate through the loop.

We will use the following pseudocode:

ans = 0
for(start = 0, start < size; start += 1)
    sum = 0
    for(end = start; end < size; end += 1)
        sum += array[end]
        if(sum <= MaximumValue)
            ans = max(sum, ans)
        else
            break

Using this, we are checking the sum of every subarray but this method is faster.

Refer to the complete solution for more details.

*/

function maxSubArray(A, B, C){
    let ans = 0;
    for( let i = 0; i < A; i++) {
        
        let sum = 0n;
        for( let j = i; j < A; j++) {
            sum += BigInt(C[j]);
            
            if( sum <= B && ans < sum)
                ans = Number(sum);
            else if( sum > B)
                break;
        }
    }
    return ans;
}
// console.log(maxSubArray(5,12,[2, 1, 3, 4, 5]));

/*
6.
You are given an integer array A of length N.
You have to find the sum of all subarray sums of A.
More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
A subarray sum denotes the sum of all the elements of that subarray.

Note :
1. Try to figure out the contribution of A[i] in the sum of all subarray sums.
2. In another word, for A[i], try to find count of A[i] in entire subarray sums.



Problem Constraints
1 <= N <= 105
1 <= Ai <= 10 4


Input Format
The first argument is the integer array A.


Output Format
Return a single integer denoting the sum of all subarray sums of the given array.


Example Input
Input 1:
A = [1, 2, 3]
Input 2:

A = [2, 1, 3]


Example Output
Output 1:
20
Output 2:

19


Example Explanation
Explanation 1:
The different subarrays for the given array are: [1], [2], [3], [1, 2], [2, 3], [1, 2, 3].
Their sums are: 1 + 2 + 3 + 3 + 5 + 6 = 20
Explanation 2:

The different subarrays for the given array are: [2], [1], [3], [2, 1], [1, 3], [2, 1, 3].
Their sums are: 2 + 1 + 3 + 3 + 4 + 6 = 19

Hints:
Hint 1:
This problem has a straightforward solution with time complexity of O(N2). 
How can we improve it to O(N)?
Think about how each element contributes to the sum.
Note: Be careful of overflow issues. Use appropriate datatypes.

Hint 2:
For each element, if we know how many subarrays do they come in, 
we can easily calculate their contribution to the sum as (Number of Subarrays) * (A[i]).

How do we calculate the number of subarrays for each element?
Let us focus on the definition of a subarray. It is obtained by deleting zero or more elements from either end.
So, for each element, let X be the number of elements to their left, and Y be the number of elements to their right.
Number of required subarrays = (X + 1) * (Y + 1)

We can easily know X and Y from the index of the element.
Let the array be 0 - indexed and N be the length of the array, 
X = i, Y = N - i - 1

Refer to the complete solution for implementation details.

Teaching Assistant help:

*/

function sumOfAllSubArrays(A){
    let n = A.length;
    let totalSum = BigInt(0);
    for(let i=0; i<A.length; i++){
       totalSum+= BigInt(A[i]) * BigInt(i + 1) * BigInt(n-i)
    }
    return Number(totalSum);
}
console.log(sumOfAllSubArrays([1, 2, 3]));
console.log(sumOfAllSubArrays([2, 1, 3]));

function sumOfAllSubArraysSimple(A){
    let ans = 0;
    for(let i=0; i<A.length; i++){
        let sum =0;
        for(let j=i; j<A.length; j++){
            sum = sum + A[j];
            ans = ans + sum;
        }
    }
    return ans;
}
// console.log(sumOfAllSubArraysSimple([1, 2, 3]));

/*
8.
Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:
1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
Your task is to find the count of good subarrays in A.


Problem Constraints
1 <= len(A) <= 103
1 <= A[i] <= 103
1 <= B <= 107


Input Format
The first argument given is the integer array A.
The second argument given is an integer B.


Output Format
Return the count of good subarrays in A.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = 4
Input 2:

A = [13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9]
B = 65


Example Output
Output 1:
6
Output 2:

36


Example Explanation
Explanation 1:
Even length good subarrays = {1, 2}
Odd length good subarrays = {1, 2, 3}, {1, 2, 3, 4, 5}, {2, 3, 4}, {3, 4, 5}, {5} 
Explanation 1:
There are 36 good subarrays

Hints:
Hint 1:
To count the good subarrays, you can iterate through each element of the array
and consider it as the starting point of a subarray. 

Then, for each starting point, iterate through all possible subarray lengths (starting from 1) 
and calculate the sum of the subarray. 

Based on the length and sum, check if the subarray satisfies 
either of the given criteria for being a good subarray. 

Keep track of the count of good subarrays encountered during the iteration.

Solution approach:
Since the constraints are small we can generate all subarrays using 2 loops. 
This can be done in O(N^2). 

Then find the sum of each subarray and check both the conditions.
Note that we cannot iterate over the subarray after generating the left index
and right index to find the sum as this will increase the time complexity of the solution to O(N^3). 
We can find the sum of each subarray in O(1) with the help of a prefix sum array, 
which takes an O(N) precomputation.

Please refer to the complete solution for implementation.

Complere code:
module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	solve : function(A, B){
	    let n = A.length;
	    let pref = [];
	    pref[0] = A[0];
	    for(let i = 1; i < n; i++)
	        pref[i] = pref[i-1] + A[i];
	    
	    let ans = 0;
	    for(let i = 0 ; i < n; i++) {
	        for(let j = i; j <n; j++) {
	            let sum = pref[j];
	            if(i > 0)
	                sum -= pref[i-1];
	            if(sum < B && (j-i+1)%2 == 0)
	                ans++;
	            if(sum > B && (j-i+1)%2 == 1)
	                ans++;
	        }
	    }
	    return ans;
	}
};
*/

function goodSubArraysEasy(A, B){
    let count = 0;
    for(let i=0; i<A.length; ++i){
        let sum =0;
            for(let j=i ; j<A.length; ++j){
                sum = sum + parseInt(A[j])
                    if((j-i+1) % 2 == 0 && sum < B)
                    {
                    count++;
                    }
                    else if((j - i + 1) % 2 == 1 && sum > B)
                    {
                    count ++;
                    }
                }
            }
return count;  
}
// console.log(goodSubArraysEasy([1, 2, 3, 4, 5],4));

/*
9.
Given an array A of N non-negative numbers and a non-negative number B,
you need to find the number of subarrays in A with a sum less than B.
We may assume that there is no overflow.



Problem Constraints
1 <= N <= 103

1 <= A[i] <= 1000

1 <= B <= 107



Input Format
First argument is an integer array A.

Second argument is an integer B.



Output Format
Return an integer denoting the number of subarrays in A having sum less than B.



Example Input
Input 1:

 A = [2, 5, 6]
 B = 10
Input 2:

 A = [1, 11, 2, 3, 15]
 B = 10


Example Output
Output 1:

 4
Output 2:

 4


Example Explanation
Explanation 1:

 The subarrays with sum less than B are {2}, {5}, {6} and {2, 5},
Explanation 2:

 The subarrays with sum less than B are {1}, {2}, {3} and {2, 3}

 Hints:
 Hint 1:
 The constraints are small. Have you tried doing just what the question says?

 Solution approach:
 The constraints are small. Have you tried doing just what the question says?
Since the constraints are small we can generate all subarrays using 2 loops. This can be done in O(N^2). Then find the sum of each subarray and if the sum is less than B we add 1 to our answer.
Note that we cannot iterate over the subarray after generating the left index and right index to find the sum as this will increase the time complexity of the solution to O(N^3). We can find the sum of each subarray in O(1) with the help of a prefix sum array, which takes an O(N) precomputation.
Please refer to the complete solution for implementation.

*/

function countingSubarrays(A, B){
    let count = 0;
    for(let i=0; i<A.length; ++i){
        sum =0;
        for(let j=i; j<A.length; ++j)
        {
            sum = sum + parseInt(A[j])
            if(sum < B){
                count ++;
            }
        }
    }
    return count;
}
// console.log(countingSubarrays([2,5,6],10));