import React from 'react';

import { auth } from '../../firebase';

localStorage.clear();

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;