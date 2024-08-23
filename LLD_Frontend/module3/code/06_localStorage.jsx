/*
In this task, you are required to modify a simple React App component that currently returns an input field of type text. The goal is to allow users to type any string into this input field and store this string in the local storage of the browser.

The key feature to implement is that every time the page is reloaded, the input field should be pre-filled with the latest value that was entered by the user. This value should be retrieved from the local storage.

Solution Approach:
In this solution useState creates a state variable value and a function setValue to update the value. The initial value of value the cached inputValue from local storage (if exists) or an empty string.

The handleChange function is called every time the user types into the input field. It updates the value of value by calling setValue and sets the same value in local storage under the key “inputValue”.

Finally, the component returns a JSX element that renders an input field with the value of value, and an onChange handler to call handleChange when the user types into the input field.

Solution below:
App.jsx
*/
import React from "react";
import {useState, useEffect} from "react";

const App = () => {
  // Edit this component
  /***
   * * Do not edit the data-testid attributes.
   * Use key inputValue to store the data in local storage.
   * */
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(localStorage.getItem('inputValue'))
  },[])
  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem('inputValue', e.target.value)
  }
  return (
    <div>
      <input data-testid="input-id" type="text" value={value} onChange={handleChange}/>
    </div>
  );
};
export default App;

/*
2.
You need to create a custom hook called useLocalStorage(key, initialValue) in the App.jsx file itself or a separate file, it will be used to store and retrieve data from local storage. You should use the key prop as the key for the data in local storage and initialValue as the initial value.

The hook should return an object with two properties:

the current value of the data, which should be initialized to the value stored in local storage (if it exists), or the initialValue argument (if it doesn't)
a function that can be used to update the value of the data in local storage
Every time the value of the data is updated, the hook should update the corresponding value in local storage.
*/

