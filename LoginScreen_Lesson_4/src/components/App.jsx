import React from "react";
import Login from "./Login";
import Page from "./Page";
import Register from "./Register";

const isLoggedIn = false;
const isUserRegistered = false;

function App() {
  return (
    <div className="container">
      {isUserRegistered ? isLoggedIn ? <Page /> : <Login /> : <Register />}
    </div>
  );
}

export default App;
