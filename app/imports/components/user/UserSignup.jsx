import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

import { Accounts } from '/imports/components/accounts.jsx';

export class UserSignup extends Component {
  render() {
  	  const T = i18n.createComponent();

    return(
      <div className="row">
        <section className="fluid-col s-12 m-8">
          <h3><T>users.signup.title</T></h3>
          <p><T>users.signup.introduction</T></p>
          <Accounts.ui.LoginForm {...{
            formState: STATES.SIGN_UP,
            loginPath: '/login'
          }} />
        </section>
      </div>
    );
  }
};
