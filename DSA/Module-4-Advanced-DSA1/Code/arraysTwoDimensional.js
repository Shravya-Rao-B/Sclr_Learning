/*
1.
Given a 2D Matrix A of dimensions N*N, we need to return the sum of all possible submatrices.

Problem Constraints
1 <= N <=30

0 <= A[i][j] <= 10

Input Format
Single argument representing a 2-D array A of size N x N.

Output Format
Return an integer denoting the sum of all possible submatrices in the given matrix.

Example Input
Input 1:
A = [ [1, 1]
      [1, 1] ]
Input 2:
A = [ [1, 2]
      [3, 4] ]


Example Output
Output 1:
16
Output 2:
40


Example Explanation
Example 1:
Number of submatrices with 1 elements = 4, so sum of all such submatrices = 4 * 1 = 4
Number of submatrices with 2 elements = 4, so sum of all such submatrices = 4 * 2 = 8
Number of submatrices with 3 elements = 0
Number of submatrices with 4 elements = 1, so sum of such submatrix = 4
Total Sum = 4+8+4 = 16
Example 2:
The submatrices are [1], [2], [3], [4], [1, 2], [3, 4], [1, 3], [2, 4] and [[1, 2], [3, 4]].
Total sum = 40

Hints:
Hint 1:
For each element of the matrix, let us try to find the number of sub-matrices the element will lie in. Then multiplying
that with the element and hence finding the total sum.
How?

Solution approach:
Let us suppose the index of an element be (X, Y) in 0 based indexing, then the number of submatrices Sub(x,y) for this element
can be given by the formula Sub(x, y) = (X + 1) * (Y + 1) * (N – X) * (N – Y) .
This formula works because we just have to choose two different positions on the matrix that will create a submatrix that
envelopes the element. Thus, for each element, ‘sum’ can be updated as sum += Sub(x,y) * A[x][y].

More Formally,
Number of ways to choose from top-left elements (X + 1) * (Y + 1)
Number of ways to choose from bottom-right elements (N - X) * (N - Y)
*/
function sumOfSubarraysBF(A){
let R = A.length;
let C = A[0].length;
let sum = 0;
for(let r=0; r<R; r++){
for(let c=0; c<C; c++){
let x = (r+1)*(c+1);
let y =  (R-r)*(C-c); 
let prod = x * y * A[r][c]
sum = sum + prod;
}
}
return sum;     
}
// console.log(sumOfSubarraysBF([[1,2],[3,4]]));
/*
2.
Given a matrix of integers A of size N x M and multiple queries Q, for each query, find and return the submatrix sum.

Inputs to queries are top left (b, c) and bottom right (d, e) indexes of submatrix whose sum is to find out.

NOTE:

Rows are numbered from top to bottom, and columns are numbered from left to right.
The sum may be large, so return the answer mod 109 + 7.
Also, select the data type carefully, if you want to store the addition of some elements.
Indexing given in B, C, D, and E arrays is 1-based.
Top Left 0-based index = (B[i] - 1, C[i] - 1)
Bottom Right 0-based index = (D[i] - 1, E[i] - 1)


Problem Constraints
1 <= N, M <= 1000
-100000 <= A[i] <= 100000
1 <= Q <= 100000
1 <= B[i] <= D[i] <= N
1 <= C[i] <= E[i] <= M



Input Format
The first argument given is the integer matrix A.
The second argument given is the integer array B.
The third argument given is the integer array C.
The fourth argument given is the integer array D.
The fifth argument given is the integer array E.
(B[i], C[i]) represents the top left corner of the i'th query.
(D[i], E[i]) represents the bottom right corner of the i'th query.



Output Format
Return an integer array containing the submatrix sum for each query.



Example Input
Input 1:

 A = [   [1, 2, 3]
         [4, 5, 6]
         [7, 8, 9]   ]
 B = [1, 2]
 C = [1, 2]
 D = [2, 3]
 E = [2, 3]
Input 2:

 A = [   [5, 17, 100, 11]
         [0, 0,  2,   8]    ]
 B = [1, 1]
 C = [1, 4]
 D = [2, 2]
 E = [2, 4]


Example Output
Output 1:

 [12, 28]
Output 2:

 [22, 19]


Example Explanation
Explanation 1:

 For query 1: Submatrix contains elements: 1, 2, 4 and 5. So, their sum is 12.
 For query 2: Submatrix contains elements: 5, 6, 8 and 9. So, their sum is 28.
Explanation 2:

 For query 1: Submatrix contains elements: 5, 17, 0 and 0. So, their sum is 22.
 For query 2: Submatrix contains elements: 11 and 8. So, their sum is 19.
 
 Hints:
 Hint 1:
 One way to solve is, for each query, run two loops: The outer loop from x1 to x2 and the inner loop from y1 to y2
and sum all the elements in that range. But this will not pass the constraints as for each query it takes O(N*M), and there are
O(10^5) queries.
Think about how we can precompute some part of the answer and use it to answer the queries?

Hint 2:
First, we need to compute prefixSumMatrix[N][M] of same dimensions as the given 2D array.
Also, choose the data type of prefixSumMatrix[][] carefully, as the sum of elements can be very large.

Once the prefixSumMatrix[][] is computed, for each query,
You need to think how can we find the sum of the submatrix from (b,c) to (d,e).
Try to find the formula.

Solution Approach:
First, we need to compute prefixSumMatrix[N][M] of same dimensions as the given 2D array.
Also, choose the data type of prefixSumMatrix[][] carefully, as the sum of elements can be very large.

Once the prefixSumMatrix[][] is computed, for each query,
you can calculate the sum of the submatrix in constant time by subtracting the appropriate prefix sums.
Specifically, to find the sum of the submatrix from (b,c) to (d,e), you can use the following formula:

sum = prefixSumMatrix[d][e] - prefixSumMatrix[d][c-1] - prefixSumMatrix[b-1][e] + prefixSumMatrix[b-1][c-1]

This formula subtracts the prefix sums of the regions that should not be included in the submatrix, and
adds back the prefix sum of the overlap region.

Finally, you can return the answer mod 1000000007 to ensure that it fits within the given constraints.
*/

function subMatrixSumBruteForce(A, B, C, D, E){
        let sumArray = [];
        let total1 = 0;
        let total2 = 0;
        for(let r=B[0]-1; r<=D[0]-1; r++)
        {
                console.log('B n D', B[1]-1, D[1]-1);
                for(let c=B[1]-1; c<=D[1]-1; c++){
                console.log('column currently', c)
                 console.log('A[r][c] loop1', A[r][c]);
                  total1 = total1 + A[r][c]
                }
        }
        sumArray.push(total1);
        for(let r=C[0]-1; r<=E[0]-1; r++)
        {
                for(let c=C[1]-1; c<=E[1]-1; c++){
                console.log('C and E', C, E);
                console.log('r n c loop 2', r, c);
                console.log('A[r][c] loop2', A[r][c]);
                total2= total2 + A[r][c]
                }
        }
        sumArray.push(total2);
        return sumArray;
}
//SC : O(RC)  (rows * columns)
// console.log(subMatrixSumBruteForce([[1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]], [1, 2], [1, 2], [2, 3], [2, 3]));
// console.log(subMatrixSumBruteForce([ [5, 17, 100, 11],[0, 0, 2, 8] ], [1, 1],[1, 4],[2, 2],[2, 4]));
function subMatrixSum(A, B, C, D, E){
let pf = Array.from(Array(A.length), () => new Array(A.length))
pf[0][0] = A[0][0];
let subMatrixSumArray = []
let rLen = A.length;
let cLen = A[0].length;
let Q = B.length;
for (let i = 0; i < rLen; i++)
{
            pf[i][0] = A[i][0];
}
console.log('pf init', pf);
for (let r=0; r<rLen; r++){
for(let c=1; c<cLen ; c++)
{
        pf[r][c] = pf[r][c-1] + A[r][c];
}
}
console.log('pf after row wise', pf);
for(let c=0; c<cLen ; c++){
        for(let r=1; r<rLen; r++){
                pf[r][c] = pf[r-1][c] + pf[r][c]
        }
}
console.log("pf after col wise", pf);
// TL = B = [r1,c1] BR = D = [r2, c2]
let r1 = B[0] -1
let c1 = B[1] -1
let r2 = D[0] - 1
let c2 = D[1] -1 
console.log('r1,c1,r2,c2',[r1,c1], [r2,c2]);
let total = pf[r2][c2];
if(r1 > 0){
        total = total - pf[r1-1][c2]
}
if(c1 > 0){
        total = total - pf[r2][c1 - 1]
}
if(r1 > 0 && c1 > 0){
        total = total + pf[r1-1][c1-1]
}
let r3 = C[0] -1
let c3 = C[1] -1
let r4 = E[0] - 1
let c4 = E[1] -1 
let totalSec = pf[r4][c4];
if(r3 > 0){
        totalSec = totalSec - pf[r3-1][c4]
}
if(c3 > 0){
        totalSec = totalSec - pf[r4][c3 - 1]
}
if(r3 > 0 && c3 > 0){
        totalSec = totalSec + pf[r3-1][c3-1]
}
subMatrixSumArray.push(total);
subMatrixSumArray.push(totalSec);
return subMatrixSumArray
}
// console.log(subMatrixSum([ [5, 17, 100, 11],[0, 0, 2, 8] ], [1, 1],[1, 4],[2, 2],[2, 4]));
// console.log(subMatrixSum([[1,2,3],[4,5,6],[7,8,9]],[1,2], [1,2], [2,3],[2,3]));

/*
3.
Given a row-wise and column-wise sorted matrix A of size N * M.
Return the maximum non-empty submatrix sum of this matrix.


Problem Constraints
1 <= N, M <= 1000
-109 <= A[i][j] <= 109


Input Format
The first argument is a 2D integer array A.


Output Format
Return a single integer that is the maximum non-empty submatrix sum of this matrix.


Example Input
Input 1:-
    -5 -4 -3
A = -1  2  3
     2  2  4
Input 2:-
    1 2 3
A = 4 5 6
    7 8 9


Example Output
Output 1:-
12
Output 2:-
45


Example Explanation
Expanation 1:-
The submatrix with max sum is 
-1 2 3
 2 2 4
 Sum is 12.
Explanation 2:-
The largest submatrix with max sum is 
1 2 3
4 5 6
7 8 9
The sum is 45.

Hints:
Hint 1:
Imagine you had the same problem but with a 1D array. 
That is if the array was sorted and find the maximum subarray.

What would be the answer? The answer will be the sum of one of the suffixes right? 
So we could check over all suffix arrays
and return the maximum sum. 

The sum of all suffix arrays can be computed in O(N).
Now apply the same logic on a 2D matrix.

Solution Approach:
Imagine you had the same problem but with a 1D array. 
That is if the array was sorted and find the maximum subarray.

What would be the answer? The answer will be the sum of one of the suffixes right? 
So we could check over all suffix arrays
and return the maximum sum. 

The sum of all suffix arrays can be computed in O(N).
Now apply the same logic on a 2D matrix.

What is a suffix matrix? 
 A matrix whose right lower corner is always the N*M th element. 

Now we can have iterate over all the possible top left corners which is N*M. So N*M matrices.
The sum of each of these matrices can be computed in O(1) with a precomputation of O(N*M).
Return the maximum sum of all these matrices. 

Time Complexity - O(N * M)
Space Complexity - O(N * M)

*/
function maxSubMatrixSum(A){
        let R = A.length;
        let C = A[0].length;
        let max = Number.NEGATIVE_INFINITY;
        let sf = Array.from(Array(A.length), () => new Array(A.length));
        //fill in first column
        for(let i=0; i<R; i++){
                sf[i][0] = A[i][0]
        }
        //fill in last row
        for(let i=C-1;i>=0; i--){
                sf[0][i] = A[0][i]
        }

        for(let r=0; r<R; r++){
                for(let c=C-1; c>=1; c--){
                // console.log('r,c', r,c);
                sf[r][c] = A[r][c-1] + A[r][c]
                }
        }
        for(let r=R-1; r>=1; r--){
                for(let c=0; c<C; c++){
                // console.log('sf error r, c',r, c);
                sf[r-1][c] =  sf[r][c] + sf[r-1][c] 
                }
        }
        // console.log(sf);
        for(let r=0; r<R; r++){
                for(let c=0; c<C; c++){
                        if(sf[r][c] > max){
                                max = sf[r][c]
                        }
                }
        }
        return max;
}
// console.log(maxSubMatrixSum([[1,2,3],[4,5,6],[7,8,9]]));
console.log(maxSubMatrixSum([[-83,-73,-70,-61],[-56,-48,-13,4],[38,48,71,71]]));
