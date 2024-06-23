import React, { useState } from "react";
import "./cal.css";

function CalculatorDemo() {
  const calInput = [
    "C",
    "DEL",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
  const [inputText, setInputText] = useState("");

  const onclickHandler = (item) => {
    if (item === "=") {
      let result;
      try {
        result = eval(inputText);
      } catch (error) {
        console.log("error : ", error);
        setInputText("ERORRR");
      }

      console.log("RESULT : ", result);
      setInputText(result);
    } else  if(item === 'C'){
      setInputText('')
    }else if(item === 'DEL'){
      setInputText(inputText.slice(0, -1))
    }else{
      setInputText(inputText + item);
    }
  };

  return (
    <>
      <h1>CALCULATER</h1>
      <div className="calMainContainer">
        <div className="inputText">
          <input type="text" className="calInput" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
        </div>

        <div className="MainButton">
          {calInput.map((item, index) => (
            <button className="calButton" onClick={() => onclickHandler(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default CalculatorDemo;
