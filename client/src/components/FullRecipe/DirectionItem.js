import React from "react";

export const DirectionItem = props => (
  <div className="col 12">
    <div className="card horizontal direction-card">
      <div className="card-content">
        {props.step}. {props.info}
      </div>
    </div>
  </div>
);