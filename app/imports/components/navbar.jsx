import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

export class Navbar extends Component {
  localeChanged(locale) {
    this.localizeMessages(locale);
    this.forceUpdate();
  }

  localizeMessages(locale) {
    if (locale === 'en') {

    } else if (locale === 'es') {

    }
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
          <li><a href="#" onClick={ () => {
            i18n.setLocale('en');
            Meteor.users.update(Meteor.userId(), { $set: {'profile.lang': i18n.getLocale()} });
          } }>En</a></li>
          <li><a href="#" onClick={ () => {
            i18n.setLocale('es');
            Meteor.users.update(Meteor.userId(), { $set: {'profile.lang': i18n.getLocale()} });
          } }>Es</a></li>
        </ul>
      </nav>
    );
  }
}