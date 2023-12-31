/*
1.
Given an integer array A of size N. You can remove any element from the array in one operation.
The cost of this operation is the sum of all elements in the array present before this operation.

Find the minimum cost to remove all elements from the array.



Problem Constraints
0 <= N <= 1000
1 <= A[i] <= 103



Input Format
First and only argument is an integer array A.



Output Format
Return an integer denoting the total cost of removing all elements from the array.



Example Input
Input 1:

 A = [2, 1]
Input 2:

 A = [5]


Example Output
Output 1:

 4
Output 2:

 5


Example Explanation
Explanation 1:

 Given array A = [2, 1]
 Remove 2 from the array => [1]. Cost of this operation is (2 + 1) = 3.
 Remove 1 from the array => []. Cost of this operation is (1) = 1.
 So, total cost is = 3 + 1 = 4.
Explanation 2:

 There is only one element in the array. So, cost of removing is 5.

 Hints :
 Think about the order in which we should remove elements from the array.


Solution approach:
Let’s find the count of how many times an element will contribute to the answer.

Remove any element from the array. The cost of this operation is equal to the sum of array elements irrespective of which element gets removed.

If we remove another element from the array, the cost of this operation will be ( cost of the previous operation - the element which gets removed in the last operation.)

So, we can easily observe that it is wise to remove the highest element first to make the total cost minimum, and elements also follow a pattern.

Element removed first will be added 1 time to the answer.
Element removed second will be added 2 times to the answer.
Element removed third will be added 3 times to the answer.
.
.
.
So on.

We can easily find the total cost in one single loop.
*/

function elementsRemoval(A){
//Sorting in order for the formula to return minimum sum
let sortedA =  A.sort((a,b) => b - a);
let minSum = 0;
for(let i=0; i<sortedA.length; ++i){
    minSum = minSum + A[i]*(i+1)
}
return minSum
}
// console.log(elementsRemoval([5]));
// console.log(elementsRemoval([1,2,3,4,5]));
// console.log(elementsRemoval([2,1]));

/*
2.
Given an integer array A, find if an integer p exists in the array such that the number of integers greater than p in the array equals p.



Problem Constraints
1 <= |A| <= 2*105
-108 <= A[i] <= 108


Input Format
First and only argument is an integer array A.



Output Format
Return 1 if any such integer p is present else, return -1.



Example Input
Input 1:

 A = [3, 2, 1, 3]
Input 2:

 A = [1, 1, 3, 3]


Example Output
Output 1:

 1
Output 2:

 -1


Example Explanation
Explanation 1:

 For integer 2, there are 2 greater elements in the array..
Explanation 2:

 There exist no integer satisfying the required conditions.

 Hints:
 Hint 1:
 The straightforward approach is to for every element find how many integers are greater than that.
And if that matches our given statement, then we have our answer.

Will sorting the array help?

Hint 2:
Think how will the problem be affected if there are duplicate elements in the array.
How to solve it in this case?

Solution Approach:
First, we sort the input array.

Now, all we have to do is to traverse through each element of the array and check whether it matches our given statement. 
Since the array is sorted, we directly know how many elements are greater than that number in the array.

**Note: Please take care of cases when a certain element repeats many times.**
*/

function nobleInteger(A){
    let sortedArray = A.sort((a,b) => (a - b));
    let B = Array.from(new Set(sortedArray));
    for(i=0; i<B.length;i++){
    }
//     let more = 0;
    let n = B.length;
    for(let i=0; i<n; i++){
       if(B[i] == n-i-1){
        return 1
       }           
}
return -1
}
// console.log(nobleInteger([3,2,1,3]));
// console.log(nobleInteger([1,1,3,3]));
// console.log(nobleInteger([5,6,2]));
// console.log(nobleInteger([-1,-2,0,0,0,-3]))
// console.log(nobleInteger([1,2,7,0,9,3,6,0,6]));
// console.log(nobleInteger([-4,-2,0,-1,-6]));
// console.log(nobleInteger([-4,7,5,3,5,-4,2,-1,-9,-8,-3,0,9,-7,-4,-10,-4,2,6,1,-2,-3,-1,-8,0,-8,-7,-3,5,-1,-8,-8,8,-1,-3,3,6,1,-8,-1,3,-9,9,-6,7,8,-6,5,0,3,-4,1,-10,6,3,-8,0,6,-9,-5,-5,-6,-3,6,-5,-4,-1,3,7,-6,5,-8,-5,4,-3,4,-6,-7,0,-3,-2,6,8,-2,-6,-7,1,4,9,2,-10,6,-2,9,2,-4,-4,4,9,5,0,4,8,-3,-9,7,-8,7,2,2,6,-9,-10,-4,-9,-5,-1,-6,9,-10,-1,1,7,7,1,-9,5,-1,-3,-3,6,7,3,-4,-5,-4,-7,9,-6,-2,1,2,-1,-7,9,0,-2,-2,5,-10,-1,6,-7,8,-5,-4,1,-9,5,9,-2,-6,-2,-9,0,3,-10,4,-6,-6,4,-3,6,-7,1,-3,-5,9,6,2,1,7,-2,5]))
// console.log(nobleInteger([4,-9,8,5,-1,7,5,3]));
/*
3.
You are given an array A of N elements. Sort the given array in increasing order of number of distinct factors of each element, i.e., element having the least number of factors should be the first to be displayed and the number having highest number of factors should be the last one. If 2 elements have same number of factors, then number with less value should come first.

Note: You cannot use any extra space


Problem Constraints
1 <= N <= 104
1 <= A[i] <= 104


Input Format
First argument A is an array of integers.


Output Format
Return an array of integers.


Example Input
Input 1:
A = [6, 8, 9]
Input 2:
A = [2, 4, 7]


Example Output
Output 1:
[9, 6, 8]
Output 2:
[2, 7, 4]


Example Explanation
For Input 1:
The number 9 has 3 factors, 6 has 4 factors and 8 has 4 factors.
For Input 2:
The number 2 has 2 factors, 7 has 2 factors and 4 has 3 factors.

Hints:
Hint 1:
We can count the distinct number of factors of each element.
Then we will sort based on that

Solution Approach:
We will count the distinct number of factors of each element.
Then we will sort the array using comparator function.
In the comparator function we will first calculate the number
of factors if each of the two numbers. If this count is equal, 
then the smaller number will come first. Otherwise, the number
with the least number of factors will come first.

Time Complexity : O(N*logN*√A[i])
Space Complexity : O(1)
*/
function factorsSort(A){
    function findFactors(num){
        let factors = 0;
        for(let i=1; i*i <=num; ++i){
            if(num % i == 0 && i < num/i){
                factors = factors + 2;
            }
            else if(num % i ==0 && i == num/i){
                factors = factors + 1;
            }
        }
        return factors;
    }
    A.sort((a, b) => {
        let factorsOfA = findFactors(a);
        let factorsOfB = findFactors(b);
        if(factorsOfA == factorsOfB){
            return a - b
        }
        else {
            return factorsOfA - factorsOfB
        }
    })
}
// console.log(factorsSort([6,8,9]));
/*
4

Given an array A of non-negative integers, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.



Problem Constraints
1 <= len(A) <= 100000
0 <= A[i] <= 2*109



Input Format
The first argument is an array of integers.



Output Format
Return a string representing the largest number.



Example Input
Input 1:

 A = [3, 30, 34, 5, 9]
Input 2:

 A = [2, 3, 9, 0]


Example Output
Output 1:

 "9534330"
Output 2:

 "9320"


Example Explanation
Explanation 1:

Reorder the numbers to [9, 5, 34, 3, 30] to form the largest number.
Explanation 2:

Reorder the numbers to [9, 3, 2, 0] to form the largest number 9320.

Hints:
Hint 1:
**Hint: Sorting**

Think about what kind of sorting would be needed. We can't simply sort the numbers or strings.

Have you considered cases like 27, 271, or 12, 121?

Solution approach:
Sorting all numbers in descending order is the simplest solution that occurs to us. But this doesn’t work. 

For example, 548 is greater than 60, but in the output, 60 comes before 548. 
As a second example, 98 is greater than 9, but 9 comes before 98 in the output.

The solution is to use any comparison-based sorting algorithm. 
Thus, instead of using the default comparison, write a comparison function myCompare() and use it to sort numbers. 

Given two numbers, X and Y, how should myCompare() decide which number to put first 
– we compare two numbers XY (Y appended at the end of X) and YX (X appended at the end of Y). 

If XY is greater, then, in the output, X should come before Y, else Y should come before X. 

For example, let X and Y be 542 and 60. To compare X and Y, we compare 54260 and 60542. 
Since 60542 is greater than 54260, we put Y first.

*/

function largestNumber(A){
    let n = A.length;
         // sorts the array lexicographically
         A.sort((a, b) => {
            console.log('a + "" + b',a + "" + b);
            console.log('b + "" + ', b + "" + a );
            if (a + "" + b > b + "" + a) 
                return -1;
            else 
                return 1;
        });
        console.log('A after sort', A);
        let ans = "";
        A.forEach((ele) => (ans += ele));
        if (ans[0] == "0") 
            return 0;
        return ans;
    }
// console.log(largestNumber([3, 30, 34, 5, 9]));
// console.log(largestNumber([0,0,0,0]));
// console.log(largestNumber([472,663,964,722,485,852,635,4,368,676,319,412]));

/*
7.
Given an integer array A of size N. Return 1 if the array can be arranged to form an arithmetic progression, otherwise return 0.

A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.



Problem Constraints
2 <= N <= 105

-109 <= A[i] <= 109



Input Format
The first and only argument is an integer array A of size N.



Output Format
Return 1 if the array can be rearranged to form an arithmetic progression, otherwise return 0.



Example Input
Input 1:

 A = [3, 5, 1]
Input 2:

 A = [2, 4, 1]


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 We can reorder the elements as [1, 3, 5] or [5, 3, 1] with differences 2 and -2 respectively, between each consecutive elements.
Explanation 2:

 There is no way to reorder the elements to obtain an arithmetic progression.

Hints:
Consider that any valid arithmetic progression will be in sorted order.

Solution Appraoch:
Consider that any valid arithmetic progression will be in sorted order.

Sort the array, then check if the differences of all consecutive elements are equal.

Time Complexity: O(NlogN)
Space Complexity: O(1)

Scaler code:
function(A){
           
           A.sort(function(a,b) {return a - b});
           
           let d = A[1] - A[0];
           let n = A.length;
           let ans = 1;
           for(let i = 1;  i < n; i++) {
               if(A[i] - A[i-1] != d)
                   ans = 0;
           }
           return ans;
       }
*/
function arithematicProgression(A){
    let B = A.sort((a,b) => a-b);
        let diff = 0;
        if(A.length >=2)
         diff = A[1] - A[0];
        for(let i=1; i<A.length-1; i++){
            if((A[i+1] - A[i]) !== diff)
            {
                console.log("diff and i",diff, i);
            return 0
            }
        }
        return 1;
}
// console.log(arithematicProgression([3,5,1]));

/*
8.
Given an array A of N integers. Sort the array in increasing order of the value at the tens place digit of every number.

If a number has no tens digit, we can assume value to be 0.
If 2 numbers have same tens digit, in that case number with max value will come first
Solution should be based on comparator.


Problem Constraints
1 <= N <= 105

1 <= A[i] <= 109



Input Format
First argument A is an array of integers.



Output Format
Return the array after sorting



Example Input
Input 1:
A = [15, 11, 7, 19]
Input 2:
A = [2, 24, 22, 19]


Example Output
Output 1:
[7, 19, 15, 11]
Output 2:
[2, 19, 24, 22]


Example Explanation
For Input 1:
The sorted order is [7, 19, 15, 11]. The tens digit of 7 is 0, 
and that of 19, 15 and 11 is 1.
For Input 2:
The sorted order is [2, 19, 24, 22]. The tens digit of 2 is 0, 
that of 19 is 1 and that of 22 and 24 is 2.

Hints:
We can find the tens digit of each element by dividing by 10 and
then finding the mod of 10 of that value.
Then we will sort based on that.

Solution approach:
We will find the tens digit of each element by dividing by 
10 and then finding the mod of 10 of that value.
Then we will sort the array using comparator function.
In the comparator function we will first find the tens digit
of the two numbers. If this digit is equal, then the larger number 
will come first. Otherwise, the number with the least tens digit 
will come first.

Time Complexity : O(N*logN)
Space Complexity : O(1)

*/
function tensDigitSorting(A){
    let ans = [];
    // function compare(a, b){
    //     console.log('a,b', a, b)
    //     let tensDigitA = Math.floor((a/10))
    //     let tensDigitB = Math.floor((b/10))
    //     if(tensDigitA ==0 && tensDigitB == 0){
    //         return Math.max(a,b)
    //     }
    //     else if(tensDigitA == 0 && tensDigitB != 0){
    //         return a
    //     }
    //     else if(tensDigitB == 0 && tensDigitA != 0){
    //         return b
    //     }
    //     else if(tensDigitA == tensDigitB){
    //         console.log('came here', a, b);
    //         return Math.max(a,b)
    //     }
    //     else if(tensDigitA !== tensDigitB){
    //         if(tensDigitA > tensDigitB){
    //             return a
    //         }
    //         else {
    //             return b
    //         }
    //     }
    // }
    // for(let i=0; i<A.length; i++){
    //     ans.push(compare(A[i], A[i+1]))
    // }
    // return ans;
    A.sort((a, b) => {
        let tempA = Math.floor((a/10)%10);
        let tempB = Math.floor((b/10)%10);
        if(tempA === tempB){
            return b - a
        }
        return tempA - tempB
    });
    return A;
}
console.log(tensDigitSorting([15, 11, 7, 19, 9]));
/*
6.
Given an array with N objects colored red, white, or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will represent the colors as,

red -> 0
white -> 1
blue -> 2

Note: Using the library sort function is not allowed.



Problem Constraints
1 <= N <= 1000000
0 <= A[i] <= 2


Input Format
First and only argument of input contains an integer array A.


Output Format
Return an integer array in asked order


Example Input
Input 1 :
    A = [0, 1, 2, 0, 1, 2]
Input 2:

    A = [0]


Example Output
Output 1:
    [0, 0, 1, 1, 2, 2]
Output 2:

    [0]


Example Explanation
Explanation 1:
    [0, 0, 1, 1, 2, 2] is the required order.
Explanation 2:
    [0] is the required order

Hints:
Numbers in the array can only be 0, 1, or 2. How can this be helpful?

Solution Approach:
There are multiple approaches possible here. We need to make sure we do not allocate extra memory.

Approach 1:

Count the number of red, white, and blue balls.
Then, in another pass, set the initial redCount number of cells as 0, next whiteCount cell as 1, and next blueCount cells as 2.
Requires two passes of the array.

Approach 2:

Swap the 0s to the start of the array maintaining a pointer, and 2s to the end of the array.
1s will automatically be in their right position.

Scaler solution:
function(A){
           
           A.sort(function(a,b) {return a - b});
           
           let d = A[1] - A[0];
           let n = A.length;
           let ans = 1;
           for(let i = 1;  i < n; i++) {
               if(A[i] - A[i-1] != d)
                   ans = 0;
           }
           return ans;
       }
*/
function sortByColor(A){
    let red = 0;
    let white = 0;
    let blue = 0;
   for(let i=0; i<A.length; i++){
       if(A[i] == 0){
          red++ 
       }
       else if(A[i] == 1){
           white++
       }
       else {
           blue++
       }
}   
for(let i=0; i<A.length; i++){
if(i < red){
    A[i] = 0;
}
else if ( i >= red && i <= red + white-1){
    A[i] = 1
}
else{
    A[i] = 2
}
}
return A
}
// console.log(sortByColor([2,2,2,2,1,1,0,0,2,1,0,2,2,2,1]));
// console.log(sortByColor([2,0,0,1,0,0,2,2,1,1,0,0,1,0,2,1,1,0,1,0,1,2,2,2,0,0,1,0,2,1,1,2,1,2,2,1,0,2,2,1,1,1,0,1,0,1,0,2,1,2,0,2,0,1,1,0,2,2,1,2,0,2,1,1,1,2,0,1,0,2,2,1,0,0,1,0,1,0,0,0,1,2,1,1,0,2,1,2,0,0,0,2,2,2,2,0,0,0,1,1,0,2,1,2,2,2,1,2,2,0,1,0,1,2,1,1,0,1,2,0,1,0,2,2,1,2,1,0,2,2,1,1,0,2,1,2]))

