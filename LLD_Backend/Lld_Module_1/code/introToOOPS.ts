/*
1.
Create a basic class (Student)
Unsolved
Raw Problem
Create a Student class satisfying following requirements

It should have two data members:
age: int
name: String
It should have a display method
Signature - void:display()
It should print: “My name is <name>. I am <age> years old”
It should have a sayHello method
Signature - void:sayHello(String)
It should print “<name data member> says hello to <name parameter>”

public class Student {
    // write the code of student class here
    int age;
    String name;
    void display(){
System.out.println("My name is " + this.name + ". I am "  + this.age + " years old");
    }
void sayHello(String name){
       System.out.println(this.name + " says hello to " + name);
   }
}
*/

/*
2.
 Create related classes 1 - (Point and Rectangle)
Unsolved
Raw Problem
Create a class Point. It should have 2 data-members:
x:int
y:int
Create a class Rectangle. It should have 3 data-members
topLeft:Point
height:int
width:int
It should have 3 methods
getArea: It should return area of rectangle as an integer
getPerimeter: It should return perimeter of rectangle as an integer
getBottomRight: It should return a Point to represent the bottom right of the Rectangle.

Math logic explained in Quora:

It is true that in some applications of computer science, the upper left corner is considered as the origin of coordinates. For example, digital images assume that system.

In those cases, the x coordinate of the bottom right corner is equal to the width of the image:

𝑥𝑏𝑟=𝑤

And the y coordinate is equal to the minus height:

𝑦𝑏𝑟=−ℎ

Therefore, if the top left corner was not found at the origin, but at the coordinates (𝑥𝑡𝑙;𝑦𝑡𝑙)
 given, the coordinates of the bottom right corner result:

𝑥𝑏𝑟=𝑥𝑡𝑙+𝑤
𝑦𝑏𝑟=𝑦𝑡𝑙−ℎ

Link: https://math.stackexchange.com/questions/3090389/find-the-bottom-right-coordinate-of-rectangle
*/
class Point{
 x: number;
 y: number;
}

class Rectangle{
     topLeft: Point;
     width: number;
     height : number;
     getArea(): number{
        return this.width * this.height
     };
     getParameter() :number{
        return 2 * (this.height + this.width)
     }
     getBottomRight():Point{
        this.topLeft.x += this.width;
        this.topLeft.y -= this.height;
        return this.topLeft;
     }
}
/* 
3.
Consider the following class Student

public class Student {
   int age;
   String name;

   void display(){
       System.out.println("My name is " + this.name + ". I am "  + this.age + " years old");
   }

   void sayHello(String name){
       System.out.println(this.name + " says hello to " + name);
   }
}
And the following code in Client class

public class Client {
   public static void main(String[] args) {
       Student s1 = new Student();
       s1.age = 10;
       s1.name = "A";
       s1.display();

       Student s2 = s1;
       s2.age = 20;
       s2.name = "B";

       s2.display();

       s1.display();
   }
}
What is the output of the final call to display function i.e. s1.display()?

Options:
My name is A. I am 10 years old.
My name is B. I am 10 years old.
My name is A. I am 20 years old.
My name is B. I am 20 years old.

Ans:
My name is B. I am 20 years old.
*/

/*
4.
Consider the following class Student.

public class Student {
   int age;
   String name;

   void display(){
       System.out.println("My name is " + this.name + ". I am "  + this.age + " years old");
   }

   void sayHello(String name){
       System.out.println(this.name + " says hello to " + name);
   }
}
And the following code in Client class

public class Client {
   public static void main(String[] args) {
       Student s1 = new Student();
       s1.age = 10;
       s1.name = "A";

       Student s2 = new Student();

       Student temp = s1;
       s1 = s2;
       s2 = temp;

       s2.display();

   }
}
What is the output of the final call to display function?

Options:
My name is A. I am 10 years old.
My name is null. I am 0 years old.
My name is null. I am 10 years old.
My name is A. I am 0 years old.

Ans:
My name is A. I am 10 years old.
*/

/*
5.
Consider the following class Student

public class Student {
   int age;
   String name;

   void display(){
       System.out.println("My name is " + this.name + ". I am "  + this.age + " years old");
   }

   void sayHello(String name){
       System.out.println(this.name + " says hello to " + name);
   }
}
And the following code in Client class

public class Client {
   public static void main(String[] args) {
       Student s1 = new Student();
       s1.age = 10;
       s1.name = "A";

       Student s2 = new Student();

       int tempAge = s1.age;
       s1.age = s2.age;
       s2.age = tempAge;

       s2.display();

   }
}
What is the output of the final call to display function?

Options:
My name is A. I am 10 years old.
My name is null. I am 0 years old.
My name is null. I am 10 years old.
My name is A. I am 0 years old.

Ans:
My name is null. I am 10 years old.
*/
/*
6.
Create related classes 2 - (Point and Circle)
Raw Problem
Create a class Point.
It should have 2 data-members:
x:int
y:int
Create a class Circle.
It should have 2 data-members
center:Point
radius:int
It should have 3 methods
getArea: It should return area of circle as a double
getParameter: It should return parameter of circle as a double
isOverlapping: It should take another Circle as parameter and return true if the current circle overlaps with the circle passed as parameter and false otherwise.

Circle overlapping logic:
https://www.bbc.co.uk/bitesize/guides/z9pssbk/revision/4

Intersection of two circles:
You may be asked to show that two circles are touching, and say whether they're touching internally or externally.

To do this, you need to work out the radius and the centre of each circle.

If the sum of the radii and the distance between the centres are equal, then the circles touch externally.

If the difference between the radii and the distance between the centres are equal, then the circles touch internally.

Determining whether two circles touch each other
1.Two circles will touch if the distance between their centres, 
,is equal to the sum of their radii, or the difference between their radii.
d = r1 + r2 or 
d = r1 - r2
2. Two circles will intersect at two points when 
r1 - r2 < d < r1 + r2
3.The centre of one circle will lie on the other circle when 
d = r1 or
d = r2
4.Two circles are concentric when 
d = 0;
*/
class Point{
    x : number;
    y : number;
}
class Circle{
    center: Point;
    radius : number;
    getArea() : number {
        return Math.PI * this.radius * this.radius
    }
    getPerimeter() : number {
        return 2 * Math.PI * this.radius
    }
    isOverlapping(c: Circle) :Boolean {
        let distance = Math.sqrt(Math.pow(this.center.x - c.center.x, 2) - 
        Math.pow(this.center.y - c.center.y,2))
        return distance <= (this.radius + c.radius);
    }
}
/*
7.

Create BankAccount class

Raw Problem
It should have 3 data members
accountNumber: String
balance: int
roi:double (Should represent rate of interest)
It should have 2 methods
getSimpleInterest: It should take time (in years) as a parameter. The data type of time should be int. It should return Simple Interest as a double.
getBalanceWithInterest: It should take time (in years) as a parameter. The data type of time should be int. It should return a new balance (including simple interest) as a double.
*/
class BankAccount{
    accountNumber: String;
    balance: number;
    roi: number;
    getSimpleInterest(time: number) :number{
        return (this.balance * this.roi * time)/100;
    }
    getBalanceWithInterest(t : number) :number{
        let si = this.getSimpleInterest(t);
        return (si + this.balance);
    }
}
/*
8.
Consider the following class Student

public class Student {
   int age;
   String name;

   void display(){
       System.out.println("My name is " + this.name + ". I am "  + this.age + " years old");
   }

   void sayHello(String name){
       System.out.println(this.name + " says hello to " + name);
   }
}
And the following code in Client class

public class Client {
   public static void main(String[] args) {
       Student s1 = new Student();
       s1.age = 10;
       s1.name = "A";

       Student s2 = new Student();

       String tempName = s1.name;
       s1.name = s2.name;
       s2.name = tempName;

       s1.display();

   }
}
What is the output of the final call to display function?

Options:
My name is A. I am 10 years old.
My name is null. I am 0 years old.
My name is null. I am 10 years old.
My name is A. I am 0 years old.

Ans:
My name is null. I am 10 years old.
*/

/*
9.
Consider the following class Student

public class Student {
   int age;
   String name;

   void display(){
       System.out.println("My name is " + this.name + ". I am "  + this.age + " years old");
   }

   void sayHello(String name){
       System.out.println(this.name + " says hello to " + name);
   }
}
And the following code in Client class

public class Client {
   public static void main(String[] args) {
       Student s1 = new Student();
       s1.age = 10;
       s1.name = "A";

       Student s2 = new Student();
       s2.age = 20;
       s2.name = "B";

       swap(s1, s2);

       s1.display();
   }

   private static void swap(Student s1, Student s2) {
       int tage = s1.age;
       s1.age = s2.age;
       s2.age = tage;

       String tname = s1.name;
       s1.name = s2.name;
       s2.name = tname;
   }
}
What is the output of the final call to display function?

Options:
My name is A. I am 10 years old.
My name is B. I am 20 years old.
My name is A. I am 20 years old.
My name is B. I am 10 years old.

Ans:
My name is B. I am 20 years old.
*/

/*
10.
Consider the following class Student

public class Student {
   int age;
   String name;

   void display(){
       System.out.println("My name is " + this.name + ". I am "  + this.age + " years old");
   }

   void sayHello(String name){
       System.out.println(this.name + " says hello to " + name);
   }
}
And the following code in Client class

public class Client {
   public static void main(String[] args) {
       Student s1 = new Student();
       s1.age = 10;
       s1.name = "A";

       Student s2 = new Student();
       s2.age = 20;
       s2.name = "B";

       swap(s1, s2);

       s1.display();
   }

   private static void swap(Student s1, Student s2) {
        Student temp = s1;
        s1 = s2;
        s2 = temp;
   }
}
What is the output of the final call to display function?

Options:
My name is A. I am 10 years old.
My name is B. I am 20 years old.
My name is A. I am 20 years old.
My name is B. I am 10 years old.

Ans:
My name is A. I am 10 years old.
*/