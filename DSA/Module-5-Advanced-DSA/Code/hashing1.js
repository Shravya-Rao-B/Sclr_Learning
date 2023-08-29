/*
Shaggy has an array A consisting of N elements. We call a pair of distinct indices in that array a special if elements at those indices in the array are equal.

Shaggy wants you to find a special pair such that the distance between that pair is minimum. Distance between two indices is defined as |i-j|. If there is no special pair in the array, then return -1.



Problem Constraints
1 <= |A| <= 105



Input Format
The first and only argument is an integer array A.



Output Format
Return one integer corresponding to the minimum possible distance between a special pair.



Example Input
Input 1:

A = [7, 1, 3, 4, 1, 7]
Input 2:

A = [1, 1]


Example Output
Output 1:

 3
Output 2:

 1


Example Explanation
Explanation 1:

Here we have 2 options:
1. A[1] and A[4] are both 1 so (1,4) is a special pair and |1-4|=3.
2. A[0] and A[5] are both 7 so (0,5) is a special pair and |0-5|=5.
Therefore the minimum possible distance is 3. 
Explanation 2:

Only possibility is choosing A[1] and A[2].

Hints:
The constraints are not small enough for even a brute forces solution to work.
Can you do it by hashing?

Solution Approach:
Idea behind this problem is to use hashing.

Iterate over the the array and for each element if you found that element earlier also
(i.e. stored in hash) then take the distance between them and update the hash with the
current index.
Answer will be minimum of all distances

We are storing the most recent found index of each element because that will be the closest
to the left of the next found index.

Time Complexity : O(N)
Space Complexity : O(N)
*/
function shaggyAndDistances(A){
    let hashMap = new Map();
    let ans = Number.POSITIVE_INFINITY;
    for(let i=0; i<A.length; i++){
        let val = A[i];
        if(hashMap.has(val)){
            let pi = hashMap.get(val);
            ans = Math.min(ans, i-pi)
        }
        //Even if hasMap does not have value, set it to new index.
        hashMap.set(val,i)
    }
    if(ans != Number.POSITIVE_INFINITY)
    return ans;
    return -1;
}
// console.log(shaggyAndDistances([7, 1, 3, 4, 1, 7]));
// console.log(shaggyAndDistances([1,1]));

/*
Given an array A of N integers.
Find the length of the longest subarray in the array which sums to zero.

Note :
while we A[i] multiple times, it may cross the range of integer, so wisely select data type for any operations.



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
 Hint 1:
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
Approach:

There are three steps:
1. Create cumulative sum array where ith index in this array represents total sum from 1 to ith index element.
2. Iterate all elements of cumulative sum array and use hashing to find two elements where value at ith index == value at jth index but i != j.
3. IF element is not present in hash in fill hash table with current element.


Time Complexity : O(N)
Space Complexity : O(N)

TA Help:
Have modifed code and sent on slack. 
Please refer it. Line 18 will be inside else condition. 
As we want to store the first occurence only of each prefix sum. 
And have written pf[i] == 0 condition inside for loop only as we dont know what the answer it.
 Directly saying line 20 that proper prefix is longest subarray is wrong.
 */

function longestZeroSubArray(A){
    let max = 0;
    let pf = new Array(A.length);
    pf[0] = A[0];
    for(let i=1; i<A.length; i++){
        pf[i] = pf[i-1] + A[i]
    }
    let hashMap = new Map();
    for(let i=0; i<pf.length; i++){
        let val = pf[i];
        if(pf[i] == 0){
             max = Math.max(max,i+1)
        }
        if(hashMap.has(val)){
            let pi = hashMap.get(val);
            max = Math.max(max,i-pi)
        }
        else
        {
        hashMap.set(val,i);
        }
    }
    return max;
}
// console.log(longestZeroSubArray([1, -2, 1, 2]));
// console.log(longestZeroSubArray([3, 2, -1]));
console.log(longestZeroSubArray([-16,16,3]));

/*
3.
Given an unsorted integer array A of size N.

Find the length of the longest set of consecutive elements from array A.



Problem Constraints
1 <= N <= 106

-106 <= A[i] <= 106



Input Format
First argument is an integer array A of size N.



Output Format
Return an integer denoting the length of the longest set of consecutive elements from the array A.



Example Input
Input 1:

A = [100, 4, 200, 1, 3, 2]
Input 2:

A = [2, 1]


Example Output
Output 1:

 4
Output 2:

 2


Example Explanation
Explanation 1:

 The set of consecutive elements will be [1, 2, 3, 4].
Explanation 2:

 The set of consecutive elements will be [1, 2].

 Hints:
 Hint 1:
 Use a hash set to efficiently track the presence of elements in the array.

Solution approach:
One solution is to sort the elements and then find the longest subarray with consecutive elements. But this will take O(NlogN).

An efficient way is to use hashing.

First, create an empty hash, and for each element, we insert and update the hash table and maxCount.

We only insert the element which is not yet inserted.
Calculate the lcount, i.e., the longest consecutive element till the current element - 1.
Calculate the rcount, i.e., the longest consecutive element from the current element + 1.

Update hMap[ele] (current element) = lcount + 1 + rcount.

Also, update the maxCount.
*/

function longestConsecutive(A){
    let ans = 0;
    let set = new Set(A);
    for(let i=0; i<A.length; i++){
        let val = A[i];
        let prev = A[i] -1;
        if(set.has(prev) == false){
            let start = val;
            let count =0;
            while(set.has(start)){
                start++;
                count++;
            }
            ans = Math.max(ans, count)
        }
    }
    return ans;
}
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([2, 1]));