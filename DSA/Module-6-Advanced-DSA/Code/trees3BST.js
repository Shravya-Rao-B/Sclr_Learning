/*
1.
You are given a binary tree represented by root A. You need to check if it is a Binary Search Tree or not.

Assume a BST is defined as follows:

1) The left subtree of a node contains only nodes with keys less than the node's key.

2) The right subtree of a node contains only nodes with keys greater than the node's key.

3) Both the left and right subtrees must also be binary search trees.



Problem Constraints
1 <= Number of nodes in binary tree <= 105

0 <= node values <= 232-1



Input Format
First and only argument is head of the binary tree A.



Output Format
Return 0 if false and 1 if true.



Example Input
Input 1:

 
   1
  /  \
 2    3
Input 2:

 
  2
 / \
1   3


Example Output
Output 1:

 0
Output 2:

 1


Example Explanation
Explanation 1:

 2 is not less than 1 but is in left subtree of 1.
Explanation 2:

Satisfies all conditions.

Hints:
Hint 1:
Traverse the tree using recursion and check if every node is satisfying the condition for BST or not.
For this, initialize min and max with -infinity and +infinity respectively.
Start with root node and check if it is lying in the range (min, max), and update min and max.

Now, check for left and right subtree recursively.
Left child value should lie between (min, value of node) and right child value should lie between (value of node, max).

Note - Since max value can go up to 2^32-1, take min = LONG.MIN_VALUE, max = LONG.MAX_VALUE

Solution Approach:
Traverse the tree using recursion and check if every node is satisfying the condition for BST or not.
For this, initialize min and max with -infinity and +infinity respectively.
Start with root node and check if it is lying in the range (min, max), and update min and max.

Now, check for left and right subtree recursively.
Left child value should lie between (min, value of node) and right child value should lie between (value of node, max).

In this, we are traversing each node only once. So, the time complexity is O(n).
*/
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return an integer
       isValidBST : function(A){
           let min =  Number.NEGATIVE_INFINITY;
           let max =  Number.POSITIVE_INFINITY;
           function validate(node, min, max){
               if(node == null){
                   return true
               }
               if(node.data <= min || node.data >= max){
                   return false;
               }
               let f1 = validate(node.left, min,node.data);
               let f2 = validate(node.right, node.data,max);
               if(f1 && f2){
                  return 1;
              }
              else {
                  return 0
              }
           }
           return validate(A, min, max);
       }
   };
/*
2.
Given an array where elements are sorted in ascending order, convert it to a height Balanced Binary Search Tree (BBST).

Balanced tree : a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.



Problem Constraints
1 <= length of array <= 100000



Input Format
First argument is an integer array A.



Output Format
Return a root node of the Binary Search Tree.



Example Input
Input 1:

 A : [1, 2, 3]
Input 2:

 A : [1, 2, 3, 5, 10]


Example Output
Output 1:

      2
    /   \
   1     3
Output 2:

      3
    /   \
   2     5
  /       \
 1         10


Example Explanation
Explanation 1:

 You need to return the root node of the Binary Tree.

Hints:
Hint 1:
What will happen when you choose the middle element of the array as the root?

After that, can you simulate the same thing for the left and right parts of the array?

Solution Approach:
For a BST, all values lower than the root go in the left part of the root, and all values higher go in the right part of the root.
To balance the tree, we will need to make sure we distribute the elements almost equally in the left and right parts.
So we choose the mid part of the array as the root and divide the elements around it.

Things to take care of :
1) Are you passing a copy of the array around, or are you only passing around a reference?
2) Are you dividing the array before passing it onto the next function call or are you just specifying the start and end index?
*/
// Definition for a binary tree node 
// function TreeNode(data){ 
//       this.data = data 
//       this.left = null 
//       this.right = null 
// } 
module.exports = { 
    /*** param A: list of integer 
    ***  return: root node of balanced BST 
    ***/ 
    sortedArrayToBST: function (nums) { 
        return buildBST(nums, 0, nums.length - 1);
        function buildBST(nums, low, high) {
            if (low < 0 || high > nums.length - 1){
                return null;
            }
            if (nums.length == 0 || low > high){
                return null;
            }
            let mid = low + Math.floor((high - low) / 2);
            let root = new TreeNode(nums[mid]);
            root.left = buildBST(nums, low, mid - 1);
            root.right = buildBST(nums, mid + 1, high);
            return root;
        }
    }, 
};
/*
3.
Given a Binary Search Tree A. Check whether there exists a node with value B in the BST.


Problem Constraints
1 <= Number of nodes in binary tree <= 105

0 <= B <= 106



Input Format
First argument is a root node of the binary tree, A.

Second argument is an integer B.



Output Format
Return 1 if such a node exist and 0 otherwise



Example Input
Input 1:

            15
          /    \
        12      20
        / \    /  \
       10  14  16  27
      /
     8

     B = 16
Input 2:

            8
           / \
          6  21
         / \
        1   7

     B = 9


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 Node with value 16 is present.
Explanation 2:

 There is no node with value 9.

*/
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //param B : integer
    //return an integer
       solve : function(A, B){
           let root = A;
           while(root != null){
               if( root.data == B){
                   return 1
               }
               else if(B < root.data){
                   root = root.left
               }
               else if(B> root.data){
                   root = root.right
               }
           }
           return 0
       }
   };
/*
4.
Given a Binary Search Tree(BST) A. If there is a node with value B present in the tree delete it and return the tree.

Note - If there are multiple options, always replace a node by its in-order predecessor


Problem Constraints
2 <= No. of nodes in BST <= 105
1 <= value of nodes <= 109
Each node has a unique value


Input Format
The first argument is the root node of a Binary Search Tree A.
The second argument is the value B.


Output Format
Delete the given node if found and return the root of the BST.


Example Input
Input 1:

            15
          /    \
        12      20
        / \    /  \
       10  14  16  27
      /
     8

     B = 10

Input 2:

            8
           / \
          6  21
         / \
        1   7

     B = 6



Example Output
Output 1:

            15
          /    \
        12      20
        / \    /  \
       8  14  16  27

Output 2:

            8
           / \
          1  21
           \
            7



Example Explanation
Explanation 1:

Node with value 10 is deleted 
Explanation 2:

Node with value 6 is deleted 

Hints:
Hint 1:
The different cases for deletion of nodes are

The node is a leaf node
The node has one child
The node has 2 children

Solution Approach:
The node is a leaf node - In this cases, we can just delete the node and return the root, since deleting any leaf node doesn’t affect the remainig tree.


The node has one child - In this case, replace the node with the child node and return the root.


The node has 2 children - In this case, in order to conserve the BST properties, we need to replace the node with it’s inorder predecssor (The node that comes before in the inorder traversal) i.e; we need to replace it with :

The greatest value node in it’s left subtree and return the root.
*/