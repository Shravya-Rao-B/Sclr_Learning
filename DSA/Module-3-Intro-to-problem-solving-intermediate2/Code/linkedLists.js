/*
1.
You are given A which is the head of a linked list. Print the linked list in space separated manner.

Note : The last node value must also be succeeded by a space and after printing the entire list you should print a new line



Problem Constraints
1 <= size of linked list <= 105

1 <= value of nodes <= 109



Input Format
The first argument A is the head of a linked list.


Output Format
You dont need to return anything


Example Input
Input 1:
A = 1 -> 2 -> 3
Input 2:
A = 4 -> 3 -> 2 -> 1


Example Output
Output 1:
1 2 3
Output 2:
4 3 2 1


Example Explanation
For Input 1:
We print the given linked list
For Input 2:
We print the given linked list

Hints:
Think about traversing all the nodes of the linkedlist. 

Solution Appraoch:
Take a node reference/pointer to head and with the help of "next", traverse all the nodes
and keep on printing the value of each node. 

Time Complexity : O(N)
Space Complexity : O(1)
where N is the size of the linked list

Scaler Solution:
module.exports = { 
 //param A : head node of linked list
	solve : function(A) {
      let result = '';
      while (A !== null) {
        result += A.data + ' ';
        A = A.next;
      }
      console.log(result);
    }
};
*/

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
    //param A : head node of linked list
       solve : function(A){
           let curr = A;
           let ans = "";
           while(curr != null){
               ans += curr.data + " "
               curr = curr.next;
           }
           console.log(ans)
       }
   };

   /*
   2.
   You are given A which is the head of a linked list. Also given is the value B and position C. Complete the function that should insert a new node with the said value at the given position.

Notes:

In case the position is more than length of linked list, simply insert the new node at the tail only.
In case the pos is 0, simply insert the new node at head only.
Follow 0-based indexing for the node numbering.


Problem Constraints
1 <= size of linked list <= 105

1 <= value of nodes <= 109

1 <= B <= 109

0 <= C <= 105



Input Format
The first argument A is the head of a linked list.

The second argument B is an integer which denotes the value of the new node

The third argument C is an integer which denotes the position of the new node



Output Format
Return the head of the linked list


Example Input
Input 1:
A = 1 -> 2
B = 3
C = 0
Input 2:
A = 1 -> 2
B = 3
C = 1


Example Output
Output 1:
3 -> 1 -> 2
Output 2:
1 -> 3 -> 2


Example Explanation
For Input 1:
The new node is add to the head of the linked list
For Input 2:
The new node is added after the first node of the linked list

Hints:
There are different-different cases. 
1. If linkedlist is empty already, make a new node and declare it as head node. 
2. If C = 0, you need to insert at head.
3. For all other values of C - 
   iterate to C-1 index
   create a new node 
   insert it at Cth index.

Solution Approach:
There are three types of insertion possible:-
1) Insert at head - The new node becomes the new head and the next of the 
new node points towards the old head.
2) Insert at tail - The next of the current tail will point toward the new node
3) Insert at any other node - Traverse to the required position, the next of the previous
node should point towards new node and the next of the new node should point towards the
old next of the previos node.

Time Complexity : O(N)
Space Complexity : O(1)
where N is the size of the linked list

Scaler solution:
// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //param B : integer
 //param C : integer
 //return the head node in the linked list
	solve : function(A, B, C){
        var n = new Node(B);
        if (C <= 0) {
            n.next = A;
            return n;
        }
        
        var i = 0;
        var temp = A;
        while (i < C-1 && temp.next != null) {
            i += 1;
            temp = temp.next;
        }
        
        n.next = temp.next;
        temp.next = n;
        return A;
	}
};
   */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
    //param A : head node of linked list
    //param B : integer
    //param C : integer
    //return the head node in the linked list
       solve : function(A, B, C){
           let curr = A;
           for(let i=0; i<C; i++){
               if(i == C -1){
                   let newNode = new Node(B)
                   let nxt = curr.next;
                   curr.next = newNode;
                   newNode.next = nxt;
               }
               if(curr.next != null)
               curr = curr.next;
           }
           return A
       }
   };

   /*
   3.
   Construct a class Circle that represents a Circle.

The class should support the following functionalities:-

perimeter() -> returns the perimeter of the circle
area() -> returns the area of the circle

Note: Assume Π (pi) = 3.14 for calculations.

Input Format:

First argument A is an integer representing the number of testcases.
For each case, the radius r is taken as input in new line.
Output Format:

The perimeter and area of the constructed circle is printed.
Sample Input:

2     # number of cases
1     # radius of first case
2     # radius of second case
Sample output:

6.28     #perimeter of first case
3.14     #area of first case
12.56    #perimeter of second case
12.56    #area of second case

Hints:
First, you need define properties of circle. To define a circle, only one property “radius” is required.

Then, you need to define constructor
Constructor is a special function with same name as class name and no return type.
Generally, it is used to initialise the properties of class.

perimeter() -
perimeter of a circle is 2 * pi * r, where value of pi is 3.14 and r is radius.

area() -
area of a circle is pi * r * r, where value of pi is 3.14 and r is radius.

Note - Please do check the return type before returning.
If you are getting a double value and you need to return float value, then typecasting will be needed.

Scaler Solution:
class Circle { 
	// Define constructor here
	constructor(x){
	    this.radius = x;
	}
	
    perimeter(){
		// Complete the function
		return 2 * 3.14 * this.radius;
	}
    
	area(){
		// Complete the function
		return 3.14 * this.radius * this.radius;
	}
}
*/


class Circle { 
	// Define constructor here
    constructor(r){
        this.r = r
    }
	
    perimeter(){
		// Complete the function
		return 2 * 3.14 * this.r
	}
    
	area(){
		// Complete the function
		return 3.14 * this.r * this.r
	}
}

// a = new Circle(3)  // Radius = 3
// a.perimeter() // 18.84
// a.area() // 28.26

/*
4.
Construct a class Rectangle that represents a rectangle.

The class should support the following functionalities:-

perimeter() -> returns the perimeter of the rectangle
area() -> returns the area of the rectangle
Input format:

First argument A is an integer representing the number of testcases.
For each case, x (length) and y (breadth) are taken as input in new line.
Output format:

The perimeter and area of the constructed rectangle are printed.
Sample Input:

1 # number of cases
1 # radius of first case
2 # radius of second case
Sample output:

4 #perimeter of rectangle
1 #area of rectangle

Hints:
First, you need to define the properties of rectangle.
To define a rectangle, its length and breadth are required.

Next is constructor -
Constructor is a special function with same name as class name and no return type.
Generally, it is used to initialise the properties of class.

perimeter() -
perimeter of a rectangle is 2 * (length + breadth).

area() -
area of a rectangle is (length * breadth).

Scaler Solution:
class Rectangle { 
	
	// Define constructor here
	constructor(x, y){
	    this.l = x;
	    this.b = y;
	}	
		
	perimeter(){
		// Complete the function
		return 2 * (this.l + this.b);
	}
	
	area(){
		// Complete the function
		return (this.l * this.b);
	}
	
}

/*
    let a = new Rectangle(2, 3)  // Length = 2, Breadth = 3
	a.perimeter() // Should give 10
    a.area() // Should give 6

*/

/*
delete a linked list

*/
function deleteNode(listhead, x){
    let temp = listhead;
    while(temp.data != x){
        temp = temp.next;
    }
    temp.data = temp.next.data;
    temp.next = temp.next.next;
    return listhead;
}
deleteNode(12, 3);