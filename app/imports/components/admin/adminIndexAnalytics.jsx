import React, { Component } from 'react';

export class AdminIndexAnalytics extends Component {
  render() {

    let totalApplications = this.props.applications.length;

    return (
      <div className="row">
        <section className="fluid-col s-12 m-12">
          <h3>Admin Analytics Dashboard</h3>
          Total applications: {totalApplications}
        </section>
      </div>
    );
  }
}