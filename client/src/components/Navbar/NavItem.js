import React from 'react';
import { Link } from 'react-router-dom';

export const NavItem = props => (
  <li className={props.active ? 'nav-item active' : 'nav-item hoverable'}>
    <Link to={props.to}>{props.name}</Link>
  </li>
);