import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

import { setAccountLocale } from '/imports/api/methods/accountMethods.js';

const T = i18n.createComponent();

export class Navbar extends Component {
  localeChanged(locale) {
    setAccountLocale.call({locale});
    T9n.setLanguage(locale)
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
            <li><a href="/admin"><T>navbar.admin</T></a></li>
            : ''
          }
          { roles.indexOf('committee') > -1 ?
            <li><a href="/applications"><T>navbar.applications</T></a></li>
            : ''
          }
          { roles.indexOf('applicant') > -1 ?
            <li><a href="/apply"><T>navbar.myApplication</T></a></li>
            : ''
          }
          { this.props.isLogged ?
            <li><a href="/logout"><T>navbar.logout</T></a></li>
            : <li><a href="/login"><T>navbar.login</T></a></li>
          }
          <li><a href="#" onClick={() => i18n.setLocale('en')}>En</a></li>
          <li><a href="#" onClick={() => i18n.setLocale('es')}>Es</a></li>
        </ul>
      </nav>
    );
  }
}
