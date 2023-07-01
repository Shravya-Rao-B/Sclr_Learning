/*
1.
Set i'th bit of a number

Ans:

If i'th bit is 3, We OR that bit with 1 and rest of the bits being 0. 
The bit to be set will be set and the rest of the bits remain the same.


10110 || 01000 = 11110
*/

/*
2.
Toggle i'th bit of a number

Ans:

If i'th bit is 2, We XOR that bit with 1 and rest of the bits being 0. 
The required bit to be will be toggled


10110 ^ 00100 = 10110
*/

/*
3.
Generate a number with x 1s and y 0s.

Idea 1: Is to use a loop and genereate so many 1s and 0s. But that would not be optimal.

Instaed we use left shift.

Eg.
X = 3, Y = 4
Result will be: 1110000

Observation:
if
x = 3 => 111 == 7 => 2^3 - 1
x = 2 => 11 == 3 => 2^2 -1 
x = 4 => 1111 == 15 => 2^4 -1
In conclusion x set bits will be = 2^x - 1

To add y 0s, we just need to left shift the set x bits y times

So ((1<<x) - 1) << y
*/
function generateBinary(x,y){
    return ((((1<<x) -1 ) << y).toString(2))
}
// console.log(generateBinary(3,4));
/*
4.
Return how many bits are set

eg. 11001 => return 3

Solution approach:
Do number & 1 and check if the last bit is is set. 
Once done right shift the number and check if the last bit is set.
Continue till number is greater than 0.
*/
//Something wrong with this function needs to be reivisited
function checkSetBits(x){
    let ans = 0;
    while (parseInt(x) > 0){
               ans+=(x & 1)
                x = (x >>1).toString(2);
                console.log('x',x);
            }
        return ans;
    }
// console.log(checkSetBits(11101));

/*
5.
Sort an array based on the number of factors
*/

function sortByFactors(A){
let factorsA = [];
for(let i=0; i<A.length; ++i){
    let factors = 0;
    for(j=1; j*j<=A[i]; j++){
        if(A[i] % j == 0 && j < A[i]/j){
            console.log('A[i]', A[i]);
            factors = factors + 2;
        }
        if(A[i] % j == 0 && A[i]/j == j){
            factors = factors + 1
        }
    }
    factorsA.push(factors);
}
return factorsA;
}
function compareFactors(A){
    
}