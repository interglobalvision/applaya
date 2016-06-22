import React from 'react';

export default Navbar = ({ isLogged }) => (
  <nav role="navigation">
    <ul id="main-menu" className="u-inline-list">
      { isLogged ?
        <li><a href="/apply">My Application</a></li>
      :<li><a href="/login">Login</a></li> }
      { isLogged ?
        <li><a href="/logout">Logout</a></li>
      :''}
    </ul>
  </nav>
);

Navbar.protoTypes = {
  isLogged: React.PropTypes.bool,
};
