import React from "react";
import Input from "./Input";

function Login() {
  return (
    <div>
      <form className="form">
        <h1>Please register</h1>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Login;
