/*
1.
You are given a linked list that contains a loop.
You need to find the node, which creates a loop and break it by making the node point to NULL.



Problem Constraints
1 <= number of nodes <= 1000



Input Format
The first of the input contains a LinkedList, where the first number is the number of nodes N, and the next N nodes are the node value of the linked list.
The second line of the input contains an integer which denotes the position of node where cycle starts.



Output Format
return the head of the updated linked list.



Example Input
Input 1:

 
1 -> 2
^    |
| - - 
Input 2:

3 -> 2 -> 4 -> 5 -> 6
          ^         |
          |         |    
          - - - - - -


Example Output
Output 1:

 1 -> 2 -> NULL
Output 2:

 3 -> 2 -> 4 -> 5 -> 6 -> NULL


Example Explanation
Explanation 1:

 Chain of 1->2 is broken.
Explanation 2:

 Chain of 4->6 is broken.

Hints:
First, you need to check if loop is present in the given linkedlist or not.
If loop is not there, then there is nothing to do.
But if loop is present, then in order to break it,
you need find a node which has 2 pointers pointing towards it i.e first node in the loop.

Solution Approach:
How to check if loop is present in the given linkedlist or not ->
Take two pointers - slow and fast and initialize them with head of linkedlist.
Keep moving slow by one step and fast by two steps.
If at any point slow and fast are meeting, that means, loop is detected.
After that, to find the first node in the loop, re-initialize just slow with head of linkedlist.
Keep moving slow and fast both by one step only. They will meet again and they will meet at first node of the loop.
Finally, break the loop.
Note - (Check the video solution for the proof).

*/

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
    //param A : head node of linked list
    //return the head node in the linked list
       solve : function(A){
           let slow = A;
           let fast = A;
           //find the meeting point 
           while(fast != null && fast.next != null){
               slow = slow.next;
               fast = fast.next.next;
               if(slow == fast) break;
           }
           let meet = slow;
           let start = A;
           let pre ;
           while(meet != start){
               //Pre will be a node from where the loop starts and enters to the linked list again
               pre = meet;
               start = start.next;
               meet = meet.next;
           }
           pre.next = null;
           return A
       }   
   };

/*
2.
Given a linked list of integers, find and return the middle element of the linked list.

NOTE: If there are N nodes in the linked list and N is even then return the (N/2 + 1)th element.



Problem Constraints
1 <= length of the linked list <= 100000

1 <= Node value <= 109



Input Format
The only argument given head pointer of linked list.



Output Format
Return the middle element of the linked list.



Example Input
Input 1:

 1 -> 2 -> 3 -> 4 -> 5
Input 2:

 1 -> 5 -> 6 -> 2 -> 3 -> 4


Example Output
Output 1:

 3
Output 2:

 2


Example Explanation
Explanation 1:

 The middle element is 3.
Explanation 2:

 The middle element in even length linked list of length N is ((N/2) + 1)th element which is 2.

 Hints:
 One way is to traverse the whole linked list and calculate the length and then traverse half the length to find the middle element.

Can you do it in one traversal?

Solution Approach:
One way is to traverse the whole linked list and calculate the length and then traverse half the length to find the middle element.

We can do it in one traversal by maintaining a slow and fast pointer.

The fast pointer moves twice as the slow pointer does. When the fast pointer is at the end of the linked list, the slow pointer will point to the middle element.

Return the element at which the slow pointer points.

*/
function findLinListMid(A){
   function Node(data){
     this.data = data
     this.next = null
   }
    let slow = A;
    let fast = A;
while(fast!= null && fast.next!= null){
    slow = slow.next;
    fast = fast.next.next
}
return slow.data;
}


console.log(findLinListMid([12,4,6]));

/*
3.

Merge two sorted linked lists, A and B, and return it as a new list.

The new list should be made by splicing together the nodes of the first two lists and should also be sorted.



Problem Constraints
0 <= |A|, |B| <= 105



Input Format
The first argument of input contains a pointer to the head of linked list A.

The second argument of input contains a pointer to the head of linked list B.



Output Format
Return a pointer to the head of the merged linked list.



Example Input
Input 1:

 A = 5 -> 8 -> 20
 B = 4 -> 11 -> 15
Input 2:

 A = 1 -> 2 -> 3
 B = Null


Example Output
Output 1:

 4 -> 5 -> 8 -> 11 -> 15 -> 20
Output 2:

 1 -> 2 -> 3


Example Explanation
Explanation 1:

 Merging A and B will result in 4 -> 5 -> 8 -> 11 -> 15 -> 20 
Explanation 2:

 We don't need to merge as B is empty. 



Expected Output
Enter your input as per the following guideline:
There are 2 lines in the input

Line 1 ( Corresponds to arg 1 ) : Elements in the linked list. First number S is the number of nodes. Then S numbers follow indicating the val in each of the nodes in sequence
    For example, LinkedList: "5 --> 9 --> 7" will be written as "3 5 9 7"(without quotes).

Line 2 ( Corresponds to arg 2 ) : Elements in the linked list. First number S is the number of nodes. Then S numbers follow indicating the val in each of the nodes in sequence
    For example, LinkedList: "5 --> 9 --> 7" will be written as "3 5 9 7"(without quotes).

Hints:
Maintain pointers in both the linked list and keep appending the elements to the list to be returned.

NOTE: You don’t have to create new nodes here, i.e., the list to be returned should be made from the combination of both of the given lists.

Solution Approach:
The first thing to note is that all you would want to do is modify the next pointers. You don’t need to create new nodes.

At every step, you choose the minimum of the current head X on the 2 lists and modify your answer’s next pointer to X. You move the current pointer on the said list and the current answer.

Corner case,
Make sure that at the end of the loop, when one of the lists goes empty, you do include the remaining elements from the second list into your answer.

Test case : 1->2->3 4->5->6

*/

module.exports = {

    mergeTwoLists: function(A, B) {

        // Handle the case when one of the lists is empty

        if (A == null) {

            return B; // Return the other list

        } else if (B == null) {

            return A; // Return the other list

        }

        // Initialize pointers for the merged list (head and current)

        let head, current;

        // Determine the head of the merged list based on the first nodes of A and B

        if (A.data < B.data) {

            head = A;

            A = A.next; // Move A's pointer to the next node

        } else {

            head = B;

            B = B.next; // Move B's pointer to the next node

        }

        current = head; // Initialize current as the head

        // Merge the lists by comparing and linking nodes

        while (A != null && B != null) {

            if (A.data < B.data) {

                current.next = A; // Link current to the smaller node from A

                A = A.next; // Move A's pointer to the next node

            } else {

                current.next = B; // Link current to the smaller node from B

                B = B.next; // Move B's pointer to the next node

            }

            current = current.next; // Move current to the newly linked node

        }

        // Connect any remaining nodes from A or B to the merged list

        if (A != null) {

            current.next = A;

        } else {

            current.next = B;

        }

        // Return the head of the merged list

        return head;

    }

};
/*
4.
Sort a linked list, A in O(n log n) time.



Problem Constraints
0 <= |A| = 105



Input Format
The first and the only arugment of input contains a pointer to the head of the linked list, A.



Output Format
Return a pointer to the head of the sorted linked list.



Example Input
Input 1:

A = [3, 4, 2, 8]
Input 2:

A = [1]


Example Output
Output 1:

[2, 3, 4, 8]
Output 2:

[1]


Example Explanation
Explanation 1:

 The sorted form of [3, 4, 2, 8] is [2, 3, 4, 8].
Explanation 2:

 The sorted form of [1] is [1].

Hints:
Hint 1:
Merge sort is usually quicker and easier to implement when it comes to implementing sorting in O(nlogn).

Solution Approach:
We can try to implement either merge sort or qsort.

Let us look at the merge sort. We start traversing the singly linked list to find the midpoint of the singly linked list.
Now, we will sort the first half and second half separately by calling the merge sort function on them.
Then we only have to merge the 2 lists ( Note that we already have solved a problem to merge 2 lists ).
*/