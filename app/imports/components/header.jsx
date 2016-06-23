import React from 'react';

import NavContainer from '/imports/containers/navContainer.jsx';

const Header = ({ hasUser }) => (
  <header id="header" className="margin-bottom-large background-color-main">
    <div className="container">
      <div className="row padding-top-basic padding-bottom-basic">
        <div className="fluid-col s-5 m-2">
          <a href="/"><h1>APPLAYA</h1></a>
        </div>
        <div className="fluid-col s-5 m-3">
          x% Complete
        </div>
        <div className="fluid-col s-10 m-5 text-align-right">
          <NavContainer hasUser={hasUser}/>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
