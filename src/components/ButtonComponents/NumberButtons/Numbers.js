import React from "react";
import data from "../../../data";
import { useState } from "react";
import NumberButton from "./NumberButton";

const Numbers = props => {
  const __nums = data.numbers;
  var [nums, setNums] = useState(__nums);

  var _nums = __nums;


  return (
    <div className="num-btns">
      {nums.map(num => (
        <NumberButton 
          key={num.toString()}
          buttonClass={props.buttonClass}
          textClass={props.textClass}
          text={num}
          value={num}
          />
          ))}
    </div>
  );
};

export default Numbers;
