import React from "react";

export const DirectionItem = props => (
  <div>
    <div className="col m6">
      <p>{props.step}. {props.info}</p>
    </div>
  </div>
);