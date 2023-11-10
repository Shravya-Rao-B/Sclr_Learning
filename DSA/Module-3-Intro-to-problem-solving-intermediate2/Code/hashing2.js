/*
1.
Given an array A of N integers.
Find the length of the longest subarray in the array which sums to zero.

If there is no subarray which sums to zero then return 0.



Problem Constraints
1 <= N <= 105
-109 <= A[i] <= 109


Input Format
Single argument which is an integer array A.


Output Format
Return an integer.


Example Input
Input 1:

 A = [1, -2, 1, 2]
Input 2:

 A = [3, 2, -1]


Example Output
Output 1:

3
Output 2:

0


Example Explanation
Explanation 1:

 [1, -2, 1] is the largest subarray which sums up to 0.
Explanation 2:

 No subarray sums up to 0.

 Hints:
 Lets try to reduce the problem to a much simpler problem. 
Lets say we have another array `sum` where 

  sum[i] = Sum of all elements from A[0] to A[i]

Note that in this array, sum of elements from A[i] to A[j] = Sum[j] - Sum[i-1]

We need to find j and i such that sum of elements from A[i] to A[j] = 0
 Or Sum[j] - Sum[i-1] = 0
 Or Sum[j] = Sum[i-1]

Now, the problem reduces to finding 2 indices i and j such that `sum[i] = sum[j]` 
How can you solve the above problem ? 

One more important point : while we are making sum, it is possible that we can cross 10^9 range with addition of numbers.
So select data type wisely.

Solution Approach:
There are three steps:
1. Create cumulative sum array where ith index in this array represents total sum from 1 to ith index element.
2. Iterate all elements of cumulative sum array and use hashing to find two elements where value at ith index == value at jth index but i != j.
3. IF element is not present in hash in fill hash table with current element.


Time Complexity : O(N)
Space Complexity : O(N)
*/
function longestSubArrayZeroSum(A){
    let max = 0;
    let pf = new Array(A.length);
    pf[0] = A[0];
    for(let i=1; i<A.length; i++){
        pf[i] = pf[i-1] + A[i]
    }
    let hashMap = new Map();
    for(let i=0; i<pf.length; i++){
        let val = pf[i];
        if(pf[i] == 0) {
            max = Math.max(max , i + 1);
        }
        if(hashMap.has(val)){
            let pi = hashMap.get(val);
            max = Math.max(max,i-pi)
        } else {
        hashMap.set(val,i);
        }
    }
   return max;
}

// console.log(longestSubArrayZeroSum([9,-20,-11,-8,-4,2,-12,14,1]));
// console.log(longestSubArrayZeroSum([1,2,3,-1,-2,-3]));

/*
2.
Given an Array of integers B, and a target sum A.
Check if there exists a pair (i,j) such that Bi + Bj = A and i!=j.


Problem Constraints
1<= Length of array B <= 103
0<= Bi <=109
0<= A <=109


Input Format
First argument A is the Target sum, and second argument is the array B


Output Format
Return an integer value 1 if there exists such pair, else return 0.


Example Input
Input 1:

A = 8   
B = [3, 5, 1, 2, 1, 2]
Input 2:

A = 21   
B = [9, 10, 7, 10, 9, 1, 5, 1, 5]


Example Output
Output 1:

1
Output 2:

0


Example Explanation
Example 1:
It is possible to obtain sum 8 using 3 and 5.
Example 2:
There is no such pair exists.

Hints:
Try sorting the array, and see if you can think of some approach.
Try to think of techniques which work on sorted arrays.

Solution Approach:
Sort the given array, now we can apply two pointer based approach to solve this problem.
Simply maintain two pointers forward and end.Now traverse the array using these pointers, let the sum of 
elements under these pointers be Cur_sum.
* if Cur_sum == A , then return true.
* if Cur_sum > A , then decrease the end pointer.
* if Cur_sum < A , then increment the forward pointer.
Approach using sets

We can traverse the array B from left to right,
inserting the elements of the array into a set.
Now for an element, we check if A - B[i] is already
present in the set or not.

Time Complexity : O(N)
Space Complexity : O(N)
where N is the size of the array B
*/
function checkPairSum(A,B){
    let hashSet = new Set();
    for(let i=0; i<B.length; i++){
        let x = B[i];
        let y = A -  B[i];
        if(hashSet.has(y) == true){
            return 1
        }
        hashSet.add(x)
    } 
    return 0;
}
// console.log(checkPairSum(8, [3, 5, 1, 2, 1, 2]));
// console.log(checkPairSum(21,[9, 10, 7, 10, 9, 1, 5, 1, 5]));
/*
3.
You are given an array of N integers, A1, A2 ,..., AN and an integer B. Return the of count of distinct numbers in all windows of size B.

Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.

NOTE: if B > N, return an empty array.



Problem Constraints
1 <= N <= 106

1 <= A[i] <= 109


Input Format
First argument is an integer array A
Second argument is an integer B.



Output Format
Return an integer array.



Example Input
Input 1:

 A = [1, 2, 1, 3, 4, 3]
 B = 3
Input 2:

 A = [1, 1, 2, 2]
 B = 1


Example Output
Output 1:

 [2, 3, 3, 2]
Output 2:

 [1, 1, 1, 1]


Example Explanation
Explanation 1:

 A=[1, 2, 1, 3, 4, 3] and B = 3
 All windows of size B are
 [1, 2, 1]
 [2, 1, 3]
 [1, 3, 4]
 [3, 4, 3]
 So, we return an array [2, 3, 3, 2].
Explanation 2:

 Window size is 1, so the output array is [1, 1, 1, 1].

Hints:
If you have solution for window [i, i+k-1], can you quickly build solution for window [i+1, i+k], using some data structure?

What could be this data structure? A data structure which can store distinct elements(and their count?)?

Solution Approach:
If you have solution for window [i, i+k-1], can you quickly build solution for window [i+1, i+k]?

If we have a data structure where we can maintain count of all keys and number of distinct keys, then we just have to reduce count of key A[i] and increasing count of A[i+k]. If count of some key has been reduced to zero, we need to remove that key.

This structure is a hashmap. All operations that we have said a constant time in it.


*/

function distinctNumbersInAWindow(A,B){
    let numInWindow = [];
    let hashMap = new Map();
    for(let i=0; i<B; i++){
        if(hashMap.has(A[i])){
            hashMap.set(A[i], hashMap.get(A[i]) + 1)
        }
        else {
            hashMap.set(A[i], 1)
        }
    }
    numInWindow.push(hashMap.size)
    let s = 1;
    let e = B;
    while(s<= A.length - B){
        if(hashMap.has(A[e])){
            hashMap.set(hashMap.get(A[e]) + 1)
        }
        else {
            hashMap.set(A[e], 1)
        }
       numInWindow.push(hashMap.size) ;
       numInWindow
       s++;
       e--;
    }
    return numInWindow
}
console.log(distinctNumbersInAWindow([1, 2, 1, 3, 4, 3],3));