/*
1.

Find the maximum sum of contiguous non-empty subarray within an array A of length N.



Problem Constraints
1 <= N <= 1e6
-1000 <= A[i] <= 1000



Input Format
The first and the only argument contains an integer array, A.



Output Format
Return an integer representing the maximum possible sum of the contiguous subarray.



Example Input
Input 1:

 A = [1, 2, 3, 4, -10] 
Input 2:

 A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 


Example Output
Output 1:

 10 
Output 2:

 6 


Example Explanation
Explanation 1:

 The subarray [1, 2, 3, 4] has the maximum possible sum of 10. 
Explanation 2:

 The subarray [4,-1,2,1] has the maximum possible sum of 6. 

 Hints:
 Hint 1:
 O(n^3) solution is simple.

You look at every pair (i,j), compute the sum of elements between i and j, and then take the maximum of the sums.

Obviously, this is not the best solution.

The next improvement is O(n^2), when you notice that you don’t need to sum up all the elements between i and j. You can add A[j] to the sum you have already calculated in the previous loop from i to j-1.

However, we are looking for something better than N^2.

For O(n) solution, can you look at the optimal subarray and deduce some observations from it?
If you start taking every element greedily, when should you stop?

Solution Approach:
Let us say Ai, Ai+1 … Aj is our optimal solution.

Note that no prefix of the solution will ever have a negative sum.

Let us say Ai … Ak prefix had a negative sum.

Sum ( Ai Ai+1 … Aj ) = Sum (Ai … Ak) + Sum(Ak+1 … Aj)

Sum ( Ai Ai+1 … Aj) - Sum(Ak+1 … Aj) = Sum(Ai … Ak)

Now, since Sum(Ai … Ak) < 0,

Sum (Ai Ai+1 … Aj) - Sum (Ak+1 … Aj) < 0

which means Sum(Ak+1 … Aj ) > Sum (Ai Ai+1 … Aj)

This contradicts the fact that Ai, Ai+1 … Aj is our optimal solution.

Instead, Ak+1, Ak+2 … Aj will be our optimal solution.

Similarly, you can prove that it is always good to include a prefix with a positive sum for the optimal solution.

Try to come up with a solution based on the previous 2 facts.

Here’s one Approach.
Keep two variables ‘curSum’ and ‘maxSum’ which denotes the current sum ending at the given position and the maximum sum of a subarray respectively.
Iterate through the array , at every index we will add the current element to our curSum , after this we can update the maxSum as max(maxSum,curSum), After this we can just check if curSum is less than 0 , if it is then just replace curSum with 0.

Time Complexity : O(n)
Space Complexity(extra) : O(1)
If this still does not make sense, watch this video for a more detailed explanation :
*/
function maxSumSubarrayN3(A){
    let ans = 0;
    for(let i=0; i<A.length; ++i){
        let j = A.length -1;
        while(j>=0){
            let sumOfSubArray = 0;
            for(let k=i; k<=j; ++k){
                sumOfSubArray = sumOfSubArray + A[k]
            }
            ans = Math.max(ans, sumOfSubArray);
            j--;
        }
    }
    return ans;
}
// console.log(maxSumSubarrayN3([1, 2, 3, 4, -10] ));
// console.log(maxSumSubarrayN3([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//Kadane's algorithm
function maxSumSubArrayN(A){
    let maxSum = Number.NEGATIVE_INFINITY;
    total = 0;
    for(let i=0; i<A.length; ++i){
        total = total + A[i]
        maxSum = Math.max(maxSum, total);
        if(total < 0){
            total = 0;
        }
    }
    return maxSum;
}
// console.log(maxSumSubArrayN([1, 2, 3, 4, -10] ));
// console.log(maxSumSubArrayN([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSumSubArrayN([-500]));

/*
2.
There are A beggars sitting in a row outside a temple. Each beggar initially has an empty pot. When the devotees come to the temple, they donate some amount of coins to these beggars. Each devotee gives a fixed amount of coin(according to their faith and ability) to some K beggars sitting next to each other.

Given the amount P donated by each devotee to the beggars ranging from L to R index, where 1 <= L <= R <= A, find out the final amount of money in each beggar's pot at the end of the day, provided they don't fill their pots by any other means.
For ith devotee B[i][0] = L, B[i][1] = R, B[i][2] = P, Given by the 2D array B


Problem Constraints
1 <= A <= 2 * 105
1 <= L <= R <= A
1 <= P <= 103
0 <= len(B) <= 105


Input Format
The first argument is a single integer A.
The second argument is a 2D integer array B.


Output Format
Return an array(0 based indexing) that stores the total number of coins in each beggars pot.


Example Input
Input 1:-
A = 5
B = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]


Example Output
Output 1:-
10 55 45 25 25


Example Explanation
Explanation 1:-
First devotee donated 10 coins to beggars ranging from 1 to 2. Final amount in each beggars pot after first devotee: [10, 10, 0, 0, 0]
Second devotee donated 20 coins to beggars ranging from 2 to 3. Final amount in each beggars pot after second devotee: [10, 30, 20, 0, 0]
Third devotee donated 25 coins to beggars ranging from 2 to 5. Final amount in each beggars pot after third devotee: [10, 55, 45, 25, 25]

Hints:
Hint 1:
The simple naive solution would be to iterate over each devotee and add their donation to each beggar’s pot. You need to iterate through each beggar’s pot from i to j range donated by each devotee.

The worst time complexity of the above approach is O(D*R), where D is the total number of devotees and R is the maximum range of beggars index.

Now, instead of iterating through all the beggar’s index ranging from i to j for all devotees, can you think of a way to do a similar operation in better time complexity?

Hint: Think about sorting.

Solution Approach:
Instead of updating each beggar ranging from i to j, we could update index i with +S and index j + 1 with -S, where S is a donation made by some devotee. So if you want to know the number of coins taken by kth beggar, you just need to find the prefix sum of all the values(coins) from 1 to k(Try to prove it by yourself that values between i to j contains +S as you are doing prefix sum).
This technique is known as difference array and is very helpful in problems which involves range updates.

Time complexity : O(A+n) , where n denotes the size of B

Space complexity : O(A)

Example:
N = 5, D = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]
Initial array: [0, 0, 0, 0, 0]

After first devotee, if we update i = 1 with +10 and j + 1 = 3 with -10, we get [10, 0, -10, 0, 0]. Now note that if you add 10 to 1st index and subtract 10 with 3rd index and do a prefix sum at every array element, you will get +10 at 1st and 2nd.
After second devotee, if we update i = 2 with +20 and j + 1 = 4 with -20, we get [10, 20, -10, -20, 0].
Similarly, after third devotee, if we update i = 2 with +25 and j + 1 = 6 with -25, we get [10, 45, -10, -20, 0].
Now, if we calculate the prefix sum at every index, we get [10, 55, 45, 25, 25].
*/

function sumQueryBruteforce(A, B){
let arr = new Array(A).fill(0);
for(let i=0; i<B.length; ++i)
{
    for(let j=B[i][0]; j<=B[i][1]; j++){
        arr[j-1] = arr[j-1] + B[i][2]
    }
}
    return arr
}
// console.log(sumQueryBruteforce(5,[[1, 2, 10], [2, 3, 20], [2, 5, 25]]))
//Ans : [ 10, 55, 45, 25, 25 ]

function sumQuery(A, B){
let arr = new Array(A).fill(0);
for(let i=0; i<B.length; ++i){
let start = B[i][0];
let end = B[i][1];
let val = B[i][2]; 
arr[start -1] = arr[start -1] + val;
//Array can go out of bound
if(end < arr.length)
arr[end] = arr[end] - val
}
for(let i=1; i<A; ++i){
    arr[i] = arr[i-1] + arr[i]
} 
return arr;
}
// console.log(sumQuery(5,[[1, 2, 10], [2, 3, 20], [2, 5, 25]]))

/*
3.
Given a vector A of non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.



Problem Constraints
1 <= |A| <= 100000



Input Format
First and only argument is the vector A



Output Format
Return one integer, the answer to the question



Example Input
Input 1:

A = [0, 1, 0, 2]
Input 2:

A = [1, 2]


Example Output
Output 1:

1
Output 2:

0


Example Explanation
Explanation 1:

1 unit is trapped on top of the 3rd element.
Explanation 2:

No water is trapped.

Hints:
Hint 1:
Take a close look at any particular bin. How high can this hold water? If you can compute the answer to the above question for every bin, you are done.
Every bin will store water which will depend on some prefix and suffix quantity. Can you figure it out now?

Solution Approach:
Instead of calculating area by height*width, we can think it in a cumulative way.
In other words, we can sum the water amount of each bin(width=1).

Approach 1

We can keep 2 arrays ‘pre’ and ‘suf’. pre[i] is the maximum height for all i from 0 to i and suf[i] is the maximum height for all i from i to n-1.
Now for each i from 1 to n-2 (as no water can be stored at indexes 0 and 1) just add the maximum amount water that can be stored. The maximum amount of water that can be stored is the minimum of(max height towards left of i,max height towards right of i)-A[i]
i.e. min(pre[i-1],suf[i+1])-A[i]. But if min(pre[i-1],suf[i+1])-A[i]<0 we dont add anything. (i.e we add 0)

Time Complexity : O(n)
Auxiliary Spcae : O(n)

Can we do better than this? Is there way by which we can improve its auxiliary space?

Approach 2 (Most Efficient)

We can use the concept of two pointers.
Search from left to right and maintain a max height of left and right separately, which is like a one-side wall of a partial container. Fix the higher one and flow water
from the lower part. For example, if the current height of the left is lower, we fill water in the left bin. Until the left meets right,
we filled the whole container.

We will follow the below steps:

1) Maintain two variables ‘left’ and ‘right’ (‘left’ denotes the left pointer and ‘right’ denotes the right pointer) and initialize it to 0 and n-1 respectively.
2) Also maintain two variables ‘leftmax’ and ‘rightmax’ (‘leftmax’ denotes the maximum height till ‘left’ ( i.e. from 0 to left) and ‘rightmax’ denotes the maximum height till ‘right’(i.e. from right to n-1) ) and initialize both of them to 0.
3) while left <= right we have two possible conditions

Condition 1: leftmax<=rightmax
For the element at index left , we have already traversed from 0 to left , therefore leftmax is known. But rightmax of left'th index is not known. We only know the rightmax for right.
But we know that rightmax can only get bigger from right to left,and we already know that leftmax<=rightmax,  therefore leftmax of left <= rightmax of left. 
Now we can simply add leftmax-A[left] , if this quantity is positive
otherwise change leftmax to A[left].
Increment left.

Condition 2: leftmax>rightmax
For the element at index right , we have already traversed from n-1 to right , therefore rightmax is known. But leftmax of right'th index is not known. We only know the leftmax for left.
But we know that leftmax can only get bigger from left to right, and we already know that leftmax>rightmax,  therefore rightmax of right < leftmax of right. 
Now we can simply add rightmax-A[right] , if this quantity is positive
otherwise change rightmax to A[right].
decrement right
Time Complexity : O(n)
Auxiliary Spcae : O(1)
*/
//Refer to the diagram in the notes
function rainWaterTrapped(A){
let n = A.length;
let pf = []; 
let sf = [];
let pfMax = A[0];
pf[0] = A[0]
let sfMax = A[n-1];
let totalWaterCollection = 0;
for(let i=1; i<n; ++i){
    if(A[i] > pfMax){
        pfMax = A[i]
    }
    pf[i] = pfMax
}
for(let i=n-1; i>=0; i--){
    if(A[i] > sfMax){
        sfMax = A[i]
    }
    sf[i] = sfMax;
}
for(let i=1; i<n-1 ;i++){
     waterCollected =  Math.min(pf[i-1],sf[i+1] ) - A[i]
if(waterCollected >0){
    totalWaterCollection = totalWaterCollection + waterCollected;
}
}
return totalWaterCollection;
}
// console.log(rainWaterTrapped([4,2,5,7,5,2,3,6,2,3]));
// console.log(rainWaterTrapped([0,1,0,2]));
// console.log(rainWaterTrapped([1,2]));