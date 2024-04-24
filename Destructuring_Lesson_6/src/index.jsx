// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom/client";
// import cars from "./practice";
const root = ReactDOM.createRoot(document.getElementById("root"));

const cars = [
  {
    model: "Honda Civic",
    //The top colour refers to the first item in the array below:
    //i.e. hondaTopColour = "black"
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5,
    },
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2,
    },
  },
];
const [honda, tesla] = cars;
let {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
let teslaTopColour = tesla.coloursByPopularity[0];

let {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
let hondaTopColour = honda.coloursByPopularity[0];
console.log(teslaTopSpeed);

root.render(
  <table>
    <tbody>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
  </table>
);
