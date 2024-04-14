/*
1.
Introduction to Synchronization - Mutex, synchronized keyword, Atomic Data Types, Concurrent DS -1

Which of the following statements is true about the synchronized keyword?

Options:
It can only be applied to instance methods
It can be applied to both instance methods and static methods
It can only be applied to static methods
It cannot be used in a multithreaded application

Ans:
It can be applied to both instance methods and static methods
*/

/*
2.
Introduction to Synchronization - Mutex, synchronized keyword, Atomic Data Types, Concurrent DS -3

Which of the following is true regarding the differences between Hashtable and ConcurrentHashMap in Java?

Options:
HashTable allows multiple threads to access different parts of the map at the same time, while ConcurrentHashMap does not.
ConcurrentHashMap is synchronized, while Hashtable is not.
Hashtable is synchronized, ConcurrentHashMap Hashtable is not.
ConcurrentHashMap allows multiple threads to access different parts of the map at the same time, while Hashtable does not.

Ans:
ConcurrentHashMap allows multiple threads to access different parts of the map at the same time, while Hashtable does not.
*/

/*
3.
Introduction to Synchronization - Mutex, synchronized keyword, Atomic Data Types, Concurrent DS -5

What is the name of the algorithm used by Atomic Data types for thread-safety?

Options:
Mark and Sweep
Binary Search
Compare and Swap
None of the above

Ans:
Compare and Swap
*/

/*
4.
Consider the following code

public class A {

synchronized static void fun1(){

}

synchronized  void fun2(){

}

void fun3(){

}
}

And the following code

public class Client {

public static void main(String[] args) {

    A obj1 = new A();

    A obj2 = new A();

}
}

Which of the following can’t execute concurrently on two separate threads

Options:
obj1.fun1 and obj1.fun2
obj1.fun1 and obj2.fun1
obj2.fun2 and obj2.fun3
obj1.fun2 and obj2.fun2

Ans:
obj1.fun1 and obj2.fun1
*/

/*
5.
Introduction to Synchronization - Mutex, synchronized keyword, Atomic Data Types, Concurrent DS -2

Which of the following statements about synchronization differences between Hashtable and HashMap, and StringBuilder and StringBuffer is true?

Options:
Both Hashtable and HashMap are thread-safe, but Hashtable is more efficient.
Both StringBuilder and StringBuffer are thread-safe, but StringBuilder is more efficient.
Hashtable is thread-safe because its methods are synchronized, while HashMap is not thread-safe by default.
StringBuilder is thread-safe because its methods are synchronized, while StringBuffer is not thread-safe by default.

Ans:
Hashtable is thread-safe because its methods are synchronized, while HashMap is not thread-safe by default.

*/
/*
6.
Introduction to Synchronization - Mutex, synchronized keyword, Atomic Data Types, Concurrent DS -4
Unsolved
Consider the following code:

public class A {
    synchronized void fun1(){

    }

    synchronized  void fun2(){

    }

    void fun3(){

    }
}
And the following code:

public class Client {
    public static void main(String[] args) {
        A obj1 = new A();
        A obj2 = new A();

    }
}
Which of the following can execute concurrently on two separate threads

Options:
A = obj1.fun1 and obj1.fun2
B = obj1.fun1 and obj2.fun1
C = obj2.fun2 and obj2.fun3
Both B and C

Ans:
Both B and C
*/

/*
7.
Introduction to Synchronization - Mutex, synchronized keyword, Atomic Data Types, Concurrent DS -6

Which of the following statements about mutex locks in Java is true?

Options:
Mutex locks are used to achieve parallel execution of threads.
Mutex locks are synonymous with atomic data types in Java.
Mutex locks are used to protect critical sections of code from concurrent access.
Mutex locks are only applicable to single-threaded programs

Ans:
Mutex locks are used to protect critical sections of code from concurrent access.
*/

/*
8.
Create a class Counter -Introduction to Synchronization - Mutex
Unsolved
Raw Problem
Create a class with the following requirements

Class should be public and name is Counter
It should’ve a single private data member of int type named count
It should’ve a single public constructor which takes an integer parameter and sets the value of count
It should’ve following 3 methods
public void incValue(int offset)

This method should increment the value of count by offset. Also make this method synchronized

public void getValue()

This method should return the value of count. Also make this method synchronized

public void decValue(int offset)

This method should decrement the value of count by offset. Also make this method synchronized
*/