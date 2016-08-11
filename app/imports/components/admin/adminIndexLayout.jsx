import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';

import { AdminIndexAnalytics } from '/imports/components/admin/adminIndexAnalytics.jsx';
import { AdminIndexApplications } from '/imports/components/admin/adminIndexApplications.jsx';
import { AdminIndexUsers } from '/imports/components/admin/adminIndexUsers.jsx';

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
    if (!this.props.user) {
      return <Accounts.ui.LoginForm />;
    }

    return (
      <section id="admin-index">
        <div className='row'>
          <div className='fluid-col s-12'>
            <h1>Admin Zone</h1>
          </div>
        </div>
        <AdminIndexAnalytics applications={this.props.applications} />
        <AdminIndexApplications applications={this.props.latestApplicationsWithUsers} />
        <AdminIndexUsers admins={this.props.admins} committee={this.props.committee} />
      </section>
    );
  }
}
