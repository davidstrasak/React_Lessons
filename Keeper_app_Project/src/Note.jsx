import React from "react";

function Note(props) {
  if (props.inputmode === "false") {
    return (
      <div className="note">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Note;
