import React from "react";
// import "./List.css";
import { Col } from "../Grid";

export const List = ({ children }) => {
  return (
    <div>
      {/* <Col size="s12 m6 l4"> */}
        <ul className="collection with-header">
          {/* <li className="collection-header">
            <h4>This Week's Grocery List</h4>
          </li> */}
          {children}
        </ul>
      {/* </Col> */}
    </div>
  );
};