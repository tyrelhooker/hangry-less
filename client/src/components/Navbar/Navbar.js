import React, { Component } from 'react'
import { NavItem } from './NavItem';

export class Navbar extends Component {

  isActive(path) {
    return path === window.location.pathname;
  }

  isHomeActive() {
    return window.location.pathname === "/" || window.location.pathname === "/main"
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <NavItem to="/Recipes" name="Recipes"  active={this.isActive("/Recipes")}/>
              <NavItem to="/MyPantry" name="My Pantry"  active={this.isActive("/MyPantry")}/>
              <NavItem to="/GroceryList" name="Grocery List" active={this.isActive("/GroceryList")} />
              <NavItem to="/SingleRecipe" name="Single Recipe" active={this.isActive("/SingleRecipe")}/>
              <NavItem to="/login" name="Login/Signup" active={this.isActive("/login")}/>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
  
}

export default Navbar;