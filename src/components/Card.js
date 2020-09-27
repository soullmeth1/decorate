import React from "react";
import "./Card.scss";

function Card({ Icon, detail }) {
  return (
    <div className="card">
      <Icon />
      <p>{detail}</p>
    </div>
  );
}

export default Card;
