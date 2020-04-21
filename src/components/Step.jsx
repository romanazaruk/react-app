import React from "react";

export default function Step(props) {
  return (
    <div>
      <div className="dot_container">
        <div className="dot"></div>
        <div className="text_description">
          <h3>{props.name}</h3>
          <h5>{props.date}</h5>
        </div>
        <div className="text_description">
          <h3>{props.name}</h3>
          <h5>{props.address}</h5>
          <h5>{props.state}</h5>
        </div>
        <div className="text_description">
          <h3>{props.name}</h3>
          <h5>{props.office}</h5>
        </div>
        <div className="text_description">
          <h3>{props.name} </h3>
          <h5>{props.address}</h5>
          <h5>{props.state}</h5>
        </div>
      </div>
    </div>
  );
}
