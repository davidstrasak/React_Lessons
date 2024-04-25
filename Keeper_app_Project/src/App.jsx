import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { useState } from "react";

function App() {
  const initNotes = [
    { name: "Work at Honeywell", desc: "Learn React." },
    { name: "Do the thesis", desc: "Get the degree." },
  ];
  const [list, setList] = useState(initNotes);
  return (
    <div>
      <Header />
      {list.map((item, index) => {
        return <Note name={item.name} desc={item.desc} inputmode="false" />;
      })}
      <Footer />
    </div>
  );
}

export default App;
