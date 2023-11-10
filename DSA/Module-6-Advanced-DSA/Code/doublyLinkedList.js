/*
2.
You are given a linked list A
Each node in the linked list contains two pointers: a next pointer and a random pointer
The next pointer points to the next node in the list
The random pointer can point to any node in the list, or it can be NULL
Your task is to create a deep copy of the linked list A
The copied list should be a completely separate linked list from the original list, but with the same node values and random pointer connections as the original list
You should create a new linked list B, where each node in B has the same value as the corresponding node in A
The next and random pointers of each node in B should point to the corresponding nodes in B (rather than A)


Problem Constraints
0 <= |A| <= 106



Input Format
The first argument of input contains a pointer to the head of linked list A.



Output Format
Return a pointer to the head of the required linked list.



Example Input
Given list
   1 -> 2 -> 3
with random pointers going from
  1 -> 3
  2 -> 1
  3 -> 1
  


Example Output
   1 -> 2 -> 3
with random pointers going from
  1 -> 3
  2 -> 1
  3 -> 1
  


Example Explanation
You should return a deep copy of the list. The returned answer should not contain the same node as the original 
list, but a copy of them. The pointers in the returned list should not link to any node in the original input list.

Hints:
Hint 1:
The easiest way to approach this problem is using a hashmap :

Create a new linked list B with the same node values as A.
Create a hash map where keys are nodes in A and values are nodes in B.
Traverse A and B in parallel and update next pointers of nodes in B.
Traverse A again and update random pointers of nodes in B using the hash map.
Return the head of the copied linked list B.
Another efficient way can be creating new nodes and updating the random connections by traversing the list again.

Hint 2:
Steps without taking any extra space :

Create a new node A’ for each existing node A and join them together.
Copy the random links by setting A’.random = A.random.next for each new node A’.
Detach the new list from the original list by updating next pointers (A.next = A.next.next and A’.next = A’.next.next).
Return the head of the new list (the second node in the list).

Solution Approach:
There are 2 approaches to solving this problem.

Approach 1: Using hashmap.

Create a new linked list B by traversing the original linked list A and creating a new node for each node in A.
While traversing A, create a hash map where the keys are the nodes in A and the values are the corresponding nodes in B.
Traverse A again, and for each node in A, use the hash map to find the corresponding node in B. Then, update the next pointer of the current node in B to the corresponding node’s next pointer in A, and update the random pointer of the current node in B to the corresponding node’s random pointer in A.
Return the head of the copied linked list B.
Approach 2 : Using 2 traversals of the list.

Traverse the original linked list A and create a new node A’ for each existing node A and join them together. For example, if the original list is A->B->C, then the new list will be A->A’->B->B’->C->C’.
Traverse the new list and copy the random links. For each new node A’, set its random pointer to the corresponding node’s next pointer in the original list. That is, A’.random = A.random.next.
Detach the new list from the original list by updating the next pointers. Traverse the new list again and set each node’s next pointer to its next next pointer. For example, if the current node is A’, then A’.next = A’.next.next. Also, set each node’s original next pointer to its original next pointer by setting A.next = A.next.next.
Return the head of the new list, which is the second node in the list since the first node is a dummy node.


*/
