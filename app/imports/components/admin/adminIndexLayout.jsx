import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';

export class AdminIndexLayout extends Component {
  localeChanged(locale) {
    this.localizeMessages(locale);
    this.forceUpdate();
  }

  localizeMessages(locale) {
    if(locale === 'en') {

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
    return (
      <div className="row">
        <section className="admin-index-layout fluid-col s-12 m-12">
          This is admin section
        </section>
      </div>
    );
  }
}