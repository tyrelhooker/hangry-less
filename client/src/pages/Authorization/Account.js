import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import { LoginCard } from "../../components/Login";

//Issue with this {authUser.email} after click "Account" link. 
//Asserts that email is somehow a null value.

//** use this ternary operator below when using authUser */
const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser => {
      console.log(authUser);
      return (
        <LoginCard>
          <h1>Account: </h1>
          <h5>{authUser.email}</h5>
          <h4>Forgot Password?</h4>
            <PasswordForgetForm />
          <h4>Change Password?</h4>
            <PasswordChangeForm />
        </LoginCard>
      )}
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);