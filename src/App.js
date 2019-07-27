import React, { useState } from "react";
import "./App.css";
import Display from "./components/DisplayComponents/Display";
import Logo from "./components/DisplayComponents/Logo";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";

function App() {

  var _total = 0;
  const [__total, setTotal] = useState(_total);

  function find_total(operator, nums) {
    if (operator === "+") {
      _total = nums.reduce(function(prevNum, num) {
        return prevNum + num;
      });
      setTotal(_total);
    }
    if (operator === "-") {
      _total = nums.reduce(function(prevNum, num) {
        return prevNum - num;
      });
      setTotal(_total);
    }
    if (operator === "*") {
      _total = nums.reduce(function(prevNum, num) {
        return prevNum * num;
      });
      setTotal(_total);
    }
    if (operator === "/") {
      _total = nums.reduce(function(prevNum, num) {
        return prevNum / num;
      });
      setTotal(_total);
    }
  }

  return (
    <div className="container">
      <div className="App">
        <Logo />
        <Display
          containerClass="display-scn"
          textClass="display-txt"
          text={_total}
        />
        <div className="btns">
          <div className="left">
            <Numbers
              onClick={_total === 8}
              buttonClass="num-btn"
              textClass="num-txt"
            />
            <Specials buttonClass="spec-btn" textClass="spec-txt" />
          </div>
          <div className="right">
            <Operators buttonClass="ops-btn" textClass="ops-txt" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
