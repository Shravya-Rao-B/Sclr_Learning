/*
1.
Raw Problem
Create a class Person with following requirements

Should have a data-member age
Should have a data-member name
Should support a constructor with both age and name
*/

/*
2.
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
3.
What function should we override in Java for clean-up activities before JVM reclaims the memory assigned to an object

Options:
Final
Finally
Finalize
Destructor

Ans:
Finalize
*/

/*
4.
What keyword is used to make class level data members

Options:
const
final
auto
static

Ans:
static
*/

/*
5.

Create a set of classes to meet following requirements

a. Create a class Point

i. It should have 2 data-members: x and y ii. Add a constructor with two parameters: x and y iii. Add a copy constructor


b. Create a class Rectangle

i. It should have 2 data-members

- 1. topLeft (Point)
- 2. bottomRight (Point)

ii. Add a constructor with 4 parameters of type int: topLeftX, topLeftY, bottomRightX, bottomRightY
iii. Add a constructor with 2 parameters of type Point: topLeft, bottomRight
iv. Add a constructor with 1 parameter of type Rectangle
v. Make sure that Rectangle constructors make deep copies


*/
class Point{
    x : number;
    y : number;
     public Point(x:number, y:number){
        this.x = x;
        this.y = y;
    };
     Point(p : Point){
        this.x = p.x;
        thix.y = p.y
    }
}
//written in java 
/* public class Rectangle {
    // write the code of Rectangle class here
    Point topLeft;
    Point bottomRight;
    public Rectangle(int topLeftX, int topLeftY, int bottomRightX, int bottomRightY){
        this.topLeft = new Point (topLeftX,  topLeftY);
        this.bottomRight = new Point (bottomRightX,  bottomRightY);
    };
    public Rectangle(Point topLeft, Point bottomRight){
        this.topLeft =  new Point(topLeft);
        this.bottomRight = new Point (bottomRight);
    };
    public Rectangle(Rectangle R){
       this.topLeft = new Point(R.topLeft);
       this.bottomRight = new Point (R.bottomRight);
    };
}
*/

/*
6.
Create a Node class with following requirements

Two data members
i. data:int
ii. next:Node
A constructor which takes an integer parameter. This constructor should set data property and leave the next set to null.
A constructor which takes a Node parameter. This constructor should make a deep copy of the passed node.

TA explanation:
so it should be like this-Node(Node node){

this(node.data);

if(node.next != null) {

this.next = new Node(node.next);

}

}

In the `Node` constructor that takes a `Node` parameter, this line:

this.next = new Node(node.next);

creates a new `Node` object for the `next` property of the current node. It recursively constructs a new `Node` using the `node.next` of the input node.

Here's the breakdown:

1. When the constructor is called with a `Node` parameter, it creates a new `Node` with the `data` from the input `node`.

2. Then, it checks if the input `node` has a non-null `next` reference (i.e., there's another node after it).

3. If `node.next` is not null, it recursively calls the `Node` constructor with `node.next` as the parameter, creating a deep copy of the next node.

4. The `this.next` property is set to the newly constructed `Node`, effectively linking the current node to its deep copy.

This recursive approach continues until it reaches the end of the linked list, effectively creating a deep copy of the entire linked list structure.

//Java solution
public class Node {
    // write the code of node class here
    int data;
    Node next;
     Node(int data){
       this.data = data;
    }
     Node(Node node){
        this(node.data);
        if(node.next != null){
            this.next = new Node(node.next);
        }
    }
}
*/

/*
7.
Create a student Class; OOPs in Java (Constructors and Static)
Solved
Create a class Student with following requirements
i. Two data members
age:int
name:String
ii. Four constructors
Default constructor: Should set age to 0 and name to null
Constructor with int parameter: Should set age to the passed parameter and name to null
Constructor with String parameter: Should set name to the passed parameter and age to 0
Constructor with two parameters - int and String. Should set the age to int parameter and name to String parameter
The assignment code should only be in the 4th constructor. The top 3 constructors should use telescoping to invoke the 4th constructor.
*/
//Java solution
/*
public class Student {
    // write the code of student class here
    int age;
    String name;
     Student(){
        this(0,null);
    }
     Student(int age){
        this(age,null);
    }
     Student(String name){
        this(0,name);
    }
     Student(int age, String name){
        this.name = name;
        this.age = age;
    }
};
*/

/*
8.
Q3. Create. a Math class - OOPs in Java (Constructors and Static)

Problem Description
Create a class Math with following requirements
- A class level data member called PI set to 3.14
- A class level method called getCircleArea, which takes as input an integer parameter called radius. This function should return area of the circle as a double

Java solution:
public class Math {
// write code for Math class here
public static double PI =  3.14;
public static double getCircleArea(int radius){
return (PI * radius * radius);
}
}
*/

class Maths{
static PI = 3.14;
static getCircleArea(radius:number){
    return (Maths.PI * radius * radius)
}
}
/*
9.
Consider the following two statements
i. Static Methods can use non static data members also
ii. Static Methods can not use this keyword
Which of the following is true

Options:
Both i and ii are false
Both i and ii are true
i is true and ii is false
i is false and ii is true

Ans:
i is false and ii is true

Explanation:
i. A static method can only access static data members and static methods of another class or the same class but cannot access non-static methods and variables. Also, a static method can rewrite the values of any static data member.
ii. Why can't we use 'this' and 'static' together? 'this' keyword is only applicable where an instance of an object is created. Static method have no instance created because static method belongs to the class
*/

/*
10.
Consider the following two statements
i. Non-Static Methods can use static data members also
ii. Static data members can be accessed only via Class name
Which of the following is true

Options:
Both i and ii are false
Both i and ii are true
i is true and ii is false
i is false and ii is true

Ans:
i is true and ii is false
*/

/*
Typescript practices of constructors
*/

//Default constructor
class Student{
    name : String
    age : number
    batch: String
}
let s = new Student();
console.log('s with default constructor added by typescript',s);