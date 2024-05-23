/*
3.
This component shows the biography for the selected person. 
It loads the biography by calling an asynchronous function fetchBio(person) on mount and whenever 
person changes. That asynchronous function returns a Promise which eventually resolves to a string. 
When fetching is done, it calls setBio to display that string under the select box.

There is a bug in this code. Start by selecting “Alice”. Then select “Bob” and then immediately 
after that select “Taylor”. If you do this fast enough, you will notice that bug: Taylor is selected,
but the paragraph below says “This is Bob’s bio.”

Why does this happen? Fix the bug inside this Effect

TA explanantion:
Each render’s Effect has its own ignore variable. Initially, the ignore variable is set to false. 
However, if an Effect gets cleaned up (such as when you select a different person), 
its ignore variable becomes true. So now it doesn’t matter in which order the requests complete. 
Only the last person’s Effect will have ignore set to false, so it will call setBio(result). 
Past Effects have been cleaned up, so the if (!ignore) check will prevent them from calling setBio:
*/
import { useState, useEffect } from "react";
import { fetchBio } from "./api.js";

export default function Page() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState(null);

  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then((result) => {
      if(!ignore)
      setBio(result);
    });
    return () => {
      ignore = true;
    }
  }, [person]);



  return (
    <>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </>
  );
}
