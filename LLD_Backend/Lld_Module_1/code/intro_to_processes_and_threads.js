/*
1.
Which of the following is the correct way of getting the executing thread’s name?

Thread.currentThread.name
Thread.executingThread().getName()
Thread.currentThread().getName()
Thread.executingThread.getName()

Ans:
Thread.currentThread().getName()
*/

/*
2.
Consider the following two statements

Threads of same process can access each other’s stack data
Threads of same process can access each other’s global data
Which of the following is correct?

Options:
Both a and b are true
Only a is true
Only b is true
Both a and b are false

Ans:
Only b is true
*/

/*
3.
Parallel Programming and Multi-threading
Consider the following statements

Parallel programming requires multiple program counters.
Multithreading requires multiple cores.

Which of the following is correct?

Options:
Both a and b are true
Only a is true
Only b is true
Both a and b are false

Ans:
Only a is true
*/

/*
4.
Runnable interfcae
Consider the following two statements

Runnable interface is implemented by class which will be invoked via a separate Thread
The name of the function to start a new Thread is run

Which of the following is correct?

Options:
Both a and b are true
Only a is true
Only b is true
Both a and b are false

Ans:
Only a is true
*/

/*
5.
Raw Problem
**Raw Problem**
Write code to achieve the following
A class Client with main method that prints: I am the main class
Client class should create a new thread and invoke code in a class called Adder.
The Adder class should print: I am the Adder class
Client class should create a new thread and invoke code in a class called Subtractor.
The Subtractor class should print: I am the Subtractor class

Important Note - Use the ScalerThread class to create new threads. This is necessary for testing your code.

Adder.java

public class Adder implements Runnable{
    public void run(){
        System.out.println("I am the Adder class");
    }
}
subtractor.java

public class Subtractor implements Runnable{
    public void run(){
        System.out.println("I am the Subtractor class");
    }
}
Scalerthread.java

import java.lang.reflect.Field;
import java.util.HashMap;

public class ScalerThread extends Thread {
    public static HashMap<String, String> map = new HashMap<>();
    private String target;

    ScalerThread(Runnable r){
        super(r);
        target = r.getClass().getName();
    }

    @Override
    public void start() {
        super.start();
        map.put(target, this.getName());
    }
}

Client.java
public class Client{
public static void main(String[] args){
    System.out.println(" I am the main class");
    ScalerThread adderThread = new ScalerThread(new Adder());
    adderThread.start();
    ScalerThread subtractorThread = new ScalerThread(new Subtractor());
    subtractorThread.start();
}
}
*/

/*
6.
**Raw Problem**
Write code to achieve the following
A class Client with a main method.
Client class shall take two numbers as input from the user.
Client class should create a new thread and invoke code in a class called Adder.
Client class shall pass two numbers (taken as input from the user) to the Adder class.
The Adder class should print the sum of two numbers passed to it.

Important Note - Use the ScalerThread class to create new threads. This is necessary for testing your code.
Adder.java

public class Adder implements Runnable{
    int a;
    int b;
    public Adder(int a, int b){
        this.a = a;
        this.b = b;
    }
    public void run(){
        System.out.println(this.a + this.b);
    }
}

ScalerThread.java

import java.util.HashMap;

public class ScalerThread extends Thread {
    public static HashMap<String, String> map = new HashMap<>();
    private String target;

    ScalerThread(Runnable r){
        super(r);
        target = r.getClass().getName();
    }

    @Override
    public void start() {
        super.start();
        map.put(target, this.getName());
    }
}


Client.java

import java.util.Scanner;

public class Client{
    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);
        System.out.println("Enter first number");
        int a = myObj.nextInt();
        System.out.println("Enter second number");
        int b  = myObj.nextInt();
        Adder adder = new Adder(a,b);
        ScalerThread "t"+i = new ScalerThread(adder);
        "t"+i.start();
    }
}
*/
/*
7.
Concurrent vs Parallel Programming - MCQ1
Consider the following statements

Concurrent programming means more than one process is in execution at the same time, but only one of them might be making progress.
Parallel programming means more than one process is in execution as well as making progress at the same time.

Which of the following is correct?

Options:
Both a and b are true
Only a is true
Only b is true
Both a and b are false

Ans:
Both a and b are true
*/

/*
8.

**Raw Problem**
Write code to achieve the following
A class Client with a main method.
Client class shall take a number n as input.
A class called TableCreator which prints the multiplication table from 1 to 10 for a given number x
x times 1 is x

..

x times 10 is 10x
Client should create a thread for every number between 1 to n, n included and
Pass it to TableCreator to print a multiplication table for that number.
Print format = 2 times 6 is 12

ScalerThread.java
import java.util.HashMap;

public class ScalerThread extends Thread {
    public static HashMap<String, String> map = new HashMap<>();
    private String target;

    ScalerThread(Runnable r){
        super(r);
        target = r.getClass().getName();
    }

    @Override
    public void start() {
        super.start();
        map.put(target, this.getName());
    }
}

TableCreator.java


public class TableCreator  implements Runnable{
int n;
public TableCreator(int n){
this.n = n;
};
public void run(){
for(int i=1; i<=10; i++){
System.out.println(this.n + " times " + i + " is " + this.n * i);
}
}
}

Client.java

import java.util.Scanner; 

public class Client{
public static void main(String[] args) {
Scanner inputNum = new Scanner(System.in);
System.out.println("Enter a number");
int n = inputNum.nextInt();
for (int i =0; i<10; i++)
{
TableCreator tc = new TableCreator(n);
ScalerThread t = new ScalerThread(tc);
t.start();
}
}
}

*/

/*
9.
Parallel vs Concurrent Programming
Consider the following two statements

Parallel programming requires multiple program counters
Concurrent programming requires time-bound CPU scheduling

Which of the following is correct?

Both a and b are true
Only a is true
Only b is true
Both a and b are false

Ans:
Both a and b are true
*/