/*
1.
 Abstract Classes MCQ1
Unsolved
Consider the following two statements

Abstract classes should necessarily have abstract methods
Classes having abstract methods should be abstract
Which of the following is true?

Options:
Both are correct
Both are incorrect
i is correct, ii is incorrect
i is incorrect, ii is correct

Ans:
i is incorrect, ii is correct
*/

/*
2.
Non inheritable class in Java
Which keyword is used to make a non-inheritable class in Java?

Options:
static
abstract
final
finally

Ans:
final
*/

/*
3.
Interfaces MCQ2
Consider the following about interface data-members

They are final
They are static

Which of the following is true?

Options:
Both are correct
Both are incorrect
i is correct, ii is incorrect
i is incorrect, ii is correct

Ans:
Both are correct
*/
/*
4.
Inheritance via Interfaces

Raw Problem
Create the set of classes and interfaces to meet the following requirements
An interface I1 with following methods
fun1():void
fun(): void
An interface I2 with following methods
fun2():void
fun():void
An interface I extending both I1 and I2 with no methods
A class C implementing interface I

Java solution:
interface I1{
    void fun1();
    void fun();
}
interface I2{
    void fun2();
    void fun();
}
interface I extends I1, I2{

}
class C implements I{
    public void fun1(){

    };
    public void fun2(){
        
    };
    public void fun(){

    };
}
*/
interface I1{
    fun1() :void;
    fun(): void;
}
interface I2{
    fun2(): void;
    fun (): void;
}
interface I extends I1, I2{

}
class C implements I{
    fun1(): void{

    }
    fun(): void{

    }
    fun2(): void{

    }
}
/*
5.
Consider the following two statements

Interfaces can’t have instance level data members
Interfaces can’t have constructors

Which of the following is true?

Options:
Both are correct
Both are incorrect
i is correct, ii is incorrect
i is incorrect, ii is correct

Ans:
Both are correct
*/

/*
6.
Interfaces used by Priority Queue
Which of the following interfaces is used by constituents of PriorityQueues?

Options:
Iterable
Iterator
Comparable
Serializable

Ans:
Comparable
*/
/*
7.
Create a sortable list of Cars

Raw Problem
Write a class Car with following requirements
It should have 2 data-members
Price: int
Speed: int
We should be able to sort a Collection or Array of Cars on price.
Implement required interface for that

Java Solution:
import java.io.*;
import java.util.*;

public class Car implements Comparable<Car>{
    int Price;
    int Speed;
    @Override
    public int compareTo(Car c){
     return this.Price - c.Price;
};
}
*/
/*
8.
Create a loopable class Node
Unsolved
Raw Problem
**Raw Problem**
Create a class Node with following requirements
It should have two data-members
data:int
next:Node
It should have the following constructors
A public constructor that takes an integer and sets the data field
A public constructor that takes an integer as well as Node and sets both the data and the next field
Implement necessary classes and interfaces to enable for-each loop over Node class.

TA :
implement the Iterable<Node> interface, and also create the NodeIterator class implementing then Iterator<Node>, and override the necessary methods

Java code:
In a file called Node.java

// write your code here
import java.util.Iterator;

public class Node implements Iterable<Node>{
  int data;
  Node next;
  public Node(int i){
    this.data = i;
  }
  public Node(int i, Node n){
    this.data = i;
    this.next = n;
  }
  public Iterator<Node> iterator(){
    return new NodeiteratorImpl(this);
  }
}

In a file called NodeiteratorImpl.java
import java.util.Iterator;
public class NodeiteratorImpl implements Iterator<Node>{
Node nodeHead;

public NodeiteratorImpl(Node nodeHead){
   this.nodeHead = nodeHead; 
}
@Override
public boolean hasNext(){
    return this.nodeHead != null;
}
@Override
public Node next(){
    Node temp = this.nodeHead;
    this.nodeHead = nodeHead.next;
    return temp;
}
}
*/