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

console.log(mergeIntervals([[1, 3], [6, 9]], [2,5]));
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
function mergeOverlappingIntervals(A){
let sortedA = A.sort((a, b) => {
    return a[0] - b[0]
})
let n = A.length;
if(n <=1){
    return A
}
for(let i=0; i<n;i++){
    if(sortedA[i+1][0] < sortedA[i][1]){

    }
}
}
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