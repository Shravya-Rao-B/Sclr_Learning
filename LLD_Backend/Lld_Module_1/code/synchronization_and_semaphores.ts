/*
1.
Which of the following methods in a Semaphore is a blocking method?

Options:
acquire
release
Both acquire and release
Neither acquire nor release

Ans:
aquire
*/

/*
2.
Consider the following two statements: a. If the value of Semaphore is > 0, 
Acquire method of Semaphores reduces the number of threads allowed in critical section by 1, 
but allows the thread to enter the critical section b. If the value of Semaphore is 0, 
Acquire method of Semaphores blocks the thread

Which of the following is true?


Options:
Only 1 is true
Only 2 is true
Both 1 and 2 are true
Both 1 and 2 are false
*/

/*
3.
Which of the following is true about the critical section of a correctly working producer-consumer problem?

Options:
Critical Section of producer should begin with acquire on producer semaphore and end with release on consumer semaphore
Critical Section of producer should begin with acquire on producer semaphore and end with release on producer semaphore
Critical Section of consumer should begin with acquire on producer semaphore and end with release on consumer semaphore
Critical Section of consumer should begin with acquire on consumer semaphore and end with release on consumer semaphore

Ans:
Critical Section of producer should begin with acquire on producer semaphore and end with release on consumer semaphore
*/

/*
4.

*/

/*
5.
*/

/*
6.
Which of the following statements is true regarding mutex locks and semaphores?

Options:
Mutex Locks are used for synchronization while Semaphores is a syntax for creating threads
Mutex Locks allow only 1 thread in critical section while Semaphores can allow multiple threads in the critical section at same time
Lock and unlock are methods of semaphores
Acquire and release are methods of mutex locks

Ans:
Mutex Locks allow only 1 thread in critical section while Semaphores can allow multiple threads in the critical section at same time
*/

/*
7.
Which of the following is true about semaphores, mutex locks, synchronized methods and Concurrent DS?

Options:
Mutex Locks can be used to solve adder-subtractor problem as well as producer-consumer problem
Synchronized methods can be used to solve adder-subtractor problem as well as producer-consumer problem
Semaphores can be used to solve adder-subtractor problem as well as producer-consumer problem
Concurrent Data Structures can be used to solve adder-subtractor problem as well as producer-consumer problem

Ans:
Semaphores can be used to solve adder-subtractor problem as well as producer-consumer problem
*/

/*
8.

Consider the following two statements:

Release method of Semaphores increases the number of threads allowed in the critical section by 1.
If the value of Semaphore is 0, Release method of Semaphores blocks the thread
Which of the following is true?

Options:
Only 1 is true
Only 2 is true
Both 1 and 2 are true
Both 1 and 2 are false

Ans:
Only 1 is true
*/