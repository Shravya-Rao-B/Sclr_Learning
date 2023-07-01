/*
1.
The prefix sum formula for an array A of N integers is given by :-

options:
prefSum[i] = prefSum[i] + A[i]
prefSum[i] = prefSum[i - 1] + A[i]
prefSum[i - 1] = prefSum[i] + A[i]
prefSum[i - 1] = prefSum[i - 1] + A[i]

Ans: prefSum[i] = prefSum[i - 1] + A[i]

*/

/*
2.
What is the time complexity of creating the prefix sum array of an array A of N integers ?

Options:
O(1)
O(N)
O(N^2)
O(N^3)

Ans: O(n)
*/

/*
3.
You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.


Problem Constraints
1 <= N, M <= 105
1 <= A[i] <= 109
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

Hints:

Hint 1:
The brute force approach is very simple.
Think of any way to pre-process the given array to make answering each query faster.

Hint 2:
You need to calculate the sum of elements from l to r, again and again, for different values of l and r.
So, can you use prefix sum to optimise this.
So, first create a prefixSum[], where ith index will store sum of elements from 0 to ith index of given array.
Then, use this prefixSum[] to find the answer for every value of l and r.
Careful -
Since N can be equal to 10^5, and array elements can be as large as 10^9.
If you calculate the sum of all such elements, the sum can go upto 10^9*10^5 = 10^14.
So, choose the data type of sum and prefixSum[] carefully.

Approach 1:
We have to find a way to optimize the time complexity of answering our query.
We can do this by creating an auxiliary array pref,
where pref[i] is the sum of all elements from the beginning to the ith element.

We can easily create the pref array using the following equation:
pref[i] = pref[i - 1] + A[i]

Now, we can answer all our queries in O(1).
The answer to each query will be pref[R] - pref[L - 1].

Time Complexity: O(N)
Space Complexity: O(N)
*/
function rangeSumQuery(A,B){
    let pf = [];
    pf[0] = A[0];
    let querySumArray = [];
    for(let i=1; i<A.length; i++){
        pf[i] = pf[i-1] + A[i]
    }
    for(let j=0 ; j<B.length; j++){
        if(B[j][0] == 0){
            querySumArray.push(pf[B[j][1]])
        }
        else {
            querySumArray.push(pf[B[j][1]] - pf[B[j][0] -1])
        }
    }
    return querySumArray;
}
// console.log(rangeSumQuery([1, 2, 3, 4, 5],[[0, 3], [1, 2]]));
// console.log(rangeSumQuery([2,2,2],[[0, 0], [1, 2]]));

/*
4.
Problem Description
Given an array A of N integers. Construct prefix sum of the array in the given array itself.


Problem Constraints
1 <= N <= 105
1 <= A[i] <= 103

Input Format
Only argument A is an array of integers.

Output Format
Return an array of integers denoting the prefix sum of the given array.

Example Input
Input 1:
A = [1, 2, 3, 4, 5]
Input 2:
A = [4, 3, 2]

Example Output
Output 1:
[1, 3, 6, 10, 15]
Output 2:
[4, 7, 9]

Example Explanation
Explanation 1:

The prefix sum array of [1, 2, 3, 4, 5] is [1, 3, 6, 10, 15].
Explanation 2:

The prefix sum array of [4, 3, 2] is [4, 7, 9].

Hints:
Hint 1:
This is an implementation problem that requires knowledge of loops and arrays.

Hint 2:
We will traverse from left to right of the array.
For the leftmost element, we leave it as it as, and 
for the other elements we add to the element on the 
left to it. This will form the prefix sum array
Time Complexity : O(N)
Space Complexity : O(1)
*/
function inPlacePrefixSum(A){
    for(i=1; i<A.length; i++){
        A[i] = A[i] + A[i-1]
    }
    return A
};
// console.log(inPlacePrefixSum([1, 2, 3, 4, 5]));
// console.log(inPlacePrefixSum([4, 3, 2]));

/*
5.
You are given an array A of integers of size N.
Your task is to find the equilibrium index of the given array
The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:
Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.

Problem Constraints
1 <= N <= 105
-105 <= A[i] <= 105

Input Format
First arugment is an array A .

Output Format
Return the equilibrium index of the given array. If no such index is found then return -1.

Example Input
Input 1:
A = [-7, 1, 5, 2, -4, 3, 0]

Input 2:
A = [1, 2, 3]

Example Output
Output 1:
3

Output 2:
-1

Example Explanation
Explanation 1:
i   Sum of elements at lower indexes    Sum of elements at higher indexes
0                   0                                   7
1                  -7                                   6
2                  -6                                   1
3                  -1                                  -1
4                   1                                   3
5                  -3                                   0
6                   0                                   0

3 is an equilibrium index, because: 
A[0] + A[1] + A[2] = A[4] + A[5] + A[6]

Explanation 2:
i   Sum of elements at lower indexes    Sum of elements at higher indexes
0                   0                                   5
1                   1                                   3
2                   3                                   0
Thus, there is no such index.

Hints:
Hint 1:
Try to find answer for any particular index 'i' .
Try to maintain the prefix sum and suffix sum
Take care to take into consideration the cases of i = 0 and i = |A| - 1.

Solution Approach:
The idea is to get the total sum of the array first. Then Iterate through the array and keep updating the left sum which is initialized as zero. In the loop, we can get the right sum by subtracting the elements one by one.

1) Initialize leftsum  as 0
2) Get the total sum of the array as sum
3) Iterate through the array and for each index i, do following.
    a)  Update sum to get the right sum.  
           sum = sum - arr[i] 
       // sum is now right sum
    b) If leftsum is equal to sum, then return current index. 
       // update leftsum for next iteration.
    c) leftsum = leftsum + arr[i]
4) return -1 
// If we come out of loop without returning then
// there is no equilibrium index

*/
function equilibriumIndexOfArray(A){
    let pf = []
    let leftSum = 0;
    let rightSum = 0;
    let ans = -1;
    let n = A.length;
    pf[0] = A[0];
    for(let i=1; i<A.length; i++){
        pf[i] = pf[i-1] + A[i]
    }
    console.log('pf',pf);
    for(let i=0; i<A.length; i++){
        if(i == 0){
            leftSum = 0;
        }
        else {
            leftSum = pf[i -1];
        }
        rightSum = pf[n-1]- pf[i]
        if(leftSum == rightSum){
            ans = i;
            return ans;
        }
    }
    return ans
}
// console.log(equilibriumIndexOfArray([1, 2, 3]));
console.log(equilibriumIndexOfArray([-7, 1, 5, 2, -4, 3, 0]));
// console.log(equilibriumIndexOfArray([-2892,5148,-6190,3966,996,-3497,-2880,783,5982,5405,9517,9458,5188,1184,
//     2875,6116,-9891,-4253,-1333,1915,2058,1647,-3224,-5148,7820,-9879,-693,5808,5620,7074,6454,-9249,
//     -5100,-5055,-943,9105,3146,-9434,8641,3066,-6946,3874,-6776,-1644,2486,2266,-5125,3221,-3619,
//     -5566,3217,-9906,-7508,-6257,6210,4188,-727,-4398,-8907,-5992,-3649,44,9322,-7698,8524,8840,-4727,2077,
//     -944,8453,9663,4734,-478,-4399,2228,845,8463,3560,-6235,-5085,5688,9374,-7241,-1489,-5827,7861,-5807,6771,
//     -9662,6614,7722,-239,3523,-1666,-7196,9175,5068,-7873,5979,7105,-9524,8359,-4185,-2066,-8825,-8236,384,-1139,
//     -732,-8474,-9344,-1273,-3333,-7335,-6474,-9874,2095,-2382,-6021,3767,9524,177,-2102,-748,8384,2432,9842,-1574,
//     -3696,2779,1627,563,6028,7541,41,6361,5342,6238,5539,5997,-3222,6504,8070,313,2880,388,-1838,-703,6951,5878,
//     -9960,-5627,9264,-5900,-6253,-1528,-8888,7291,6255,9903,-2628,2818,7974,9763,3638,-1145,-8133,-1923,-6717,
//     8967,-3976,9639,2366,4353,-97,-7662,9848,7419,-4860,-5128,-1296,3419,-305,-1498,5672,1502,8375,-795,-4311,
//     -3062,-755,-3545,-1509,3762,3174,-2473,-231,-3421,5736,-2538,6552,9651,-9453,7562,3700,-9534,-169,-553,1741,
//     -1550,-1641,-8584,-7116,1047,-2110,490,3892,-7016,7143,5667,5971,-1718,-7779,-5976,8400,-1619,8898,-1726,7944,
//     -5882,-6721,-6652,-9326,-1765,3541,2507,-6068,2916,-7680,8312,-6060,7750,-2140,-2503,7248,6013,-7934,5926,
//     -1546,-9047,-323,-5033,4631,-8421,8221,-1760,4024,9562,-3847,5038,-7319,1245,-2486,-2559,5345,4291,-9248,
//     -7083,-5319,-4400,2167,-3018,7730,5952,1844,-5307,-7432,-3889,-1403,-6607,9622,1745,7246,7076,1501,4019,
//     6266,-8373,-1651,4717,-9970,-2113,7337,-2764,-235,-7663,9702,-954,-7553,6326,-2751,-6938,5672,-7356,-4202,
//     6075,-3699,-7614,-1804,-4278,9811,2485,2688,7674,-2865,-4165,4470,4443,-3256,-8269,-1724,-1269,-8155,7340,
//     2271,-5885,5384,746,482,-2593,4584,3891,-6059,2764,-1113,-3777,5381,9905,-7227,4354,-2794,-485,5150,-8440,
//     9611,-8524,2822,6455,-4516,9802,-5258,-5589,8290,-3226,-2317,-3337,8460,-3988,-8786,8391,8560,-8522,-2929,
//     -7350,-10000,-6644,2487,9128,1387,-5535,-2863,1186,5794,-3405,-1042,1519,-4013,-4324,561,8420,-6794,8572,
//     7233,-5277,7361,-2615,8592,-7697,-9074,-7403,8576,-6983,-9754,-2297,1271,2859,6942,-3329,-2183,1282,708,
//     8294,7673,-4083,2026,-604,1702,4462,-9521,-7183,-4800,-3565,3626,-7486,2481,5728,4223,-9062,-2549,8249,
//     -203,7770,-4907,-3207,5047,-8765,-3304,-4832,5709,-7236,-4093,9512,-4733,4878,187,4566,104,2012,-5813,6403,
//     -3415,-2033,-8487,-2156,9099,2870,6650,5251,-7561,-8104,-1260,-3859,-8794,4418,-3726,1790,-6598,-2431,-3959,
//     4872,-7310,-1615,4226,-7550,107,-246,-7002,-8377,4871,-4832,8545,1015,8532,-3075,4054,7402,-9177,-4563,5066,
//     2542,-5262,9866,-3574,-1851,-1677,3415,6556,1528,3220,806,-3178,-9444,6616,2619,9930,-720,4782,-2951,4754,
//     2654,-1112,-6764,-1617,3771,-6393,-6333,895,652,-9680,609,8440,-8784,578,4069,-9495,6477,-1093,-4367,-3328,
//     -5930,-9292,-9617,783,-297,7478,7227,-9645,-9704,-6031,5041,-517,9046,4922,7893,-7238,-4559,5007,-9338,8399,2913,4959,6848,9,5549,1538,-3061,-1296,7782,-4849,-1830,3451,-5244,9401,-225,8923,-7365,-8224,-8925,2256,4,3592,-2186,-7553,770,-2837,455]))

/*
6.
Problem Description
You are given an array A of length N and Q queries given by the 2D array B of size Q×2.

Each query consists of two integers B[i][0] and B[i][1].

For every query, your task is to find the count of even numbers in the range from A[B[i][0]] to A[B[i][1]].



Problem Constraints
1 <= N <= 105
1 <= Q <= 105
1 <= A[i] <= 109
0 <= B[i][0] <= B[i][1] < N


Input Format
First argument A is an array of integers.
Second argument B is a 2D array of integers.


Output Format
Return an array of integers.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [   [0, 2] 
        [2, 4]
        [1, 4]   ]
Input 2:
A = [2, 1, 8, 3, 9, 6]
B = [   [0, 3]
        [3, 5]
        [1, 3] 
        [2, 4]   ]


Example Output
Output 1:
[1, 1, 2]
Output 2:
[2, 1, 1, 1]


Example Explanation
For Input 1:
The subarray for the first query is [1, 2, 3] (index 0 to 2) which contains 1 even number.
The subarray for the second query is [3, 4, 5] (index 2 to 4) which contains 1 even number.
The subarray for the third query is [2, 3, 4, 5] (index 1 to 4) which contains 2 even numbers.
For Input 2:
The subarray for the first query is [2, 1, 8, 3] (index 0 to 3) which contains 2 even numbers.
The subarray for the second query is [3, 9, 6] (index 3 to 5) which contains 1 even number.
The subarray for the third query is [1, 8, 3] (index 1 to 3) which contains 1 even number.
The subarray for the fourth query is [8, 3, 9] (index 2 to 4) which contains 1 even number.

Hints:
Hint 1:
Can we precalculate the number of even numbers in a range ?
We should try to answer each query in O(1) time.
Try marking even numbers as 1 and others as 0. How does it help?

Hint 2:
Create a prefix array pref[] where pref[i+1] will store the count of even numbers in the subarray A[0…i]. 
Now, the count of even numbers in the range [L, R] can be easily calculated in O(1) as pref[R + 1] – pref[L].

Time Complexity : O(N + Q)
Space Complexity : O(N + Q)
*/
function evenNumbersInRange(A,B){
let evenCheckArray = [];
let pf = [];
let countOfEven = [];
for(let i=0; i<A.length; i++){
    if(BigInt(A[i]) % BigInt(2) == BigInt(0)){
        evenCheckArray[i] = 1;
    }
    else {
        evenCheckArray[i] = 0
    }
}
pf[0] = evenCheckArray[0];
for(let i=1; i<evenCheckArray.length; i++){
pf [i] = pf[i-1] + evenCheckArray[i]
}
for(let j=0; j<B.length; j++){
    if(B[j][0] == 0){
        countOfEven.push(pf[B[j][1]])
    }
    else {
        countOfEven.push(pf[B[j][1]] - pf[B[j][0] -1])
    }
}
return countOfEven
}

// console.log(evenNumbersInRange([1, 2, 3, 4, 5],[[0, 2], [2, 4],[1, 4]]));
// console.log(evenNumbersInRange([2, 1, 8, 3, 9, 6],[[0, 3],[3, 5],[1, 3],[2, 4]]));
/*
7.
Given the prefix sum of an array, prefSum = [-2, 4, 1, 5, 2]
What is the sum of the original array from index 0 to 2 (0-based) ?

Options:
3
4
1
5

Ans: 1
*/

/*
8.
Given the prefix sum of an array, prefSum = [-2, 4, 1, 5, 2]
What is the sum of the original array from index 2 to 4 (0-based) ?

Options:
2
1
-2
8

Ans: -2
*/

/*
9.
Given the prefix sum of an array, prefSum = [-2, 4, 1, 5, 2]
What is the sum of the original array from index 1 to 2 (0-based) ?

Options:
5
-3
3
-5

Ans:3
*/

/*
10.
Given an array of integers A, find and return the product array of the same size where the ith element of 
the product array will be equal to the product of all the elements divided by the ith element of the array.
Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using 
the division operator.

Input Format
The only argument given is the integer array A.

Output Format
Return the product array.

Constraints
2 <= length of the array <= 1000
1 <= A[i] <= 10

For Example
Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    [120, 60, 40, 30, 24]
Input 2:
    A = [5, 1, 10, 1]
Output 2:
    [10, 50, 5, 50]

Hints:
Hint 1:
Think about storing the multiplication of all elements in a prefix and suffix of the array.
Try to solve the problem in O(N) time complexity.
Approach 1:
We will have a prefix array pref[] where pref[i] will store the 
multiplication of all the elements in the prefix of the array till
i-th position. Similar we will have a suffix array suff[].
Now for the i-th element, we can find the multiplication of all the 
elements to it's left from the pref[] array and that in the right side
from the suff[] array

Time Complexity : O(N)
Space Complexity : O(N)

*/

function productArrayPuzzleWithoutPrefix(A){
    let prod  = 1;
    for(let i=0; i<A.length; i++){
        prod = prod * A[i]
    }
    return A.map(item => {
        return (prod/item)
    })
}
console.log(productArrayPuzzleWithoutPrefix([1, 2, 3, 4, 5]));
console.log(productArrayPuzzleWithoutPrefix([5, 1, 10, 1]));