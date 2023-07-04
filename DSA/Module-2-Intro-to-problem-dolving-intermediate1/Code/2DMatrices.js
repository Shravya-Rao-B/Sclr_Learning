/*
1

You are given a 2D integer matrix A, return a 1D integer array containing column-wise sums of original matrix.



Problem Constraints
1 <= A.size() <= 103

1 <= A[i].size() <= 103

1 <= A[i][j] <= 103



Input Format
First argument is a 2D array of integers.(2D matrix).



Output Format
Return an array conatining column-wise sums of original matrix.



Example Input
Input 1:

[1,2,3,4]
[5,6,7,8]
[9,2,3,4]


Example Output
Output 1:

{15,10,13,16}


Example Explanation
Explanation 1

Column 1 = 1+5+9 = 15
Column 2 = 2+6+2 = 10
Column 3 = 3+7+3 = 13
Column 4 = 4+8+4 = 16

Hints:
Hint 1:
Just check column by column and keep storing their sum in a vector.

Solution approach:
We can iterate the matrix in a column major manner.
For each column we can store its sum in a variable,
and once the sum has been computed for that column,
we can store it in an array, which we finally return as the answer.
*/

function columnSum(A){
    let ans = [];
	    let n = A.length; 
	    let m = A[0].length;
	    for(let j = 0; j < m; j++) {
	        let sum = 0;
	        
	        for(let i = 0; i < n; i++)
	            sum += A[i][j];
	        ans.push(sum);
	    }
	    return ans;
}
// console.log(columnSum([[1,2,3,4],[5,6,7,8],[9,2,3,4]]));

/*
2.
Problem Description
You are given a 2D integer matrix A, return a 1D integer array containing row-wise sums of original matrix.



Problem Constraints

1 <= A.size() <= 103

1 <= A[i].size() <= 103

1 <= A[i][j] <= 103



Input Format
First argument A is a 2D array of integers.(2D matrix).



Output Format
Return an array conatining row-wise sums of original matrix.



Example Input
Input 1:

[1,2,3,4]
[5,6,7,8]
[9,2,3,4]


Example Output
Output 1:

[10,26,18]


Example Explanation
Explanation 1

Row 1 = 1+2+3+4 = 10
Row 2 = 5+6+7+8 = 26
Row 3 = 9+2+3+4 = 18

Hints:
Hint 1:
Write the Python code that defines a function called solve , which takes a parameter A. This function calculates the sum of elements in each row of a two-dimensional list A and returns a list ans containing the sums

Just check row by row and keep storing their sum in a vector.

We can iterate the matrix in a row major manner.

For each row we can store its sum in a variable,
and once the sum has been computed for that row,

we can store it in an array, which we finally return as the answer.

Solution Approach:
Here’s a step-by-step explanation of the code:

The solve function is defined with a single parameter A.

The ans list is initialized as an empty list.

A for loop is used to iterate over the indices i from 0 to the length of A. This loop is used to traverse each row of the two-dimensional list.

Inside the outer for loop, a temporary variable temp is initialized to 0. This variable will store the sum of elements in the current row.

Another for loop is used to iterate over the indices j from 0 to the length of the first element in A. This loop is used to traverse each element in the current row.

Inside the inner for loop, the value of A[i][j] (element at the i-th row and j-th column) is added to the temp variable.

After the inner for loop completes, the temp variable contains the sum of elements in the i-th row.

The temp value is appended to the ans list.

The outer for loop continues to the next iteration, repeating the process for the next row.

Once all rows have been processed, the ans list, containing the sums of each row, is returned from the function.
*/

function rowSum(A){
    let ans = [];
    let n = A.length;
    let m = A[0].length;
    
    for(let i = 0; i < n; i++) {
        let row_sum = 0;
        // Finding sum of elements of ith row
        for(let j = 0; j <m; j++)
            row_sum += A[i][j];
        ans.push(row_sum);
    }
    return ans;
}
// console.log(rowSum([[1,2,3,4],[5,6,7,8],[9,2,3,4]]));

/*
3.
You are given a N X N integer matrix. You have to find the sum of all the main diagonal elements of A.

Main diagonal of a matrix A is a collection of elements A[i, j] such that i = j.


Problem Constraints
1 <= N <= 103

-1000 <= A[i][j] <= 1000



Input Format
There are 1 lines in the input. First 2 integers R, C are the number of rows and columns. Then R * C integers follow corresponding to the rowwise numbers in the 2D array A.



Output Format
Return an integer denoting the sum of main diagonal elements.



Example Input
Input 1:

3 3 1 -2 -3 -4 5 -6 -7 -8 9
Input 2:

2 2 3 2 2 3


Example Output
Output 1:

 15 
Output 2:

 6 


Example Explanation
Explanation 1:

The size of matrix is 3.
So, considering the indexing from 0.
Main diagonal elements will be A[0][0], A[1][1] and A[2][2]
A[1][1] + A[2][2] + A[3][3] = 1 + 5 + 9 = 15
Explanation 2:

The size of matrix is 2.
So, considering the indexing from 0.
Main diagonal elements will be A[0][0] and A[1][1].
A[1][1] + A[2][2] = 3 + 3 = 6

Hints:
Hint 1:
A diagonal element of a matrix is where both of its indices have the same value
For example, an element at A[1][2] won’t be a diagonal element because the values of row and 
column indices are different.

Solution Approach:
The matrix given to us is a square matrix
Because of the above fact, we can just loop over all the row indices.
We set the column indices to be equal to the row indices. This gives us the diagonal elements which 
we can just sum up in a variable.

*/
function mainDiagonalSum(R,C,A){
    let n = A.length;
    let ans = 0;
    
    for(let i = 0; i <n; i++) 
        // A[i][i] is the main diagonal element 
        ans += A[i][i];
    return ans;
}

// console.log(mainDiagonalSum(3,3,[[1, -2 ,-3],[-4, 5, -6],[-7 ,-8, 9]]));

/*
4.
You are given a N X N integer matrix. You have to find the sum of all the minor diagonal elements of A.

Minor diagonal of a M X M matrix A is a collection of elements A[i, j] such that i + j = M + 1 (where i, j are 1-based).



Problem Constraints
1 <= N <= 103

-1000 <= A[i][j] <= 1000



Input Format
First and only argument is a 2D integer matrix A.



Output Format
Return an integer denoting the sum of minor diagonal elements.



Example Input
Input 1:

 A = [[1, -2, -3],
      [-4, 5, -6],
      [-7, -8, 9]]
Input 2:

 A = [[3, 2],
      [2, 3]]


Example Output
Output 1:

 -5 
Output 2:

 4 


Example Explanation
Explanation 1:

 A[1][3] + A[2][2] + A[3][1] = (-3) + 5 + (-7) = -5
Explanation 2:

 A[1][2] + A[2][1] = 2 + 2 = 4

Hints:
Hint 1:
This is a simple implementation problem requiring knowledge of loops and 2D arrays.

Solution Approach:
You can iterate through all the elements such that their row number(one-based) and their 
column number(one-based) adds up to N + 1 i.e i + j = N + 1, and add each of them to the answer.

*/
function minorDiagonalSum(A){
    let n = A.length;
	    let ans = 0;
	    
	    for(let i = 0; i <n; i++) 
	        ans += A[i][n - 1 -i];
	    return ans;
}
// console.log(minorDiagonalSum([[1, -2, -3],[-4, 5, -6],[-7, -8, 9]]));

/*
5.
Give a N * N square matrix A, return an array of its anti-diagonals. Look at the example for more details.


Problem Constraints
1<= N <= 1000
1<= A[i][j] <= 1e9


Input Format
Only argument is a 2D array A of size N * N.


Output Format
Return a 2D integer array of size (2 * N-1) * N, representing the anti-diagonals of input array A.
The vacant spaces in the grid should be assigned to 0.


Example Input
Input 1:
1 2 3
4 5 6
7 8 9
Input 2:

1 2
3 4


Example Output
Output 1:
1 0 0
2 4 0
3 5 7
6 8 0
9 0 0
Output 2:

1 0
2 3
4 0


Example Explanation
For input 1:
The first anti diagonal of the matrix is [1 ], the rest spaces shoud be filled with 0 making the row as [1, 0, 0].
The second anti diagonal of the matrix is [2, 4 ], the rest spaces shoud be filled with 0 making the row as [2, 4, 0].
The third anti diagonal of the matrix is [3, 5, 7 ], the rest spaces shoud be filled with 0 making the row as [3, 5, 7].
The fourth anti diagonal of the matrix is [6, 8 ], the rest spaces shoud be filled with 0 making the row as [6, 8, 0].
The fifth anti diagonal of the matrix is [9 ], the rest spaces shoud be filled with 0 making the row as [9, 0, 0].
For input 2:

The first anti diagonal of the matrix is [1 ], the rest spaces shoud be filled with 0 making the row as [1, 0, 0].
The second anti diagonal of the matrix is [2, 4 ], the rest spaces shoud be filled with 0 making the row as [2, 4, 0].
The third anti diagonal of the matrix is [3, 0, 0 ], the rest spaces shoud be filled with 0 making the row as [3, 0, 0].

Hints:
Hint 1:
Let’s look at how the coordinates change when you move from one element to the other in the anti-diagonal.
With every movement, the row increases by one, and the column decreases by one ( or in other words, (1, -1) gets added to the current coordinates).
Now, all we need to know is the start ( or the first element ) in each diagonal.
Can you figure out which elements qualify as the first elements in each diagonal?

Solution Approach:
Let’s look at how the coordinates change when you move from one element to the other in the anti-diagonal.
With every movement, the row increases by one, and the column decreases by one ( or in other words, (1, -1) gets added to the current coordinates).
Now, all we need to know is the start ( or the first element ) in each diagonal.
After finding each first or start element in each diagonal, we can use it to print the matrix.


*/

function antiDiagonals(A){
    const l = A.length;
        const res = [];
        for (let i = 0; i < 2 * l - 1; i++) {
            const offset = i < l ? 0 : i - l + 1;
            const row = [];
            let k = 0;
            for (let j = offset; j <= i - offset; j++) {
                row.push(A[j][i - j]);
                k++;
            }
            for (let j = k; j < l; j++) {
                row.push(0);
            }
            res.push(row);
        }
        return res;
}
// console.log(antiDiagonals([[1, 2 ,3] , [4, 5 ,6],[7, 8 ,9]]));

/*
6.
You are given a matrix A, you have to return another matrix which is the transpose of A.

NOTE: Transpose of a matrix A is defined as - AT[i][j] = A[j][i] ; Where 1 ≤ i ≤ col and 1 ≤ j ≤ row.

The tranpose of a matrix switches the element at (i, j)th index to (j, i)th index, and the element at (j, i)th index to (i, j)th index.




Problem Constraints

1 <= A.size() <= 1000

1 <= A[i].size() <= 1000

1 <= A[i][j] <= 1000



Input Format

First argument is a 2D matrix of integers.



Output Format

You have to return the Transpose of this 2D matrix.



Example Input

Input 1:

A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
Input 2:

A = [[1, 2],[1, 2],[1, 2]]


Example Output

Output 1:

[[1, 4, 7], [2, 5, 8], [3, 6, 9]]
Output 2:

[[1, 1, 1], [2, 2, 2]]


Example Explanation

Explanation 1:

Cearly after converting rows to column and columns to rows of [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
 we will get [[1, 4, 7], [2, 5, 8], [3, 6, 9]].

 Hints:
 Hint 1:
 Write the Python code that gets a paramater A from the function solve() and prints the transpose of matrix A.

To find the transpose of a matrix, you need to iterate over the columns and rows of the original matrix in a specific manner.
Pay attention to how the elements are accessed and stored in the transpose matrix.
Consider using nested loops and temporary variables to achieve the desired outcome.
Think about how you can append the elements of each column to a new list and eventually combine all the columns to form the transpose matrix.
You will need to iterate over every element in the matrix and while doing so try to devise a way to switch the row and the column index of that element.

Solution approach:
Here is a step by step explanation of the code

A function solve() is defined
The function solve() takes 2 parameters ‘A’ and ‘B’.
The (i, j)th element in the input array (where i is the row and j is the column) is going to be at (j, i) in the answer matrix.
Initialize an empty ans list.
Iterate over the columns of the original matrix using a loop variable i ranging from 0 to the length of A[0].
Within the column loop, create an empty list temp to store the elements of the current column.
Iterate over the rows of the original matrix using a loop variable j ranging from 0 to the length of A.
Run a inner loop from j = 1 to j = N, and append A[j][i] to temp,
After iterating over all the rows in the current column, append the temp list (representing the current column) to the ans list.
If the size of the input matrix is (N x M), then the answer matrix will have a size of (M x N).
Return the updated answer matrix.

*/
function matrixTranspose(A){
    let n = A.length;
	   let m = A[0].length;
	   let ans = new Array (m);
	   
	   for(let i = 0; i< m; i++)
	    ans[i] = [];
	   // Iterating over the columns
	   for( let j = 0; j < m; j++)
	       // Iterating over the rows
	       for(let i = 0; i < n; i++)
	            ans[j][i] = A[i][j];
	            
	   return ans;
}
// console.log(matrixTranspose([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));

/*
7.
You are given a n x n 2D matrix A representing an image.

Rotate the image by 90 degrees (clockwise).

You need to do this in place.

Note: If you end up using an additional array, you will only receive partial score.



Problem Constraints
1 <= n <= 1000



Input Format
First argument is a 2D matrix A of integers



Output Format
Return the 2D rotated matrix.



Example Input
Input 1:

 [
    [1, 2],
    [3, 4]
 ]
Input 2:

 [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
 ]


Example Output
Output 1:

 [
    [3, 1],
    [4, 2]
 ]
Output 2:

 [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
 ]


Example Explanation
Explanation 1:

 After rotating the matrix by 90 degree:
 1 goes to 2, 2 goes to 4
 4 goes to 3, 3 goes to 1
Explanation 2:

 After rotating the matrix by 90 degree:
 1 goes to 3, 3 goes to 9
 2 goes to 6, 6 goes to 8
 9 goes to 7, 7 goes to 1
 8 goes to 4, 4 goes to 2

 Hints:
 Hint 1:
 Rotate this matrix by 90 degree clockwise direction.
You can’t use another matrix. Do the changes in this given matrix only.

11 12 13 14 15            31 26 21 16 11
16 17 18 19 20            32 27 22 17 22
21 22 23 24 25    ------> 33 28 23 18 13
26 27 28 29 30            34 29 24 19 14
31 32 33 34 35            35 30 25 20 15
Try to observe, what is happening here.
1st row is becoming last column
2nd row is becoming second last column
.
.
.
last row is becoming 1st column.

Do you know how any functionaly by which rows and converted to columns?
Yes, transpose is the answer.

Try to take the transpose and then analyse how far are you from your final answer.

Solution approach:
Take the transpose of the given matrix.
Reverse every row of the matrix to get the desired output.
*/

function rotateMatrix(A){
    let n = A.length;
        for(let i=0 ; i<n ; i++){
            for(let j=0 ; j<i ; j++){
                let temp = A[i][j];
                A[i][j] = A[j][i];
                A[j][i] = temp;
            }
        }
        for(let i=0 ; i<n ; i++){
            for(let j=0 ; j<n/2 ; j++){
                let temp = A[i][j];
                A[i][j] = A[i][n-j-1];
                A[i][n-j-1] = temp;
            }
        }
        return A;
}
// console.log(rotateMatrix([[1, 2],[3, 4]]));

/*
8.

You are given a matrix A and and an integer B, you have to perform scalar multiplication of matrix A with an integer B.


Problem Constraints
1 <= A.size() <= 1000

1 <= A[i].size() <= 1000

1 <= A[i][j] <= 1000

1 <= B <= 1000



Input Format
First argument is 2D array of integers A representing matrix.

Second argument is an integer B.



Output Format
You have to return a 2D array of integers after doing required operations.



Example Input
Input 1:

A = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
B = 2 
Input 2:
A = [[1]]
B = 5 


Example Output
Output 1:
[[2, 4, 6], 
[8, 10, 12], 
[14, 16, 18]]
Output 2:
[[5]]


Example Explanation
Explanation 1:
==> ( [[1, 2, 3],[4, 5, 6],[7, 8, 9]] ) * 2

==> [[2*1, 2*2, 2*3],
     [2*4, 2*5, 2*6],
     [2*7, 2*8, 2*9]]

==> [[2,   4,  6], 
     [8,  10, 12], 
     [14, 16, 18]]
Explanation 2:
==> ( [[1]] ) * 5

==> [[5*1]]

==> [[5]]

Hints:
Hint 1:
In scalar matrix multiplication, you multiply the value B with each and every element of the matrix A.

Solution approach:
Run a outer loop from i = 1 to i = row
Run a inner loop from j = 1 to j = col
Do A[i][j]*B for all elements
Return the updated matrix.
*/

function matrixScalarProduct(A, B){
    let n = A.length;
            let m = A[0].length;
            
            for(let i = 0; i < n; i++) 
                for(let j= 0; j < m; j++)
                    // Multiplying each element by B
                    A[i][j] *= B;
            return A;
}
// console.log(matrixScalarProduct([[1, 2, 3],[4, 5, 6],[7, 8, 9]],2));

/*
9.

You are given two matrices A and B of equal dimensions and you have to check whether two matrices are equal or not.

NOTE: Both matrices are equal if A[i][j] == B[i][j] for all i and j.


Problem Constraints
1 <= A.size(), B.size() <= 1000
1 <= A[i].size(), B[i].size() <= 1000
1 <= A[i][j], B[i][j] <= 1000
A.size() == B.size()
A[i].size() == B[i].size()


Input Format
First argument is 2-D array of integers representing matrix A.

Second argument is 2-D array of integers representing matrix B.



Output Format
Return 1 if both matrices are equal or return 0.



Example Input
Input 1:

A = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
B = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
Input 2:

A = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
B = [[1, 2, 3],
     [7, 8, 9],
     [4, 5, 6]]


Example Output
Output 1:

1
Output 2:

0


Example Explanation
Explanation 1:

==> Clearly all the elements of both matrices are equal at respective positions.
Explanation 2:

==> Clearly, there are mismatches at (1, 0), (1, 1), (1, 2), (2, 0), (2, 1) and (2, 2).
A = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]] 
B = [[1, 2, 3],
     [7, 8, 9],
     [4, 5, 6]]

Hints:
Hint 1:
Run loops for each row, and for each row run another loop to traverse through each element in that row.
So we are using nested loops.
Check all the elements of both matrices one by one and return 1 if all are equal otherwise return 0.

Solution approach:
Here run a outer loop for i = 0 to i = row
Run the inner loop from j = 0 to j = col
Return 0 if any A[i][j] != B[i][j]
Otherwise return 1 at the end of the loop.
*/

function areMatricesSame(A, B){
    let n = A.length;
    let m = A[0].length;
    // Iterating over the rows
    for(let i = 0; i < n; i++) 
        // Iterating over the columns
        for(let j= 0; j < m; j++)
            if(A[i][j] != B[i][j])
                return 0;
    return 1;
}
// console.log(areMatricesSame([[1, 2, 3],[4, 5, 6],[7, 8, 9]],[[1, 2, 3],[4, 5, 6],[7, 8, 9]]));

/*
10.
You are given two matrices A & B of same size, you have to return another matrix which is the sum of A and B.
Note: Matrices are of same size means the number of rows and number of columns of both matrices are equal.

The Following will give you an idea of matrix addition:

Problem Constraints

1 <= A.size(), B.size() <= 1000 1 <= A[i].size(), B[i].size() <= 1000 1 <= A[i][j], B[i][j] <= 1000
Input Format

The first argument is the 2D integer array A The second argument is the 2D integer array B
Output Format

You have to return a vector of vector of integers after doing required operations.
Example Input

Input 1:
A = [[1, 2, 3],   
     [4, 5, 6],   
     [7, 8, 9]]  

B = [[9, 8, 7],   
     [6, 5, 4],   
     [3, 2, 1]]
 
Input 2:
A = [[1, 2, 3],   
     [4, 1, 2],   
     [7, 8, 9]]  

B = [[9, 9, 7],   
     [1, 2, 4],   
     [4, 6, 3]]
 
Example Output

Output 1:
[[10, 10, 10],   
 [10, 10, 10],   
 [10, 10, 10]]
Output 2:
[[10, 11, 10],   
 [5,   3,  6],   
 [11, 14, 12]]
Example Explanation

Explanation 1:
A + B = [[1+9, 2+8, 3+7],  
         [4+6, 5+5, 6+4],  
         [7+3, 8+2, 9+1]]   
      = [[10, 10, 10],   
         [10, 10, 10],   
         [10, 10, 10]].
Explanation 2:
A + B = [[1+9, 2+9, 3+7],  
         [4+1, 1+2, 2+4],  
         [7+4, 8+6, 9+3]]   
      = [[10, 11, 10],   
         [5,   3,  6],   
         [11, 14, 12]].

Hints:
Hint 1:
Write the Python code that gets 2 paramaters A and B from the function solve() and prints the sum of matrices A and B.

The algorithm aims to perform element-wise addition between two matrices A and B.
Pay attention to the nested loops and how they traverse the rows and columns of the matrices.
Think about the purpose of the addition operation and how it modifies the elements of matrix A.
Consider the role of the loop indices ‘i’ and ‘j’ in accessing and updating the corresponding elements in A and B.

SOlution Approach:
Here is a step by step explanation of the code

A function solve() is defined
The function solve() takes 2 parameters ‘A’ and ‘B’.
Start a loop with ‘i’ ranging from 0 to the length of ‘A’ (number of rows in ‘A’).
This loop iterates over the rows of the matrix.
Inside the outer loop, start another loop with ‘j’ ranging from 0 to the length of A[0] (number of columns in ‘A’).
This loop iterates over the columns of the matrix.
Inside the nested loop, add the corresponding elements of ‘A’ and ‘B’ matrices using the expression A[i][j] += B[i][j].
This updates the value of the element in ‘A’ by adding the corresponding element from ‘B’.
After both loops complete, return the updated matrix ‘A’.
This returns the modified matrix with the added values.
The code performs element-wise addition of corresponding elements in matrices ‘A’ and ‘B’ and returns the updated matrix ‘A’.

*/

function addTheMatrices(A,B){
    let n = A.length , m = A[0].length;
    let ans = new Array(n);
    
    for(let i =  0; i < n; i++){
        ans[i] = [];
    }
    // Iterating over rows
    for(let i =  0; i < n; i++){
        // Iterating over the columns
        for(let j = 0; j < m; j++) 
            ans[i][j] = A[i][j] + B[i][j];
    }
    return ans;
}
// console.log(addTheMatrices([[1, 2, 3],[4, 5, 6],[7, 8, 9]],[[9, 8, 7],[6, 5, 4],[3, 2, 1]]))

/*
11.
You are given two integer matrices A and B having same size(Both having same number of rows (N) and columns (M). You have to subtract matrix B from A and return the resultant matrix. (i.e. return the matrix A - B).

If A and B are two matrices of the same order (same dimensions). Then A - B is a matrix of the same order as A and B and its elements are obtained by doing an element wise subtraction of A from B.


Problem Constraints

1 <= N, M <= 103

-109 <= A[i][j], B[i][j] <= 109



Input Format

The first argument is the 2D integer array A
The second argument is the 2D integer array B


Output Format

Return a 2D matrix denoting A - B.



Example Input

Input 1:

A =  [[1, 2, 3], 
      [4, 5, 6], 
      [7, 8, 9]]

B =  [[9, 8, 7], 
      [6, 5, 4], 
      [3, 2, 1]]
Input 2:

A = [[1, 1]]
 
B = [[2, 3]] 


Example Output

Output 1:

 [[-8, -6, -4],
  [-2, 0, 2],
  [4, 6, 8]]
Output 2:

 [[-1, -2]]


Example Explanation

Explanation 1:

 image
Explanation 2:

 [[1, 1]] - [[2, 3]] = [[1 - 2, 1 - 3]] = [[-1, -2]]

Hints :
Hint 1:
You need atleast two indices to access an element from a 2D matrix.
To access an element in the ith row and the jth column you will need to index your matrix like A[i][j].

Solution approach:
To subtract the two given matrices we have to subtract their corresponding elements. For example, C[i][j] = A[i][j] - B[i][j].
Traverse both matrices row wise(first all elements of a row, then jump to next row) using two nested loops.
For every element A[i][j], subtract it with corresponding element B[i][j] and store the result in difference matrix at C[i][j].
*/

function matrixSubtraction(A,B){
    let n = A.length;
    let m = A[0].length;
    
    let ans = new Array(n);
    
    for(let i = 0; i < n; i++)
        ans[i] = [];
    // Iterating over the rows
    for(let i = 0; i < n; i++)
        // Iterating over the columns
        for(let j = 0; j<m; j++)
            ans[i][j] = A[i][j] - B[i][j];
    return ans;
}
// console.log(matrixSubtraction([[1, 2, 3], [4, 5, 6],[7, 8, 9]],[[9, 8, 7],  [6, 5, 4], [3, 2, 1]] ));

/*
12.
You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, make entire ith row and jth column zero.



Problem Constraints
1 <= A.size() <= 103

1 <= A[i].size() <= 103

0 <= A[i][j] <= 103



Input Format
First argument is a vector of vector of integers.(2D matrix).



Output Format
Return a vector of vector after doing required operations.



Example Input
Input 1:

[1,2,3,4]
[5,6,7,0]
[9,2,0,4]


Example Output
Output 1:

[1,2,0,0]
[0,0,0,0]
[0,0,0,0]


Example Explanation
Explanation 1:

A[2][4] = A[3][3] = 0, so make 2nd row, 3rd row, 3rd column and 4th column zero.

Hints:
Hint1:
If you start row wise and make one row completely zero if it has 0 then you will loose information for making columns zero. 
None element is negative so see if you may use this for not loosing infos.

Solution approach:
Let's start row wise first. Select rows one by one and make all the elements of that row -1 except which are 0, if any element in that row is 0. Similariy you have to do the same thing for columns.
Now, before returning traverse the matrix and make all the -1 elements 0.
*/
function rowToColZeroBruteForce(A){
    let n = A.length;
    let m = A[0].length;
    for(let i=0; i<n; ++i){
        for(let j=0; j<m; ++j){
            if(A[i][j] == 0){
                for(let k=0; k<m ; ++k){
                    if(A[i][k] != 0)
                    A[i][k] = -1;
                }
                for(let l=0; l<n ; ++l){
                    if(A[l][j] != 0)
                    A[l][j] = -1;
                }
            }
        }
    }
    for(let i=0; i<n; ++i){
        for(let j=0; j<m ; ++j){
            if(A[i][j] == -1){
                A[i][j] = 0;
            }
        }
    }
    return A;
}
// console.log(rowToColZeroBruteForce([[1,2,3,4],[5,6,7,0],[9,2,0,4]]));

function rowToColZeroScalarSolution(A){
    let n = A.length, m = A[0].length;
    for(let i = 0; i < n; i++){
    let flag = 0;
    for(let j = 0; j < m; j++){
        if(A[i][j]==0) flag = 1;
    }
    if(flag == 1){
        for(let j = 0; j < m; j++){
            if(A[i][j] != 0) A[i][j] = -1;
        }
    }
    }
    for(let j = 0; j < m; j++){
    let flag = 0;
    for(let i = 0; i < n; i++){
        if(A[i][j]==0) flag = 1;
    }
    if(flag == 1){
        for(let i = 0; i < n; i++){
            if(A[i][j] != 0) A[i][j] = -1;
        }
    }
    }
    for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(A[i][j] == -1)
        A[i][j] = 0;
    }
    }
    return A;
}
console.log(rowToColZeroScalarSolution([[1,2,3,4],[5,6,7,0],[9,2,0,4]]));