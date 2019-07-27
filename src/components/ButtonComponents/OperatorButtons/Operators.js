import React from "react";
import OperatorButton from "./OperatorButton";
import data from "../../../data";
import { useState } from "react";

const Operators = props => {
  const __ops = data.operators;
  var [ops, setOps] = useState(__ops);

  return (
    <div className="ops-btns">
      {ops.map(op => (
        <OperatorButton
          key={op.value.toString()}
          buttonClass={props.buttonClass}
          textClass={props.textClass}
          text={op.value}
        />
      ))}
    </div>
  );
};

export default Operators;
