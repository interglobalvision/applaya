import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

import { setAccountLocale } from '/imports/api/methods/accountMethods.js';

export class Navbar extends Component {
  localeChanged(locale) {
    setAccountLocale.call({locale});
  }

  componentWillMount() {
    i18n.onChangeLocale(this.localeChanged.bind(this));
  }

  componentWillUnmount() {
    i18n.offChangeLocale(this.localeChanged.bind(this));
  }

  render() {
    let roles = Roles.getRolesForUser(Meteor.userId());

    return (
      <nav role="navigation">
        <ul id="main-menu" className="u-inline-list">
          { roles.indexOf('admin') > -1 ?
            <li><a href="/admin">Admin</a></li>
            : ''
          }
          { roles.indexOf('committee') > -1 ?
            <li><a href="/applications">Applications</a></li>
            : ''
          }
          { roles.indexOf('applicant') > -1 ?
            <li><a href="/apply">My Application</a></li>
            : ''
          }
          { this.props.isLogged ?
            <li><a href="/logout">Logout</a></li>
          : <li><a href="/login">Login</a></li>
          }
          <li><a href="#" onClick={() => i18n.setLocale('en')}>En</a></li>
          <li><a href="#" onClick={() => i18n.setLocale('es')}>Es</a></li>
        </ul>
      </nav>
    );
  }
}
