import React from "react";

export const DirectionItem = props => (
  <div className="col s12 m4">
    <div className="card horizontal">
      <div className="card-content">
        {props.step}. {props.info}
      </div>
    </div>
  </div>
);