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
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

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
  Given the inorder and postorder traversal of a tree, construct the binary tree.

NOTE: You may assume that duplicates do not exist in the tree.



Problem Constraints
1 <= number of nodes <= 105



Input Format
First argument is an integer array A denoting the inorder traversal of the tree.

Second argument is an integer array B denoting the postorder traversal of the tree.



Output Format
Return the root node of the binary tree.



Example Input
Input 1:

 A = [2, 1, 3]
 B = [2, 3, 1]
Input 2:

 A = [6, 1, 3, 2]
 B = [6, 3, 2, 1]


Example Output
Output 1:

   1
  / \
 2   3
Output 2:

   1  
  / \
 6   2
    /
   3


Example Explanation
Explanation 1:

 Create the binary tree and return the root node of the tree.
  */

 
 /*
 3.
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
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
   //param A : root node of tree
   //return a array of integers
     preorderTraversal : function(root) {
          if (!root) {
              return [];
          }
          let stack = [] , res = [];
          stack.push(root);
          while (stack.length) {
              let node = stack.pop();
              res.push(node.data);
              if (node.right) {
                  stack.push(node.right);
              }
              if (node.left) {
                  stack.push(node.left);
              }
          }
          return res;
     }
  };

