import React from "react";
import emojipedia from "../assets/emojipedia";
import Card from "./Card";

function mapCard(object) {
  return (
    <Card
      key={object.id}
      name={object.name}
      desc={object.meaning}
      emoji={object.emoji}
    />
  );
}

function App() {
  return (
    <div>
      <h1>emojipedia</h1>
      <dl className="dictionary">{emojipedia.map(mapCard)}</dl>
    </div>
  );
}

export default App;
