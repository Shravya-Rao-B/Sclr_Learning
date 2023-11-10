/*
1.
Given an array of words A (dictionary) and another array B (which contain some words).

You have to return the binary array (of length |B|) as the answer where 1 denotes that the word is present in the dictionary and 0 denotes it is not present.

Formally, for each word in B, you need to return 1 if it is present in Dictionary and 0 if not.

Such problems can be seen in real life when we work on any online editor (like Google Documnet), if the word is not valid it is underlined by a red line.

NOTE: Try to do this in O(n) time complexity.



Problem Constraints
1 <= |A| <= 1000

1 <= sum of all strings in A <= 50000

1 <= |B| <= 1000



Input Format
First argument is array of strings A.

First argument is array of strings B.



Output Format
Return the binary array of integers according to the given format.



Example Input
Input 1:

A = [ "hat", "cat", "rat" ]
B = [ "cat", "ball" ]
Input 2:

A = [ "tape", "bcci" ]
B = [ "table", "cci" ]


Example Output
Output 1:

[1, 0]
Output 2:

[0, 0]


Example Explanation
Explanation 1:

Only "cat" is present in the dictionary.
Explanation 2:

None of the words are present in the dictionary.

Hints:
To this in O(n), you will need a different data structure called tries.
You can read about them first and then try to attempt this problem.

Solution Approach:
To this in O(n), you will need a different data structure called tries.
You can insert all dictionary strings in a trie and then try finding all
given strings in the trie; each of those will take O(length) time.
Thus you can do this without the additional log factor you
get while working with sets.

CHAT GPT help:
Here is a pseudo-code for the given code:

Define a constant ALPHABET_SIZE with a value of 26.
Create a struct trieNode with an array t of size ALPHABET_SIZE and a boolean variable isEnd.
Create a utility function getNode() that returns a new trieNode with all elements of t initialized to NULL and isEnd set to false.
Create a function insert that takes a trieNode pointer root and a string key as input:
Initialize a trieNode pointer trail to root.
Iterate through the characters of key:
If the character at the current index in t of trail is NULL, create a new trieNode and assign it to t of trail at the corresponding index.
Update trail to the trieNode at the corresponding index in t of trail.
Set isEnd of trail to true to indicate that a word ends at this node.
Create a function search_mod that takes a trieNode pointer root and a string word as input and returns a boolean value:
Initialize a trieNode pointer trail to root.
Iterate through the characters of word:
If the character at the current index in t of trail is NULL, return false as the word is not present in the trie.
Update trail to the trieNode at the corresponding index in t of trail.
Check if trail is not NULL and isEnd is true. If so, return true as the word is present in the trie.
Otherwise, return false.
Create a function solve that takes two vector of strings A and B as input and returns a vector of integers:
Create a trieNode pointer root and initialize it using getNode().
Iterate through each string x in A and insert it into the trie using the insert function.
Create an empty vector ans.
Iterate through each string x in B:
If the search_mod function returns false for root and x, append 0 to ans.
Otherwise, append 1 to ans.
Return ans.
*/

module.exports = { 
    //param A : array of strings
    //param B : array of strings
    //return a array of integers
       solve : function(A, B){
           class TrieNode {
               constructor(){
                   this.children = new Array(256).fill(null)
                   this.eow = false
               }
           }
           //Funxtion to insert a word to trie
           function insertToTrie(root, word){
               let curr = root;
                   for(let i=0; i<word.length; i++)
                   {
                       let idx = word.charCodeAt(i);
                           if(curr.children[idx] == null)
                           {
                           let child = new TrieNode();
                           curr.children[idx] = child;
                           }
                       curr = curr.children[idx]
                   }
               curr.eow = true;
           } 
           //Function to search if a given word exists in trie
           let ansArray = [];
           function searchWord(root, word){
               let curr = root;
               for(let i=0; i<word.length; i++){
                   let idx = word.charCodeAt(i);
                   if(curr.children[idx] == null){
                        ansArray.push(0);
                       //To avoid curr becoming equal to null add a return statement when the children is null.
                        return;
                   }
                   curr = curr.children[idx]
               }
               if(curr.eow){
                   ansArray.push(1);
               }
               else {
                   ansArray.push(0);
               }
           }
       //Insert all words from dictionary to trie
           let root = new TrieNode();
           for(let i=0; i<A.length; i++){
               insertToTrie(root,A[i]);
           } 
       //Check for every word in B if its present in dictionary
           for(let i=0; i<B.length; i++)
           {
            searchWord(root,B[i]) 
           }
           return ansArray;
       }
   };   

/*
3.
Given a list of N words, find the shortest unique prefix to represent each word in the list.

NOTE: Assume that no word is the prefix of another. In other words, the representation is always possible



Problem Constraints
1 <= Sum of length of all words <= 106



Input Format
First and only argument is a string array of size N.



Output Format
Return a string array B where B[i] denotes the shortest unique prefix to represent the ith word.



Example Input
Input 1:

 A = ["zebra", "dog", "duck", "dove"]
Input 2:

A = ["apple", "ball", "cat"]


Example Output
Output 1:

 ["z", "dog", "du", "dov"]
Output 2:

 ["a", "b", "c"]


Example Explanation
Explanation 1:

 Shortest unique prefix of each word is:
 For word "zebra", we can only use "z" as "z" is not any prefix of any other word given.
 For word "dog", we have to use "dog" as "d" and "do" are prefixes of "dov".
 For word "du", we have to use "du" as "d" is prefix of "dov" and "dog".
 For word "dov", we have to use "dov" as "d" and do" are prefixes of "dog".  
 
Explanation 2:

 "a", "b" and c" are not prefixes of any other word. So, we can use of first letter of each to represent.

 Hints:
 Use Prefix tree or Trie ( https://www.topcoder.com/community/data-science/data-science-tutorials/using-tries/ )

Assume you have all the prefixes of the word stored in the tree along with their frequencies. Is it possible to arrive at the solution now?

Solution Approach:
input: ["zebra", "dog", "duck", "dot"]

Now we will build prefix tree and we will also store count of characters

                root
                /|
         (d, 3)/ |(z, 1)
              /  |
          Node1  Node2
           /|        \
     (o,2)/ |(u,1)    \(e,1)
         /  |          \
   Node1.1  Node1.2     Node2.1
      | \         \            \
(g,1) |  \ (t,1)   \(c,1)       \(b,1)
      |   \         \            \ 
    Leaf Leaf       Node1.2.1     Node2.1.1
    (dog)  (dot)        \                  \
                         \(k, 1)            \(r, 1)
                          \                  \   
                          Leaf               Node2.1.1.1
                          (duck)                       \
                                                        \(a,1)
                                                         \
                                                         Leaf
                                                         (zebra)

Now, for every leaf / word , we find the character nearest to the root with frequency as 1. 
The prefix that the path from root to this character corresponds to, is the representation of 


*/
module.exports = { 
 //param A : array of strings
 //return a array of strings
	prefix : function(A){
        class TrieNode {
            constructor(){
                this.children = new Array(26).fill(null)
                this.eow = false
                this.frequency = 1
            }
        }
        //Insert into trie and increment frequency if letter has been visited
        function insertIntoTrie(root, word){
            let curr = root;
            for(let i=0; i<word.length; i++){
                let idx = word.charCodeAt(i);
                if(curr.children[idx] == null){
                    let child = new TrieNode();
                    curr.children[idx] = child;
                }
                else {
                    curr.children[idx].frequency++;
                }
                curr = curr.children[idx];
            }
            curr.eow = true;
        }
        //function to get shortest possible prefix
        let prefixArray = [];
        function getPrefix(root, word){
            let prefix = "";
            let curr = root;
            for(let i=0; i<word.length; i++){
                let idx = word.charCodeAt(i);
                
            //I added the below as I got error. But how am I getting null here when I have added all chars to trie
                if(curr.children[idx] != null)
                {
                var freq = curr.children[idx].frequency;
                prefix = prefix + String.fromCharCode(idx);
            }
                if(freq > 1){
                //    prefix = prefix + String.fromCharCode(idx)
                }
                else if( freq == 1){
                    //prefix = prefix + String.fromCharCode(idx)
                    prefixArray.push(prefix);
                    break;
                }
                curr = curr.children[idx];
            }
        } 
        let root = new TrieNode();
        for(let i=0; i<A.length ; i++){
            insertIntoTrie(root,A[i])
        }
        for(let i=0; i<A.length ; i++){
            getPrefix(root, A[i])
        }
        return prefixArray;
	}
};
//**** TA code */

module.exports = {
    prefix: function (A) {
      class TrieNode {
        constructor() {
          this.children = new Array(26).fill(null);
          this.eow = false;
          this.frequency = 1;
        }
      }
  
      function insertIntoTrie(root, word) {
        let curr = root;
        for (let i = 0; i < word.length; i++) {
          let idx = word.charCodeAt(i);
          if (curr.children[idx] == null) {
            let child = new TrieNode();
            curr.children[idx] = child;
          } else {
            curr.children[idx].frequency++;
          }
          curr = curr.children[idx];
        }
        curr.eow = true;
      }
  
      let prefixArray = [];
  
      function getPrefix(root, word) {
        let curr = root;
        let prefix = "";
        for (let i = 0; i < word.length; i++) {
          let idx = word.charCodeAt(i);
  
          if (curr.children[idx] != null) {
            var freq = curr.children[idx].frequency;
            prefix = prefix + String.fromCharCode(idx);
          }
          if(freq > 1){
  
          }
          else if (freq == 1) {
            prefixArray.push(prefix);
            break;
          }
          curr = curr.children[idx];
        }
      }
  
      let root = new TrieNode();
      for (let i = 0; i < A.length; i++) {
        insertIntoTrie(root, A[i]);
      }
      for (let i = 0; i < A.length; i++) {
        getPrefix(root, A[i]);
      }
      return prefixArray;
    },
  };
  