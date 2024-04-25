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
      <div className="note">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        <span>
          <button
            onClick={() => {
              props.functions(props.id);
            }}
            className="delete"
          >
            Delete
          </button>
        </span>
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
        <button
          className="add"
          onClick={(event) => {
            props.functions(nameState, descState, setNameState, setDescState);
            event.preventDefault();
          }}
          type="submit"
        >
          Add
        </button>
      </form>
    );
  }
}

export default Note;
