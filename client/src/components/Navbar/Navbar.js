import React from "react";
// import "./Navbar.css";

const Navbar = () => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Logo</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/Recipes">Recipes</a></li>
          <li><a href="/MyPantry">My Pantry</a></li>
          <li><a href="/GroceryList">Grocery List</a></li>
          <li><a href="/SingleRecipe">Single Recipe</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;