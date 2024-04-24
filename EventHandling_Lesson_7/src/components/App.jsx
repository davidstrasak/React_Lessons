import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    sName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function mouseOver() {
    document.querySelector("button.submitButton").classList.toggle("black");
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.sName}
      </h1>
      <form>
        <input
          type="text"
          name="fName"
          placeholder="First name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          type="text"
          name="sName"
          placeholder="Last name"
          onChange={handleChange}
          value={fullName.sName}
        />
        <button
          className="submitButton"
          onMouseOut={mouseOver}
          onMouseOver={mouseOver}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
