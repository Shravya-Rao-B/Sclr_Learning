/*
1.
What is the Time Complexity of following snippet ?
int count = 0;
while(N){
    count ++;
    N/=3;
}

Options:
O(N)
O(N*N)
O(Nlog(N))
O(log(N)) {Base 3}
O(log(N)) {Base 2}

Hint 1:
Here, the N is reduced by factor of 1/3 in every iterations.
That means, N/3, N/(3^2), N/(3^3)… 0

Ans:
O(log(N)) {Base 3}

Explanation:
We have to find the smallest k such that,
N/(3^k) = 0
We will approximate it to, N/(3^k) = 1
Or, N = 3^k
Taking log we will get k = logN where base is 3.
*/

/*
2.
What will be the Time Complexity of the given code?

void solve(){
    int i = 1;
    while (i < n){
        int x = i;
        while(x--){
            //O(1) operation
        }
        i++;
    }
}

Hints:
Hint 1:
Notice the number of operations taking place in the loops.

Hint 2:
The total number of operations taking place is the sum of first n natural numbers, which is equal to n * (n + 1) / 2.
Therefore, the time complexity is O(n2).

Options:
O(nlogn)
O(n)
O(n sqrt(n))
O(n^2)
None of the above

Ans:
O(n^2)
*/

/*
3.
What is the Time Complexity of following snippet ?

for(i=0; i<N; i++){
    for(j=0; j<N; j++){
        break;
    }
}

Options:
O(N*N)
O(N*log(N))
O(N)
O(log(N))
None of the above

Hints:
Hint 1:
Note the break statement in the inner loop. So, the inner loop is not running completely. 
Therefore, the complexity will depend on the outer loop only.

Explanation:
Since the inner loop runs for only one iteration for every i in the outer loop, the overall complexity of 
the code will depend on the number of times the outer loop runs, which is N.
Therefore, the complexity is O(N).
*/

/*
4.
What is the time complexity of the following code :
 int a = 0;
 for(i=0; i< N; i++){
    for(j=N; j >i; j--){
        a = a + i + j
    }
 }

 Options:
 O(N)
O(N*log(N))
O(N * Sqrt(N))
O(N*N)

Ans:

Hints:
Count the number of times the loop runs.
When i = 0, it runs for N times.
When i = 1, it runs for N - 1 times …
When i = k, it runs for N - k times
So, total number of runs = N + (N - 1) + (N - 2) + … 1 + 0 = ???

Explanation:
Total number of runs = N + (N - 1) + (N - 2) + ... 1 + 0
= N * (N + 1) / 2
= 1/2 * N^2 + 1/2 * N
O(N^2) times. 
*/

/*
5.
What is the time, space complexity of following code :

int a = 0, b =0;
for(i=0; i<N; i++){
    for(j=0; j<N; j++){
        a = a + j
    }
}
for(k=0; k<N; k++){
    b = b + k
}
*/