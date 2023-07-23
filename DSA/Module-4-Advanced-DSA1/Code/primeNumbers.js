/*
1.
Given an array of integers A, find and return the count of divisors of each element of the array.

NOTE: The order of the resultant array should be the same as the input array.



Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 106



Input Format
The only argument given is the integer array A.



Output Format
Return the count of divisors of each element of the array in the form of an array.



Example Input
Input 1:

 A = [2, 3, 4, 5]
Input 2:

 A = [8, 9, 10]


Example Output
Output 1:

 [2, 2, 3, 2]
Output 1:

 [4, 3, 4]


Example Explanation
Explanation 1:

 The number of divisors of 2 : [1, 2], 3 : [1, 3], 4 : [1, 2, 4], 5 : [1, 5]
 So the count will be [2, 2, 3, 2].
Explanation 2:

 The number of divisors of 8 : [1, 2, 4, 8], 9 : [1, 3, 9], 10 : [1, 2, 5, 10]
 So the count will be [4, 3, 4].

 Hints:
 Think what information in the seive can be stored to determine the total factors of 
 a no in (log n) time complexity.
How can you find the total factors by knowing all the prime factors of a no?

Solution approach:
Using seive, we can store the smallest prime factor for all the numbers upto the maximum no (here it is 106).
This above information helps in determining the prime factors for any no in O(log n) time-complexity for each query.

We take each no in the input array. Then prime factorise it to count the powers of each prime factors in a number.
N = (p1n1) * (p2n2) * (p3n3).
Here, N can be represented as p1 prime raised to the power n1 muliply p2 prime raised to n2 multiply p3 raised to n3.
So, total factors of N will be (n1 + 1) * (n2 + 1) * (n3 + 1).
For eg: 18 = (21) * (32).
So, total factors = 2*3 = 6.
*/
function countOfDivisors(A){
let ans = [];
let max = Math.max(...A);
//1 is a factor for all. count of divisors initially will be 1
let sieve = new Array(max+1).fill(1);
for(let i=2; i<=max; i++){
    for(j=i; j<=max; j+=i){
        sieve[j]=sieve[j]+1;
    }
}
for(let i=0; i<A.length; i++){
    ans.push(sieve[A[i]])
}
return ans;
}
// console.log(countOfDivisors([2,3,4,5]));
// console.log(countOfDivisors([8,9,10]));
/*
Scaler solution
function sieve(){
    let N = 1000005;
    let spf = new Array(N);     // spf[x] = smallest prime factor of x
    for(let i = 0; i < N; ++i) {
        spf[i] = i;
    }
    for(let i = 2; i * i < N; ++i) {
        if(spf[i] == i) {
            for(let j = i * i ; j < N; j += i) {
                if(spf[j] == j) 
                  spf[j] = i;
            }
        }
    }
    return spf;
}
module.exports = {
    solve: function (A) {
        let spf = sieve();
        // Using prime factorization to get the number of divisors for every integer
        let sol = [];
        A.forEach((ele)=> {
          let temp = ele;
          let ans = 1;
          while(temp != 1) {
              let cnt = 1;
              let pf = spf[temp];
              while(temp != 1 && temp % pf == 0) {
                  cnt += 1;
                  temp = temp / pf;
              }
              ans = ans * cnt;
          }
          sol.push(ans);
        });
        return sol;
    },
};
*/


/*
3.
Given an integer A. Find the list of all prime numbers in the range [1, A].


Problem Constraints
1 <= A <= 106



Input Format
Only argument A is an integer.



Output Format
Return a sorted array of prime number in the range [1, A].



Example Input
Input 1:
A = 7
Input 2:
A = 12


Example Output
Output 1:
[2, 3, 5, 7]
Output 2:
[2, 3, 5, 7, 11]


Example Explanation
For Input 1:
The prime numbers from 1 to 7 are 2, 3, 5 and 7.
For Input 2:
The prime numbers from 1 to 12 are 2, 3, 5, 7 and 11.

Hints:
Try using Sieve of Eratosthenes to find
all prime numbers till A

Solution Approach:
We use the method of sieve of eratosthenes to find all prime numbers till A.
In this method we iterate from 2 to sqrt(A) and whenever we encounter a prime
number, we mark all multiples of that number as non-prime numbers.
Then we loop from 1 to A and add all the prime number to our final array.

Time Complexity : O(AloglogA)
Space Complexity : O(A)
*/

function allPrimesInRange(A){
    let ans = [];
    //create of size A+1, so that the number A is also included in the list
    let sieve = new Array(A+1);
    sieve.fill(0);
    //0, 1 are not prime.
    // need to do only till squrt of A. After which jth loop would not run
    for(let i=2; i*i<=A; i++){
        //start j with i and increment by i.
        //if i = 3, 6 which is also 2*3, would have already be marked as non prime by 2.we need to start from 9 only.
        //if i = 7, till 42, would already be marked. we need to mark from 49 only.
        for(let j=i*2; j<=A; j+=i){
            sieve[j] = 1;
        }
    }
 for(let i=2; i<=A; i++){
    if(sieve[i] == 0){
        ans.push(i);
    }
 }
//  console.log(sieve);
 return ans;
}
/*
Scaler solution:

function sieve(n) {
    // sieve of eratosthenes
    let prime = new Array(n + 1).fill(0);
    for(let i = 2; i * i <= n; i++) {
        if(prime[i] == 0) {
            for(let j = i * i; j <= n; j += i) {
                prime[j] = 1;
            }
        }
    }
    return prime;
}

module.exports = { 
 //param A : integer
 //return a array of integers
	solve : function(A){
        let ans = [];
    let prime = sieve(A);

    for(let i = 2; i <= A; i++) {
        if(prime[i] == 0) {
            ans.push(i);
        }
    }
    return ans;
	}
};
*/
// console.log(allPrimesInRange(15));
// console.log(allPrimesInRange(7));
