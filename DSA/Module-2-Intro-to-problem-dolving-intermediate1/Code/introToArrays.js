/*
1. 
Given an array A of N integers. 
Count the number of elements that have at least 1 elements greater than itself.

Problem Constraints
1 <= N <= 105
1 <= A[i] <= 109

Example Input:
Input 1:
A = [3, 1, 2]
Input 2:
A = [5, 5, 3]

Example Output
Output 1:
2
Output 2:
1

Example Explanation
Explanation 1:
The elements that have at least 1 element greater than itself are 1 and 2
Explanation 2:
The elements that have at least 1 element greater than itself is 3
*/

function countOfElements(A){
    let max = A[0];
        let count =0;
        for(let i=1 ; i<A.length; i++){
            if(A[i] > max){
                max = A[i];
            }
        }
        for(let i=0; i<A.length; i++){
            if(A[i] != max){
                count++;
            }
        }
        return count;
}
// console.log(countOfElements([3, 1, 2]));

/*
2.
Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). 
Check if any good pair exist or not.

Problem Constraints
1 <= A.size() <= 104
1 <= A[i] <= 109
1 <= B <= 109

Input Format
First argument is an integer array A.
Second argument is an integer B.

Output Format
Return 1 if good pair exist otherwise return 0.

Example Input
Input 1:

A = [1,2,3,4]
B = 7
Input 2:

A = [1,2,4]
B = 4
Input 3:

A = [1,2,2]
B = 4

Example Output
Output 1:
1
Output 2:
0
Output 3:
1

Example Explanation
Explanation 1:
 (i,j) = (3,4)

Explanation 2:
No pair has sum equal to 4.
Explanation 3:
 (i,j) = (2,3)
*/

function goodPair(A,B){
    for(let i = 0; i< A.length-1; i++){
        for(let j=i+1; j<A.length ;j++){
            if(A[i] + A[j] == B)
            return 1;
        }
    }
    return 0;
}
// console.log(goodPair([1,2,3,4],7));

/*
3.
Given an array A of N integers and also given two integers B and C. 
Reverse the elements of the array A within the given inclusive range [B, C].

Problem Constraints
1 <= N <= 105
1 <= A[i] <= 109
0 <= B <= C <= N - 1

Input Format
The first argument A is an array of integer.
The second and third arguments are integers B and C

Output Format
Return the array A after reversing in the given range.

Example Input
Input 1:
A = [1, 2, 3, 4]
B = 2
C = 3

Input 2:
A = [2, 5, 6]
B = 0
C = 2


Example Output
Output 1:
[1, 2, 4, 3]

Output 2:
[6, 5, 2]


Example Explanation
Explanation 1:
We reverse the subarray [3, 4].

Explanation 2:
We reverse the entire array [2, 5, 6].
*/

function reverseInRange(A,B,C){
    while( B < C){
        let temp;
        temp = A[B]
        A[B] = A[C]
        A[C] = temp
        B ++;
        C --;
    }
    return A;
}
// console.log(reverseInRange([1, 2, 3, 4],2,3));

/*
4.
You are given a constant array A.
You are required to return another array which is the reversed form of the input array.

Problem Constraints
1 <= A.size() <= 10000
1 <= A[i] <= 10000

Input Format
First argument is a constant array A.

Output Format
Return an integer array.

Example Input
Input 1:
A = [1,2,3,2,1]

Input 2:
A = [1,1,10]

Example Output
Output 1:
 [1,2,3,2,1] 

Output 2:
 [10,1,1] 

Example Explanation

Explanation 1:
Reversed form of input array is same as original array

Explanation 2:
Clearly, Reverse of [1,1,10] is [10,1,1]
*/

function reverseArray(A){
    let newArray = [];
    for(let i = A.length -1; i>=0; i--){
        newArray.push(A[i])
    }
    return newArray
    }
// console.log(reverseArray([1,1,10]));

/*
5.
Given an integer array A of size N and an integer B, you have to return the same array 
after rotating it B times towards the right.


Problem Constraints
1 <= N <= 105
1 <= A[i] <=109
1 <= B <= 109


Input Format
The first argument given is the integer array A.
The second argument given is the integer B.


Output Format
Return the array A after rotating it B times to the right


Example Input
Input 1:
A = [1, 2, 3, 4]
B = 2

Input 2:
A = [2, 5, 6]
B = 1

Example Output

Output 1:
[3, 4, 1, 2]

Output 2:
[6, 2, 5]

Example Explanation
Explanation 1:
Rotate towards the right 2 times - [1, 2, 3, 4] => [4, 1, 2, 3] => [3, 4, 1, 2]

Explanation 2:
Rotate towards the right 1 time - [2, 5, 6] => [6, 2, 5]
*/
function arrayRightRotation(A, B){
    B = B % A.length;
    let i = 0;
    let j = A.length -1;
    while(i < j){
        let temp = A[i];
        A[i] = A[j]
        A[j] = temp
        i++;
        j--;    
    }
    i = 0;
    j = B - 1;
    while(i<j){
        let temp = A[i];
        A[i] = A[j]
        A[j] = temp
        i++;
        j--;
    }
    i = B;
    j = A.length-1;
    while(i < j){
        let temp = A[i];
        A[i] = A[j]
        A[j] = temp
        i++;
        j--;   
    }
    return A;
}
// console.log(arrayRightRotation( [1, 2, 3, 4],2));
//Below example with an edge case, number of roations greater than the size
// console.log(arrayRightRotation([1,1,4,9,4,7,1],9));

/*
6.
What is the time complexity for inserting/deleting at the beginning of the array?
Ans: O(n)
*/

/*
7.
Given an array A of size N. You need to find the sum of Maximum and Minimum element in the given array.

Problem Constraints
1 <= N <= 105
-109 <= A[i] <= 109

Input Format
First argument A is an integer array.

Output Format
Return the sum of maximum and minimum element of the array

Example Input
Input 1:

A = [-2, 1, -4, 5, 3]
Input 2:
A = [1, 3, 4, 1]

Example Output

Output 1:
1
Output 2:
5

Example Explanation
Explanation 1:
Maximum Element is 5 and Minimum element is -4. (5 + (-4)) = 1. 

Explanation 2:
Maximum Element is 4 and Minimum element is 1. (4 + 1) = 5.
*/

function maxMinOfArray(A){
    let max = A[0];
    let min = A[0];
    for(let i=0; i<A.length; i++){
        if(BigInt(A[i]) > BigInt(max)){
            max = BigInt(A[i]);
        }
    }
    for(let i=0; i<A.length; i++){
        if(BigInt(A[i]) < BigInt(min)){
            min = BigInt(A[i]);
        }
    }
return Number(max + min)
}
// console.log(maxMinOfArray([-2, 1, -4, 5, 3]));

/*
8.
Given an array A and an integer B, find the number of occurrences of B in A.

Problem Constraints
1 <= B, Ai <= 109
1 <= |A| <= 105


Input Format
Given an integer array A and an integer B.

Output Format
Return an integer, number of occurrences of B in A.

Example Input
Input 1:
 A = [1, 2, 2], B = 2 

Input 2:
 A = [1, 2, 1], B = 3 

Example Output
Output 1:
 2

Output 2:
 0

Example Explanation
Explanation 1:
Element at index 2, 3 is equal to 2 hence count is 2.

Explanation 2:
There is no element equal to 3 in the array.
*/

function linearSearchMultiOccurences(A, B){
    let count = 0;
    for(i=0; i<A.length; i++){
        if(A[i] == B){
            count++;
        }
    }
    return count;
}
// console.log(linearSearchMultiOccurences([1,2,2],2));
// console.log(linearSearchMultiOccurences([1,2,2],3));

/*
9.
You are given an integer array A. You have to find the second largest element/value in the array 
or report that no such element exists.

Problem Constraints
1 <= |A| <= 105
0 <= A[i] <= 109

Input Format
The first argument is an integer array A.

Output Format
Return the second largest element. If no such element exist then return -1.

Example Input

Input 1:
 A = [2, 1, 2] 
Input 2:
 A = [2]

Example Output
Output 1:
 1 

 Output 2:
 -1 

Example Explanation

Explanation 1:
 First largest element = 2
 Second largest element = 1

Explanation 2:
 There is no second largest element in the array.
*/
function secondLargest(A){
    let max = A[0];
    let secondMax = - 1;
    for (let i=0; i<A.length; i++){
        if(A[i] > max){
            max = A[i]
        }
    };
    for(let i=0; i<A.length; i++){
        if(A[i] > secondMax && A[i]!= max){
            secondMax = A[i]
        }
    }
    return Number(secondMax);
}
// console.log(secondLargest([2,1,1,2] ));
// console.log(secondLargest([2] ));

/*
10.
Given an integer array A of size N. In one second, you can increase the value of one element by 1.
Find the minimum time in seconds to make all elements of the array equal.

Problem Constraints
1 <= N <= 1000000
1 <= A[i] <= 1000

Input Format
First argument is an integer array A.

Output Format
Return an integer denoting the minimum time to make all elements equal.

Example Input
A = [2, 4, 1, 3, 2]

Example Output
8

Example Explanation
We can change the array A = [4, 4, 4, 4, 4]. The time required will be 8 seconds.

Hint1:
Since we can only increase the element by 1, we should increase all elements up to the maximum element.
Hint 2:
Since we can only increase the element by 1, we should increase all elements up to the maximum element.
We can find the maximum element, and for finding the minimum number of moves, we should find the summation of the absolute difference of all 
elements with the maximum element.
*/
function timeToEquality(A){
let max = A[0];
let timeToEqual =0;
for(let i=0; i<A.length; i++){
if(A[i] > max){
    max = A[i]
}
}
for(i=0; i<A.length; i++){
    timeToEqual = timeToEqual + max - A[i];
}
return Math.abs(timeToEqual);
}
console.log(timeToEquality( [2, 4, 1, 3, 2]));
/*
11.
What will be the output of the following code?

class Main {
   static void fun(int[]arr) {
       arr[3] = 98;
       return;
   }

   public static void main(String args[]) {
       int[]arr = {10,20,30,40,50};
       fun(arr);
       System.out.println(arr[3]);
   }
}
Options:
40
30
98
Error

Ans:
98
*/

/*
12.
 You are given an integer array A of length N.
 You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
 For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
 More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.


Problem Constraints
 1 <= N, M <= 103
 1 <= A[i] <= 105
 0 <= L <= R < N


Input Format
The first argument is the integer array A.
The second argument is the 2D integer array B.


Output Format
 Return an integer array of length M where ith element is the answer for ith query in B.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [[0, 3], [1, 2]]
Input 2:

A = [2, 2, 2]
B = [[0, 0], [1, 2]]


Example Output
Output 1:
[10, 5]
Output 2:

[2, 4]


Example Explanation
Explanation 1:
The sum of all elements of A[0 ... 3] = 1 + 2 + 3 + 4 = 10.
The sum of all elements of A[1 ... 2] = 2 + 3 = 5.
Explanation 2:

The sum of all elements of A[0 ... 0] = 2 = 2.
The sum of all elements of A[1 ... 2] = 2 + 2 = 4.

Hint:
Hint1:
Look at the constraints for this problem.
The brute force approach will pass in this case.
For each Query iterate from L to R, and take the sum.

Hint2:
Think how can precompute some answers and then use that results to get our final answer.
Think of using prefix sums.

Hint 3:
For every query we traverse the array from L to R 
and calculate the sum in every case.
Time Complexity : O(N*M)
Space complexity : O(M)
*/

//This solution gave time limit exceeded error
function rangeSumQueryMySol(A, B){
    let pf = [];
    let sum =0n;
    let finalSumArray = [];
    for(let i=0; i<A.length; i++){
        sum = BigInt(sum )+ BigInt(A[i]);
        pf.push(sum);
    }
        for(let i=0; i<B.length; i++){
            if(B[i][0] == 0){
                finalSumArray.push(Number(pf[B[i][1]])) 
            }
            else 
            {
            let currSum = pf[B[i][1]] - pf[B[i][0] -1]
            // console.log('pf[B[i][1]]', pf[B[i][1]]);
            // console.log('pf[B[i][0] -1]',pf[B[i][0] -1]);
            finalSumArray.push(Number(currSum))
            }
        }
        return finalSumArray
}
function rangeSumQuery(A,B){
    let ans = [];
    for(let i = 0; i < B.length; i++){
        let sum = 0;
        for(let j = B[i][0]; j <= B[i][1]; j++){
            sum += Number(A[j]);
        }
        ans.push(sum);
    }
    return ans;
}
// A = [1, 2, 3, 4, 5]
// pf = [1,3,6,10,15]
// B = [[0, 3], [1, 2]]
// [0,3] => pf[3] = pf[B[0][1]]
// [1,2] => [pf[2] - pf[1-1]] = pf[B[1][1] - pf[1][0] -1]

// console.log(rangeSumQuery([1, 2, 3, 4, 5],[[0, 3], [1, 2]]));
// console.log(rangeSumQuery([2, 2, 2],[[0, 0], [1, 2]]))