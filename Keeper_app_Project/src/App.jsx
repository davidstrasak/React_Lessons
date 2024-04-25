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
  function deleteCard(id) {
    setList((originalList) => {
      const newList = originalList.filter((item, index) => {
        return index !== id;
      });
      return newList;
    });
  }

  function addNotes(nameState, descState, setNameState, setDescState) {
    setList((prevNotes) => {
      const newNotes = [
        ...prevNotes,
        { name: nameState, desc: descState }, // Use the state values
      ];
      return newNotes;
    });
    setNameState("");
    setDescState("");
  }

  return (
    <div>
      <Header />
      {list.map((item, index) => {
        return (
          <Note
            key={index}
            name={item.name}
            desc={item.desc}
            id={index}
            inputmode="false"
            functions={deleteCard}
          />
        );
      })}
      <Note inputmode="true" functions={addNotes} />
      <Footer />
    </div>
  );
}

export default App;
