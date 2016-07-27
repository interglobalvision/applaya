import React, { Component } from 'react';
import { AutoForm } from 'uniforms-unstyled';

export class AdminIndexUsers extends Component {
  render() {
    return (
      <section id="admin-users">
        <div className="row">
          <div className="fluid-col s-12 m-12">
            <h2>Users</h2>
          </div>
        </div>
        <div className="row">
          <div className="fluid-col s-12 m-6">
            <h3>Committee</h3>

            <ul>
            {this.props.committee.map((user, key) => (
              <AdminIndexUser user={user} key={key} />
            ))}
            </ul>

          </div>
          <div className="fluid-col s-12 m-6">
            <h3>Admins</h3>

            <ul>
            {this.props.admins.map((user, key) => (
              <AdminIndexUser user={user} key={key} />
            ))}
            </ul>

          </div>
        </div>
        <div className="row">
          <div className="fluid-col s-12 m-12">
            <h3>Add User</h3>
            Autoform goes here
          </div>
        </div>
      </section>
    );
  }
}

export class AdminIndexUser extends Component {
  render() {
    return (
      <li>{this.props.user._id}: {this.props.user.emails[0].address}</li>
    );
  }
}