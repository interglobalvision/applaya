import React, { Component } from 'react';
const T = i18n.createComponent();

export class ApplicationsLayout extends Component {
  renderPaginationPrev() {
    let pagePrev = this.props.page - 1;

    if (pagePrev !== 0) {
      let url = '/applications/page/' + pagePrev;
      return (
        <a className="button" href={url}><T>common.prev</T></a>
      );
    } else {
      return false;
    }
  }

  renderPaginationNext() {
    let pageNext = this.props.page + 1;

    if (pageNext) {
      let url = '/applications/page/' + pageNext;
      return (
        <a className="button" href={url}><T>common.next</T></a>
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
        <h3><T>applications.title</T></h3>
        <table>
          <thead>
            <tr>
              <td><T>applications.title</T></td>
              <td><T>applications.status.label</T></td>
              <td><T>applications.actions.label</T></td>
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
          <a className="button"><T>applications.actions.remove</T></a>
          <a className="button"><T>applications.actions.unsubmit</T></a>
          <a className="button"><T>applications.actions.markAsPaid</T></a>
          <a className="button"><T>applications.actions.extend</T></a>
          <a className="button"><T>applications.actions.approve</T></a>
        </td>
      </tr>
    );
  }
}
