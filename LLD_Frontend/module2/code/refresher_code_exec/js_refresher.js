/*
Find output of the following

Question:
let cap = {
    name: "Steve",
    age: 34,
    isAvenger: true
}
for(let key in cap){
    console.log(key + " " + cap[key]);
}

Options:
error
name Steve age 34 isAvenger true
name undefined age undefined isAvenger undefined
No of the above
*/

let cap = {
    name: "Steve",
    age: 34,
    isAvenger: true
}
for(let key in cap){
    console.log(key + " " + cap[key]);
}

/*
2.
Find the output of the following:
let a = 2 {
    let a = 3{
        let a = 4{
            let a = 5{
                console.log(a);
            }
        }
    }
}

Options:
5 4 3 2
Error
2 3 4 5
2 2 2 2

Ans:
5 4 3 2
*/

let a = 2; 
{
    let a = 3; 
    {
        let a = 4; 
        {
            let a = 5;
            console.log(a);
        }
        console.log(a);
    }
    console.log(a);
}
console.log(a);

/*
3.
Find output of the following:
function real(){
    console.log("I am real Always run me");
}
function real(){
    console.log("No I am real one");
}
real();
function real(){
    console.log("You Both are wasted");
}

*/
function real(){
    console.log("I am real Always run me");
}
function real(){
    console.log("No I am real one");
}
real();
function real(){
    console.log("You Both are wasted");
}

/*
5.
Find the output of the following

Options:
line number 2 10 ReferenceError: Cannot access 'c' before initialization
line number 2 10 line number 4 10 ReferenceError: Cannot access 'c' before initialization
line number 2 10 line number 4 10 line number 7 21 ReferenceError: Cannot access 'c' before initialization
*/
let c = 10;
console.log("line number 2",c);
function fn(){
    // console.log("line number 4",c);
    let c = 20;
    c++;
    console.log("line number 7",c);
if(c){
    let c = 30;
    c++;
    console.log("line number 11",c);
}
console.log("line number 13",c);
}
fn();
console.log("line number 16",c);

/*
6.
let a = "this only works if and only if"
let b = a.slice(a.indexOf("only"));
let c = b.lastIndexOf("only")
b[c]= i;

Options:
Error
This only works if and only if only works if and only if
This only works if and only if only works if
This only works if and only if This only works if and only if

Ans:
This only works if and only if only works if and only if

*/
let d = "this only works if and only if"
let e = d.slice(d.indexOf("only"));
let f = e.lastIndexOf("only")
e[f]= "i";
console.log(d);
console.log(e);

/*
8.
Find the output of the following.

Options:
line number 2 10 line number 4 undefined line number 7 21 line number 11 31 line number 13 31 line number 16 10
line number 2 10 line number 4 line number 13 31 line number 7 21 line number 11 31 line number 16 10
line number 2 10 line number 4 line number 13 31 line number 11 31 line number 7 21 line number 16 10

Ans:
line number 2 10 line number 4 undefined line number 7 21 line number 11 31 line number 13 31 line number 16 10

*/
// var a = 10;
console.log("line number 2", a);
function fn(){
    console.log("line number 4", a);
    var a = 20;
    a++;
    console.log("line number 7", a);
if(a){
    var a = 30;
    a++;
    console.log("line number 11", a);
}
console.log("line number 13", a);
}
fn();
console.log("line number 16", a);
/*
7.
Complete the function ConvertToBinary(dec), which takes a decimal number and returns its binary.

Sample Test Case 1:

Input:
45

Output:
101101

Solution Approach:
Here’s a concise solution approach for the given problem:

1. Understand the problem: The goal is to convert a decimal number to its binary representation.

2. Iterative approach:
- Initialize an empty array (bits) to store the binary digits.
- Set dividend to the given decimal number (dec).

3. Conversion process:
- Use a while loop to perform the conversion until the dividend becomes less than 2.
- Inside the loop:
- Calculate the remainder by taking the dividend modulo 2.
- Append the remainder to the bits array.
- Update the dividend by dividing it by 2, discarding the remainder.

4. Reverse the array:
- After the while loop ends, the binary digits in the bits array are in reverse order.
- Reverse the array to obtain the correct binary representation.

5. Return the binary representation:
- Convert the bits array to a string by joining its elements together.
- Return the resulting string as the binary representation of the decimal number.

By following these steps, you should be able to implement the ConvertToBinary function and convert a decimal number to its binary representation.

Scaler solution:
function ConvertToBinary(dec) {
var bits = [];
var dividend = dec;
var remainder = 0;
while (dividend >= 2) {
remainder = dividend % 2;
bits.push(remainder);
dividend = (dividend - remainder) / 2;
}
bits.push(dividend);
bits.reverse();
return bits.join(“”);
}
*/
function converDecToBinary(dec){
    return dec.toString(2);
}
console.log(converDecToBinary(45));
/*
9.
Write a function aclean(arr) that returns an array cleaned from anagrams. Keep the first occurrence of the anagram

Anagrams are words that have the same number of the same letters but in a different order.

For instance: nap - pan ear - are - era cheaters - hectares - teachers

Sample Test Case 1:
Input:
["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

Output:
['nap', 'teachers', 'ear']

Hint:
Initialize an empty object obj to store the unique anagrams.
Iterate over each word in the arr array using a loop.
Convert each word to lowercase, split it into an array of characters, sort the array, and join it back into a string.
Check if the sorted word is already a key in the obj object; if not, add it with the value set as the original word.
Return the values of the obj object using Object.values(obj) to obtain the cleaned array without anagrams.

Solution Approach:

Here’s a concise solution approach for the given problem:

1. Initialize an empty object: Create an empty object obj to store the unique anagrams.

2. Iterate over each word:
- Use a loop to iterate over each word in the arr array.
- For each word, perform the following steps:

3. Convert to lowercase, sort, and join:
- Convert the word to lowercase using .toLowerCase().
- Split the lowercase word into an array of characters using .split("").
- Sort the array of characters in alphabetical order using .sort().
- Join the sorted array back into a string using .join("").

4. Check if anagram exists:
- Use the sorted word as a key in the obj object.
- Check if the key already exists in the obj object using !obj[sorted] (negation operator).
- If the key does not exist, add it to the obj object with the value set as the original word.

5. Return the cleaned array:
- After iterating over all words, use Object.values(obj) to extract the values from the obj object.
- Return the extracted values as the cleaned array without any anagrams.

By following these steps, you should be able to implement the aclean function and obtain the cleaned array without any anagrams.



*/
function removeAnagrams(arr)
{
let obj = {};
    for(let item of arr){
       let sortItem = item.toLowerCase().split("").sort().join("");
       if(!obj[sortItem]){
        obj[sortItem] = item;
       }
    }
return Object.values(obj);
}
console.log(removeAnagrams(['ear','Rea','maDam','madam']));