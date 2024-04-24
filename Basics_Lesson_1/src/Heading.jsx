import React from "react";

//Variables
const fName = "David";
const sName = "Strasak";
const customStyle = {
  color: "blue",
  fontFamily: "monospace",
  border: "1px solid black",
  display: "inline-block",
};
customStyle.color = "aqua";
let greeting = "";
const hour = new Date().getHours();

if (hour > 12 && hour < 20) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else if (hour > 6 && hour < 13) {
  greeting = "Good morning";
  customStyle.color = "yellow";
} else {
  greeting = "Good evening";
}

// Components
function Heading() {
  return (
    <h1 className="red" spellCheck="true" id="mainHeading" style={customStyle}>
      {greeting} {fName} {sName}
    </h1>
  );
}

export default Heading;
