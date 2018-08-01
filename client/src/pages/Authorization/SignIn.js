import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

import { SignUpLink } from "./SignUp";
import { PasswordForgetLink } from './PasswordForget';
import { auth } from "../../firebase";
import { LoginCard } from "../../components/Login";
import * as routes from "../../constants/routes";
import firebase from "firebase/app";
import "./SignIn.css";

const SignInPage = ({history}) =>
    <LoginCard>
      <h1>Sign In</h1>
      <SignInForm history={history} />
      <PasswordForgetLink />
      <SignUpLink/>
    </LoginCard>
  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
  email:"",
  password:"",
  error:""
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;
    
    auth.doSignInWithEmailAndPassword(email, password)
    .then(()=> {
      this.setState(()=> ({ ...INITIAL_STATE}));
      history.push(routes.RECIPES)
      //for returning user, once sign in, will direct you to route/page from routes.js
    })
    .then(() => {
      sessionStorage.setItem('user', firebase.auth().currentUser.uid)
      console.log("SigninUser: ", sessionStorage.getItem('user'));
    })
    .catch(error => {
      this.setState(byPropKey("error", error));
    });
    
    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;
  
    const isInvalid =
    password === "" || email === "";
    
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-field">
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>
        </div>
        { error && <p>{error.message}</p>}
        {/* place an alert here instead of displaying text to the page */}
    
      </form>
    )
  }
}

export default withRouter (SignInPage);

export {
  SignInForm,
};