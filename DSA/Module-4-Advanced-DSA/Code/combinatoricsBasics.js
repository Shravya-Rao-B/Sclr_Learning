/*
1.
Given three integers A, B, and C, where A represents n, B represents r, and C represents m, find and return the value of nCr % m where nCr % m = (n!/((n-r)!*r!))% m.

x! means factorial of x i.e. x! = 1 * 2 * 3... * x.



Problem Constraints
1 <= A * B <= 106

1 <= B <= A

1 <= C <= 106



Input Format
The first argument given is integer A ( = n).
The second argument given is integer B ( = r).
The third argument given is integer C ( = m).

Output Format
Return the value of nCr % m.



Example Input
Input 1:

 A = 5
 B = 2
 C = 13
Input 2:

 A = 6
 B = 2
 C = 13


Example Output
Output 1:

 10
Output 2:

 2


Example Explanation
Explanation 1:

 The value of 5C2 % 11 is 10.
Explanation 2:

 The value of 6C2 % 13 is 2.

 Hints:
 Use the property : nCr = n-1Cr-1 + n-1Cr.

Try using dynamic programming for this.

We will need a n * r DP array.

Solution Approach:
Suppose we calculate nCr by calculating the factorial of each number and then doing n! / (r! * (n-r)!) % m. This will not work as the factorial can be very large and will cause overflow.

As we know nCr = n-1Cr-1 + n-1Cr.

So we will use the Dynamic Programming approach and calculate the value of nCr.
*/
//Creating a 2D matrix and ncr value can be obtained by adding values at [n-1][r-1] + [n-1][r]
function computeNcr(A, B, C){
    let combMatrix = Array.from(Array(A+1), () => new Array(B+1));
for(let i=0; i<=A; i++){
    for(j=0; j<= Math.min(i,B); j++){
        if(j==0 || j==i){
            combMatrix[i][j] =1
        }
        else {
            combMatrix[i][j] = combMatrix[i-1][j-1] + combMatrix[i-1][j]
            combMatrix[i][j]%= C;
        }
    }
}
// console.log('combMatrix',combMatrix);
return combMatrix[A][B] % C
}
// console.log(computeNcr(5,3,10));
// console.log(computeNcr(6,2,13));
// console.log(computeNcr(96,21,123));
/*
2.
Given three integers A, B, and C, where A represents n, B represents r, and C represents p and p is a prime number greater than equal to n, find and return the value of nCr % p where nCr % p = (n! / ((n-r)! * r!)) % p.

x! means factorial of x i.e. x! = 1 * 2 * 3... * x.

NOTE: For this problem, we are considering 1 as a prime.



Problem Constraints
1 <= A <= 106
1 <= B <= A
A <= C <= 109+7


Input Format
The first argument given is the integer A ( = n).
The second argument given is the integer B ( = r).
The third argument given is the integer C ( = p).



Output Format
Return the value of nCr % p.



Example Input
Input 1:

 A = 5
 B = 2
 C = 13
Input 2:

 A = 6
 B = 2
 C = 13


Example Output
Output 1:

 10
Output 2:

 2


Example Explanation
Explanation 1:

 nCr( n=5 and r=2) = 10.
 p=13. Therefore, nCr%p = 10.

 Hints:
 Hint 1:
 We can preprocess the factorials modulo p.

Then think of how you can calculate (A / B)% C.

Overflow can be an issue in this problem.
To handle this, take modulo after every calculation step, and maybe try to hold results in appropriate datatypes like long.

Solution Approach:
This problem can be solved using Fermat’s Little theorem.

a^p = a (mod p) where p is a prime number.

a^(p-1) = 1 (mod p)

Multiply by an inverse on both sides

a^(p-2) = a^(-1) (mod p).
Using the above result, nCr can be calulated as ( fact[n]%p ) * inversemodulo( fact[n-r] %p ) * inversemodulo( fact[r] %p ).
*/
function computeNcrp(A, B, C){
    function fact(n){
        if(n==1){
            return 1
        }
        else {
            return (n * fact(n-1))%C
        }
    }
function inverseModulo(a,b,c){
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
    return powerFunc(a, b-2, b)
}
let ans =  fact(A);
ans = ans * fact(inverseModulo(B, C-2, C));
ans = ans * fact(inverseModulo())
return (fact(A%C) * inverseModulo(fact(A-B)%C) * inverseModulo(fact(B)%C))
}
// console.log(computeNcrp(5,2,13));

/*
3.
Given a positive integer A, return its corresponding column title as it appears in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 


Problem Constraints
1 <= A <= 109



Input Format
First and only argument of input contains single integer A



Output Format
Return a string denoting the corresponding title.



Example Input
Input 1:

A = 3
Input 2:

 
A = 27


Example Output
Output 1:

"C"
Output 2:

"AA"


Example Explanation
Explanation 1:

 
3 corrseponds to C.
Explanation 2:

    1 -> A,
    2 -> B,
    3 -> C,
    ...
    26 -> Z,
    27 -> AA,
    28 -> AB 

Hints: 
Observation -

Decimal numbers (Number system with base 10)
0,1,2,3,4,5,6,7,8,9
10,11,12,13,14,15,16,17,18,19
20,21,22…..

Excel Column Title
A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,X,W,Y,Z
AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,AW,AX,AY,AZ
BA,BB,BC….

So, excel column titles can be represented by number system with base 26?

Solution Approach:
You know how to convert a decimal number(base 10) to binary number(base 2).
So, can you also convert a decimal number(base 10) to a number system with base 26.

The only thing that you need to maintain is mapping -
A with 0
B with 1
C with D….and so on
*/
function excelCoulmnTitle(A){
let excelTitle = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'
, 'U','V','W','X','Y','Z'];
let title = '';
let n = A;
while(n!=0){
    //subtract 1 at every step so that A starts at 0. To help our array system
    let val = (n-1)%26;
    n = Math.floor((n - 1)/26);
    title = excelTitle[val] + title;
}
return title;
}
// console.log(excelCoulmnTitle(7964));
console.log(excelCoulmnTitle(33));