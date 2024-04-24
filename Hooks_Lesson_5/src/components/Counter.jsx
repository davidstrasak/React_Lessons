import React from "react";
import App from "./App";

function Counter({ setCurrentComponent }) {
  let [count, setCount] = React.useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function back() {
    setCurrentComponent(<App />);
  }

  return (
    <div className="">
      <h1>{count}</h1>
      <button onClick={increase} className="mid">
        +
      </button>
      <button onClick={decrease} className="mid">
        -
      </button>
      <button onClick={back} className="back">
        Go back
      </button>
    </div>
  );
}

export default Counter;
