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


*/
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