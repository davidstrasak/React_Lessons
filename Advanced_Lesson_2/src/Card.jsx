import React from "react";
import Detail from "./Detail";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="box">
      <h2>
        {props.ID}. {props.name}
      </h2>
      <Avatar image={props.image} />
      <Detail email={props.email} number={props.number} />
    </div>
  );
}

export default Card;
