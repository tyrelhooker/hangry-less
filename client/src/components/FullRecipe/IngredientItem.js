import React from "react";

export const IngredientItem = props => (
  <div>
    <div className="indie-ingred">
      <p>{props.item} {props.qty}</p>
    </div>

  </div>
)