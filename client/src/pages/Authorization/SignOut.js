import React from 'react';

import { auth } from '../../firebase';

localStorage.clear();

const SignOutButton = () =>
  <div className="btn" style={{background: "#2e7d32"}} onClick={auth.doSignOut}>
    Sign Out
  </div>

export default SignOutButton;