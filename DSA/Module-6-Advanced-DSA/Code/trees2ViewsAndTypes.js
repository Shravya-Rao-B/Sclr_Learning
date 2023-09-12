/*
1.
Given a binary tree of integers denoted by root A. Return an array of integers representing the right view of the Binary tree.

Right view of a Binary Tree is a set of nodes visible when the tree is visited from Right side.



Problem Constraints
1 <= Number of nodes in binary tree <= 100000

0 <= node values <= 10^9



Input Format
First and only argument is head of the binary tree A.



Output Format
Return an array, representing the right view of the binary tree.



Example Input
Input 1:

 
            1
          /   \
         2    3
        / \  / \
       4   5 6  7
      /
     8 
Input 2:

 
            1
           /  \
          2    3
           \
            4
             \
              5


Example Output
Output 1:

 [1, 3, 7, 8]
Output 2:

 [1, 3, 4, 5]


Example Explanation
Explanation 1:

Right view is described.
Explanation 2:

Right view is described.

Hints:
How many nodes are visible for each level?

Solution Approach:
We can clearly see that only one node will be visible for each level.

For each level the rightmost node will be visible.

So to get the answer we can simply find for each level whenever you encounters the last node on that level append it to the answer.

We can solve the problem using level order traversal.
We will store all the nodes from the right to left of a level in a queue. We will put a null value in the queue to mark the end of the current level.
For each level, the first value in the queue is the rightmost node. We push this node value to our answer.
Then we traverse and pop the remaining nodes of the same level and push the nodes of the next level in the queue.
*/
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of integers
       solve : function(A){
           if(A == null){
               return []
           }
           let queue = [];
           let ansArray = [];
           if(A != null)
           {
           queue.push(A);
           // ansArray.push(A.data);
           }
           while(queue.length != 0){
               let levelSize = queue.length;
               let levelArray = [];
               for(let i=0; i<levelSize; i++){
                   let curr = queue.shift();
                   levelArray.push(curr.data);
                   if(curr.left != null){
                       queue.push(curr.left)
                   }
                   if(curr.right != null){
                       queue.push(curr.right)
                   }
                   if(i == levelSize -1 ){
                       ansArray.push(levelArray[levelSize-1])
                   }
               }
           }
                 return ansArray;
       }
   };
/*
2.

*/
   
/*
3.
Given a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return a 2D integer array denoting the level order traversal of the given binary tree.



Example Input
Input 1:

    3
   / \
  9  20
    /  \
   15   7
Input 2:

   1
  / \
 6   2
    /
   3


Example Output
Output 1:

 [
   [3],
   [9, 20],
   [15, 7]
 ]
Output 2:

 [ 
   [1]
   [6, 2]
   [3]
 ]


Example Explanation
Explanation 1:

 Return the 2D array. Each row denotes the traversal of each level.

 Hints:
 Can you maintain the depth of a node while traversing the tree? 

How can it help you after the tree traversal?

Solution Approach:
There are two ways to solve this problem.
Approach 1: Maintain a vector of size ‘depth’ of the tree. Do any tree traversals keep track of the 
current depth? Append the current element to vector[currentDepth]. Since we need stuff left to right, 
make sure the left subtree is visited before the right subtree ( Any traditional pre/post/inorder 
traversal should suffice ).

Approach 2: This is important. A lot of times, you’d be asked to do a traditional level order 
traversal. Or, to put informal words, a traversal where the extra memory used should be proportional 
to the nodes on a level rather than the depth of the tree. To do that, you need to make sure you are 
accessing all the nodes on a level before accessing the nodes next. This is a typical breadth-first 
search problem—queue FTW.

*/
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of array of integers
       solve : function(A){
           if(A == null){
               return []
           }
           let queue = [];
           let ansArray = [];
           if(A != null)
           {
           queue.push(A);
           // ansArray.push(A.data);
           }
           while(queue.length != 0){
               let levelSize = queue.length;
               let levelArray = [];
               for(let i=0; i<levelSize; i++){
                   let curr = queue.shift();
                   levelArray.push(curr.data);
                   if(curr.left != null){
                       queue.push(curr.left)
                   }
                   if(curr.right != null){
                       queue.push(curr.right)
                   }
               }
               ansArray.push(levelArray);
           }
                 return ansArray;
       }
   };
