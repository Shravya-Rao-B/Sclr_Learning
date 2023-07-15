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

function subMatrixSum(A,B,C,D,E){
        let ans = [];
        let Q = B.length;
        let rLen = A.length;
        let cLen = A[0].length;
        let pf = Array.from(Array(A.length), () => new Array(A.length));
        let mod = 1000000007
        for(let i=0; i<cLen; i++){
                pf[0][i] = A[0][i]
        }
        for(let j=0; j<rLen; j++){
                pf[j][0] = A[j][0]
        }
        //columnwise prefix sum
        for(let r=0; r<rLen; r++){
                for(let c=1; c<cLen; c++){
                        pf[r][c] = pf[r][c-1] + A[r][c]
                }
        }
        for(let c = 0; c<cLen; c++){
                for(let r = 1; r<rLen; r++){
                        pf[r][c] = pf[r-1][c] + pf[r][c]
                }
        }
        for(let i = 0; i<Q; i++){
                let r1 = B[i] - 1;
                let c1 = C[i] - 1;
                let r2 = D[i] - 1;
                let c2 = E[i] - 1;
                let total = pf[r2][c2] % mod;
                if( r1 > 0){
                total = (total - pf[r1-1][c2] + mod) % mod
                }
                if (c1 > 0){
                total = (total - pf[r2][c1-1] + mod) % mod
                }
                if(r1>0 && c1>0){
                        total = (total + pf[r1-1][c1-1] + mod )% mod
                }
                while(total < 0){
                    total = (total + mod) % mod
                }
                ans[i] = Number(total);
        }
        return ans ;
}
// console.log(subMatrixSum([ [5, 17, 100, 11],[0, 0, 2, 8] ], [1, 1],[1, 4],[2, 2],[2, 4]));
// console.log(subMatrixSum([[1,2,3],[4,5,6],[7,8,9]],[1,2], [1,2], [2,3],[2,3]));
// console.log(subMatrixSum([40,46,56,78,-72,-2,98,-21,94,19,23,76,-70,73,-86,52,36,22,74,-55,31,-16,23,14,88,-16,51,63,-63,-33,-72,-59,20,26,-4,-68,-10,-61,80,51,24,-67,32,57,-16,9,13,-81,76,29,83,83,-47,-6,-45,-13,-88,-13,67,-30,39,-63,-61,-49,-7,0,55,12,41,37,-67,73,60,-57,-82,-44,-92,69,-58,94,-29,41,41,-50,52,32,-97,100,-66,-23,-54,66,23,-17,8,-85,86,68,-97,28,-34,99,-24,78,62,-76,54,-3,71,25,30,56,17,-67,40,-69,-68,62,-15,89,13,73,-36,74,-38,-70,-100,-3,-54,-100,-37,8,39,-24,8,23,30,-64,-75,-92,42,69,70,-11,-88,-46,-52,-69,-21,-83,-26,100,-62,-67,-62,88,28,7,36,-7,-70,61,69,21,-95,-60,80,65,100,51,7,-43,0,95,-96,-38,-25,69,96,-77,-35,-93,100,-20,52,13,-75,20,-83,-40,89,-47,-69,-38,-20,-56],[31,96,-94,82,-14,32,79,33,-20,39,59,-30,-1,-54,10,-59,-83,56,82,32,-84,67,-24,-83,-70,10,49,38,68,91,-58,79,-16,59,-63,48,81,63,9,-25,-20,59,12,17,-43,4,7,-76,31,0,30,12,38,-100,-71,-91,97,59,-77,33,11,67,96,23,-22,79,77,65,-4,-77,-32,-44,-93,-31,-65,59,-35,96,19,10,36,-58,-21,-19,35,-24,61,19,-46,-45,90,-90,-28,-37,-60,-10,61,6,42,29,-39,21,-88,-86,-16,-72,68,-11,88,54,88,77,5,40,90,5,60,64,-18,20,-27,2,-97,44,-69,71,43,-23,-51,-79,-9,-38,69,65,99,34,-4,-29,-57,77,-5,81,100,-57,25,61,83,-94,67,-53,-8,-61,32,-88,-47,70,-74,-88,2,-20,-74,-1,-15,-14,-32,-1,63,75,-1,-5,80,54,72,-12,-35,6,-92,72,-65,60,-63,-26,71,16,-54,23,-37,0,-19,-90,57,71,-25,38,-96,-56],[13,-22,45,-43,66,-10,100,52,-24,88,67,-64,-45,-9,25,48,47,62,-69,-92,49,-46,-50,-17,88,-97,-53,-92,-33,26,18,82,56,-4,56,-8,89,-69,-88,-9,47,-66,-67,26,-29,-16,-82,-42,86,-50,-82,-50,8,-85,28,-79,45,-91,29,-88,-93,-33,2,-34,93,-38,9,-40,35,-93,-51,20,-41,-86,-17,-22,-72,-88,16,-67,-70,-98,-45,55,-89,71,60,-72,-65,-57,30,81,16,-49,5,66,-40,35,90,48,45,-95,37,-2,39,89,-91,-50,84,25,44,-27,-36,65,-56,73,-9,-59,-31,47,64,83,65,58,74,78,-34,-27,80,-6,-23,24,-16,48,-72,39,13,81,-87,54,-62,-88,-4,-18,46,60,14,2,-2,71,88,5,-67,-16,95,54,9,25,-19,83,56,74,-77,76,47,78,88,92,22,18,-7,92,56,99,-74,74,-66,52,18,39,30,-67,-36,36,87,46,39,15,-65,76,-77,-90,-83,40,73,86],[6,89,-87,-15,79,-74,80,-45,-76,92,-8,-85,-47,38,84,85,12,92,19,-65,-18,28,-65,41,44,-14,-93,78,15,-87,37,-34,-84,-86,23,-88,-28,-32,21,71,72,78,-56,-67,-82,12,13,-92,16,7,49,-22,-70,-84,-48,53,-60,-91,8,-73,-32,-42,-84,41,65,-40,-21,-31,30,-70,21,88,29,70,74,-41,-99,-40,-73,-54,45,-100,-21,76,77,38,50,-83,35,-31,27,5,59,100,-21,75,-26,91,75,-61,-77,-30,-78,27,-55,-95,0,-68,56,-81,-32,-38,53,62,75,-5,35,27,89,8,-18,79,-88,-18,78,9,-20,-44,52,-41,-44,-64,-74,3,-54,73,53,93,-87,50,83,78,47,-49,28,8,-12,18,-35,42,-5,30,-30,14,23,32,19,29,-67,27,95,-2,-90,88,25,-55,76,17,-21,-94,72,-34,-45,-73,41,99,-86,92,69,53,-84,27,-30,87,58,-64,48,52,26,-45,-58,68,40,48,-11,75],[72,3,93,-46,-87,-62,-62,44,87,73,43,-14,-10,-35,-86,-1,0,35,-53,0,-35,-35,-27,-57,-12,61,67,-76,-35,48,-12,-82,-3,14,65,26,19,91,-26,54,-47,76,63,47,98,87,-18,-39,29,-12,-89,77,-83,-2,99,-67,-16,-24,48,-6,-57,-35,86,20,67,38,81,11,99,24,86,-78,-37,-34,-31,73,-87,80,36,-93,-3,95,54,-70,-76,-16,-95,-48,-19,18,87,-48,-60,-17,-90,45,-12,-1,37,-28,-92,58,-91,-61,-26,-6,97,-31,84,-56,56,-15,17,-87,-18,-51,-72,48,-24,57,-25,-34,62,-63,-28,-69,81,64,69,-27,73,-47,-77,-90,-37,-3,72,27,87,-35,-9,-87,-9,85,95,76,-11,14,-11,55,-42,-95,-10,94,4,-18,100,-22,-20,-62,28,-68,57,-85,-50,-95,30,-99,-20,11,-6,68,-10,-31,-32,50,-28,44,-44,68,-74,43,-18,85,-78,45,24,93,87,-46,-11,-40,48,-66,-76,-62],[-11,10,5,-85,-59,71,26,-34,79,-5,-61,-60,4,-72,-83,-64,4,87,-69,85,38,-39,82,-16,99,-51,-37,-65,89,-37,62,59,-45,-63,-12,-39,31,62,-50,-8,29,-12,-4,-55,92,-41,72,-7,74,24,-44,-78,-86,64,10,55,57,-65,-37,-73,41,20,-55,-30,36,92,24,70,-73,-25,-64,-75,-41,-79,-84,-53,69,-6,42,84,-36,24,45,20,39,78,-7,27,35,60,36,42,-63,64,23,-40,-93,-35,96,83,-62,-11,61,46,-36,48,-28,-67,-70,92,-14,90,-85,14,38,-76,53,-88,84,21,-84,-24,45,62,8,3,56,-91,-1,-13,-30,1,65,-23,48,49,-10,67,-13,58,-79,-81,-38,-50,77,-51,97,90,50,-11,-19,91,94,28,-53,-60,-7,-67,97,-67,10,18,83,-15,-74,55,77,-9,-37,-74,37,-45,63,27,-66,-69,35,-67,20,96,-84,21,53,1,20,85,-72,-65,94,36,-63,78,69,100,88,6],[-73,-12,24,-94,-35,90,7,-97,-61,-43,36,-57,15,-6,15,-70,-68,39,10,66,12,27,-26,-2,-16,-93,-17,60,-49,49,48,-55,82,43,-36,55,60,38,-3,37,-68,14,82,-91,-90,-100,-91,-94,12,72,29,21,100,82,-90,10,74,-39,-4,65,-57,-94,73,-56,80,93,-82,36,-31,35,-25,6,-99,76,-73,-12,-23,40,21,44,3,73,-74,-36,-69,1,76,71,5,61,80,-10,-45,37,18,5,14,-33,55,-63,3,-64,83,96,-85,67,84,38,-29,-64,77,90,31,-99,-19,-71,-80,-95,53,38,20,15,-87,-65,87,70,24,43,-59,59,-66,-52,34,47,-10,-21,41,65,-29,-62,-61,27,-23,-1,95,-53,10,-76,54,-37,51,-91,-33,-83,42,-49,40,100,-93,-21,-89,-25,9,14,-78,29,-99,-57,-31,75,39,-41,55,79,16,55,-91,11,92,7,-64,-78,-69,70,-45,-65,7,32,-17,-65,5,-98,34,44,-26,-60],[-4,68,9,-62,-95,40,-80,-23,-88,64,-53,44,8,33,-63,19,100,-96,94,-32,65,-46,-63,-44,70,-6,66,59,-3,61,-35,-51,-26,75,-2,99,97,-92,48,-51,62,81,-98,87,81,69,-85,-32,-53,28,-1,63,-96,66,-17,-14,-4,49,-4,-93,43,100,5,90,-51,-51,1,-98,15,-50,-90,27,0,-75,-44,-94,-27,-79,-72,57,-38,-99,-47,7,21,-92,0,6,20,26,45,19,-17,-39,-98,93,6,93,6,-13,-6,-78,-32,-72,12,-82,-54,-42,-68,17,-68,-31,-45,-45,-64,85,-45,62,93,-79,22,54,53,26,73,79,5,75,-95,-42,-95,8,-89,86,11,-46,55,-32,-61,3,-99,-67,-88,-6,-33,23,84,-98,-48,83,-10,100,24,-45,-56,24,-71,71,-7,96,7,71,8,-47,-84,67,-29,62,-98,-99,-51,-67,65,-21,-95,16,21,-18,12,-79,-86,0,92,62,-52,0,64,22,-97,-58,-72,-33,49,80,-13,-94],[20,-21,-16,-23,-69,30,-96,47,43,23,77,-63,-76,32,5,50,18,53,-53,34,36,-100,-24,38,100,-57,-43,-93,-31,72,90,61,-76,-13,99,-31,-38,-26,63,-26,-58,-33,39,-32,-81,35,38,81,-38,82,-5,-66,-92,55,-98,57,45,66,55,50,-10,-73,-9,-23,-95,-81,39,69,-53,-62,83,52,45,84,29,-48,-14,97,60,-26,83,-29,-52,20,84,48,18,24,15,1,25,-8,-61,-65,98,-97,-53,-62,16,-68,-90,26,-60,-53,-44,-14,-71,-52,-6,0,-77,1,-92,-61,31,-20,-61,0,-13,100,-4,-58,-51,15,28,47,-98,-70,-75,51,-12,-33,-65,19,92,-63,3,59,-54,66,-96,93,-35,-70,-32,79,63,80,-74,-42,-34,-45,-87,39,87,-75,78,-11,-8,9,38,83,-28,97,8,-6,98,29,76,-62,-73,-57,20,21,35,60,52,-55,-1,-45,35,-53,36,-71,99,95,19,-25,-2,23,100,12,90,84,5,-21],[-98,-2,86,-63,-76,41,-60,79,88,-87,-26,-86,-88,4,-89,57,-91,68,99,22,6,-72,53,7,-87,-48,9,47,26,3,-45,81,-80,-30,69,-89,-95,-64,92,14,51,15,-52,-27,31,-86,28,-58,7,39,21,-54,-7,-26,67,67,-62,-14,-89,16,-86,-2,-18,-12,83,-88,-87,7,-23,-17,5,-36,52,-27,27,68,21,75,19,23,22,0,25,32,-70,-69,9,62,3,44,11,33,-22,5,49,-18,-32,-89,-42,12,-57,1,-57,-99,82,-28,9,8,87,12,-70,-46,-63,-45,-70,-29,80,74,49,59,-65,-82,-24,84,79,-49,82,58,0,12,78,25,-49,4,-20,83,85,-85,-90,83,-69,22,-28,83,-48,71,47,24,9,-2,-28,52,-18,85,47,-63,50,25,-16,-14,-13,-61,2,77,36,-26,26,34,-96,65,87,-14,-86,62,-45,-61,36,22,-83,60,-32,31,31,-44,-12,-40,-10,-88,82,-15,96,41,-86,69,86,5],[-86,95,-99,-20,95,-83,16,12,61,87,-24,-19,-53,-8,-89,69,-96,78,46,78,24,11,-95,89,-52,-66,-98,-36,-19,52,-79,-15,34,22,60,-72,-38,-50,-72,90,-81,48,-47,-11,97,-85,63,-98,-63,-67,-54,9,62,-85,75,-34,98,-71,2,-14,90,83,11,99,65,21,-39,-2,73,-3,90,71,70,-75,12,-92,62,-20,-31,79,77,26,-21,-10,100,-28,74,-18,-20,49,-92,91,-17,26,80,-39,49,-61,97,3,4,85,-78,69,79,26,-77,-55,-48,-31,-74,32,-7,28,-52,-86,-58,-42,-79,74,34,-91,-80,-61,40,-14,46,-1,-9,37,61,82,-56,-81,-6,45,-88,-82,-11,-92,22,62,-71,12,39,-95,-80,-12,26,43,92,87,-84,33,25,39,-95,-72,37,-26,-92,62,78,-20,-54,20,45,47,-10,27,-24,4,-66,79,-94,34,-81,24,-31,29,96,-59,-41,41,-14,56,67,-43,-10,-48,60,-44,-75,-16,-29,-18],[28,-98,64,98,96,73,-96,81,78,-19,18,79,14,99,-25,33,-70,-72,-89,46,41,4,-48,-4,1,15,-89,-50,17,-34,-9,92,-75,-85,24,-71,-68,-38,85,-78,-73,13,-6,-55,-59,1,76,-30,-79,98,100,57,94,4,-86,-94,-65,-100,-46,-28,5,1,87,65,93,-76,59,-25,-65,-69,0,-7,60,-97,-70,-52,-11,10,-38,51,-100,69,48,92,12,46,23,63,-83,44,-72,-27,5,-20,27,89,-46,45,94,6,-77,-67,46,28,22,-89,-70,70,-25,-84,27,25,11,-50,-97,94,-4,5,-56,76,90,2,20,16,-79,29,-20,-86,9,29,-77,14,13,79,-86,82,37,-76,-6,-44,-25,-26,-34,-60,44,-53,-58,45,-84,-96,-44,66,-48,-22,-19,97,-8,85,-69,42,-21,99,-54,-42,-28,-68,32,19,-25,1,-37,-25,88,-93,26,-47,3,19,-73,-77,93,31,4,-22,-51,-12,94,25,-18,-80,-39,-56,13,31,-60,-56],[30,46,44,61,-32,-26,-85,-92,60,-40,-100,-23,-57,-6,-89,-76,-73,-98,18,-44,-89,92,-12,-56,36,27,-34,-44,-64,93,96,68,-64,-45,-49,-24,69,94,3,-94,-48,2,83,-2,40,-76,90,-86,-7,82,66,-43,-56,54,-89,-88,-35,-59,34,0,-45,24,91,100,66,18,96,-72,-34,-75,-55,89,65,80,59,22,-85,97,-92,-49,-42,43,-26,24,-34,77,44,-79,-2,21,64,-30,6,75,27,22,-21,-96,-1,-33,-44,97,-24,-11,-96,22,-37,89,22,95,18,43,-23,89,-21,-1,98,-35,68,-25,-27,78,47,-37,-39,88,5,21,32,-61,46,-28,-53,97,30,64,5,93,72,-76,62,-98,78,-41,-81,-86,48,99,-97,-48,-18,16,-11,54,-18,-37,74,32,-44,-82,29,93,21,51,-70,-81,-13,34,-1,93,-48,50,68,71,11,99,53,25,31,-71,80,-33,-27,98,95,-53,56,-35,86,-10,-77,64,-67,21,95,-24],[91,-38,-33,93,-61,-87,64,-67,-72,-76,-90,-5,-24,-2,77,-43,-9,-37,-73,11,35,-5,64,-35,-21,-9,-12,71,27,-44,61,88,-28,-24,70,-53,66,-56,5,4,-33,18,-7,88,6,7,97,27,65,87,4,-40,53,99,80,-15,-28,97,52,5,-84,47,22,27,94,57,-34,-72,31,-83,12,100,-36,52,3,-72,5,-24,68,-69,26,97,50,86,-73,-98,-12,-40,-21,-68,67,20,-8,-48,-75,-60,9,97,-56,-67,-35,21,-94,-19,39,25,70,45,66,5,2,28,-11,41,68,42,72,-78,52,63,-96,78,-86,47,-66,80,-53,-83,27,80,0,29,2,46,97,83,-28,52,10,57,46,32,-48,-89,-4,-23,-71,22,81,-75,-66,92,1,93,-63,-67,73,74,-68,86,-29,29,-22,-98,46,-11,25,-78,-14,15,85,35,-49,-52,77,-70,5,-56,-50,32,-78,-45,-21,99,66,11,-85,26,-5,-36,80,-43,-6,4,-35,-40]))

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
        let rLen = A.length;
        let cLen = A[0].length;
        let max = Number.NEGATIVE_INFINITY;
        let pf = Array.from(Array(A.length), () => new Array(A.length));
        //Populate first row and first column
        for(let i=0; i<rLen; i++){
                pf[i][0] = A[i][0]
        }
        for(let j=0; j<cLen; j++){
                pf[0][j] = A[0][j]
        }
        //Add columns
        for(let r=0; r<rLen; r++){
                for(let c=1; c<cLen; c++){
                        pf[r][c] = pf[r][c-1] + A[r][c]
                }
        }
        //Add rows
        for(let r=1; r<rLen; r++){
                for(let c=0; c<cLen; c++){
                        pf[r][c] = pf[r-1][c] + pf[r][c]
                }
        }
        for(let r = 0; r<rLen; r++){
                for(let c=0; c<cLen; c++){
                //As the matrix is sorted, the Bottom Right can be fixed as the last cell of Matrix
                let r2 = rLen-1;
                let c2 = cLen -1;
                let total = pf[r2][c2];
                if(r > 0){
                        total =  total - pf[r-1][c2]
                }
                if(c > 0){
                        total = total - pf[r2][c-1]
                }
                if( r>0 && c>0){
                        total = total + pf[r-1][c-1]
                }
                max = Math.max(total, max);
                }
        }
        return max;
}
// console.log(maxSubMatrixSum([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(maxSubMatrixSum([[-83,-73,-70,-61],[-56,-48,-13,4],[38,48,71,71]]));
// console.log(maxSubMatrixSum([[-5, -4,-3],[-1, 2, 3],[2, 2, 4]]));
