import React from "react";
import Input from "./Input";

function Login() {
  return (
    <div>
      <form className="form">
        <h1>Please log in</h1>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
