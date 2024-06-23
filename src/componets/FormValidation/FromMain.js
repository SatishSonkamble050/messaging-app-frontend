import React, { useState } from "react";
import Email from "./Email";
import { email } from "./ValidationFunction";

function FromMain() {
  const [data, setData] = useState("");
  const [emailError, setEmailErorr] = useState(null);
  const onChanageHandler = (e) => {
    setData(e.target.value);
    setEmailErorr(email(e.target.value));
  };
  return (
    <>
      <Email />
      <div>
        <input
          type="text"
          style={{ border: "1px solid black" }}
          value={data}
          onChange={(e) => onChanageHandler(e)}
        />
        <div>{emailError}</div>
      </div>
    </>
  );
}

export default FromMain;
