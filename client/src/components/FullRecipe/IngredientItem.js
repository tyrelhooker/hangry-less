import React from "react";

export const IngredientItem = props => (
  <div>
    <div className="col m6">
      <p>{props.item} {props.qty}</p>
    </div>

  </div>
)