import React from 'react';

import { auth } from '../../firebase';

localStorage.clear();

const SignOutButton = () =>
  <div className="btn" onClick={auth.doSignOut}>
    Sign Out
  </div>

export default SignOutButton;