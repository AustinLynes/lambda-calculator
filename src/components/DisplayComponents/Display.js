import React from "react";

export default function Display (props)  {
  return (
  <div className={props.containerClass}>
    <p className={props.textClass}>{props.text}</p>
  </div>
  )
};


