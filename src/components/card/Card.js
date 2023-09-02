import React from "react";
import "./Card.css";
import "./FlipTransition.css";
function Card({ onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        <img src="https://i.pinimg.com/originals/c2/c2/69/c2c269a0d6ece21059581292075bcb51.jpg" />
      </div>
      <div className="card-front">
        <img src="https://i.pinimg.com/originals/fa/1d/7a/fa1d7a0cc5eb2f5d73e311013bf66941.jpg" />
      </div>
    </div>
  );
}

export default Card;
