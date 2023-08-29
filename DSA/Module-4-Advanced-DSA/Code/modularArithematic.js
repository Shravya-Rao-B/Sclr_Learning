/*
Pre requisite power function
*/
function findPower(A, P, M){
    if(P == 0){
        return 1
    }
    let half = findPower(A, P/2, M) % M;
    // console.log('half', half);
    if(P % 2 == 0){
        return (half * half) % M;
    }
    else {
        return ((A * half)%M  * half)%M
    }
}
// console.log(findPower(2, 10, 1));
/*
1.
Given two integers A and B. Find the value of A-1 mod B where B is a prime number and gcd(A, B) = 1.

A-1 mod B is also known as modular multiplicative inverse of A under modulo B.



Problem Constraints
1 <= A <= 109
1<= B <= 109
B is a prime number



Input Format
First argument is an integer A.
Second argument is an integer B.



Output Format
Return an integer denoting the modulor inverse



Example Input
Input 1:

 A = 3
 B = 5
Input 2:

 A = 6
 B = 23


Example Output
Output 1:

 2
Output 2:

 4


Example Explanation
Explanation 1:

 Let's say A-1 mod B = X, then (A * X) % B = 1.
 3 * 2 = 6, 6 % 5 = 1.
Explanation 2:

 Similarly, (6 * 4) % 23 = 1.

 Hints:
 According to Fermats’s little theorem:
AB-1 ≡ 1 (mod B) where B is prime and A is not a multiple of B.
Can we use the above relation to find the modular inverse?

Solution Approach:
Fermats’s little theorem:

AB-1 ≡ 1 (mod B) where B is prime and A is not a multiple of B.
Multiply by A-1 on both sides, We get

AB-2 ≡ A-1 (mod B) where B is prime and A is not a multiple of B.
We just have to calculate AB-2 (mod B). This will be the modular multiplicative inverse of A under modulo B.
*/
//Normal approach
function inverseMod(A,B){
    for(let i=1; i<=B-1; i++){
        if(((((A%B) %B) * (i % B)) % B) == 1){
            return i;
        }
    }
    return -1
}
// console.log(inverseMod(3,5));
// console.log(inverseMod(6, 23));

//In the problem statement its given that B is prime. Which makes us apply Fermat's little theorem
//i.e. b^m-2 % m = b^-1 % m
//eg. if b=3, m= 13, ans = 9. 3^13-2
// TA comment 
//Hello there, while doing multiplication we need to use Bigint() function, I have sent you a code over slack , please refer it
function inverseModFermat(A,B){
    // return (Math.pow(A,(B-2)) % B)
    function powerFunc(n, p, m){
        if(p ==0){
            return 1
        }
        else {
        let half = powerFunc(n, (p/2)%m, m);
            if(p % 2 == 0){
                return ((half * half) % m)
            }
            else {
                return (((((n * half ) % m) * half)) % m )
            }
        }
    }
    return powerFunc(A, B-2, B)
}
// console.log(inverseModFermat(3,5));
// console.log(inverseModFermat(6,23));
// console.log(inverseModFermat(21,17));
// console.log(inverseMod(19, 7));
// console.log(inverseMod(1525, 999996223));
 
/*
2.
Given an array of integers A and an integer B, find and return the number of pairs in A whose sum is divisible by B.
Since the answer may be large, return the answer modulo (109 + 7).
Note: Ensure to handle integer overflow when performing the calculations.

Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 109
1 <= B <= 106

Input Format
The first argument given is the integer array A.
The second argument given is the integer B.

Output Format
Return the total number of pairs for which the sum is divisible by B modulo (109 + 7).

Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
 B = 2
Input 2:

 A = [5, 17, 100, 11]
 B = 28


Example Output
Output 1:

 4
Output 2:

 1


Example Explanation
Explanation 1:
 All pairs which are divisible by 2 are (1,3), (1,5), (2,4), (3,5). 
 So total 4 pairs.
Explanation 2:
 There is only one pair which is divisible by 28 is (17, 11)

 Hints:
A trivial way of solving is to count the number of pairs whose sum is divisible by B by using two loops over the array.
Can you think of optimizing it by using the fact that the value is up to 106 and using the modulo operator, we can reduce all the elements in the range 0 to B-1.

Solution Approach:
Let's optimize using the fact that the value is up to 106, 
and using the modulo operator, we can reduce all the elements in the range 0 to B-1.

We make an auxiliary array cnt, the index i denotes the number of elements 
which gives i as the remainder when divided by B.

Now, we know that the sum of the pair modulo B should be equal to 0.
So we will count the pairs that give the sum of the pair modulo B is 0.
We can do this by adding cnt[i]*cnt[j] in the answer such that (i + j)%B=0. 

Note: Keep in mind the base case when i==0 and j==0 and i==j.
*/
function pairSumDivisibleByB(A, B){
    //Create an array of size B such that we can store the modulus values of all
    let freq = new Array(B).fill(0);
    // console.log('freq array init', freq);
    for(let i=0; i<A.length; i++){
       let val = A[i];
       freq[val % B] = freq[val % B]+1;
    }
    // console.log('modular prefix freq array', freq);
    let count =0;
    let mod = 1000000007;
    //for the values which have 0 in frequency array
    let x = freq[0];
    count = (count + (x*(x-1)/2)) % mod;
    let i = 1;
    let j = B-1;
    while(i <= j){
        if(i==j){
            // console.log('i==j', i, j, freq[i], freq[j]);
            count+= (freq[i] * ((freq[j]-1)/2)) % mod
        }
        else {
            // console.log('i,j', i,j);
            // console.log('freq[i], freq[j]',freq[i], freq[j]);
            count+= (freq[i] * freq[j]) % mod
        }
        i++; 
        j--;
    }
    return count % mod;
}
//NOTE: In the scaler ide, it worked only once I removed Math.floor for all divisions
// console.log(pairSumDivisibleByB([1, 2, 3, 4, 5],2));
// console.log(pairSumDivisibleByB([5, 17, 100, 11],28));
// freq Prefix = [1,0,1,0,1] [2,3]

/*
3.

Given two Integers A, B. You have to calculate (A ^ (B!)) % (1e9 + 7).

"^" means power,
"%" means mod, and
"!" means factorial.

Note: Ensure to handle integer overflow when performing the calculations.


Problem Constraints
1 <= A, B <= 5e5



Input Format
First argument is the integer A

Second argument is the integer B



Output Format
Return one integer, the answer to the problem



Example Input
Input 1:

A = 1
B = 1
Input 2:

A = 2
B = 2


Example Output
Output 1:

1
Output 2:

4


Example Explanation
Explanation 1:

 1! = 1. Hence 1^1 = 1.
Explanation 2:

 2! = 2. Hence 2^2 = 4.

 Hints:
 You can calculate A ^ B by using the divide and conquer technique or by recursion.
It requires knowledge of some advanced mathematics concepts to find (A ^ (B!)) % P.

Have you noticed that (1e9 + 7) is prime?

Solution approach:
This problem is very simple if you know Fermat’s Little Theorem.

The basic approach to solve this problem is to find factorial of B by taking mod with (P-1), where P is a prime. In this problem, 10007 is also a prime.

After calculating the factorial of B, you can calculate A ^ B! by simply taking mod with P.


*/
function veryLargePower(A, B){
    let ans = 1;
    function fastPower(n,p,m){
        if(p ==0){
            return 1
        }
        else {
        let half = fastPower(n,Math.floor(p/2) % m,m);
        if( p % 2 == 0){
            return Number((BigInt(half) * BigInt(half)) % BigInt(m))
        }
        else {
            return Number(((BigInt(n) * BigInt(half)) % BigInt(m) * BigInt(half)) % BigInt(m))
        }
    }
    }
    let fact = 1;
    let mod = 1000000007;
    for(let i=2; i<=B; i++){
        //As per Fermat’s Little Theorem
        fact = (fact * i) % (mod -1);
    }
    ans = fastPower(A, fact, mod);
    return Number(ans);
        }
// console.log(veryLargePower(1,1));