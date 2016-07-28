import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';

export class SingleLayout extends Component {
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
    if (!this.props.user) {
      return <Accounts.ui.LoginForm />;
    }

    return (
      <section id="application-single">
        <h1>Single Application</h1>
      </section>
    );
  }
}
