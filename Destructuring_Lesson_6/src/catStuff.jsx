import React from "react";
import { createRoot } from "react-dom/client";
import { animals } from "./data";

const [cat, dog] = animals;
console.log(cat);
console.log(dog);
cat.name = "normal";
console.log(animals);

let {
  name = "Fluffy",
  sound = "Purr",
  feedingRequirements: { feeding = "default feeding", water },
} = cat;
console.log(sound);
console.log(name);
console.log(feeding);
console.log(cat);

const root = createRoot(document.getElementById("root"));
root.render(<div></div>);
