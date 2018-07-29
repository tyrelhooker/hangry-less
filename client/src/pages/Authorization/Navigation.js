// This file uses the Link component of React Router to link the application to different routes.
import React from "react";
import { Link } from "react-router-dom";
import { NavItem } from '../../components/Navbar/NavItem';

// These routes are defined in your constants file.
import AuthUserContext from './AuthUserContext';
import SignOutButton from "./SignOut";
import * as routes from "../../constants/routes";
import "./Navigation.css";

/* Overall, this component is making the Navigation component aware of the user's authentication status. More specifically, Inside of the Consumer component, you are using a function instead of other components.That’s called the render props pattern in React. What’s important is that it gives you access to the value which was passed before to the Provider pattern. Once the authenticated user in the withAuthentication higher order component changes, it changes as well as the passed value in the Provider component, and then also in the Consumer component. You don’t need to pass the authenticated user down from the App component anymore. It is passed through it implicitly by using React’s context.
*/

//** use this ternary code when using authUser as seen below. **


const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth {...authUser}/>
      : <NavigationNonAuth {...authUser}/>
    }
  </AuthUserContext.Consumer>

const NavigationAuth = (authUser) => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper green">
        <a href= {routes.MAIN} className="brand-logo pulse"><img src="./images/logo6.png" className="responsive-img" alt=""/></a>
        <ul className="right hide-on-med-and-down">
          <NavItem to={routes.RECIPES} name="Recipes" />
          <NavItem to={routes.MY_PANTRY} name="My Pantry" />
          <NavItem to={routes.GROCERY_LIST} name="Grocery List" />
          <NavItem to={routes.ACCOUNT} name="Account" />
          <SignOutButton />
        </ul>
      </div>
    </nav>
  </div>
);

const NavigationNonAuth = (authUser) => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper green">
        <a href= {routes.MAIN} className="brand-logo"><img src="./images/logo6.png" className="responsive-img" alt=""/></a>
        <ul className="right hide-on-med-and-down">
          <NavItem to={routes.RECIPES} name="Recipes" />
          <NavItem to={routes.MY_PANTRY} name="My Pantry" />
          <NavItem to={routes.GROCERY_LIST} name="Grocery List" /> 
          <NavItem to={routes.SIGN_IN} name="Login/Signup" />
        </ul>
      </div>
    </nav>
  </div>
);

export default Navigation;
