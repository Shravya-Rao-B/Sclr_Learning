
module.exports = { 
    //param A : head node of linked list
    //param B : head node of linked list
    //return the head node in the linked list
       mergeTwoLists : function(A, B){
           if(A == null){
               return B
           }
           else if (B == null){
               return A
           }
           let head = A;
           if(A.data < B.data){
                head = A;
                A = A.next
           }
           else if(B.data < A.data) {
                head = B;
                B = B.next;
           }
           let temp = head;
           while(A!= null && B!=null){
               if(A.data < B.data){
                   temp.next = A;
                   A = A.next;
                   temp = temp.next;
               }
           else if (B.data < A.data){
               temp.next = B;
               B = B.next;
               temp = temp.next;
           }
           }
           return head
       }
   };