/*
1.
What is the time complexity of the following code snippet
for(int i = 1 ; i <= n ; i+=2){
print(i);
}

Options:
O(n^3)
O(n^2)
O(n)
O(logn)

Ans:
O(n)

Explanation:
O(n) is the answer as the loop runs for n/2 times. 
*/

/*
2.

What is the time complexity of the following code snippet

void solve(int N, int M){
for(int i = 1 ; i <= N ; i++){
if(N % i == 0)
print(i);
}
for(int i = 1 ; i <= M ; i++){
if(M % i == 0)
print(i);
}
}

Options:
O(N)
O(M)
O(N+M)
O(NM)

Ans:
O(N+M)

Explanation:
The answer is O(N + M)
The first loop runs for N times and the second one runs for M times.
*/

/*
3.
What is the time complexity of the following code snippet

int func(int n){

int s = 0;

for(int i = 1 ; i <= 100 ; i++){

s = s + i;

}

return s;

}

Options:
O(n)
O(n^2)
O(s)
O(1)

Ans:
O(1)

Explanation:
The time complexity of the code snippet is O(1).

The loop iterates a fixed number of times (Specifically 100 times). 
This fixed number of iterations does not depend on the input value of n, 
So the running time of the function is constant and does not vary with the input size.
*/

/*
What is the time complexity of the following code snippet
for(int i = 0 ; i < n ; i++){
for(int j = 0 ; j <= i ; j++){
print(i+j);
}
}

Options:
O(n^2)
O(n)
O(nlogn)
O(n^3)

Ans:
O(n^2)

Explanation:
The total number of times the print statement gets executed is (1+2+3+...n) = n*(n+1)/2
Thus the time complexity is O(n^2)
*/

/*
What is the time complexity of the following code snippet

for(int i = 1 ; i <= n ; i*=2){

for(int j = 1 ; j <= n ; j++){

print(i + j);

}

}

Options:
O(n^2)
O(nlogn)
O(n)
O(1)

Ans:
O(nlogn)

Explanation:
The outer loop runs logn times while the inner loop runs n times.
So, the time complexity is O(nlogn)
*/

/*
What is the time complexity of following code:
 
int a = 0, i = N; 
while (i > 0) { 
    a += i; 
    i /= 2; 
}

Options:
O(N)
O(Sqrt(N))
O(N / 2)
O(log N)

Ans:
O(log N)

Explanation:
We have to find the smallest k such that, N/(2^k) = 0.

We will approximate it to, N/(2^k) = 1 Or,
N = 2^k
Taking log on both sides, we will get k = logN where base is 2.

Thus, the answer is O(Log N).
*/

/*
7.
What is the time complexity of the following code snippet

for(int i = 1 ; i <= 100 ; i*=2){

for(int j = 1 ; j <= n ; j++){

print(i + j);

}

}

Options:
O(n^2)
O(n)
0(nlogn)
O(1)

Ans:
O(n)

Explanation:
The outer loop runs for a constant time. 
The inner loop runs n times.
Thus the answer is O(n)
*/

/*
8.
What is the time complexity of the following code snippet

int func(int n){

int s = 0;

for(int i = 0 ; i < n ; i = i * 2){

s = s + i;

}

return s;

}

Options:
O(n)
O(n^(1/2))
O(logn)
O(∞)

Ans:
O(∞)

Explanation:
The answer is O(∞).
The loop is an infinite loop as the value of i initialized with 0 doesn't change on multiplication by 2
*/

/*
9.

What is the time complexity of the following code snippet

int func(int n){

int s = 0;

for(int i = 1 ; i*i*i <= n ; i++){

s = s + i;

}

return s;

}

Options:
O(n^(1/4))
O(n^(1/3))
O(n^(1/2))
O(n)

Ans:
O(n^(1/3))

Explanation:
The answer is O(n^(1/3)).
The loop runs for cube root of N times.
*/

/*
10.

What is the complexity of the following code snippet ?

C++
int s = 0;
for(int i=0; i< n ; i++){
    ans+= i * i
}

Options:
O(nlogn)
O(n)
O(n^2)
O(1)
None of the above

Hints:
Notice the number of operations occuring.

Ans :
O(n)
Explanation:
The loop runs for n iterations. So, the time complexity of the program is O(n).
*/

/*
11.
What is the time complexity of the following code snippet

for(int i = 1 ; i <= n ; i++){

for(int j = 1 ; j <= 3^i ; j++){

print(i + j);

}

}

Options:
O(n^2)
O(nlogn)
O(2^n)
O(3^n)

Ans:
O(3^n)

Explanation:
The print statement executes for (3^1 + 3^2 + 3^3 + .. + 3^n) times which is 3 * (3^n - 1)/ (3 - 1) = 3/2 * (3^n - 1)
So, time complexity is O(3^n).
*/

/*
12.
If an algorithm has a time complexity of O(1), then the complexity of it is ?

Options:
constant
polynomial
exponential
none of the mentioned

Hints:
The growth rate of that algorithm will be constant.

Ans:
Constatnt

*/

/*
12.

If for an algorithm time complexity is given by O(log2n) then complexity will:

Options:
constant
polynomial
exponential
none of the mentioned

Ans :
none of the mentioned

Explanation:

*/

/* 
13.

If for an algorithm time complexity is given by O(log2n) then complexity will:

Options:
constant
polynomial
exponential
none of the mentioned

Ans:
none of the mentioned

Explanation: 
The growth rate of that function will be logarithmic therefore complexity will be logarithmic.
*/

/*
14.
If an algorithm has a time complexity of O(n), then the complexity of it is ?

Ans: linear

Options:
constant
linear
exponential
none of the mentioned

Explanation:
The growth rate of that algorithm will be linear.
*/

/*
15.

If for an algorithm time complexity is given by O((3/2)^n) then complexity will:

Options:
constant
quardratic
exponential
none of the mentioned

Explanation:

Explanation: 
The growth rate of that function will be exponential therefore complexity will be exponential.
*/