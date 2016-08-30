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

  /** 
   * Return the count of application with specified status.
   *
   * @param applications[array] the applications to check
   * @param status[string] the status to check
   * @param extended[boolean] if extended
   *
   **/
  countByStatus(applications, status, extended) {
    return _.filter(applications, val => {
      switch(status) {
        case 'inProgress':
          return !val.status['complete'] && !val.status['submitted'] && !val.status['paid'] && val.status['extended'] == extended;
          break;
        case 'complete':
          return val.status['complete'] && !val.status['submitted'] && !val.status['paid'] && val.status['extended'] == extended;
          break;
        case 'submitted':
          return val.status['complete'] && val.status['submitted'] && !val.status['paid'] && val.status['extended'] == extended;
          break;
        case 'paid':
          return val.status['complete'] && val.status['submitted'] && val.status['paid'] && val.status['extended'] == extended;
          break;
        case 'approved':
          return val.status['approved'];
      }
      return val.status[status];
    }).length;
  }

  applicationsTotal() {
    return this.props.applications.length;
  }

  applicationsStats(extended = false) {
    let applications = this.props.applications;
    
    let inProgress = this.countByStatus(applications, 'inProgress', extended);
    let complete = this.countByStatus(applications, 'complete', extended);
    let submitted = this.countByStatus(applications, 'submitted', extended);
    let paid = this.countByStatus(applications, 'paid', extended);

    return {
      inProgress,
      complete,
      submitted,
      paid,
    };
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
        <AdminIndexAnalytics total={this.applicationsTotal()} stats={this.applicationsStats()} extended={this.applicationsStats(true)} />
        <AdminIndexApplications applications={this.props.latestApplicationsWithUsers} />
        <AdminIndexUsers admins={this.props.admins} committee={this.props.committee} />
      </section>
    );
  }
}
