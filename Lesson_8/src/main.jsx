import React from "react";
import ReactDOM from "react-dom/client";

let a = [1, 2, 3, 4, 5, 6];
let b = [7, 8, 9, 10];

const result = [...a, ...b];

const name = { first: "James", last: "Bond" };

const user = { ...name, id: 1, username: "hackerguy" };

ReactDOM.createRoot(document.getElementById("root")).render(<div>{a}</div>);
