import React, { useState } from "react";

// Here when I click on the list item it gets removed.
function ToDoItem(params) {
  function handleClick() {}

  return (
    <div onClick={handleClick}>
      <li key={params.key}>{params.item}</li>
    </div>
  );
}

export default ToDoItem;
