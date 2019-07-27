import React from "react";

const NumberButton = (props) => {
  return (
    <div className={props.buttonClass}>
      <p className={props.textClass}>{props.text}</p>
    </div>
  );
}

export default NumberButton;
