import React, { useState } from "react";

// Here the strikethrough state is managed through clicking on the button just inside this component.
function ToDoItem(params) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={handleClick}>
      <li
        key={params.key}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {params.item}
      </li>
    </div>
  );
}

export default ToDoItem;
