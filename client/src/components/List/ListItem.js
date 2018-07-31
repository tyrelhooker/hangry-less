import React from "react";

export const ListItem = props => (
  <li className="collection-item">
    {props.qty}, {props.item}
  </li>
);