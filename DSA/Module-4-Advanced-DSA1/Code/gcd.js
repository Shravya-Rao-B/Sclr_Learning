/*
1.
Given an integer array A of size N. You have to delete one element such that the GCD(Greatest common divisor) of the remaining array is maximum.

Find the maximum value of GCD.



Problem Constraints

2 <= N <= 105
1 <= A[i] <= 109



Input Format

First argument is an integer array A.



Output Format

Return an integer denoting the maximum value of GCD.



Example Input

Input 1:

 A = [12, 15, 18]
Input 2:

 A = [5, 15, 30]


Example Output

Output 1:

 6
Output 2:

 15


Example Explanation

Explanation 1:

 
 If you delete 12, gcd will be 3.
 If you delete 15, gcd will be 6.
 If you delete 18, gcd will 3.
 Maximum vallue of gcd is 6.
Explanation 2:

 If you delete 5, gcd will be 15.
 If you delete 15, gcd will be 5.
 If you delete 30, gcd will be 5.

 Hints:
 The naive approach will be deleting elements one by one, finding the gcd of the remaining array, and maintaining the maximum answer.
But the time complexity for this will be O(N^2logN).

Solution approach:
We can maintain two arrays for prefix and suffix gcd; likewise, we do for prefix sum and suffix sum.
Then,for each index, i:1 to N calculate gcd(prefix[i-1],suffix[i+1]) and return the maximum among all.
*/
function deleteOne(A){
    function gcd(m, n){
        if(n == 0){  
        return m;
        }
        else return gcd(n, m%n)
        }
        let N = A.length;
        let gcdPf = new Array(N);
        let gcdSf = new Array(N);
        // Calculate prefix GCD   
        gcdPf[0] = A[0];   
        for(let i = 1; i < N; i++){
        gcdPf[i] = gcd(gcdPf[i-1], A[i]);
        }
        // Calculate suffix GCD
        gcdSf[N-1] = A[N-1];
        for(let i = N-2; i >= 0; i--){
        gcdSf[i] = gcd(gcdSf[i+1], A[i]);
        }
        let maxGcd = 0;
        for(let i = 0; i < N; i++){
        let left = (i > 0) ? gcdPf[i-1] : 0;
        let right = (i < N-1) ? gcdSf[i+1] : 0;
        maxGcd = Math.max(maxGcd, gcd(left, right));
        }
        return maxGcd;
}
// console.log(deleteOne([5, 15, 30]));
// console.log(deleteOne([12, 15, 18]));
// console.log(deleteOne([21,7,3,42,63]));
// console.log(deleteOne([12,15,24,18,30]))
/*
2.
Given 2 non-negative integers A and B, find gcd(A, B)

GCD of 2 integers A and B is defined as the greatest integer 'g' such that 'g' is a divisor of both A and B. Both A and B fit in a 32 bit signed integer.

Note: DO NOT USE LIBRARY FUNCTIONS.



Problem Constraints
0 <= A, B <= 109



Input Format
First argument is an integer A.
Second argument is an integer B.



Output Format
Return an integer denoting the gcd(A, B).



Example Input
Input 1:

A = 4
B = 6
Input 2:

A = 6
B = 7


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 2 divides both 4 and 6
Explanation 2:

 1 divides both 6 and 7

 Hints:
 Hint 1:
 Let’s say g is gcd(m, n) and m > n.

m = g * m1
n = g * m2

m - n = g * (m1 - m2)

gcd (m, n) = gcd(m-n, n)

Can you use the above fact to find the gcd?

Solution Approach:
Let's say g is gcd(m, n) and m > n.

m = g * m1
n = g * m2

m - n = g * (m1 - m2)

gcd (m, n) = gcd(m-n, n)

           = gcd(m - 2n, n) if m >= 2n
           = gcd(m - 3n, n) if m >= 3n 
             .
             .
             .
           = gcd(m - k*n, n) if m >= k*n

       In other words, we keep subtracting n till the result is greater than 0. Ultimately we will end up with m % n.

              So gcd(m, n)  = gcd(m % n, n)
*/
function gcd(A,B){
    if(B == 0)
    return A;
    return gcd(B, A%B)
}
// console.log(gcd(24,16))

/*
3.

*/
/*
4.
 int gcd(int n, int m) {
            if (n%m ==0) return m;
            if (n < m) swap(n, m);
            while (m > 0) {
                n = n%m;
                swap(n, m);
            }
            return n;
    }

What is the time complexity of the above function assuming n > m?.
Θ symbol represents theta notation and Ω symbol represents omega notation.

Options:
Θ(logn)
Ω(n)
Θ(loglogn)
Θ(sqrt(n))

Ans:
Θ(logn)

Solution Explanation:
Let us say n = fibonacci(N) and m = fibonacci(N - 1)

fibonacci(N) = fibonacci(N-1) + fibonacci(N-2)

OR n = m + k where k < m. 

Therefore the step 

    n = n % m will make n = k

    swap(n, m) will result in

    n = fibonacci(N-1)

    m = k = fibonacci(N-2)

So, it will take N steps before m becomes 0.

This means, in the worst case, this algorithm can take N step if **n** is Nth fibonacci number. 

**Think of whats the relation between N and n**. 
*/

/*
4.
There are N players, each with strength A[i]. when player i attack player j, player j strength reduces to max(0, A[j]-A[i]). When a player's strength reaches zero, it loses the game, and the game continues in the same manner among other players until only 1 survivor remains.

Can you tell the minimum health last surviving person can have?



Problem Constraints
1 <= N <= 100000

1 <= A[i] <= 1000000



Input Format
First and only argument of input contains a single integer array A.



Output Format
Return a single integer denoting minimum health of last person.



Example Input
Input 1:

 A = [6, 4]
Input 2:

 A = [2, 3, 4]


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 Given strength array A = [6, 4]
 Second player attack first player, A =  [2, 4]
 First player attack second player twice. [2, 0]
Explanation 2:

 Given strength array A = [2, 3, 4]
 First player attack third player twice. [2, 3, 0]
 First player attack second player. [2, 1, 0]
 Second player attack first player twice. [0, 1, 0]
*/

function pubG(A){
    function gcd(m,n){
        if(n ==0){
            return m
        }
        return gcd(n, m%n)
    }
    let N = A.length;
    let pfGcd = new Array (N);
    pfGcd[0] = A[0];
    //prefix
    for(let i=1; i<A.length;i++){
        pfGcd[i] = gcd(pfGcd[i-1],A[i]);
    }
    return pfGcd[N-1];
}
console.log(pubG([2, 3, 4]));