import React from "react";

const SpecialButton = (props) => {
  return (
    <div className={props.buttonClass}>
    <p className={props.textClass}>{props.text}</p>
  </div>
  );
};

export default SpecialButton;