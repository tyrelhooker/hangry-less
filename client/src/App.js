import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Recipes from "./pages/Recipes";
import MyPantry from "./pages/MyPantry";
import GroceryList from "./pages/GroceryList";

import Navigation from "../pages/Authorization/Navigation";
import SignUpPage from "./pages/Authorization/SignUp";
import SignInPage from "./pages/Authorization/SignIn";
import PasswordForgetPage from './pages/Authorization/PasswordForget';
import AccountPage from './pages/Authorization/Account';

import * as routes from "./constants/routes";
import withAuthentication from './pages/Authorization/withAuthentication';

/* 
The import and export (./withAuthentication) is the higher order component 
that makes its session handling logic available to the App component. Higher order components allow you to extract logic from components, but you can use them later on to enhance components with it. 

The Router component below makes it possible to navigate from URL-to-URL on the client-side application, without making requests to a web server. Thus, applications need to be requested only once from the server, with the process of handling requested routes handled on the client side

React’s context API is a React concept which helps us to pass around properties in our application. Rather than passing props explicitly down to all components who are interested in them, you can PASS THESE PROPS IMPLICITLY down to these components without bothering the components in between of the hierarchy.
Thus, in our case, the App component doesn’t need to bother about the authenticated user object anymore, because it only passes it down to various other components.
*/

// const App = () =>
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Navbar />
          <Switch>
            <Route exact path={routes.MAIN} component={Main} />
            <Route exact path={routes.RECIPES} component={Recipes} />
            <Route exact path={routes.MY_PANTRY}component={MyPantry} />
            <Route exact path={routes.GROCERY_LIST}component={GroceryList} />
            <Route exact path={routes.SIGN_UP}component={() => <SignUpPage />} />
            <Route exact path={routes.SIGN_IN}component={() => <SignInPage />} />
            <Route exact path={routes.PASSWORD_FORGET}component={() => <PasswordForgetPage />} />
            <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default withAuthentication(App);
