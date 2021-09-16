import React from "react";

import "./styles.css";

function Button(props) {
  return (
    <button className="button" type="submit">
      {props.children}
    </button>
  );
}

export default Button;
