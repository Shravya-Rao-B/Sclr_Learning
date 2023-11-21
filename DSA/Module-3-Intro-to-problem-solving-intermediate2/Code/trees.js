/*
1.
Given a binary tree, return the inorder traversal of its nodes' values.



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return an integer array denoting the inorder traversal of the given binary tree.



Example Input
Input 1:

   1
    \
     2
    /
   3
Input 2:

   1
  / \
 6   2
    /
   3


Example Output
Output 1:

 [1, 3, 2]
Output 2:

 [6, 1, 3, 2]


Example Explanation
Explanation 1:

 The Inorder Traversal of the given tree is [1, 3, 2].
Explanation 2:

 The Inorder Traversal of the given tree is [6, 1, 3, 2].



Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
Arg 1: A Binary Tree, -1 signifies a NULL child, For e.g 6 9 4 -1 -1 8 -1 -1 3 -1 -1
tree-icon

Hints:
You can do this problem easily with recursion, but recursion is not allowed here.

A stack can help you to avoid recursion. How?

Solution Approach:

Think stack.

Recursive call would look something like this :

inorderprint(root->left);
print(root->val);
inorderprint(root->right);

Instead of calling the functions, can you put the nodes on a stack and process them?

How would your solution work if you could change the original tree?
How would it work if you were not allowed to change the tree but use additional memory ( track the number of times a node has appeared in the tree )?
How would it work if you were not even allowed the extra memory?
*/
module.exports = { 
    //param A : root node of tree
    //return a array of integers
      inorderTraversal : function inOrder(A){
                   let ansArr = [];
                   let stack = [];
                   let node = A;
                   while(node != null || stack.length !== 0){
                           if(node != null){
                                   stack.push(node);
                                   node = node.left;
                           }
                           else {
                                   node = stack.pop();
                                   ansArr.push(node.data);
                                   node = node.right;        
                           }
                   }
                   return ansArr;
           }
   };


  /*
  2.
  Given a binary tree, return the preorder traversal of its nodes values.



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return an integer array denoting the preorder traversal of the given binary tree.



Example Input
Input 1:

   1
    \
     2
    /
   3
Input 2:

   1
  / \
 6   2
    /
   3


Example Output
Output 1:

 [1, 2, 3]
Output 2:

 [1, 6, 2, 3]


Example Explanation
Explanation 1:

 The Preoder Traversal of the given tree is [1, 2, 3].
Explanation 2:

 The Preoder Traversal of the given tree is [1, 6, 2, 3].
 Hints:
 You can do this problem easily with recursion, but recursion is not allowed here.

Stack can help you to avoid recursion. How?

Solution Approach:
Think about using Stack.

Recursive call would look something like this :

print(root->val);
preorderprint(root->left);
preorderprint(root->right);

Instead of calling the functions, can you put the nodes on a stack and process them?

  */

module.exports = { 
    //param A : root node of tree
    //return a array of integers
      preorderTraversal : function(A){
           let ansArr = [];
           let stack = [];
           stack.push(A);
           let node = A;
           while(stack.length !== 0){
               node = stack.pop();
               ansArr.push(node.data)
               if(node.right != null)
               stack.push(node.right);
               if(node.left != null)
               stack.push(node.left);
   
           }
           return ansArr;  
      }
    };

/*
3.
Given a binary tree, return the Postorder traversal of its nodes values.



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return an integer array denoting the Postorder traversal of the given binary tree.



Example Input
Input 1:

   1
    \
     2
    /
   3
Input 2:

   1
  / \
 6   2
    /
   3


Example Output
Output 1:

 [3, 2, 1]
Output 2:

 [6, 3, 2, 1]


Example Explanation
Explanation 1:

 The Preoder Traversal of the given tree is [3, 2, 1].
Explanation 2:

 The Preoder Traversal of the given tree is [6, 3, 2, 1].
 
*/