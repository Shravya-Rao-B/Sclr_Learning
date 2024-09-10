/*
You are provided with a React code snippet that aims to render a list of stationary items. Your task is to complete the code by implementing the component responsible for rendering the list of stationary items. Instructions:

Write a React component named ItemList that renders a list of stationary items provided in the stationary array.
Ensure that each item in the list is enclosed within an
element and has a unique key attribute assigned.
Use the map function to iterate over the stationary array and generate the list items dynamically.
*/

import ItemList from "./ItemList";
export default function List() {
    let stationary = ["Pen", "Pencil", "Eraser", "Ruler"];
    let list2=["Hello" ,"Hi", "bi"];
    return (
        <div>
            <h2>List Items</h2>
            {/* Render the ItemList component here */}
            <ItemList list={stationary}/>
            <ItemList list={list2}/>
        </div>
    );
}