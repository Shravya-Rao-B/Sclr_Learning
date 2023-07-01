/*
Given A = [1, -2, 5, 2, -1, 6]. Choose all the valid subarrays of the array

Options:
[5, 2, -1]
[-2, -1, 6]
[1, -2, 5, 2]
[6]

Ans: 1, 2 and 4
*/

/*
2.

Given an integer array A containing N distinct integers, you have to find all the leaders in array A. 
An element is a leader if it is strictly greater than all the elements to its right side.
NOTE: The rightmost element is always a leader.

Problem Constraints
1 <= N <= 105
1 <= A[i] <= 108

Input Format
There is a single input argument which a integer array A

Output Format
Return an integer array denoting all the leader elements of the array.

Example Input
Input 1:
 A = [16, 17, 4, 3, 5, 2]
Input 2:
 A = [5, 4]

Example Output
Output 1:
[17, 2, 5]
Output 2:
[5, 4]

Example Explanation
Explanation 1:
 Element 17 is strictly greater than all the elements on the right side to it.
 Element 2 is strictly greater than all the elements on the right side to it.
 Element 5 is strictly greater than all the elements on the right side to it.
 So we will return these three elements i.e [17, 2, 5], we can also return [2, 5, 17] or [5, 2, 17] or any other ordering.
Explanation 2:
 Element 5 is strictly greater than all the elements on the right side to it.
 Element 4 is strictly greater than all the elements on the right side to it.
 So we will return these two elements i.e [5, 4], we can also any other ordering.

 Hints:
 Hint 1:
A leader element must be greater than all the elements on the right to it simply means the leader element must 
be greater than the maximum of all the elements on the right side of it.
Try to use the above fact and find a solution to the problem.

Hint 2:
Method 1: (Simple)
Use two loops. The outer loop runs from 0 to size – 1 and, one by one, picks all elements from left to the right. The inner loop compares the picked element to all the elements to its right side. If the picked element is greater than all the elements to its right side, then the picked element is the leader.
Time Complexity: O(N2)

Method 2: (Scan from right) Optimized Approach
Note that for an element to be greater than all the elements towards its right , it just needs to be greater than the maximum element towards its right.
Keep a variable ‘mx’ which stores the maximum till now and initialize it with the last element of the array and also add the last element to our answer array. Iterate from n-2 to 0 , at every index we check if that number is greater than the variable mx. If it is we add the element to our answer array and change mx to that variable.

Time Complexity: O(N)
Space Complexity: O(1)
*/

function leadersInArray(A){
    let ans = [A[A.length-1]];
    let max = A[A.length -1]
        for(let i = A.length -1; i>=0; --i){
            if(A[i] > max){
            max = A[i];
            ans.push(A[i]);
        }
    }
    return ans;
	}
// console.log(leadersInArray([16, 17, 4, 3, 5, 2]));
// console.log(leadersInArray([5, 4]));

/*
3.

Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array
and at least one occurrence of the minimum value of the array.

Problem Constraints
1 <= |A| <= 2000

Input Format
First and only argument is vector A

Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array


Example Input
Input 1:
A = [1, 3, 2]
Input 2:
A = [2, 6, 1, 6, 9]

Example Output
Output 1:
 2
Output 2:
 3

Example Explanation
Explanation 1:
 Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
Explanation 2:
 Take the last 3 elements of the array.

Hints:
Hint 1:
One simple thing can be to generate all possible subarray and then compute the ans, but can we do better?
If we know the last occurrence of the min and max element in a particular subarray under consideration, 
can we do something?

Solution approach:
This problem can be solved in a simple O(N) complexity.
We can implement a sliding window kind of algorithm using two pointers. We can slide over the array and keep track of every last occurrence of the minimum and maximum element of the array.
In order to find the start point, we can simply remember the last occurrences of a minimum and a maximum value, respectively. And for each min-max pair, we check the length of the subarray that encloses them and then update out overall based on that.

Time Complexity : O(n)
Space Complexity(extra) : O(1)


*/

function closestMinMax(A){
    let mx = Math.max(...A),mn = Math.min(...A), ans = A.length;
        // mx and mn stores the max and min value of the array
        let max_index = -1e9 , min_index = -1e9 / 2;
        // index of the last element having value equal to mx and mn
        for(let i = 0; i < A.length;i++){
            if(A[i] == mx){
                max_index = i;
            }
            if(A[i] == mn){
                min_index = i;
            }
            ans = Math.min(ans, Math.abs(min_index - max_index) + 1);
        }
        return ans;
	}
// console.log(closestMinMax([1, 3, 2]));
// console.log(closestMinMax([2, 6, 1, 6, 9]));

/*

4.

You have given a string A having Uppercase English letters.
You have to find how many times subsequence "AG" is there in the given string.
NOTE: Return the answer modulo 109 + 7 as the answer can be very large.

Problem Constraints
1 <= length(A) <= 105

Input Format
First and only argument is a string A.

Output Format
Return an integer denoting the answer.

Example Input
Input 1:
 A = "ABCGAG"
Input 2:
 A = "GAB"

Example Output
Output 1:
 3
Output 2:
 0

Example Explanation
Explanation 1:
 Subsequence "AG" is 3 times in given string 
Explanation 2:
 There is no subsequence "AG" in the given string.

Hints:
Hint 1:
The main task is to find the number of times subsequence “AG” appears in a string.
Can count of A’s and G’s in the given string help in any way?
Be careful of overflow issues and take modulo in each appropriate step.

Solution Approach:
Approach 1

The main task is to find the number of times subsequence “AG” appears in a string.
Simply find the number of G’s after any index i by taking suffix sum.
Then traverse the string again, and when you encounter an ‘A’, add the number of G’s after that to the answer.

Time Complexity : O(n)
Space Complexity (extra) : O(n)

where ‘n’ is the length of the string A.

This solution is enough to pass the test casses.
However , Do we really need O(n) space? Can you think of a solution with constant space?

Approach 2(memory efficient)

This is just a modification of the previous approach.
Instead of keeping a suffix array for count of G’s , we can instead keep a variable ‘g’ storing count of G’s and iterate in the reverse order.
If the current character is ‘G’ , increment g.
If the current character is ‘A’ , add g to our answer.

for i from n-1 to 0
    if A[i]=='G'
        g++
    else 
        ans+=g
        ans%=mod

Time complexity : O(n)
Space complexity : O(1)
*/

function specialSubsequenceAG(A){
    let B = A.split('');
    let cntG = 0;
    let ans = 0;
    for(let i=B.length ; i>=0; --i){
        if(B[i] === 'G'){
            cntG ++;
        }
        if(B[i] === 'A'){
            ans = (ans + cntG) % 1000000007
        }
    }
    return ans;
}

// console.log(specialSubsequenceAG("ABCGAG"));
// console.log(specialSubsequenceAG("GHKL"));
/*
5.
Say you have an array, A, for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Return the maximum possible profit.



Problem Constraints
0 <= A.size() <= 700000
1 <= A[i] <= 107



Input Format
The first and the only argument is an array of integers, A.


Output Format
Return an integer, representing the maximum possible profit.


Example Input
Input 1:
A = [1, 2]
Input 2:

A = [1, 4, 5, 2, 4]


Example Output
Output 1:
1
Output 2:

4


Example Explanation
Explanation 1:
Buy the stock on day 0, and sell it on day 1.
Explanation 2:

Buy the stock on day 0, and sell it on day 2.

Hints:
Hint 1:
Let us assume, you are buying the stock on ith day. When would you like to sell it?
The answer is, we would like to sell when price of the stock is highest on or after ith day.
That means, we need to find the maximum element on the right hand side.

So, for every ith index find maximum on right side and calculate the profit. Maximum profit will be the answer.

Solution Approach:
If you buy your stock on day i, you’d obviously want to sell it on the day its price is maximum after that day.
So essentially at every index i, you need to find the maximum in the array in the suffix.
Now this part can be done in 2 ways :
1) Have another array which stores that information.
max[i] = max(max[i+1], A[i])

2) Start processing entries from the end maintaining a maximum till now. Constant additional space requirement.
*/

function maxStockProfitBruteforce(A){
    if(A.length == 0){
        return 0
    }
    let maxProfit = 0;
    for(let i=0; i<A.length; i++){
        let max = A[i]
        for(j=i+1; j<A.length; j++){
            if(A[j] > max){
                max = A[j]
            }
        }
        let profit = max - A[i]
        if(profit > maxProfit)
        maxProfit = profit;
        return maxProfit
    }
}
//TC O(n2)
//SC O(1)

function maxStocksProfit(A){
    let maxProfit = 0;
    let max = A[A.length -1];
    for(let i=A.length-2; i>=0; i--){
        if(A[i] > max){
            max = A[i]
        }
        let profit = max - A[i]
        if(profit > maxProfit){
            maxProfit = profit;
        }
    }
    return maxProfit;
}
// console.log(maxStocksProfit([1, 4, 5, 2, 4]));
// console.log(maxStocksProfit([1, 2]));

/*
6.
Given a string A = "amazon", find the number of subarrays starting with the character 'a'.

Options:
4
6
10
12

Hints:
The subarrays starting with 'a' are "a", "am",
"ama" , "amaz" , "amazo" , "amazon" , "a" , "az",
"azo" and "azon".
The number of subarrays is 10.

Ans:
10
*/

/*
7.

You are given a string S, and you have to find all the amazing substrings of S.

An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

Input

Only argument given is string S.
Output

Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.
Constraints

1 <= length(S) <= 1e6
S can have special characters
Example

Input
    ABEC

Output
    6

Explanation
    Amazing substrings of given string are :
    1. A
    2. AB
    3. ABE
    4. ABEC
    5. E
    6. EC
    here number of substrings are 6 and 6 % 10003 = 6.

Hints:
Hint 1:
Brute Force Approach is to find all the substrings and count the substrings those start with a vowel.
This approach will result in the timeout as the time complexity of the same is O(n^2).

Is there any need to find all the substrings?

Try to find a pattern.
If we find a vowel while traversing on the string,
all the substrings starting from that index are valid.
Think how we can count those?

Approach 1:
The main idea to solve this problem is to traverse the string and when you encounter a vowel, add ( length(string) - position_of_curr_char ) to the answer.

*/
function amazingSubArray(A){
let B = A.split("");
let vowelArray = ["A","E","I","O","U"];
let n = B.length;
if(n ==0 ){
    return 0
}
let countOfAmazingSubArray = 0;
for(let i=n-1; i>=0 ; i--) {
    if(vowelArray.includes(B[i].toUpperCase())){
        countOfAmazingSubArray = countOfAmazingSubArray + n - i
    }
} 
return (countOfAmazingSubArray % 10003);
}

function subArrayUsingHashMap(A){
    let ans = 0;
    let mp = new Map();
    mp.set('a',1);  mp.set('e',1);  mp.set('i',1);  
    mp.set('o',1);  mp.set('u',1);
    mp.set('A',1);  mp.set('E',1);  mp.set('I',1);  
    mp.set('O',1);  mp.set('U',1);
    let n = A.length;
    for( let i = 0; i < n; i++) {
        if(mp.has(A[i]))
            ans= (ans+n - i)%10003;
    }
        return ans;
}
// console.log(subArrayUsingHashMap("ABEC"));
// console.log(amazingSubArray("ABEC"));

/*
8.

You are given an integer array A.
Decide whether it is possible to divide the array into one or more subarrays of even length such that the 
first and last element of all subarrays will be even.
Return "YES" if it is possible; otherwise, return "NO" (without quotes).

Problem Constraints
1 <= |A|, A[i] <= 106

Input Format
The first and the only input argument is an integer array, A.

Output Format
Return a string "YES" or "NO" denoting the answer.

Example Input
Input 1:
 A = [2, 4, 8, 6]
Input 2:
 A = [2, 4, 8, 7, 6]

Example Output
Output 1:
 "YES"
Output 2:
 "NO"

Example Explanation
Explanation 1:
 We can divide A into [2, 4] and [8, 6].
Explanation 2:
 There is no way to divide the array into even length subarrays.

 Hints:
 Hint 1:
 What if the array size is odd?
Can we divide an odd sized array into even sized subarrays?
What if the even size array is even but with all odd elements
or all even elements or odd corner elements or even corner elements.

Solution approach:
If the first and the last element are even and the size of the array is even, then only the answer will be “YES.”
Otherwise will be “NO,” as we can’t divide the array into subarrays that meet the given conditions in the question.

So, if(A[0]%2 == 0 and A[n-1]%2 == 0 and n%2 == 0)
return “YES”;
*/

function evenSubarrays(A){
    let n  = A.length;
    if(A.length && (n % 2 == 0 ) && (A[0] % 2 == 0) && (A[n -1] % 2 == 0))
    {
        return "YES"
    }
    else {
        return "NO"
    }
}

/*
9.
Say the bulb is ON initially, after pressing the switch even number of times, 
what will be the final state of the bulb?

Options:
ON
OFF
Can't be determined

Complete soultion in Hints:
Pressing the switch even number of times makes it 
go to its initial state.

Ans: ON
*/

/*
10.
Say the bulb is ON initially, after pressing the switch odd number of times, 
what will be the final state of the bulb?

Options:
ON
OFF
Can't be determined

Complete soultion in Hints:
Pressing the switch odd number of times makes it 
change its initial state.

Ans: OFF
*/

/* 
11.
A wire connects N light bulbs.

Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.

Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.

You can press the same switch multiple times.

Note: 0 represents the bulb is off and 1 represents the bulb is on.



Problem Constraints
0 <= N <= 5×105
0 <= A[i] <= 1



Input Format
The first and the only argument contains an integer array A, of size N.



Output Format
Return an integer representing the minimum number of switches required.



Example Input
Input 1:

 A = [0, 1, 0, 1]
Input 2:

 A = [1, 1, 1, 1]


Example Output
Output 1:

 4
Output 2:

 0


Example Explanation
Explanation 1:

 press switch 0 : [1 0 1 0]
 press switch 1 : [1 1 0 1]
 press switch 2 : [1 1 1 0]
 press switch 3 : [1 1 1 1]
Explanation 2:

 There is no need to turn any switches as all the bulbs are already on.

Hints:
Hint 1:
You will never need to press the same switch twice. Why?
Because it is equivalent to not pressing the switch, you will end up with the same state.
So we can always solve the problem in at most n switch flips.

Solution approach:
The order in which you press the switch does not affect the final state.

Example:

Input : [0 1 0 1]

Case 1:
    Press switch 0 : [1 0 1 0]
    Press switch 1 : [1 1 0 1]

Case 2:
    Press switch 1 : [0 0 1 0]
    Press switch 0 : [1 1 0 1]  
Therefore we can choose a particular order. To make things easier, let’s go from left to right.
 At the current position, if the bulb is on, we move to the right, else we switch it on.
  This works because changing any switch to the right of it will not affect it anymore.
*/
//State needs to be changed only when count is odd.
function bulbs(A){
let count = 0;
for(let i=0; i<A.length; i++)
{
    state = A[i]
    if(count % 2 == 0){
        state = A[i]
    }
    else {
        state = 1 - A[i]
    }
    if(state == 0){
        count = count + 1;
    }
}
return count;
}
// console.log(bulbs([1,1,0,0,1,1,0,0,1]));

/*
12.
You are given an integer array A of size N.
You have to perform B operations. In one operation, you can remove either the leftmost or the 
rightmost element of the array A.
Find and return the maximum possible sum of the elements that were removed after B operations.

NOTE: Suppose B = 4, and array A contains 10 elements, then
You can remove the first four elements or can remove the last four elements, or can remove 1 from front 
and 3 from the back, etc. You need to return the maximum possible sum of elements you can remove.

Problem Constraints
1 <= N <= 105
1 <= B <= N
-103 <= A[i] <= 103

Input Format
First argument is an integer array A.
Second argument is an integer B.

Output Format
Return an integer denoting the maximum possible sum of elements you removed.

Example Input
Input 1:
 A = [5, -2, 3 , 1, 2]
 B = 3
Input 2:
 A = [ 2, 3, -1, 4, 2, 1 ]
 B = 4

Example Output
Output 1:
 8
Output 2:
 9

Example Explanation
Explanation 1:
 Remove element 5 from front and element (1, 2) from back so we get 5 + 1 + 2 = 8
Explanation 2:
 Remove the first element and the last 3 elements. So we get 2 + 4 + 2 + 1 = 9

Hints:
Hint 1:
Try to use prefix and suffix sum arrays to solve the problem. You can try to pick one by one from the 
left and then use the suffix array to pick from the right.

Solution approach:
Approach using Prefix and Suffix Sums:
Maintain two arrays prefix[i] and suffix[i] where prefix[i] denotes sum of elements from index [0,i] 
and suffix[i] denotes sum of elements from index [i,N-1].
Now iterate from left and one by one pick elements from left for example: if you pick ‘a’ elements 
from left and remaining ‘k-a’ elements from right.
So the sum in this case will be prefix[a-1] + suffix[n-(k-a)]

Maintain the maximum among all and return it.
Time Complexity: O(N)
Space Complexity: O(N)

where N is number of elements in array A

Bonus: Try solving it in O(1) space.
*/

function pickFromBothSides(A, B){
    let pf = [], sf = [];
    pf[0] = A[0];
    let n = A.length;
    sf[n-1]= A[n-1];
   for(let i=1; i<n; i++){
    pf[i] = pf[i-1] + A[i]
   } 
   for(let i = n - 2; i>=0; i--){
    sf[i] = sf[i+1] + A[i]
   }
//    console.log('A', A);
//    console.log('pf', pf);
//    console.log('sf', sf);
//when we remove all items from left hand side and right hand side is zero, sum of elements = pf[B-1] 
//When we remove all items from right hand side and lhs is zero, sum of elements = sf[n-B]
//We initialize the max of these two direct cases to our final ans variable.
   let ans = Math.max(pf[B-1], sf[n-B])
//    console.log('ans initially',  ans);
for(let i=1; i<B; i++){
//if B=3 and n=5, sum = pf[2] + sf[1]
    let sum = pf[i-1] + sf[n-(B-i)];
    ans = Math.max(sum, ans);
}
return ans;
}
// console.log(pickFromBothSides([1,2,3,4,5],3));
// console.log(pickFromBothSides([5, -2, 3 , 1, 2],3));