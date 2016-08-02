import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';

export class ApplicationsLayout extends Component {
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

  renderPaginationPrev() {
    let pagePrev = this.props.page - 1;

    if (pagePrev !== 0) {
      let url = '/applications/page/' + pagePrev;
      return (
        React.createElement('a', {className: "button", href: url},
          "Prev"
        )
      );
    } else {
      return false;
    }
  }

  renderPaginationNext() {
    let pageNext = this.props.page + 1;

    // >>> there is no check here for if this button goes anywhere :/
    if (pageNext) {
      let url = '/applications/page/' + pageNext;
      return (
        React.createElement('a', {className: "button", href: url},
          "Next"
        )
      );
    } else {
      return false;
    }
  }

  render() {
    if (!this.props.user) {
      return <Accounts.ui.LoginForm />;
    }

    return (
      <section id="applications" className="fluid-col s-12 m-12">
        <h3>Applications</h3>
        <table>
          <thead>
            <tr>
              <td>Application</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.props.applications.map((application, key) => (
              <ApplicationsApplication _id={application._id} userId={application.userId} userEmail={application.userEmail} key={key} />
            ))}
          </tbody>
        </table>
        <nav>
          { this.renderPaginationPrev() }
          { this.renderPaginationNext() }
        </nav>
      </section>
    );
  }
}

export class ApplicationsApplication extends Component {
  render() {

    let title = this.props._id;

    if (!!this.props.userEmail) {
      title = this.props.userEmail;
    }

    return (
      <tr>
        <td><a href={'/application/' + this.props._id}>{title}</a></td>
        <td>status goes here</td>
        <td>
          <a className="button">Delete</a>
          <a className="button">Unsubmit</a>
          <a className="button">Mark Paid</a>
          <a className="button">Extend</a>
          <a className="button">Approve</a>
        </td>
      </tr>
    );
  }
}
