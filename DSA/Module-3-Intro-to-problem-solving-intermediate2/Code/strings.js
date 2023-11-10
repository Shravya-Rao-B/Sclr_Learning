/*
1.
You are given a function to_lower() which takes a character array A as an argument.

Convert each character of A into lowercase characters if it exists. If the lowercase of a character does not exist, it remains unmodified.
The uppercase letters from A to Z are converted to lowercase letters from a to z respectively.

Return the lowercase version of the given character array.



Problem Constraints
1 <= |A| <= 105



Input Format
The only argument is a character array A.



Output Format
Return the lowercase version of the given character array.



Example Input
Input 1:

 A = ['S', 'c', 'A', 'l', 'e', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y']
Input 2:

 A = ['S', 'c', 'a', 'L', 'e', 'r', '#', '2', '0', '2', '0']


Example Output
Output 1:

 ['s', 'c', 'a', 'l', 'e', 'r', 'a', 'c', 'a', 'd', 'e', 'm', 'y']
Output 2:

 ['s', 'c', 'a', 'l', 'e', 'r', '#', '2', '0', '2', '0']


Example Explanation
Explanation 1:

 All the characters in the returned array are in lowercase alphabets.
Explanation 2:
 Since there is no lowercase version for '#', '2'and '0'.  It remains unchanged.
 Rest of the Uppercase alphabets are converted to lowercase accordingly.

Hints:
Hint 1:
Loop through the character array and 
Use the ascii codes of each character to convert them to lowercase.

Solution Approach:
Loop through the character array and 
Use the ascii codes of each character to convert them to lowercase.

If A[i] is uppercase, we can change it to 'a' + (A[i]-'A')
*/
function toLower(A){
    for(let i=0; i<A.length; i++){
        if(A[i].charCodeAt(0)>=65 && A[i].charCodeAt(0) <= 90){
            A[i] = String.fromCharCode(A[i].charCodeAt(0) + 32)
        }
    }
    return A
}
// console.log(toLower(['S', 'c', 'A', 'l', 'e', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y']));

/*
2.
You are given a function to_upper() consisting of a character array A.

Convert each character of A into Uppercase character if it exists. If the Uppercase of a character does not exist, it remains unmodified.
The lowercase letters from a to z is converted to uppercase letters from A to Z respectively.

Return the uppercase version of the given character array.



Problem Constraints
1 <= |A| <= 105



Input Format
Only argument is a character array A.



Output Format
Return the uppercase version of the given character array.



Example Input
Input 1:

 A = ['S', 'c', 'A', 'L', 'E', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y']
Input 2:

 A = ['S', 'c', 'a', 'L', 'e', 'R', '#', '2', '0', '2', '0']


Example Output
Output 1:

 ['S', 'C', 'A', 'L', 'E', 'R', 'A', 'C', 'A', 'D', 'E', 'M', 'Y']
Output 2:

 ['S', 'C', 'A', 'L', 'E', 'R', '#', '2', '0', '2', '0']


Example Explanation
Explanation 1:
 All the characters in the returned array are in uppercase alphabets.
Explanation 2:
 Since there is no Uppercase version for '#', '2'and '0'.  It remains unchanged.
 Rest of the Lowercase alphabets are converted to Uppercase accordingly.

 Hints:
 Loop through the character array and use the ascii codes of each character to convert them to uppercase.

 Solution Approach:
 Loop through the character array and 
use the ascii codes of each character to convert them to uppercase. 

If A[i] is lowercase, we can change it to 'A' + (A[i]-'a')

Scaler solution:
 to_upper : function(A){
        let ans = A.join('').toUpperCase().split('');
        return ans;
 */
function toUpper(A){
    for(let i=0; i<A.length; i++){
        let currCode = A[i].charCodeAt(0);
        if(currCode >=97 && currCode <= 122){
            A[i] = String.fromCharCode(currCode - 32)
        }
    }
    return A;
}
// console.log(toUpper(['S', 'c', 'A', 'L', 'E', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y']));

/*
3.
You are given a character string A having length N, consisting of only lowercase and uppercase latin letters.

You have to toggle case of each character of string A. For e.g 'A' is changed to 'a', 'e' is changed to 'E', etc.



Problem Constraints
1 <= N <= 105

A[i] ∈ ['a'-'z', 'A'-'Z']



Input Format
First and only argument is a character string A.



Output Format
Return a character string.



Example Input
Input 1:

 A = "Hello" 
Input 2:

 A = "tHiSiSaStRiNg" 


Example Output
Output 1:

 hELLO 
Output 2:

 ThIsIsAsTrInG 


Example Explanation
Explanation 1:

 'H' changes to 'h'
 'e' changes to 'E'
 'l' changes to 'L'
 'l' changes to 'L'
 'o' changes to 'O'
Explanation 2:

 "tHiSiSaStRiNg" changes to "ThIsIsAsTrInG".


*/
function toggleCase(A){
    let B = A.split("");
    for(let i=0; i<B.length; i++){
        let currChar = B[i].charCodeAt(0);
        if(currChar >=65 && currChar <= 90){
            B[i] = String.fromCharCode(currChar + 32)
        }
        else {
            B[i] = String.fromCharCode(currChar - 32)
        }
    }
    return B.join("")
}
// console.log(toggleCase("tHiSiSaStRiNg"));
/*
4.
Given an array A. Sort this array using Count Sort Algorithm and return the sorted array.


Problem Constraints
1 <= |A| <= 105
1 <= A[i] <= 105


Input Format
The first argument is an integer array A.


Output Format
Return an integer array that is the sorted array A.


Example Input
Input 1:
A = [1, 3, 1]
Input 2:
A = [4, 2, 1, 3]


Example Output
Output 1:
[1, 1, 3]
Output 2:
[1, 2, 3, 4]


Example Explanation
For Input 1:
The array in sorted order is [1, 1, 3].
For Input 2:
The array in sorted order is [1, 2, 3, 4].

Hints:

Scaler Solution:
solve : function(A){
        let mx = A[0];
      for (const x of A) {
        if (x > mx) {
          mx = x;
        }
      }
      const freq = Array(Number(mx) + 1).fill(0);
      for (const x of A) {
        freq[Number(x)]++;
      }
      const ans = [];
      for (let i = 0; i <= mx; i++) {
        for (let j = 0; j < freq[i]; j++) {
          ans.push(Number(i));
        }
      }
      return ans;
	}
*/
function countSortNum(A){
    let max = findMax(A);
    let cA = new Array(Number(max) + 1).fill(0);
    for(let i=0; i<A.length; i++){
        index = Number(A[i]) - Number(1);
        cA[index]++;
    }
    let k = 0;
    for(let i=0; i<max ; i++){
        for(j=0; j<cA[i] ; j++){
            A[k] = Number(i) + Number(1);
            k++;
        }
    }
    function findMax(arr)
    {
        let maxV = 0;
        for(let i=0; i<arr.length; i++){
            if(Number(A[i])> maxV){
                maxV = Number(A[i])
            }
        }
        return maxV
    } 
    return A
}
// console.log(countSortNum([5,5,5,5,4,1,1,10,900,500]));
// console.log(countSortNum([3 ,3 ,3, 6, 6, 7, 7, 7, 8]))
/*
5.
Given a string A, you are asked to reverse the string and return the reversed string.

Problem Constraints
1 <= |A| <= 105

String A consist only of lowercase characters.



Input Format
First and only argument is a string A.



Output Format
Return a string denoting the reversed string.



Example Input
Input 1:

 A = "scaler"
Input 2:

 A = "academy"


Example Output
Output 1:

 "relacs"
Output 2:

 "ymedaca"


Example Explanation
Explanation 1:

 Reverse the given string.

Hints:
One idea is to create new string, iterate A in reverse order
store each character in the new string.
Can you save the memory?

Solution Approach:
One idea is to create new string, iterate A in reverse order
store each character in the new string.
To solve the problem without using extra memory, we can traverse
the string till half of its length, and then swap the ith and n - i - 1th characters
where n is the length of the string

Scaler Solution:
       solve : function(A){
           return A.split('').reverse().join('');
       }
*/
function reverseSring(A){
    let B = A.split("")
    let s = 0;
    let e = B.length-1;
    while(s<=e){
        let temp = B[s];
        B[s] = B[e]
        B[e] = temp;
        s++;
        e--;
    }
    return B.join("");
}
// console.log(reverseSring("scaler"));
/*
6.
You are given a string A of size N.

Return the string A after reversing the string word by word.

NOTE:

A sequence of non-space characters constitutes a word.
Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
If there are multiple spaces between words, reduce them to a single space in the reversed string.


Problem Constraints
1 <= N <= 3 * 105



Input Format
The only argument given is string A.



Output Format
Return the string A after reversing the string word by word.



Example Input
Input 1:
A = "the sky is blue"
Input 2:
A = "this is ib"


Example Output
Output 1:
"blue is sky the"
Output 2:
"ib is this"    


Example Explanation
Explanation 1:
We reverse the string word by word so the string becomes "blue is sky the".
Explanation 2:
We reverse the string word by word so the string becomes "ib is this".

Hints:
This is just a brute force problem that can be simulated in one or two passes of the main string.

Try to focus on the words(beginning and ending positions) instead of extra spaces.

Solution Approach:
One simple approach is a two-pass solution:

First pass to split the string by spaces into an array of words
Then second pass to extract the words in reversed order
We can do better in one-pass. While iterating the string in reverse order, we keep track of a word’s beginning and end position.

When we are at the beginning of a word, we append it.

Scaler solution:
solve : function(A){
        let st = [];
      for (let i = 0; i < A.length; i++) {
        let word = "";
        while (A[i] !== ' ' && i < A.length) {
          word += A[i];
          i++;
        }
        if (word === "") {
          continue;
        }
        st.push(word);
      }
      let ans = "";
      while (st.length > 0) {
        ans += st.pop();
        if (st.length === 0) {
          continue;
        }
        ans += " ";
      }
      return ans;
	}
*/
function reverseWordByWord(A){
    let B = A.split(" ").filter(item => item!== " ");
    let newString = "";
    for(let i = B.length-1; i>=0; i--){
        if(i!=0 && A[i])
        newString = newString + B[i]+ " "
        if(i == 0){
            newString = newString + B[i]
        }
    }

    return newString
}
// console.log(reverseWordByWord("Have a  nice day"));

/*
7.

Scaler Solution:
module.exports = { 
    longestPalindrome: function(A) {
        if (!A || A.length === 0) {
            return "";
        }

        let start = 0;
        let maxLength = 1;
        const n = A.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        // All substrings of length 1 are palindromes
        for (let i = 0; i < n; i++) {
            dp[i][i] = true;
        }

        // Check for substring of length 2
        for (let i = 0; i < n - 1; i++) {
            if (A[i] === A[i + 1]) {
                dp[i][i + 1] = true;
                start = i;
                maxLength = 2;
            }
        }

        // Check for substrings of length 3 and above
        for (let k = 3; k <= n; k++) {
            for (let i = 0; i < n - k + 1; i++) {
                const j = i + k - 1;

                if (dp[i + 1][j - 1] && A[i] === A[j]) {
                    dp[i][j] = true;

                    if (k > maxLength) {
                        start = i;
                        maxLength = k;
                    }
                }
            }
        }

        return A.substring(start, start + maxLength);
    }
};
*/
function longestPalindromeBigoNCube(A){
    let B = A.split("");
    let ans = 1;
    ansStr = "";
    let start = 0;
    let end = 0;
for(let i=0; i<B.length; i++){
    for(let j=i+1; j<B.length; j++){
        if(isPalindrome(B, i, j)){
            if(ans <= (j - i+1))
            {
            start = i;
            end = j;
            ans = Math.max(ans, j-i+1)
            }
        }   
    }
}
function isPalindrome(arr, s, e){
    while(s < e){
        if(arr[s] !== arr[e])
        {
            return false;
        }
        else if(arr[s] === arr[e]){
            s++;
            e--;
        }
    }
    return true;
}
console.log('start', start);
for(let i=start; i<=end; i++){
    ansStr = ansStr + B[i]
}
return ansStr;
}
//This will fail for largeb input. Hard test cases fail.
//console.log(longestPalindrome("aaaabaaa"));


