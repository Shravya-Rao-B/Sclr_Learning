/*
1.
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Problem Constraints
0 <= |intervals| <= 105

Input Format
First argument is the vector of intervals

second argument is the new interval to be merged

Output Format
Return the vector of intervals after merging

Example Input
Input 1:

Given intervals [1, 3], [6, 9] insert and merge [2, 5] .
Input 2:

Given intervals [1, 3], [6, 9] insert and merge [2, 6] .


Example Output
Output 1:

 [ [1, 5], [6, 9] ]
Output 2:

 [ [1, 9] ]


Example Explanation
Explanation 1:

(2,5) does not completely merge the given intervals
Explanation 2:

(2,6) completely merges the given intervals


Expected Output
Enter your input as per the following guideline:
There are 3 lines in the input

Line 1 ( Corresponds to arg 1 ) : An array of intervals. First number represents the number of intervals to follow. Then for every interval we get a pair of integers. 
	For example, Intervals: [(1, 3), (6, 9)] will be written as "2 1 3 6 9"(without quotes).

Line 2 & Line 3 ( Corresponds to arg 2 ) : New Interval represented by a pair of integers. 
	For example, Interval: (2, 5) will be written as "2 5"(without quotes)

Hints:
This problem has a lot of corner cases that need to be handled correctly.

Let us first talk about the approach.
Given all the intervals, you need to figure out the sequence of intervals that intersect with the given new interval.

Lets see how we check if interval 1 (a,b) intersects with interval 2 (c,d):

Overlap case :

    a---------------------b                      OR       a------b
                c-------------------d                c------------------d
Non-overlap case:

    a--------------------b   c------------------d
Note that if max(a,c) > min(b,d), then the intervals do not overlap. Otherwise, they overlap.

Once we figure out the intervals ( interval[i] to the interval[j] ) which overlap with the new interval, note that we can replace all the overlapping intervals with one interval, which would be

(min(interval[i].start, newInterval.start), max(interval[j].end, newInterval.end)).

Do make sure you cover the other corner cases.

Also take care that the data is provided in an Interval class interface, so use it appropriately.

Solution Approach:
Have you covered the following corner cases :

1) Size of interval array as 0.

2) newInterval being an interval preceding all intervals in the array.

    Given interval (3,6),(8,10), insert and merge (1,2)
3) newInterval being an interval succeeding all intervals in the array.

    Given interval (1,2), (3,6), insert and merge (8,10)
4) newInterval not overlapping with any interval and falling in between 2 intervals in the array.

    Given interval (1,2), (8,10) insert and merge (3,6) 
5) newInterval covering all given intervals.

    Given interval (3, 5), (7, 9) insert and merge (1, 10)

TA Suggestions:
After line 12, initialize i=0 and then start a while loop:

The loop shall iterate while i is less than n (the index is within the valid range)
 and the end value of the current interval is less than the start value of the new_interval.
  i.e., while (i < n && intervals[i][1] < s) {...}

For each interval, it is added to resultIntervals, and i is incremented.

Now, start another while loop:

The loop shall iterate while i is less than n (the index is within the valid range) and the start value of the current interval is less than or equal to the end value of the new_interval. i.e., while (i < n && intervals[i][0] <= e){...}

This loop will handle intervals that overlap with the new_interval.

For each overlapping interval, the start value (s) is updated to the minimum of the current start value and the start value of the interval, and the end value (e) is updated to the maximum of the current end value and the end value of the interval.

After updating s and e, i is incremented.

i.e., s = Math min(s, intervals[i][0]);

e = Math max(e, intervals[i][1]);

i++;

Then we will add the merged interval:

After the overlapping intervals are merged, the [s, e] interval shall be added to resultIntervals. i.e., resultIntervals.push([s, e]);

And in the end we should add remaining intervals:

Start another while loop to add any remaining intervals after the merged interval.

The loop shall iterate while i is less than n, and for each remaining interval, it is added to resultIntervals, and i is incremented.

i.e., while (i < n) {

resultIntervals.push(intervals[i]);

i++;

}

Then finally, return the merged intervals:

The final result is the resultIntervals list, which contains the merged intervals.
*/
function mergeIntervals(intervals, new_interval){
    let n = intervals.length;
    let s = new_interval[0];
    let e = new_interval[1];
    let resultIntervals = [];
    for(let i=0; i<n ; ++i){
        let si = intervals[i][0];
        let ei = intervals[i][1];
        console.log('si,ei,s,e', si, ei, s, e);
        if(ei < s){
            resultIntervals.push([si, ei]);    
        }
        if(e < si){
            resultIntervals.push([s,e]);
            for(let j=i; j<n; j++){
                resultIntervals.push(intervals[j])
            }
            return;
        }
        else {
            s = Math.min(si,s);
            e = Math.max(ei,e);
        }
        resultIntervals.push([s,e])
    }
    return resultIntervals;
}

function mergeIntervalsWithWhile(intervals, new_interval){
    let resultIntervals = [];
    let n = intervals.length;
    let s = new_interval[0];
    let e = new_interval[1];
    let i = 0;
    //Check non overlapping
    while(i<n && intervals[i][1] < s){
        resultIntervals.push(intervals[i]);
        i++;
    }
    //Check and merge overlapping
    while(i<n && intervals[i][0] < e ){
        s = Math.min(intervals[i][0], s);
        e = Math.max(intervals[i][1], e);
        i++;
    }
    resultIntervals.push([s, e]);
    //Check the remaining
    while(i<n){
        resultIntervals.push(intervals[i]); 
        i++;
    }
    return resultIntervals;
}
// console.log(mergeIntervalsWithWhile([[1, 3], [6, 9]],[2,5]))
// console.log(mergeIntervalsWithWhile([[1, 3], [6, 9]], [2,6]));

// console.log(mergeIntervals([[1, 3], [6, 9]], [2,5]));

/*
2.
Given a collection of intervals, merge all overlapping intervals.

Problem Constraints
1 <= Total number of intervals <= 100000.

Input Format
First argument is a list of intervals.

Output Format
Return the sorted list of intervals after merging all the overlapping intervals.


Example Input
Input 1:
[1,3],[2,6],[8,10],[15,18]


Example Output
Output 1:
[1,6],[8,10],[15,18]


Example Explanation
Explanation 1:

Merge intervals [1,3] and [2,6] -> [1,6].
so, the required answer after merging is [1,6],[8,10],[15,18].
No more overlapping intervals present.

Hints:
First, try to figure out cases for two intervals to be merged.
Sort the intervals in an appropriate manner using a custom comparator.
Caution: Note that comparators should follow proper syntax and rules, and return a boolean or int type depending on language.
Also, what can you do in order to simulate the process easier?

Given all the intervals, you need to figure out the sequence of intervals which intersect.

Lets see how we check if interval 1 (a,b) intersects with interval 2 (c,d):

Overlap case :

a---------------------b          OR             a------b
            c-------------------d           c------------------d
Nonoverlap case :

a--------------------b   c------------------d
If max(a,c) > min(b,d), then the intervals do not overlap. Otherwise, they overlap.

Do you think it will be easier to solve if you could sort the intervals based on the starting point?

First lets sort the array based on the starting point , if starting points are equal then based on ending point.
We can maintain two variables cur_start and cur_end where cur_start is the left most point of the current segment and cur_end is rightmost point of the current segment.
Set cur_start to the starting point of the first element and cur_end to the ending point of the first element.

Now we iterate from 1 to n-1 and for every i we check the following
if A[i].left <= cur_end
This means i’th interval overlapps with the current interval, so we can add this to the current interval
else
This means the i’th interval doesnt overlapp with the current interval, therefore we can add the current interval to our answer and make a new interval i.e. set cur_start=A[i].start and cur_end=A[i].end

Lastly dont forget to add the current interval to our answer.


*/
function mergeOverlappingIntervals(A){
    let ansArray = [];
    let B = A.sort((a, b) => {
        return a[0] - b[0]
    })
    console.log('B',B);
    let n = A.length;
    if(n <=1){
        return A
    }
    let s1 = B[0][0];
    let e1 = B[0][1];
    for(let i=1; i<B.length; i++){
        let s2 = B[i][0];
        let e2 = B[i][1];
        if(e1 < s2){
            console.log('e1<s2', e1,s2)
            ansArray.push([s1, e1]);
        }
        else if(e2 < s1){
            console.log('e2<s1', e2,s1);
            ansArray.push([s2,e2]);
            for(let j=i; j<B.length; j++){
                ansArray.push(B[j])
            }
            return;
        }
        else {
            s1 = Math.min(s1, s2);
            e1 = Math.max(e1, e2);
            console.log('else part s1, e1', s1, e1);
        };
        ansArray.push([s2,e2]);
    }
    return ansArray
}
    // while(i<n && B[i][0] > e1){
    //     console.log('non overlapping loop i, s1, e1', i, s1, e1)
    //         ansArray.push([B[i]])
    //         i++;
    //     }
    //  while (i<n && B[i][0] < e1 ){
    //         console.log('overlapping loop i, s1,e1', i, s1, e1)
    //         s1 = Math.min(B[i][0], s1);
    //         e1 = Math.max(B[i][1], e1);
    //         console.log('overlapping loop after new assignment i, s1,e1', i, s1, e1);
    //         i++;
    //     }
    //     ansArray.push([s1, e1]);
    //     while(i<n){
    //         console.log('after everything i, s1,e1',i, s1, e1 );
    //         ansArray.push(B[i]); 
    //         i++;
    //     }
    //     return ansArray;
console.log(mergeOverlappingIntervals([[1,3],[2,6],[8,10],[15,18],[3,5]]));

function mergeOverlappingIntervalsForLoop(A){
    let B = A.sort((a, b) => a[0] - b[0]);
    console.log('sorted Array', B);
    let s1 = B[0][0];
    let e1 = B[0][1];
    console.log('s1,e1', s1, e1);
    let ansArray = [];
    for(let i= 1; i<B.length; i++){
        // console.log('i', i);
        let s = B[i][0];
        let e = B[i][1];
        console.log('looping', s, e);
        // console.log('s1,e1,s,e starting of loop',s1,e1,s,e);
        if(e1 < s){
            // console.log('e1 < s', e1, s);
            // console.log('s1,e1', [s1,e1]);
            ansArray.push([s1,e1])
            s1 = s;
            e1 = e;
        }
        else if (e < s1){
            console.log('e < s1', e, s1);
            // console.log('s,e', [s,e]);
            ansArray.push([s,e]) 
        }
        else {
            s1 = Math.min(s1,s);
            e1 = Math.max(e1,e)
            ansArray.push([s1,e1])
            // console.log('s1,e1 after reassignment', s1, e1);
        }
    }
    // ansArray.push([s1,e1]);
    return ansArray;
}
// console.log(mergeOverlappingIntervalsForLoop([[1,3],[2,6],[8,10],[15,18],[3,5]]));
// console.log(mergeOverlappingIntervalsForLoop([[5,6],[1,2],[3,4],[5,13],[10,25]]))
/*
3.

Given an unsorted integer array, A of size N. Find the first missing positive integer.

Note: Your algorithm should run in O(n) time and use constant space.



Problem Constraints
1 <= N <= 1000000

-109 <= A[i] <= 109



Input Format
First argument is an integer array A.



Output Format
Return an integer denoting the first missing positive integer.



Example Input
Input 1:

[1, 2, 0]
Input 2:

[3, 4, -1, 1]
Input 3:

[-8, -7, -6]


Example Output
Output 1:

3
Output 2:

2
Output 3:

1


Example Explanation
Explanation 1:

A = [1, 2, 0]
First positive integer missing from the array is 3.

Hints:
To simply solve this problem, search all positive integers, starting from 1 in the given array. We may have to search at most n+1 numbers in the given array. So this solution takes O(n^2) in the worst case.

We can use sorting to solve it in lesser time complexity. We can sort the array in O(NlogN) time.

Once the array is sorted, then a linear scan of the array is all that remains to be done.

So this approach takes O(nLogn + n) time which is O(nLogn).

We can also use hashing. We can build a hash table of all positive elements in the given array.

Once the hash table is built, all positive integers, starting from 1 can be searched here. As soon as we find a number that is not there in the hash table, we return it.

Approximately, this approach may take O(n) time, but it requires O(n) extra space.

But what we are really looking for is a O(n) time, O(1) space solution.

Note that ( N being the size of the array ), A[i]<=0 and A[i]>N are not the numbers you are looking for because the missing positive integer will be in the range [1, N+1].

The answer will be N+1 if and only if all of the elements of the array have exactly one occurrence of [1, N].

If using extra space was an option, creating buckets would have been an easy solution.

Creating an array of size N initialized to 0, for every value A[i], which lies in the range [1, N], we would have incremented its count in the array. Consequently, we would traverse the array to find the first array position with value 0, hence finding our answer.

However, since we are not allowed buckets, can we use the existing array as a bucket somehow?

Solution approach:
Note: numbers A[i]<=0 and A[i]>N ( N being the size of the array ) are not important to us since the missing positive integer will be in the range [1, N+1].

The answer will be N+1 only if all of the elements of the array are exact one occurrence of [1, N].

Creating buckets would have been an easy solution if using extra space was allowed.

An array of size N initialized to 0 would have been created.

For every value A[i], which lies in the range [1, N], its count in the array would have been incremented.

Finally, traversing the array would help to find the first array position with value 0, and that will be our answer.
However, usage of buckets is not allowed; can we use the existing array as a bucket somehow?

Now, since additional space is not allowed either, the given array itself needs to be used to track it.

It may be helpful to use the fact that the size of the set we are looking to track is [1, N]

which happens to be the same size as the size of the array.

This means we can use the array to track these elements.

We traverse the array, and if A[i] is in [1, N] range, we try to put in the index of same value in the array.

Time complexity : O(N)
Auxiliary Space : O(1)

*/
/*
Bruteforce approach:
run a loop on Array, run another loop inside to check if the interger expected is present in the array
TC: O(n2)

Approach 2:
Create a hashset of array 
Run a loop and check if the required element is present
TC: O(n), SC: O(n)

Appraoch 3:
Sort the array
Check if all the elements are present
TC: O(nlogn) , SC: 1
*/

function missingInteger(A){
    let n = A.length;
    //Check for all integers in A
    for(let i=0; i<A.length; i++)
    {
    //When the value is not at right index and the value is valid, i.e. value is greater than 1 
    //and less than the size of the array, keep swapping. hence use while loop.
        while(A[i]!= i+1 && A[i]<= n && A[i] >= 1){
            //In case of duplicate values, break
               let v = A[i];
               //Handle duplicates. If the value at a current index is same as value at previous index
                if(A[i] == A[v-1]){
                    break;
                }
                let temp = v;
                // console.log('temp', temp);
                A[i] = A[v - 1]
                // console.log('A[i]',A[i])
                A[v - 1] = temp
                // console.log('A[A[i] - 1]', A[A[i] - 1]);
            }
        }
        //Now that all the indices are in right position, check if there is any missing value
    for(let i=0; i<A.length; i++){
        if(A[i] != i+1){
            return i+1
        }
    }
    //If there is no missing value, we should return the next integer as a missing one
    return n + 1
    }
//Big O(n) ,we will be placing one element in the right position in every swap. max swaps we can have is O(n)
// console.log(missingInteger([4,2,3,1]));
/*
4.
Given a matrix of integers A of size N x M and an integer B.
In the given matrix every row and column is sorted in non-decreasing order. Find and return the position of B in the matrix in the given form:
If A[i][j] = B then return (i * 1009 + j)
If B is not present return -1.

Note 1: Rows are numbered from top to bottom and columns are numbered from left to right.
Note 2: If there are multiple B in A then return the smallest value of i*1009 +j such that A[i][j]=B.
Note 3: Expected time complexity is linear
Note 4: Use 1-based indexing


Problem Constraints
1 <= N, M <= 1000
-100000 <= A[i] <= 100000
-100000 <= B <= 100000


Input Format
The first argument given is the integer matrix A.
The second argument given is the integer B.


Output Format
Return the position of B and if it is not present in A return -1 instead.


Example Input
Input 1:-
A = [[1, 2, 3]
     [4, 5, 6]
     [7, 8, 9]]
B = 2
Input 2:-
A = [[1, 2]
     [3, 3]]
B = 3


Example Output
Output 1:-
1011
Output 2:-
2019


Example Explanation
Expanation 1:-
A[1][2] = 2
1 * 1009 + 2 = 1011
Explanation 2:-
A[2][1] = 3
2 * 1009 + 1 = 2019
A[2][2] = 3
2 * 1009 + 2 = 2020
The minimum value is 2019

Hints:
For any cell Mat[i][j] :

All cells to its right OR bottom are greater than or equal to the value of the current cell.
All cells to the top OR left are less than or equal to that cell value.

We search traversing from the top right corner of the matrix.
1) Check if the current element is greater than B,
then exclude the current column and move to the left column.
2) Check if the current element is less than B, then exclude the 
current row and move to the bottom row.
3) If the current element if equal to B, then the final answer will
be due to the leftmost occurence of B in the current row.

Time Complexity : O(N + M)
Space Complexity : O(1)
*/
//As per the constraints, Bruteforce does pass
//Brute force
function searchInSortedTwoDimMatrix(A, B){
let rLen = A.length;
let cLen = A[0].length;
for(let r=0; r<rLen; r++){
    for(let c=0; c<cLen; c++){
        if(A[r][c] == B){
            // +1 as per the requirement of question
            return ((r + 1)* 1009) + (c +1)
        }
    }
}
return -1
}
// console.log(searchInSortedTwoDimMatrix([[1, 2, 3],[4, 5, 6],[7, 8, 9]], 2));
// console.log(searchInSortedTwoDimMatrix([[1, 2],[3, 3]],3))

function searchSortedTwoDimMatrixOptimal(A, B){
let rLen = A.length;
let cLen = A[0].length;
let r = 0;
let c = cLen -1;
while(c < cLen && r<rLen){
if(A[r][c] == B){
    console.log('r,c', r,c);
    return (((r + 1) * 1009) + (c+1))
}
if(A[r][c] > B){
    c--;
}
if(A[r][c] < B){
    r++;
    c = cLen -1;
}
}
return -1;
}  
// console.log(searchSortedTwoDimMatrixOptimal([[1, 2, 3],[4, 5, 6],[7, 8, 9]],2))
// console.log(searchSortedTwoDimMatrixOptimal([[1, 2],[3, 3]], 3));

/*
6.
Given a binary sorted matrix A of size N x N. Find the row with the maximum number of 1.

NOTE:

If two rows have the maximum number of 1 then return the row which has a lower index.
Rows are numbered from top to bottom and columns are numbered from left to right.
Assume 0-based indexing.
Assume each row to be sorted by values.
Expected time complexity is O(rows + columns).


Problem Constraints
1 <= N <= 1000

0 <= A[i] <= 1



Input Format
The only argument given is the integer matrix A.



Output Format
Return the row with the maximum number of 1.



Example Input
Input 1:

 A = [   [0, 1, 1]
         [0, 0, 1]
         [0, 1, 1]   ]
Input 2:

 A = [   [0, 0, 0, 0]
         [0, 0, 0, 1]
         [0, 0, 1, 1]
         [0, 1, 1, 1]    ]


Example Output
Output 1:

 0
Output 2:

 3


Example Explanation
Explanation 1:

 Row 0 has maximum number of 1s.
Explanation 2:

 Row 3 has maximum number of 1s.

 Hints:
 To solve this problem, you just have to iterate through 
the grid and maintain some variables.

Solution Approach:
We will start iterating from the top-right of the matrix.
We check for all rows from top to bottom and store the maximum
answer so far.
For every row, we only search from the left of the index of maximum answer so far. 

Time Complexity : O(M + N)
Space Complexity : O(1)

*/
function rowWithMaxOne(A){
    let max = 0;
    let maxRow = 0;
    let rLen = A.length;
    let cLen = A[0].length;
    for(let r=0; r<rLen; r++){
        let count = 0;
        for(let c=cLen-1; c>=0; c--){
            if(A[r][c] == 0){
                break;
            }
            else {
                count++;
            }
            if(count > max){
                max = count;
                maxRow = r;
            }
        }
    }
    return maxRow;
}
// console.log(rowWithMaxOne([[0, 1, 1],[0, 0, 1],[0, 1, 1]]));
// console.log(rowWithMaxOne([   [0, 0, 0, 0],
//     [0, 0, 0, 1],
//     [0, 0, 1, 1],
//     [0, 1, 1, 1]    ]))