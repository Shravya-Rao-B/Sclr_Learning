/* 
1.

Given an array A of length N. Also given are integers B and C.

Return 1 if there exists a subarray with length B having sum C and 0 otherwise



Problem Constraints
1 <= N <= 105

1 <= A[i] <= 104

1 <= B <= N

1 <= C <= 109



Input Format
First argument A is an array of integers.

The remaining arguments B and C are integers



Output Format
Return 1 if such a subarray exist and 0 otherwise


Example Input
Input 1:
A = [4, 3, 2, 6, 1]
B = 3
C = 11
Input 2:

A = [4, 2, 2, 5, 1]
B = 4
C = 6


Example Output
Output 1:
1
Output 2:

0


Example Explanation
Explanation 1:
The subarray [3, 2, 6] is of length 3 and sum 11.
Explanation 2:
There are no such subarray.

Hints:
Hint 1:
We can brute force for all subarrays and check if is
of length B and sum C.
Can you think of something in O(N)?

Solution approach:
We will use sliding window technique. 
We will check for all subarrays of length B
whether their sum equals C or not.

Time Complexity : O(N)
Space Complexity : O(1)
*/

function subArrayWithGivenLengthAndSum(A, B, C){
    let n = A.length;
    let sum = 0;
    for(let i=0; i<B; ++i){
        sum = sum + A[i]
    }
    if(sum == C){
        return  1;
    }
    let s = 1;
    let e = B;
    while (e < n){
    sum = sum - A[s-1] + A[e];
    if(sum == C){
        return 1;
    }
    s++;
    e++;
    }
    return 0;
}
// console.log(subArrayWithGivenLengthAndSum([4, 3, 2, 6, 1],3,11));
// console.log(subArrayWithGivenLengthAndSum([4, 2, 2, 5, 1],4,6));

/*
2.
Given an array of integers A and an integer B, find and return the minimum number of swaps required to bring all the numbers less than or equal to B together.

Note: It is possible to swap any two elements, not necessarily consecutive.



Problem Constraints

1 <= length of the array <= 100000
-109 <= A[i], B <= 109



Input Format

The first argument given is the integer array A.
The second argument given is the integer B.



Output Format

Return the minimum number of swaps.



Example Input

Input 1:

 A = [1, 12, 10, 3, 14, 10, 5]
 B = 8
Input 2:

 A = [5, 17, 100, 11]
 B = 20


Example Output

Output 1:

 2
Output 2:

 1


Example Explanation

Explanation 1:

 A = [1, 12, 10, 3, 14, 10, 5]
 After swapping  12 and 3, A => [1, 3, 10, 12, 14, 10, 5].
 After swapping  the first occurence of 10 and 5, A => [1, 3, 5, 12, 14, 10, 10].
 Now, all elements less than or equal to 8 are together.
Explanation 2:

 A = [5, 17, 100, 11]
 After swapping 100 and 11, A => [5, 17, 11, 100].
 Now, all elements less than or equal to 20 are together.
 
 Hints:
 Hint 1:
 Here, the task to bring all the elements <= B together. So, first we should find how many elements are there which are <= B.
Now, the count of these elements is fixed and they should be together. In short, window size is fixed.
Can you think of using sliding window technique here?

Hint 2:
First, find the number of elements that are less than or equal to B. Let the count comes out to be X.
Maintain a window of X and check how many elements we need to swap so that all X elements come in that window.

We store the minimum of all that and return that.

Solution Approach:
First, count the number of elements <= B. Let the count comes out to be X.

Create a window of first X elements. To find the number of swaps to bring all elements <= B together in the first window,
you just need to find count of elements > B in first window.
So, count of swaps required in 1 window = count of elements greater than B in that window.

For every window, find the count of elements greater than B, using sliding window technique.

Video solution:
*/

function minSwaps(A, B){
let windowSize = 0;
let n = A.length;
for(let i=0; i<A.length; i++){
    if(A[i] <= B){
        windowSize = windowSize + 1;   
    }
}
// console.log('windowsize', windowSize);
let swap = 0;
//calculate number of swaps for first window
for(let i=0; i<windowSize; i++){
    if(A[i] > B){
        swap = swap + 1;
    }      
}
// console.log('first window swap', swap);
let s = 1;
let e = windowSize;
let ans = swap;
while(e < n){
console.log('s, e', s, e);
if(A[s - 1] > B){
    swap --;
}
if(A[e] > B){
    swap++;
}
ans= Math.min(swap, ans)
s++;
e++;
}
return ans;
}

// console.log(minSwaps([1, 12, 10, 3, 14, 10, 5],8));
// console.log(minSwaps([5, 17, 100, 11],20));
// console.log(minSwaps([52,7,93,47,68,26,51,44,5,41,88,19,78,38,17,13,24,74,92,5,
//     84,27,48,49,37,59,3,56,79,26,55,60,16,83,63,40,55,9,96,29,7,22,27,74,78,38,11,65,29,52,
//     36,21,94,46,52,47,87,33,87,70], 19))
// console.log(minSwaps([1,12,10,3,14,10,5],8));

/*
3.
Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.



Problem Constraints
1 <= A <= 1000



Input Format
First and only argument is integer A


Output Format
Return a 2-D matrix which consists of the elements added in spiral order.



Example Input
Input 1:

1
Input 2:

2
Input 3:

5


Example Output
Output 1:

[ [1] ]
Output 2:

[ [1, 2], 
  [4, 3] ]
Output 2:

[ [1,   2,  3,  4, 5], 
  [16, 17, 18, 19, 6], 
  [15, 24, 25, 20, 7], 
  [14, 23, 22, 21, 8], 
  [13, 12, 11, 10, 9] ]


Example Explanation
Explanation 1:

Only 1 is to be arranged.
Explanation 2:

1 --> 2
      |
      |
4<--- 3
Explanation 3:

Hints:
Hint 1:
Try to think - how you are going to iterate in all 4 directions.

First you need to iterate on outermost boundary,
from left to right, then top to bottom, then right to left and bottom to top.

In this manner, iterate on all the boundaries and keep storing the corresponding values.

Solution Approach:
Take a matrix of dimensions A*A and initialise r = 0, col = 0 and count = 1

Start iterating on the outermost frame. To iterate it,
iterate from left to right A-1 times, then
iterate from top to bottom A-1 times, then
iterate from right to left A-1 times, then
iterate from bottom to top A-t times. And keep storing the values accordingly.

Now, in order to move to next inner frame, A will be decremented by 2, r and c will be incremented by 1.

In this way, keep iterating on all the frames.
*/
function spiralMatrix(A){
    //Create a new matrix of size A
    let mat = Array(A).fill(0).map(() => Array(A));
    //Initialise row to 0
    let r = 0;
    //Initialise column to 0
    let c = 0;
    //The value will begin from 1 and go till 25
    let val = 1;
    //If A>1, continue the spiral filling
    while(A > 1)
    {
    //Fill in from left to right to 4th col. 
    for(let i=1; i<A; ++i){
        mat[r][c] = val;
        c++;
        val++;
    }
    //Fill in top to bottom till 4th row. 
    //The value of row and col will be used from before and row needs to be incremented here.
    for(let i=1; i<A; ++i){
        mat[r][c] = val;
        r++;
        val++;
    }
    //Fill in right to left till 2nd column.
    //The value of row and col will be used from before and column needs to be decremented here.
    for(let i=1; i<A; ++i){
        mat[r][c] = val;
        c--;
        val++;
    }
    //Fill in bottom to top till 2nd row.
    //The value of row and col will be used from before and row will be decremented.
    for(let i=1; i<A; ++i){
        mat[r][c] = val;
        r--;
        val++;
    }
    //When A = 5,after loop1, left and right places were filled and now remaining empty cells are 3 in each row.
    A = A -2;
    //In the 2nd loop, filling of values will start from second row.
    r = r+1;
    //In the 2nd loop, filling of values will start from second column.
    c = c+1;
}
//If the values to be filled was odd, eg A=5, values =25, We will have one value left when A=1.
if(A == 1){
    mat[r][c] = val;
}
return mat;
}

// console.log(spiralMatrix(5));
/*
4.
Given an array of size N, find the subarray of size K with the least average.



Problem Constraints
1<=k<=N<=1e5
-1e5<=A[i]<=1e5


Input Format
First argument contains an array A of integers of size N.
Second argument contains integer k.


Output Format
Return the index of the first element of the subarray of size k that has least average.
Array indexing starts from 0.


Example Input
Input 1:
A=[3, 7, 90, 20, 10, 50, 40]
B=3
Input 2:

A=[3, 7, 5, 20, -10, 0, 12]
B=2


Example Output
Output 1:
3
Output 2:

4


Example Explanation
Explanation 1:
Subarray between indexes 3 and 5
The subarray {20, 10, 50} has the least average 
among all subarrays of size 3.
Explanation 2:

 Subarray between [4, 5] has minimum average

 Hints:
 Hint 1:
 Average for any particular subarray is sum_of_elements/no_of_elements.
In this no. of elements is same in each subarray as we have to find only subarray of size k.
So now question reduces to find subarray which has miniumm sum.

Solution approach:
An Efficient Solution is to solve the above problem in O(n) time and O(1) extra space. The idea is to use sliding window of size k. Keep track of sum of current k elements. To compute sum of current window, remove first element of previous window and add current element (last element of current window).

1) Initialize res_index = 0 // Beginning of result index
2) Find sum of first k elements. Let this sum be 'curr_sum'
3) Initialize min_sum = sum
4) Iterate from (k+1)'th to n'th element, do following
   for every element arr[i]
      a) curr_sum = curr_sum + arr[i] - arr[i-k]
      b) If curr_sum < min_sum
           res_index = (i-k+1)
5) Print res_index and res_index+k-1 as beginning and ending
   indexes of resultant subarray.
*/

function subarrayWithLeastAverage(A,B){
let n = A.length;
let sum = 0;
let minAvg =0;
let minIndex = 0;
for(let i=0; i<B; i++){
sum = sum + A[i];
}
minAvg =(sum/B);
let s = 1;
let e = B;
while(e < n){
  sum = sum - A[s-1] + A[e]; 
  if((sum/B) < minAvg){
    minIndex = s;
    minAvg = (sum/B);
  }
  s++;
  e++; 
}
return minIndex;
}
// console.log(subarrayWithLeastAverage([3, 7, 90, 20, 10, 50, 40], 3));
// console.log(subarrayWithLeastAverage([3, 7, 5, 20, -10, 0, 12],2));
// console.log(subarrayWithLeastAverage([20,3,13,5,10,14,8,5,11,9,1,11],9));