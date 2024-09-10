/*
Consider a React component that displays a count and has an “Increment” button. 
You observe that clicking the “Increment” button rapidly multiple times sometimes results in a 
lower-than-expected count. What could be causing this issue?

Options:
The useState hook is not properly imported in the component.
React’s rendering is not efficient for fast updates.
The setCount function is being called directly with the current count.

Ans:
The setCount function is being called directly with the current count.

*/
import { useState } from 'react';

function QuickUpdateIssue() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    // Simple useState call
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Quick Update Issue</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default QuickUpdateIssue;