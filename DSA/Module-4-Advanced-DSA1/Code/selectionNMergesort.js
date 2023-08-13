/*
1.
Given two sorted integer arrays A and B, merge B and A as one sorted array and return it as an output.


Problem Constraints
-1010 <= A[i], B[i] <= 1010


Input Format
First Argument is a 1-D array representing  A.
Second Argument is also a 1-D array representing B.


Output Format
Return a 1-D vector which you got after merging A and B.


Example Input
Input 1:

A = [4, 7, 9]
B = [2, 11, 19]
Input 2:

A = [1]
B = [2]


Example Output
Output 1:

[2, 4, 7, 9, 11, 19]
Output 2:

[1, 2]


Example Explanation
Explanation 1:

Merging A and B produces the output as described above.
Explanation 2:

 Merging A and B produces the output as described above.\

Hints:
Hint 1:
Use of additional space is allowed. So, maybe you should try collecting the output in a separate array.

Note:
You need two pointers at the head of each array,
and you need to compare the values at the head of the arrays to get the current minimum.

Since A is sorted, all values after the pointer are going to be bigger.
Since B is sorted, all values after the pointer are going to be bigger.

All values before the pointer have already been put in the result array.
So, all you need to do is to choose the smaller value from the two heads and move on.

Solution Approach:
Use of additional space is allowed.
So, maybe you should try collecting the output in a separate array.

Note:
You need two pointers at the head of each array,
and you need to compare the values at the head of the arrays to get the current minimum.

Since A is sorted, all values after the pointer are going to be bigger.
Since B is sorted, all values after the pointer are going to be bigger.

All values before the pointer have already been put in the result array.

Corner cases:

What if pointer 1 reaches the end of the array first?
What if pointer 2 reaches the end of the array first?

If pointer 1 reaches the end we can just keep on putting the elements from B
in the result array while the pointer 2 does not reach the end.
The same process goes for if pointer 2 reaches the end.
*/

function mergeSortedArrays(A,B){
    let m = A.length;
    let n = B.length;
    let C = new Array(m+n);
    let p1 = 0;
    let p2 = 0;
    let k = 0;
    while(p1<m && p2<n){
        if(A[p1] < B[p2]){
            C[k] = A[p1];
            k++;
            p1++;
        }
        else {
            C[k] = B[p2];
            k++;
            p2++
        }
    }
    while(p1<m){
        C[k] = A[p1];
        k++;
        p1++;
    }
    while(p2<n){
        C[k] = B[p2];
        k++;
        p2++;
    }
    return C
}
// console.log(mergeSortedArrays([4,5,6],[1,2,3]));
// console.log(mergeSortedArrays([3],[-4,-3]));
/*
2.
Find the Bth smallest element in given array A .

NOTE: Users should try to solve it in less than equal to B swaps.



Problem Constraints
1 <= |A| <= 100000

1 <= B <= min(|A|, 500)

1 <= A[i] <= 109



Input Format
The first argument is an integer array A.

The second argument is integer B.



Output Format
Return the Bth smallest element in given array.



Example Input
Input 1:

A = [2, 1, 4, 3, 2]
B = 3
Input 2:

A = [1, 2]
B = 2


Example Output
Output 1:

 2
Output 2:

 2


Example Explanation
Explanation 1:

 3rd element after sorting is 2.
Explanation 2:

 2nd element after sorting is 2.

 Hints:
 Hint 1:
 You want to find the Bth element in the array.
Selection sort is the best algorithm to use here to do it in less than equal B swaps.

Hint 2:
The time complexity of selection sort is O(N^2) in the usual case.
Try to modify the algorithm for this problem such that the complexity is reduced to O(B * N).

Solution Approach:
The algorithm of selection sort should be used.
The selection sort algorithm sorts an array by repeatedly
finding the minimum element (considering ascending order)
from unsorted part and putting it at the beginning.
You need to get the minimum element to the beginning of the array
only B times as you require the Bth element.
*/

function bthSmallest(A, B){
    //Loop over the array B times and swap the smallest element with current index
    for(let i=0; i<B; i++){
        for(let j=i; j<A.length; j++){
            let min = A[i];
            if(A[j]<min){
                let temp = A[i];
                A[i] = A[j];
                A[j] = temp
            }
        }
    }
    return A[B-1];
}
function bthSmallestScaler(A,B){
    module.exports = {
    kthsmallest: function (A, B) {
        for (let i = 0; i < B; i++) {
            // finding the minimum element from the remaining array
            let mn = Number.MAX_SAFE_INTEGER;
            let id = i;
            for (let j = i; j < A.length; j++) {
                if (mn > A[j])
                    id = j;
                mn = Math.min(mn, A[j]);
            }
            [A[id], A[i]] = [A[i], A[id]];
        }
        return A[B - 1];
    },
};
}
// console.log(bthSmallest([1,2,3,4,5], 3));
/*
3.
Given an array of integers A. If i < j and A[i] > A[j], then the pair (i, j) is called an inversion of A. Find the total number of inversions of A modulo (109 + 7).



Problem Constraints
1 <= length of the array <= 105

1 <= A[i] <= 109



Input Format
The only argument given is the integer array A.



Output Format
Return the number of inversions of A modulo (109 + 7).



Example Input
Input 1:

A = [1, 3, 2]
Input 2:

A = [3, 4, 1, 2]


Example Output
Output 1:

1
Output 2:

4


Example Explanation
Explanation 1:

The pair (1, 2) is an inversion as 1 < 2 and A[1] > A[2]
Explanation 2:

The pair (0, 2) is an inversion as 0 < 2 and A[0] > A[2]
The pair (0, 3) is an inversion as 0 < 3 and A[0] > A[3]
The pair (1, 2) is an inversion as 1 < 2 and A[1] > A[2]
The pair (1, 3) is an inversion as 1 < 3 and A[1] > A[3]

Hints:
Hint 1:
Can we use some sorting algorithm to find the number of inversions?

Solution Approach:
Naive Approach Traverse through the array from start to end Find the count of elements smaller than the current number up to that index for every element using another loop. Sum up the count of inversion for every index. Print the count of inversions.

Efficient Approach using Merge Sort

Suppose we know the number of inversions in the left half and the right half of the array, lets call them inv_l and inv_r.
Which inversions are not counted in inv_l+inv_r ? The elements in the left half which are greater than the elements in the right half. These are the inversions which are not counted.

Lets assume that both left half and right half are sorted. Can we count the number of inversions now?
We can just merge the two arrays and whenever we find that a[i] > a[j] (where i is the pointer of left half of the array and j is the pointer of the right half of the array) we simply increment the number of inversions.
The final answer will be inv_l + inv_r + number of inversions found during merge step.

Does this remind of a famous algorithm?

Yes, thats right. It is Merge Sort with a slight modification.
*/

/*
merge sort
*/
function mergeSort(A,s,e){
    console.log('merge sort called recursively', A, s, e);
    if(s==e){
        return ;
    }
    let m = Math.floor((s+e)/2);
    console.log("mergeSort after finding m",A, s, m)
    // mergeSort(A,s,m);
    mergeSort(A,m+1,e);
    console.log('A,s,m,e gettimg merged', A, s, m, e);
    mergeWithTwoPointers(A,s,m,e);
function mergeWithTwoPointers(A, s, m, e){
let p1 = s;
let p2 = m+1;
let k = 0;
let C = [];
while(p1<=m && p2<=e){
    if(A[p1] <= A[p2]){
        C[k] = A[p1];
        k++;
        p1++;
    }
    else {
        C[k] = A[p2];
        k++;
        p2++;
    }
}
while(p1<=m){
  C[k] = A[p1];
  k++;
  p1++;  
}  
while(p2<=e){
    C[k] = A[p2];
    k++;
    p2++;
} 
return C;
}
}
console.log(mergeSort([9,8,7,6],0,3));
// console.log(mergeWithTwoPointers([4,8,-1,2,6,9,11,3,4,7,13,0],2,6,9));
