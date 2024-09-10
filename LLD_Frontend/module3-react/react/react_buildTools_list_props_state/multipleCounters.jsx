/*
In this exercise, you are tasked with creating a React application that displays multiple counter 
components. Each counter should maintain its own state and have the ability to increment and decrement 
its value independently of the others.

Instructions
Counter Component:
Create a functional React component named Counter. 
The component should accept two props: index and value. 
index: A unique identifier for each counter. value: The initial count value for the counter. 
Utilize the useState hook to manage the counter's current value, initializing it with the value prop. 
Implement two functions within the component: increment: Increases the counter's value by 1. 
decrement: Decreases the counter's value by 1. (Note: There is a bug in the provided code where both 
increment and decrement functions increase the value. The decrement function should decrease the value.) 
Render the counter's index, current value, and two buttons to control the counter (increment and decrement).

ParentCounter Component:
Create another functional React component named ParentCounter. 
Inside this component, render multiple Counter components with different initial values and indexes. 
Example: Render three Counter components with indexes 1, 2, 3, and initial values 2, 3, 4, respectively.
*/