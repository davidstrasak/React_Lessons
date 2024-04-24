import React from "react";

const name = "David Strasak";
const date = new Date().getFullYear();

function Footer() {
  return (
    <div>
      <br />
      <p>Created by {name}</p>
      <p>Copyright {date}</p>
    </div>
  );
}

export default Footer;
