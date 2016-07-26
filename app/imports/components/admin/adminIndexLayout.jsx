import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';

import { AdminIndexAnalytics } from '/imports/components/admin/adminIndexAnalytics.jsx';
import { AdminIndexApplications } from '/imports/components/admin/adminIndexApplications.jsx';

export class AdminIndexLayout extends Component {
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
    return (
      <section id="admin-index">
        <AdminIndexAnalytics applications={this.props.applicationsWithUsers} />
        <AdminIndexApplications applications={this.props.applicationsWithUsers} />
      </section>
    );
  }
}