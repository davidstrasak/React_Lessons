import React from "react";
import { useState } from "react";

function Note(props) {
  const [nameState, setNameState] = useState("");
  const [descState, setDescState] = useState("");

  function handleEnter(event) {
    if (event.key === "Enter") {
      props.functions(nameState, descState, setNameState, setDescState);
      console.log("Hello there!");
    }
  }

  if (props.inputmode === "false") {
    return (
      <div
        className="note"
        onClick={() => {
          props.functions(props.id);
        }}
      >
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
    );
  } else {
    return (
      <form className="note">
        <h1>
          <input
            style={{
              border: "none",
              backgroundColor: "#f0f0f0",
              fontWeight: "bold",
              width: "100%",
            }}
            value={nameState}
            onChange={(event) => {
              setNameState(event.target.value);
            }}
          ></input>
        </h1>
        <p>
          <input
            style={{
              border: "none",
              backgroundColor: "#f0f0f0",
              width: "100%",
            }}
            value={descState}
            onChange={(event) => {
              setDescState(event.target.value);
            }}
            onKeyDown={handleEnter}
          ></input>
        </p>
      </form>
    );
  }
}

export default Note;
