import React from "react";

export const Btn = props => (
  <button {...props} className="btn-large">
    {props.children}
  </button>
);
