import React from "react";

export const Container = ({ fluid, uniqueClassName, children }) => (
  <div className={`container${fluid ? "-fluid" : ""} ${uniqueClassName}`}>
    {children}
  </div>
);