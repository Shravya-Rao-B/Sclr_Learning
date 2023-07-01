/*
1.
You are given an array A of length N and Q queries given by the 2D array B of size Q*2. Each query consists of two integers B[i][0] and B[i][1].
For every query, the task is to calculate the sum of all even indices in the range A[B[i][0]…B[i][1]].

Note : Use 0-based indexing


Problem Constraints
1 <= N <= 105
1 <= Q <= 105
1 <= A[i] <= 100
0 <= B[i][0] <= B[i][1] < N


Input Format
First argument A is an array of integers.
Second argument B is a 2D array of integers.


Output Format
Return an array of integers.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [   [0,2] 
        [1,4]   ]
Input 2:
A = [2, 1, 8, 3, 9]
B = [   [0,3] 
        [2,4]   ]


Example Output
Output 1:
[4, 8]
Output 2:
[10, 17]


Example Explanation
For Input 1:
The subarray for the first query is [1, 2, 3] whose sum of even indices is 4.
The subarray for the second query is [2, 3, 4, 5] whose sum of even indices is 8.
For Input 2:
The subarray for the first query is [2, 1, 8, 3] whose sum of even indices is 10.
The subarray for the second query is [8, 3, 9] whose sum of even indices is 17.

Hints:
Hint 1:
Can we precalculate the sum of numbers with even indices in a range ?
We should try to answer each query in O(1) time.

Solution approach:
Create a prefix array pref[] where pref[i+1] will store the sum of numbers with even indices in the subarray A[0…i]. 
Now, the sum of numbers with even indices in the range [L, R] can be easily calculated in O(1) as pref[R + 1] – pref[L].

Time Complexity : O(N + Q)
Space Complexity : O(N + Q)
*/
function sumOfEvenIndices(A, B){
let ans = [];
let pf = [];
pf[0] = A[0];
for(let i=1; i<A.length; i++){
//if index is even, calculate the sum.
if(i % 2 == 0)
{
pf[i] = pf[i-1]+A[i]
}
//if index is odd, keep the previous sum
else {
    pf[i] = pf[i-1];
}
}
for(let j=0; j<B.length; j++){
if(B[j][0] == 0){
    ans.push(pf[B[j][1]])   
}
else {
    ans.push(pf[B[j][1]]- pf[B[j][0]-1])
}
}
return ans
}
// console.log(sumOfEvenIndices([1, 2, 3, 4, 5],[[0,2] ,[1,4]]));
// console.log(sumOfEvenIndices([2, 1, 8, 3, 9],[[0,3] ,[2,4]]));

/*
2.
You are given an array A of length N and Q queries given by the 2D array B of size Q*2. Each query consists of two integers B[i][0] and B[i][1].
For every query, the task is to calculate the sum of all odd indices in the range A[B[i][0]…B[i][1]].

Note : Use 0-based indexing


Problem Constraints
1 <= N <= 105
1 <= Q <= 105
1 <= A[i] <= 100
0 <= B[i][0] <= B[i][1] < N


Input Format
First argument A is an array of integers.
Second argument B is a 2D array of integers.


Output Format
Return an array of integers.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [   [0,2] 
        [1,4]   ]
Input 2:
A = [2, 1, 8, 3, 9]
B = [   [0,3] 
        [2,4]   ]


Example Output
Output 1:
[2, 6]
Output 2:
[4, 3]


Example Explanation
For Input 1:
The subarray for the first query is [1, 2, 3] whose sum of odd indices is 2.
The subarray for the second query is [2, 3, 4, 5] whose sum of odd indices is 6.
For Input 2:
The subarray for the first query is [2, 1, 8, 3] whose sum of odd indices is 4.
The subarray for the second query is [8, 3, 9] whose sum of odd indices is 3.

Hints:
Hint 1:
Can we precalculate the sum of numbers with odd indices in a range ?
We should try to answer each query in O(1) time.

Solution approach:
Create a prefix array pref[] where pref[i+1] will store the sum of numbers with odd indices in the subarray A[0…i]. 
Now, the sum of numbers with odd indices in the range [L, R] can be easily calculated in O(1) as pref[R + 1] – pref[L].

Time Complexity : O(N + Q)
Space Complexity : O(N + Q)
*/

function sumOfOddIndices(A,B){
    let ans = [];
    let pf = [];
    // 0 is not an odd index, hence keep its sum as 0.
    pf[0] = 0;
    for(let i=1; i<A.length; i++){
        if((i % 2) !== 0){
            pf[i] = pf[i-1] + A[i]
        }
        else {
            pf[i] = pf[i-1];
        }
    }
    for(let j=0; j<B.length; j++){
        if(B[j][0] == 0){
            console.log(pf[B[j][1]]);
            ans.push(pf[B[j][1]])
        }
        else {
            ans.push(pf[B[j][1]] - pf[B[j][0] -1])
        }
    }
    return ans;
}
// console.log(sumOfOddIndices([1, 2, 3, 4, 5],[[0,2] ,[1,4]]));
// console.log(sumOfOddIndices([2, 1, 8, 3, 9],[ [0,3] ,[2,4]]));

/*
3.
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

Problem Constraints
1 <= n <= 105
-105 <= A[i] <= 105


Input Format
First argument contains an array A of integers of size N


Output Format
Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.


Example Input
Input 1:
A=[2, 1, 6, 4]
Input 2:

A=[1, 1, 1]

Example Output
Output 1:
1
Output 2:
3

Example Explanation
Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1. 
Explanation 2:

Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3.

Hints:
Hint 1:
The simplest approach to solve this problem is to traverse the array 
and for each array element, check 
if removing the element from the array makes the sum of even-indexed and odd-indexed array elements equal or not. 
If found to be true, then increment the count. Finally, print the count.

Solution Approach:
based on the observation that removing any element from the given array makes even indices of succeeding elements
as odd and odd indices of the succeeding elements as even.
Follow the steps below to solve the problem:

Initialize two variables, say evenSum and oddSum,
to store the sum of odd-indexed and even-indexed elements of the given array respectively.

Traverse the array using variable i.
Remove every ith element of the array and update the sum of the remaining even-indexed elements
and the odd-indexed elements based on the above observation. Check if the sums are equal or not.
If found to be true, then increment the count.

Finally, print the count obtained. Check out the complete solution for more clarity.

Time complexity : O(n)

TA Suggestion:
You need to create two prefix sum arrays to solve this question optimally

First is even indexed prefix sum array

Second is odd index prefix sum array

Using this prefix arrays we can calculate sum of even indices and odd indices without any extra loop using simple formula

After creating prefix array for both even and odd indices, this is what you need to do :

If we delete ith index element the sum of even indice element before that ith index will remain same but after ith index odd indice element will become even and even will become odd so using prefix array you need to calculate what would be the sum of even and odd indices element through those arrays(kind of similar logic to find just like range sum query)

So heres the formula reference you can use

if(i!=0){

evenSum=prefix_sum_even[i-1]+(prefix_sum_odd[N-1]-prefix_sum_odd[i]);

oddSum=prefix_sum_odd[i-1]+(prefix_sum_even[N-1]-prefix_sum_even[i]);

}

else{

evenSum=prefix_sum_odd[N-1]-prefix_sum_odd[i];

oddSum=prefix_sum_even[N-1]-prefix_sum_even[i];

}

if(oddSum==evenSum)

count++;

*/
//Below code gives time limit exceeded error
function specialIndex(A){
    let ans = 0;
    for(let i=0; i<A.length; i++){
        let newA = A.filter((item, index) =>  {
            if(index!=i)
            return item; 
        });
        let evenSum = 0;
        let oddSum =0;
        // console.log('newA', newA);
        for(let i=0; i<newA.length; i++){
            if(i%2 == 0){
                evenSum = evenSum + newA[i]
            }
            else {
                oddSum = oddSum + newA[i]
            }
        }
        // console.log('evenSum', evenSum);
        // console.log('oddSum', oddSum);
        if(oddSum == evenSum){
            ans++;
        }
    }
    return ans;
}
// console.log(specialIndex([2, 1, 6, 4]));
// console.log(specialIndex([1, 1, 1]));
// console.log(specialIndex([1,2,3,7,1,2,3]));

function specialIndexFormula(A){
    let evenPf = [], oddPf = [];
    evenPf[0] = A[0];
    oddPf[0] = 0;
    for(let i=1; i<A.length;i++){
        if(i % 2 == 0){
            evenPf[i] = evenPf[i-1] + A[i]  
        }
        else {
            evenPf[i] = evenPf[i-1]
        }
    } 
    for(let i=1; i<A.length;i++){
        if(i % 2 == 1){
            oddPf[i] = oddPf[i-1] + A[i]  
        }
        else {
            oddPf[i] = oddPf[i-1]
        }
    }
    let evenSum = 0;
    let oddSum = 0;
    let count =0;
    for(let i=0; i<A.length;i++){
        let N = A.length;
        if(i!=0){
            evenSum=evenPf[i-1]+(oddPf[N-1]-oddPf[i]);
            oddSum=oddPf[i-1]+(evenPf[N-1]-evenPf[i]);
            }
            else{
            evenSum=oddPf[N-1]-oddPf[i];
            oddSum=evenPf[N-1]-evenPf[i];
            }
            if(oddSum==evenSum)
            count++;
    }
    return count;
}
// console.log(specialIndexFormula([2, 1, 6, 4]));
// console.log(specialIndexFormula([1,1,1]));
/*
4.
Given an array of size N, find the majority element. The majority element is the element that appears more than floor(n/2) times.
You may assume that the array is non-empty and the majority element always exists in the array.

Problem Constraints
1 <= N <= 5*105
1 <= num[i] <= 109

Input Format
Only argument is an integer array.

Output Format
Return an integer.


Example Input
Input 1:
[2, 1, 2]
Input 2:
[1, 1, 1]


Example Output
Input 1:
2
Input 2:
1


Example Explanation
For Input 1:
2 occurs 2 times which is greater than 3/2.
For Input 2:
 1 is the only element in the array, so it is majority

 Hints:
 Hint 1:
 You find two elements x,and y, which are different in the array.
If you removed those two elements, would the majority element change?

Solution approach:
If we cancel out each occurrence of an element X with all the other elements that are different from X, then X will exist till the end if it is a majority element.
Loop through each element and maintain a count of the element that has the potential of being the majority element.

If the next element is the same, then increments the count, otherwise decrements the count.
If the count reaches 0, then update the potential index to the current element and reset the count to 1.
*/

function majorityElement(A){
    // let limit = Math.floor(A.length/2);
    let majorityFrequency = 0;
    let majorityElement = 0n;
    let hashMap = new Map();
    for(let i=0; i<A.length; i++){
        if(hashMap.has(A[i])){
            hashMap.set(A[i], hashMap.get(A[i]) +1);
        }
        else {
            hashMap.set(A[i], 1);
        }
    }
    for(let j=0; j<A.length; j++){
        // if(hashMap.get(A[j]) > limit && hashMap.get(A[j]) >= majorityFrequency){
            if(hashMap.get(A[j]) >= majorityFrequency){
            if(hashMap.get(A[j]) > majorityFrequency)
            {
            majorityFrequency = hashMap.get(A[j])
            majorityElement =  A[j]
            }
            else if(hashMap.get(A[j]) == majorityFrequency)
            {
                majorityFrequency = hashMap.get(A[j]);
                majorityElement = Math.max(Number(majorityElement), Number(A[j]))
            }
        }
    }
    return Number(majorityElement);
}
// console.log(majorityElement([2,1,2]));
// console.log(majorityElement([16,2,16,16,34,16,16,21,21,21,21]));
// console.log(majorityElement([1,1,1,2,2]));

function majorityElementScalarSolution(A){
    let count = 1, majorityindex = 0;
	    
    for(let i = 1; i<A.length; i++) {
        if(A[majorityindex] == A[i])
            count++;
        else
            count--;
        if(count == 0) {
            count = 1;
            majorityindex = i;
        }
    }
    
    return Number(A[majorityindex]);
}
/*
5.
You're given a read-only array of N integers. Find out if any integer occurs more than N/3 times in the array in linear time and constant additional space.
If so, return the integer. If not, return -1.

If there are multiple solutions, return any one.

Note: Read-only array means that the input array should not be modified in the process of solving the problem



Problem Constraints
1 <= N <= 7*105
1 <= A[i] <= 109


Input Format
The only argument is an integer array A.


Output Format
Return an integer.


Example Input
Input 1:
[1 2 3 1 1]
Input 2:
[1 2 3]


Example Output
Output 1:
1
Output 2:
-1


Example Explanation
Explanation 1:
1 occurs 3 times which is more than 5/3 times.
Explanation 2:
No element occurs more than 3 / 3 = 1 times in the array.



Expected Output
Enter your input as per the following guideline:
There are 1 lines in the input

Line 1 ( Corresponds to arg 1 ) : An integer array. First number is the size S of the array. Then S numbers follow which indicate the elements in the array.
    For example, Array: [1, 2, 6] will be written as "3 1 2 6"(without quotes).

Hints:
Hint 1:
It works to simply pick all elements one by one. For every picked element, count its occurrences by traversing the array.
If the count becomes more than n/3, then print the element. Time Complexity of this method would be O(n^2).

A better solution is to use sorting.

First, sort all elements using an O(nLogn) algorithm. All required elements in a linear array scan can be found once the array is sorted.

So overall, time complexity of this method is O(nLogn) + O(n) which is O(nLogn).

However, a linear solution is needed here.

Note: if at any instance, you have three distinct elements from the array, if you remove them from the array, your answer does not change.

Try to base your solution idea on the above fact.

Take two elements first and second and maintain their counts also, count1 and count2. And try to remove three distinct elements.

Solution Approach:
It is important to note that if at a given time, you have 3 distinct element from the array, if you remove them from the array, your answer does not change.

Assume that we maintain 2 elements’ counts as we traverse along the array.

When we encounter a new element, there are 3 cases possible :

We don’t have 2 elements yet. So add this to the list with count as 1.

This element is different from the existing 2 elements. As we said before, we have 3 distinct numbers now. Removing them does not change the answer. So decrement 1 from count of 2 existing elements. If their count falls to 0, obviously its not a part of 2 elements anymore.

The new element is same as one of the 2 elements. Increment the count of that element.

Consequently, the answer will be one of the 2 elements left behind. If they are not the answer, there is no element with count > N / 3.


*/
function repeatNumber(A){
let hashMap = new Map();
let freq = Math.floor(A.length/3);
for(let i=0; i<A.length; i++)
{
if(hashMap.has(A[i]) == true){
    hashMap.set(A[i], hashMap.get(A[i]) +1)
}
else {
    hashMap.set(A[i], 1);
}
}
for(let i=0; i<A.length ;i++){
    if(hashMap.get(A[i]) > freq){
        return A[i]
    }
}
return -1;
}

// console.log(repeatNumber([1, 2, 3]));

/*
6.
You have 20 blue balls and 14 red balls in a bag. You put your hand in and remove 2 at a time.

If they’re of the same color, you add a blue ball to the bag.
If they’re of different colors, you add a red ball to the bag.
( Assume you have a big supply of blue & red balls for this purpose).

Note: When you take the two balls out, you don’t put them back in, so the number of balls in the bag keeps decreasing.

What will be the color of the last ball left in the bag?

Ans: Blue

Explanation:
There are three possible cases of removing the two balls.
a) If we take off 1 RED and 1 BLUE, we actually will take off 1 BLUE.
b)If we take off 2 RED, we actually will take off 2 RED (and add 1 BLUE).
c) If we take off 2 BLUE, we actually will take off 1 BLUE.
So In the case of (a) or (c), we are only removing one blue ball, but we always take off red balls two by two.

If there are 14 (even) red balls, we can not have one red ball left in the bag so that the last ball will be blue.
*/

/*
7.
You have 20 blue balls and 13 red balls in a bag. You put your hand in and remove two at a time.

If they’re of the same color, you add a blue ball to the bag.
If they’re of different colors, you add a red ball to the bag.
Assume you have an enormous supply of blue & red balls for this purpose.

Note: When you take the two balls out, you don’t put them back in, so the number of balls in the bag keeps decreasing.

What will be the color of the last ball left in the bag?

Ans: Red

Explanation:
There are three possible cases of removing the two balls.
a) If we take off 1 RED and 1 BLUE, we actually will take off 1 BLUE.
b)If we take off 2 RED, we actually will take off 2 RED (and add 1 BLUE).
c) If we take off 2 BLUE, we actually will take off 1 BLUE.
So In case of (a) or (c), we are only removing one blue ball, but we always take off red balls two by two.

Now as the no. of red balls is odd, there will be one single red ball in the bag with other blue balls, 
and whenever we remove 1 red and 1 blue ball, we end up taking off only the blue ball. 
So the red ball will be the last ball in the bag.
*/