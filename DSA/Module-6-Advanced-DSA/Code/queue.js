/*
1.
Given an integer A, you have to find the Ath Perfect Number.

A Perfect Number has the following properties:

It comprises only 1 and 2.
The number of digits in a Perfect number is even.
It is a palindrome number.
For example, 11, 22, 112211 are Perfect numbers, where 123, 121, 782, 1 are not.



Problem Constraints
1 <= A <= 100000



Input Format
The only argument given is an integer A.



Output Format
Return a string that denotes the Ath Perfect Number.



Example Input
Input 1:

 A = 2
Input 2:

 A = 3


Example Output
Output 1:

 22
Output 2:

 1111


Example Explanation
Explanation 1:

First four perfect numbers are:
1. 11
2. 22
3. 1111
4. 1221
Return the 2nd Perfect number.
Explanation 2:

First four perfect numbers are:
1. 11
2. 22
3. 1111
4. 1221
Return the 3rd Perfect number.

Hints:
How can precomputation help?
Can you precompute the answer of all times and 
then answer as the queries come in??

Solution Approach:
Can you precompute the answer of all times and 
then answer as the queries come in??

It appears that we can use Queue and precompute for 100000 Perfect numbers.
First insert "1" and "2" and then use 
s -> s + '1' and s -> s + '2' to fill up the queue.
*/
let s = Array(100005).fill("");

function ReverseString(str) {
    const revArray = [];
    const length = str.length - 1;
    for (let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
    return revArray.join('');
}

module.exports = {
    //param A : integer
    //return a strings
    solve: function (A) {
        s[1] = "1";
        s[2] = "2";
        let q = [];
        q.push(s[1]);
        q.push(s[2]);
        let idx = 2;
        while (idx <= A) {
            let ss = q[0];
            q.shift();
            idx += 1;
            s[idx] = ss + "1";
            q.push(ss + "1");
            idx += 1;
            s[idx] = ss + "2";
            q.push(ss + "2");

        }
        // s[A] has the first half of our final answer
        let ans = s[A];
        let anss = ans;
        ans = ReverseString(ans);
        let ret = anss + ans;
        return ret;
    }
};
/*
3.
Given an integer A, you have to find the Ath Perfect Number.

A Perfect Number has the following properties:

It comprises only 1 and 2.
The number of digits in a Perfect number is even.
It is a palindrome number.
For example, 11, 22, 112211 are Perfect numbers, where 123, 121, 782, 1 are not.



Problem Constraints
1 <= A <= 100000



Input Format
The only argument given is an integer A.



Output Format
Return a string that denotes the Ath Perfect Number.



Example Input
Input 1:

 A = 2
Input 2:

 A = 3


Example Output
Output 1:

 22
Output 2:

 1111


Example Explanation
Explanation 1:

First four perfect numbers are:
1. 11
2. 22
3. 1111
4. 1221
Return the 2nd Perfect number.
Explanation 2:

First four perfect numbers are:
1. 11
2. 22
3. 1111
4. 1221
Return the 3rd Perfect number.

Hints:
Try simulating the queue with the help of two stacks.

Solution Approach:
In order to implement queue using stacks, we need to maintain two stacks s1 and s2.

Algorithm:

1) For push: 
The new element is always added to the top of stack s1 and it is kept as rear element 
of the queue.

2) For pop:
We have to remove element in front of the queue. This is the first inserted element 
in the stack s1 and it is positioned at the bottom of the stack because of stack's LIFO 
(last in - first out) policy. To remove the bottom element from s1, we have to pop all 
elements from s1 and to push them on to an additional stack s2, which helps us to store 
the elements of s1 in reversed order. This way the bottom element of s1 will be 
positioned on top of s2 and we can simply pop it from stack s2. Once s2 is empty, 
the algorithm transfer data from s1 to s2 again.

3) For empty:
Both stacks s1 and s2 contain all stack elements, so the algorithm checks s1 and 
s2 size to return if the queue is empty.

4) For peek:
The rear element is the bottom element of s1. We will do the same operations done 
in pop except for the operation of removing the element.
*/
class UserQueue {
    constructor() {
        // Initialize your data structure here.
        this.stack1 = [];
        this.stack2 = [];
    }
    
    push(X) {
        // Push element X to the back of queue.
        this.stack1.push(X)
    }
    
    pop() {
        // Removes the element from in front of queue and returns that element.
        if (this.stack2.length === 0) {
			while (this.stack1.length > 0) {
				const val = this.stack1.pop();
				this.stack2.push(val);
			}
		}

		const remEl = this.stack2.pop();
		return remEl;
    }
    
    peek() {
        // Get the front element of the queue.
        if(this.empty()){
            return ;
        }
        if(this.stack1.length!== 0)
        {
        return this.stack1[0]
        }
        else if(this.stack2.length!== 0 && this.stack1.length == 0)
        {
            return this.stack2[this.stack2.length -1]
        }
    }
    
    empty() {
        // Returns whether the queue is empty.
        return this.stack1.length == 0 && this.stack2.length == 0
    }
}

// let q = new UserQueue();
// q.push(100);
// q.push("adfrfrgrg");
// q.peek();