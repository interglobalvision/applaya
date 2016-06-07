import React from 'react';

import NavContainer from '/imports/containers/navContainer.jsx';

export default Header = ({ hasUser }) =>(
  <header>
    <h1>Applaya</h1>
    <h2>Life is a beach and then you apply</h2>
    <NavContainer hasUser={hasUser}/>
  </header>
);
