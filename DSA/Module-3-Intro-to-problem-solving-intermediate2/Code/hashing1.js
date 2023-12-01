/*
1.
Given an array A. You have some integers given in the array B.
For the i-th number, find the frequency of B[i] in the array A and return a list containing all the frequencies.


Problem Constraints
1 <= |A| <= 105
1 <= |B| <= 105
1 <= A[i] <= 105
1 <= B[i] <= 105


Input Format
First argument A is an array of integers.
Second argument B is an array of integers denoting the queries.


Output Format
Return an array of integers containing frequency of the each element in B.


Example Input
Input 1:
A = [1, 2, 1, 1]
B = [1, 2]
Input 2:
A = [2, 5, 9, 2, 8]
B = [3, 2]


Example Output
Output 1:
[3, 1]
Output 2:
[0, 2]


Example Explanation
For Input 1:
The frequency of 1 in the array A is 3.
The frequency of 2 in the array A is 1.
For Input 2:
The frequency of 3 in the array A is 0.
The frequency of 2 in the array A is 2.

Hints:
Think of a data structure where we can store frequency of all unique elements present in A.
A frequency array or map is such a data structure.
Use appropriate map functions so as to not get the TLE.

Solution Approach:
Initialize hashmap/map/dictionary and loop over the elements in A.
If the element in present in hashmap/map/dictionary then increase its frequency by 1.
If it is not present then initialize a new key containing that element with a value of 1.
Now loop over B and extract frquency of each element from the hashmap/map/dictionary.

Scaler solution:
function(A, B){
        let freq = {};
      for (let x of A) {
        freq[x] = (freq[x] || 0) + 1;
      }
      let ans = [];
      for (let y of B) {
        ans.push(freq[y] || 0);
      }
      return ans;
	}
*/

function freqOfElement(A,B){
    let hashMap = new Map();
    let ans = [];
    for(let i=0; i<A.length; i++){
        if(hashMap.has(A[i])){
            hashMap.set(A[i], hashMap.get(A[i])+1 )
        }
        else {
            hashMap.set(A[i], 1)
        }
    }
    for(let i=0; i<B.length; i++){
        if(hashMap.has(B[i])){
            ans.push(hashMap.get(B[i]))
        }
        else {
            ans.push(0)
        }
    }
    return ans;
}

function scalerFreq(A, B){
    let freq = {};
  for (let x of A) {
    freq[x] = (freq[x] || 0) + 1;
  }
  let ans = [];
  for (let y of B) {
    ans.push(freq[y] || 0);
  }
  console.log('freq', freq);
  return ans;
}
// console.log(freqOfElement([1, 2, 1, 1], [1,2]));
// console.log(scalerFreq([2, 5, 9, 2, 8],[3,2]));

/*
2.
Given an integer array A of size N, find the first repeating element in it.

We need to find the element that occurs more than once and whose index of the first occurrence is the smallest.

If there is no repeating element, return -1.



Problem Constraints
1 <= N <= 105

1 <= A[i] <= 109



Input Format
The first and only argument is an integer array A of size N.



Output Format
Return an integer denoting the first repeating element.



Example Input
Input 1:

 A = [10, 5, 3, 4, 3, 5, 6]
Input 2:

 A = [6, 10, 5, 4, 9, 120]


Example Output
Output 1:

 5
Output 2:

 -1


Example Explanation
Explanation 1:

 5 is the first element that repeats
Explanation 2:

 There is no repeating element, output -1

 Hints:
 Think of Hashing. Traverse the array from right to left and update the minimum index if the element occurs more than once.

 Solution Approach:
 A Simple Solution is to use two nested loops. The outer loop picks an element one by one, the inner loop checks whether the element is repeated or not. Once we find an element that repeats, we break the loops and print the element.

Time Complexity of this solution is O(n2)

We can Use Sorting to solve the problem in O(n Logn) time. Following are detailed steps.
1) Copy the given array to an auxiliary array temp[].
2) Sort the temp array using an O(nLogn) time sorting algorithm.
3) Scan the input array from left to right. For every element, count its occurrences in temp[] using binary search. As soon as we find an element that occurs more than once, we return the element.
This step can be done in O(nLogn) time.

We can optimize the solution using Hashing.

We can Use Hashing to solve this in average O(n) time.

The idea is to traverse the given array from right to left and update the minimum index whenever we find an element visited on the right side.
At last, return the element at the minimum index stored.

Scaler solution:
function(A){
           let ans = -1 ,diff = 1000000;
           let mp = new Map();
           let n = A.length;
           for(let i = 0; i < n; i++) {
               if(mp.has(A[i])) {
                   
                   if(mp.get(A[i]) < diff) {
                       diff = mp.get(A[i]);
                       ans = A[i];
                   }
               }
               mp.set(A[i],i);
           }
           return ans;
       }
*/

/*
6.
Given an array A of N integers.

Find the count of the subarrays in the array which sums to zero. Since the answer can be very large, return the remainder on dividing the result with 109+7


Problem Constraints
1 <= N <= 105
-109 <= A[i] <= 109


Input Format
Single argument which is an integer array A.


Output Format
Return an integer.


Example Input
Input 1:

 A = [1, -1, -2, 2]
Input 2:

 A = [-1, 2, -1]


Example Output
Output 1:

3
Output 2:

1


Example Explanation
Explanation 1:

 The subarrays with zero sum are [1, -1], [-2, 2] and [1, -1, -2, 2].
Explanation 2:

 The subarray with zero sum is [-1, 2, -1].

 Hints:
 Since we are looking subarrays with sum = 0. Let’s try to create a pSum[] and let’s have some observation.

pSum[i] = Sum of all elements from index 0 to index i.

A[] = [4, 8, 3, 6, -5, -4, 7, -2, 1, -6, 2]

pSum[] = [4, 12, 15, 21, 16, 12, 19, 17, 18, 12, 14]

Here, sum of elements from index 0 to 1 is 12, and from index 0 to 5 is also 12. That means sum of elements from index 2 to 5 is zero.

12 is again present at index 9 and since it has appeared 2 times before it.

That means there are two more subarrays with sum = 0, subarray from index 2 to 9 and subarray from index 6 to 9.

So, we should keep a track of the number of times an element has appeared in pSum[]. For this, we can use hashmap/dictionary.

If an element has appeared x number of times in pSum[] and it is again appearing for (x+1)th time, the answer must be incremented by x.

Solution Apporach:
Take a hashmap/dictionary and a variable sum.

Iterate on all the elements of the array and for every index i, update the value of sum. And then check if sum has already appeared. If it has already appeared, add its frequency in the answer. Also, update its frequency in the hashmap/dictionary.

Note - Since sum of elemets can be large, use the appropiate data type for storing sum. Also, ans can be very large, take appropiate data type for ans as well and remember to take modulo.
*/

function subarrayWithSUmZero(A){
    let pSum = [];
    let hashMap = {0:1};
    let sum = 0;
    let count =0;

    for(let i=1; i<A.length; i++){
        sum += A[i];
        if(hashMap[sum]){
            count += hashMap[sum]
            hashMap[sum] + 1;
        }
        else {
            hashMap[sum] = 1
        }
    }
    console.log('hashMap',hashMap);
    return count;
}
console.log(subarrayWithSUmZero([1,-1,-2,2]));
console.log(subarrayWithSUmZero([0,0,0]));
/*
8.
Given a number A, find if it is COLORFUL number or not.

If number A is a COLORFUL number return 1 else, return 0.

What is a COLORFUL Number:

A number can be broken into different consecutive sequence of digits. 
The number 3245 can be broken into sequences like 3, 2, 4, 5, 32, 24, 45, 324, 245 and 3245. 
This number is a COLORFUL number, since the product of every consecutive sequence of digits is different


Problem Constraints
1 <= A <= 2 * 109



Input Format
The first and only argument is an integer A.



Output Format
Return 1 if integer A is COLORFUL else return 0.



Example Input
Input 1:

 A = 23
Input 2:

 A = 236


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 Possible Sub-sequences: [2, 3, 23] where
 2 -> 2 
 3 -> 3
 23 -> 6  (product of digits)
 This number is a COLORFUL number since product of every digit of a sub-sequence are different. 
Explanation 2:

 Possible Sub-sequences: [2, 3, 6, 23, 36, 236] where
 2 -> 2 
 3 -> 3
 6 -> 6
 23 -> 6  (product of digits)
 36 -> 18  (product of digits)
 236 -> 36  (product of digits)
 This number is not a COLORFUL number since the product sequence 23  and sequence 6 is same. 

 Hints:
 Note that the input number can be of length at max 10.

So, the number of substrings can be at max 55.

Solution Approach:
It is one of the easiest problems in this section.
You just need to simulate what has been stated in the problem.

Iterate over all the consecutive sequence of digits of the number and store the product in a set using hashing.
If the product is already present in the set at any point then the number is not Colorful.
Otherwise, it is a Colorful number.

Example:

A = 123
1 2 3 12 23 123
1 -> 1
2 -> 2
3 -> 3
12 -> 2  we have already encountered 2 before. Return 0

Time Complexity : O((log10A)2)
Space Complexity : O((log10A)2)

Scaler solution:
 a = '' + a;
        var prods = {};
        var csize = 0;
        var code0 = '0'.charCodeAt(0);
        while (csize < a.length) {
            for (var i = 0; i + csize < a.length; i++) {
                var cnum = a.slice(i, i + csize + 1);
                var j = -1;
                var prod = 1;
                while (++j < cnum.length) {
                    prod *= (cnum.charCodeAt(j) - code0);
                }
                // check if the product is unique
                if (prods[prod]) {
                    return 0;
                }
                prods[prod] = 1;
            }
            csize++;
        }
        return 1;
    }
*/
function colorfulNumber(A){
    let B = ('' + A).split("");
    let freq = {};
     for(let i=0; i<B.length; i++){
         let prod = 1;
         for(let j=i; j<B.length; j++){
              prod = prod * B[j];
              freq[prod] = (freq[prod] || 0) + 1
         }
     }
     let val = Object.values(freq);
     for(let i=0; i<val.length; i++){
         if(val[i] > 1){
             return 0
         }
     }
     return 1
	}
// console.log(colorfulNumber(23));
// console.log(colorfulNumber(236));
// console.log(colorfulNumber(3245));