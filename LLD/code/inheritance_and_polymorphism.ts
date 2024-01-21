/*
1.
Create a class Point and Threedpoint - Method Overloading and Overriding
Solved
Raw Problem
**Raw Problem**
Create a set of class with following requirements:


a. Create a class Point


i. It should have two data members
x:int
y: int
It should have a display method that prints in following format - “[<<x>>, <<y>>]”
x and y should be protected and display should be public

b. Create another class ThreedPoint which extends the Point class


It should have the following data members: z:int
It should have a display method to override the parent’s display method which prints in following format - “[<<x>>, <<y>>, <<z>>]”
z should be private and display should be public.

*/
//Java solution
/*
public class Point {
    // write the code of point class here
    protected int x;
    protected int y;
    public void display(){
        System.out.println("[" + this.x + ", " + this.y + "]");
    }
}

public class Point {
    // write the code of point class here
    protected int x;
    protected int y;
    public void display(){
        System.out.println("[" + this.x + ", " + this.y + "]");
    }
}
*/
class Point{
    x : number;
    y:number;
    public display() : void {
        console.log(`[${this.x}, ${this.y}]`)
    }
}
class ThreedPoint extends Point {
    z : number;
    public display() :void {
        console.log(`[${this.x}, ${this.y}, ${this.z}]`)
    }
}
/*
2.
OOPs in Java (Inheritance and polymorphism - Method Overloading and Overriding) -1
Which of the following does Java not support

Options:
Method overriding
Method overloading
Operator overloading
Method hiding

Ans:
Operator overloading
*/

/*
3.
OOPs in Java (Constructors and Static) 1
Which module in JVM is responsible for memory cleanup

Options:
Code Access Security
Memory Cleaner
Garbage Collector
JDK

Ans:
Garbage Collector
*/

/*
4.
OOPs in Java (Inheritance and polymorphism - Method Overloading and Overriding) -3
What is true about static methods?

i. They can be overloaded

ii. They can be overridden

Which of the following is correct?

Options:
Both are correct
Both are incorrect
i is correct, ii is incorrect
i is incorrect, ii is correct

Ans:
i is correct, ii is incorrect
*/
/*
5.

TA comments:
As per question, the display method should be static

and void return tye

and the the parameter that supports loop over data is Iterable so the display code should be-

static void display(Iterable list){

for(Object data: list){

System.out.println(data);

}

Also replace line 11 with -display(st);

Is list an 'array' data type of javascript ? Whenever there is iterations mentioned in the question, should we assume the datatype to be list ?

0
KR
Kumar RishabYour TA
Today, 5:19 PM
First of all it is java

Secodnly iterable means anything

stack queue array list

and everything so to have common data type we used Iterable

0
KR
Kumar RishabYour TA
Today, 5:20 PM
you can write like this also

static void display(Iterable shravya){

for(Object data: shravya){

System.out.println(data);

}

0
SR
You
Today, 5:21 PM
ok.

0
SR
You
Today, 5:21 PM
Also, trying to understand the for loop, is it like for every 'data' in list, print 'data'

0
KR
Kumar RishabYour TA
Today, 5:22 PM
yes each elements of list

here we used Object as anything can be there int double char string etc

Object will automatically take all

//Java implementation
import java.util.Stack;

public class Client {
    public static void main(String[] args) {
        Stack<Integer> st = new Stack<>();
        st.push(10);
        st.push(20);
        st.push(30);

        // Make a call to display method as per question requirements here
        display(st);
    }

    // Write the display method as per requirements of question here
     static void display(Iterable data){
        for(Object eachData:data){
            System.out.println(eachData);
        }
    }
}
*/
/*
6.
OOPs in Java (Inheritance and polymorphism - Method Overloading and Overriding) -4
Consider the following statements
i. Calling of overloaded methods is decided at compile time

ii. Calling of overridden methods is decided at runtime.

Which of the following is correct?

Options:
Both are correct
Both are incorrect
i is correct, ii is incorrect
i is incorrect, ii is correct

Ans:
Both are correct
*/

/*
7.
OOPs in Java (Inheritance and polymorphism - Method Overloading and Overriding) -5
Unsolved
Consider the following Code

P class

public class P {
   protected int d1 = 10;
   protected int d = 100;

   protected void fun1(){
       System.out.println("P's fun1");
   }

   protected void fun(){
       System.out.println("P's fun");
   }

   static protected void sfun(){
       System.out.println("P's sfun");
   }
}
C class

public class C extends P{
   protected int d2 = 20;
   protected int d = 200;

   protected void fun2(){
       System.out.println("C's fun2");
   }

   protected void fun(){
       System.out.println("C's fun");
   }

   static protected void sfun(){
       System.out.println("C's sfun");
   }
}
Client class

public class Client {
    public static void main(String[] args) {
        P obj = new P();
        System.out.println(obj.d1);
        System.out.println(obj.d);
        obj.fun1();
        obj.fun();
        obj.sfun();
    }
}
What is the output?

Options:
10 100 P's fun1 P's fun P's sfun
10 100 P's fun1 P's fun P's sfunsss
100 100 P's fun1 P's fun P's sfun
100 100 P's fun P's fun P's sfun

Ans:
10 100 P's fun1 P's fun P's sfun
*/

/*
8.
OOPs in Java (Inheritance and polymorphism - Method Overloading and Overriding) -6
Consider the following Code

P class

public class P {
   protected int d1 = 10;
   protected int d = 100;

   protected void fun1(){
       System.out.println("P's fun1");
   }

   protected void fun(){
       System.out.println("P's fun");
   }

   static protected void sfun(){
       System.out.println("P's sfun");
   }
}
C class

public class C extends P{
   protected int d2 = 20;
   protected int d = 200;

   protected void fun2(){
       System.out.println("C's fun2");
   }

   protected void fun(){
       System.out.println("C's fun");
   }

   static protected void sfun(){
       System.out.println("C's sfun");
   }
}
Client class

public class Client {
    public static void main(String[] args) {
        P obj = new C();
        System.out.println(obj.d1);
        System.out.println(obj.d);
        obj.fun1();
        obj.fun();
        obj.sfun();
    }
}
What is the output?

Options:
10 100 P's fun1 C's fun P's sfun
100 100 P's fun 1C's fun P's sfun
10 10 P's fun 1C's fun P's sfun
10 100 P's fun 1C's fun P's sfun1

Ans:
10 100 P's fun1 C's fun P's sfun
*/

/*
9.
OOPs in Java (Inheritance and polymorphism - Method Overloading and Overriding) -7
Unsolved
Consider the following Code

P class

public class P {
   protected int d1 = 10;
   protected int d = 100;

   protected void fun1(){
       System.out.println("P's fun1");
   }

   protected void fun(){
       System.out.println("P's fun");
   }

   static protected void sfun(){
       System.out.println("P's sfun");
   }
}
C class

public class C extends P{
   protected int d2 = 20;
   protected int d = 200;

   protected void fun2(){
       System.out.println("C's fun2");
   }

   protected void fun(){
       System.out.println("C's fun");
   }

   static protected void sfun(){
       System.out.println("C's sfun");
   }
}
Client class

public class Client {
    public static void main(String[] args) {
        C obj = new P();
        System.out.println(obj.d1);
        System.out.println(obj.d);
        obj.fun1();
        obj.fun();
        obj.sfun();
    }
}
What is the output?

Options:
Compile Time Error
10 100 P's fun1 C's fun P's sfun
100 100 P's fun1 C's fun P's sfun
10 10 P's fun1 C's fun P's sfun

Ans:
Compile Time Error

Explanation:
The output of the code will be Compile Time Error. Here's why:

Invalid Object Creation: 
In the main method, you try to create an object of type C but assign it to a variable of type P. 
This is invalid because an object can only be assigned to a variable of its type or its superclasses. 
However, C is not a superclass of P in this case.

Incompatible Types: Even if we ignore the error in point 1, the rest of the code would still raise errors at 
runtime. You try to access members of type C through a variable of type P. 
These members would be inaccessible due to the different types.

So, the code attempts incompatible operations and won't even reach the stage of generating any output. 
It will result in a compile-time error indicating the invalid object creation attempt
*/

/*
10.
OOPs in Java (Inheritance and polymorphism - Method Overloading and Overriding) -8
Unsolved
Consider the following Code

P class

public class P {
   protected int d1 = 10;
   protected int d = 100;

   protected void fun1(){
       System.out.println("P's fun1");
   }

   protected void fun(){
       System.out.println("P's fun");
   }

   static protected void sfun(){
       System.out.println("P's sfun");
   }
}
C class

public class C extends P{
   protected int d2 = 20;
   protected int d = 200;

   protected void fun2(){
       System.out.println("C's fun2");
   }

   protected void fun(){
       System.out.println("C's fun");
   }

   static protected void sfun(){
       System.out.println("C's sfun");
   }
}
Client class

public class Client {
    public static void main(String[] args) {
        C obj = new C();
        System.out.println(obj.d1);
        System.out.println(obj.d);
        obj.fun1();
        obj.fun();
        obj.sfun();
    }
}
What is the output?

Options:
10 200 P's fun 1C's fun C's sfun
10 100 P's fun 1C's fun C's sfun
100 200 P's fun 1C's fun C's sfun
200 100 P's fun 1C's fun C's sfun

Ans:
10 200 P's fun 1C's fun C's sfun
*/