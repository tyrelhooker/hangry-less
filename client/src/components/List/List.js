import React from "react";
// import "./List.css";

export const List = ({ children }) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>This Week's Grocery List</h4>
        </li>
        {/* {children} */}
      </ul>
    </div>
  );
};