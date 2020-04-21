import React from "react";

export default function Step(props) {
  return (
      <div className="dot_container">
        <div className="dot"></div>
        <div className="text_description">
          <h3>{props.name}</h3>
          <h5>{props.description}</h5>
        </div>
      </div>
  );
}
