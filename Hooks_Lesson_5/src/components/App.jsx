import React from "react";
import Counter from "./Counter";
import Gettime from "./Gettime";

function App() {
  const [currentComponent, setCurrentComponent] = React.useState(
    <div>
      <h1>Choose your website</h1>
      <button onClick={renderCounter}>Counter</button>
      <button onClick={getTime}>Get Time</button>
    </div>
  );

  function renderCounter() {
    setCurrentComponent(<Counter setCurrentComponent={setCurrentComponent} />);
  }
  function getTime() {
    setCurrentComponent(<Gettime setCurrentComponent={setCurrentComponent} />);
  }
  return <div>{currentComponent}</div>;
}

export default App;
