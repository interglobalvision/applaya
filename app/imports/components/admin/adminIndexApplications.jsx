import React, { Component } from 'react';

export class AdminIndexApplications extends Component {
  render() {
    return (
      <div className="row">
        <section className="fluid-col s-12 m-12">
          <h2>Latest Applications</h2>
          <ul>
          {this.props.applications.map((application, key) => (
            <AdminIndexApplication _id={application._id} userId={application.userId} userEmail={application.userEmail} key={key} />
          ))}
          </ul>
          <a href="/applications" className="button">See All Applications</a>
        </section>
      </div>
    );
  }
}

export class AdminIndexApplication extends Component {
  render() {

    let title = this.props._id;

    if (!!this.props.userEmail) {
      title = this.props.userEmail;
    }

    return (
      <li><a href={'/admin/single/' + this.props._id}>{title}</a></li>
    );
  }
}
