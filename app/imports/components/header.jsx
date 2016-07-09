import React from 'react';
import i18n from 'meteor/universe:i18n';

import { NavContainer } from '/imports/containers/navContainer.jsx';

//instance of translate component with top-level context
const T = i18n.createComponent();

export const Header = ({ hasUser }) => (
  <header id="header" className="margin-bottom-large background-color-main">
    <div className="container">
      <div className="row padding-top-basic padding-bottom-basic">
        <div className="fluid-col s-5 m-2">
          <a href="/"><h1>APPLAYA</h1></a>
        </div>
        <div className="fluid-col s-5 m-3">
          <T percentage="10">apply.completed</T>
        </div>
        <div className="fluid-col s-10 m-5 text-align-right">
          <NavContainer hasUser={hasUser}/>
        </div>
      </div>
    </div>
  </header>
);
