import  { useState,useEffect } from "react";

function GetData() {
  // using state management, manage
  // error, loading and success states
  const [data, setData] = useState("");
  async function fetchData() {
    // complete the code here
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const userData = await response.json();
    console.log('user',userData);
    setData(userData);
    }
    useEffect(() => {
        fetchData();
    },[])

  // call the fetch data function when the
  // page loads

  // Here is the basic data boilerplate
  return (
  <>
    {data == null ? <h2>Page Loading...</h2>  : 
    <>
      <h2>Name: {data.name}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Username: {data.username}</h2>
    </>
  }
    </>
  );
}

export default GetData;
