import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

//Issue with this {authUser.email} after click "Account" link. 
//Asserts that email is somehow a null value.

//** use this ternary operator below when using authUser */
const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser => {
      console.log(authUser);
      return(
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
      )}
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);