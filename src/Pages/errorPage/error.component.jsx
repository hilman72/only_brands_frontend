import React from "react";
import { useHistory } from "react-router-dom";

import "./error.component.scss";

const Error = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Shit!!!!! Error!!!!</h1>

      <button onClick={handleClick}>go home</button>
    </div>
  );
};

export default Error;
