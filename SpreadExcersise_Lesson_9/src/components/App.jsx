import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const initialList = [
    { id: 2, item: "A item" },
    { id: 1, item: "B item" },
  ];
  const [list, setList] = useState(initialList);
  const [input, setInput] = useState("");

  function handleAdd() {
    // Create a new item object with an "id" and "item" property
    const newItem = {
      id: list.length + 1, // Generate a unique ID (you can use a better approach for production)
      item: input,
    };

    // Add the new item to the list
    const newList = [newItem, ...list];
    setList(newList);

    // Clear the input field
    setInput("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      handleAdd();
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onKeyDown={handleKeyPress} // Handle Enter key press
          value={input}
        />
        <button type="button" onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => (
            <ToDoItem key={item.id} item={item.item} id={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
