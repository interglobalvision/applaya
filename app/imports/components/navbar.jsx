import React from 'react';
import i18n from 'meteor/universe:i18n';

export const Navbar = ({ isLogged }) => (
  <nav role="navigation">
    <ul id="main-menu" className="u-inline-list">
      { isLogged ?
        <li><a href="/apply">My Application</a></li>
      : <li><a href="/login">Login</a></li> }
      { isLogged ?
        <li><a href="/logout">Logout</a></li>
      : ''}
    </ul>
    <ul>
      <a href="#" onClick={ () => i18n.setLocale('en') }>EN</a> 
      <a href="#" onClick={ () => i18n.setLocale('es') }>EN</a> 
    </ul>
  </nav>
);

Navbar.protoTypes = {
  isLogged: React.PropTypes.bool,
};
