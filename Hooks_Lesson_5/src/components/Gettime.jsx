import React from "react";
import App from "./App";

function Gettime({ setCurrentComponent }) {
  let timeS, timeM, timeH, time;
  let [timeState, timeStateFunction] = React.useState("Click to get time");
  function getTime() {
    timeS = new Date().getSeconds();
    timeM = new Date().getMinutes();
    timeH = new Date().getHours();
    time = `${timeH} : ${timeM} : ${timeS}`;
    timeStateFunction(time);
  }
  setInterval(getTime, 1000);
  function back() {
    setCurrentComponent(<App />);
  }

  return (
    <div>
      <h1>{timeState}</h1>
      <button onClick={getTime} className="mid" style={{ width: "300px" }}>
        Get Time
      </button>
      <button onClick={back} className="back">
        Go back
      </button>
    </div>
  );
}

export default Gettime;
