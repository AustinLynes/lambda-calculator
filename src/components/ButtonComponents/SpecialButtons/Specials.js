import React from "react";
import data from "../../../data";
import { useState } from "react";
import SpecialButton from "./SpecialButton";

const Specials = props => {
  const __spec = data.specials;
  var [spec, setSpecs] = useState(__spec);

  return (
    <div className="spec-btns">
      {spec.map(_spec => (
        <SpecialButton
          key={_spec.toString()}
          buttonClass={props.buttonClass}
          textClass={props.textClass}
          text={_spec}
        />
      ))}
    </div>
  );
};

export default Specials;
