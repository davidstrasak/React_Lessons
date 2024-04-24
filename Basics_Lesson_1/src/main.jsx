// index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import Heading from "./Heading";
import Footer from "./Footer";
import pie, { twotimespi, threetimespi } from "./math";
import { add, multiply, subtract, divide } from "./mathFun";

const root = createRoot(document.getElementById("root"));

const listItem = "pancake";
const randNum = Math.floor(Math.random() * 250);
const img1 = `https://picsum.photos/id/${randNum}/500`;
const img2 = `https://picsum.photos/id/${randNum + 1}/500`;
const img3 = `https://picsum.photos/id/${randNum + 2}/500`;
const img4 = `https://picsum.photos/id/${randNum + 3}/500`;
const img5 = `https://picsum.photos/id/${randNum + 4}/500`;
const img6 = `https://picsum.photos/id/${randNum + 5}/500`;

// Main render
root.render(
  <div>
    <Heading />
    <br />
    <p>Shopping list</p>
    <ul>
      <li>
        {twotimespi} * 1,5 would be {threetimespi}
      </li>
      <li>{pie}</li>
      <li>{listItem}</li>
    </ul>
    <p>Some nice images</p>
    <img src={img1} />
    <img src={img2} />
    <img src={img3} />
    <img src={img4} />
    <img src={img5} />
    <img src={img6} />

    <h1>List of the bones:</h1>
    <ul>
      <li>{add(1, 2)} </li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
    <Footer />
  </div>
);
