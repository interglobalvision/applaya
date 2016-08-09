import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

import { Accounts } from 'meteor/std:accounts-ui';

export class UserLogin extends Component {
  render() {
  	  const T = i18n.createComponent();

    return(
      <div className="row">
        <section className="fluid-col s-12 m-9">
          <h3><T>users.login.title</T></h3>
          <Accounts.ui.LoginForm {...{
            signUpPath: '/signup'
          }}  />
        </section>
      </div>
    );
  }
};