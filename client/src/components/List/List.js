import React from "react";
import { Col } from "../Grid";

export const List = ({ children }) => {
  return (
    <Col size="s6 m4 l3">
      <ul className="collection with-header">
        {children}
      </ul>
    </Col>
  );
};