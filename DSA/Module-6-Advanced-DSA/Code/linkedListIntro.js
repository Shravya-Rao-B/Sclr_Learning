/*
You are given a singly linked list having head node A. You have to reverse the linked list and return the head node of that reversed list.

NOTE: You have to do it in-place and in one-pass.



Problem Constraints
1 <= Length of linked list <= 105

Value of each node is within the range of a 32-bit integer.



Input Format
First and only argument is a linked-list node A.



Output Format
Return a linked-list node denoting the head of the reversed linked list.



Example Input
Input 1:

 A = 1 -> 2 -> 3 -> 4 -> 5 -> NULL 
Input 2:

 A = 3 -> NULL 


Example Output
Output 1:

 5 -> 4 -> 3 -> 2 -> 1 -> NULL 
Output 2:

 3 -> NULL 


Example Explanation
Explanation 1:

 The linked list has 5 nodes. After reversing them, the list becomes : 5 -> 4 -> 3 -> 2 -> 1 -> NULL 
Expalantion 2:

 The linked list consists of only a single node. After reversing it, the list becomes : 3 -> NULL 

 Hints:
 To reverse Linked list we will next next node, previous node and 
current node. So, what if we iterate over the linked list and reverse 
node by node.

Solution Approach:
ITERATIVE SOLUTION
Assume that we have linked list 1 → 2 → 3 → Ø, we would like to change it to Ø ← 1 ← 2 ← 3.
While you are traversing the list, change the current node's next pointer to point to its previous element. 
Since a node does not have reference to its previous node, you must store its previous element beforehand. 
You also need another pointer to store the next node before changing the reference. 
Do not forget to return the new head reference at the end!
 */

function reverseLinkedList(A){
    if(A == null)
    return A;
    let pre = null;
    let curr = A;
    while(curr != null){
        let nxt = curr.next;
        curr.next = pre;
        pre = curr;
        curr = nxt
    }
    return pre;
}

/*
2.
Given a singly linked list A, determine if it's a palindrome. Return 1 or 0, denoting if it's a palindrome or not, respectively.



Problem Constraints
1 <= |A| <= 105



Input Format
The first and the only argument of input contains a pointer to the head of the given linked list.



Output Format
Return 0, if the linked list is not a palindrome.

Return 1, if the linked list is a palindrome.



Example Input
Input 1:

A = [1, 2, 2, 1]
Input 2:

A = [1, 3, 2]


Example Output
Output 1:

 1 
Output 2:

 0 


Example Explanation
Explanation 1:

 The first linked list is a palindrome as [1, 2, 2, 1] is equal to its reversed form.
Explanation 2:

 The second linked list is not a palindrom as [1, 3, 2] is not equal to [2, 3, 1].

 Hints:
We need to check if the first half is equal to the last half(when reversed). 
But you can not store a different copy of reversed last half as this solution will not have constant space.
Can you modify the original list to do the above task?

Solution Approach:
To check palindrome, we just have to reverse the latter half of the linked list, and then we can, in (n/2) steps total can compare if all elements are the same or not.
For finding the midpoint, first, we can in O(N) traverse the whole list and calculate the total number of elements.
Reversing is again O(N).
 */

function palindromLinkList(A){
    let temp = A[0];
    let count = 0;
    while(temp!= null){
        count = count + 1;
        temp = temp.next;
    }
    let mid = Math.floor(count/2);
    let h1 = A;
    let h2 = mid.next;
    mid.next = null;
    console.log('mid', mid);
    reverseLinkList(h2);
    function reverseLinkList(hd){
        let pre = null;
        let curr = hd;
        while(curr!= null){
            let nxt = curr.next;
            curr.next = pre;
            pre = curr;
            curr = nxt;
        }
    }
    function compareLinkList(head1, head2){
        while(head1!= null && head2!= null){
            if(head1.val == head2.val){
                head1 = head1.next;
                head2 = head2.next;
            }
            else if (head1.val !== head2.val){
                return false;
            }
        }
        if(head1.next == null && head2.next == null){
            return true;
        }
    }
    return compareLinkList(h1, h2);
}

// console.log(palindromLinkList([1, 2, 2, 1]));

function palindromeInArray(A){
    let p1 = 0;
    let p2 = A.length -1;
    while(p1<=p2){
        if(A[p1] !== A[p2]){
            return 0
        }
        p1++;
        p2--;
    }
    return 1
    }
// console.log(palindromeInArray([1,2,2,1]));
