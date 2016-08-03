import React, { Component } from 'react';
import { AutoForm } from 'uniforms-unstyled';

import { NewAdminUserSchema } from '/imports/schemas/newAdminUserSchema.js';

import { adminAddUser, removeUser } from '/imports/api/methods/adminMethods.js';

export class AdminIndexUsers extends Component {
  onSubmit(doc) {

    adminAddUser.call(doc, (err) => {

      console.log(this);

      if (err) {
        // >>> needs actual error handling here [user notification etc]
        console.log(err);
      } else {
        // >>> needs to clear form
      }
    });

  }

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
            <AutoForm ref={ref => newUserForm = ref} schema={NewAdminUserSchema} onSubmit={this.onSubmit.bind(this)} />
          </div>
        </div>
      </section>
    );
  }
}

export class AdminIndexUser extends Component {
  removeUser() {
    let userId = this.props.user._id;

    if (confirm(i18n.__('admin.users.removeUser.confirm'))) {
      removeUser.call({ userId }, (err) => {

        if (err) {
          // >>> needs actual error handling here [user notification etc]
          console.log(err);
        }

      });
    }

  }

  render() {
    const T = i18n.createComponent();

    return (
      <li>{this.props.user._id}: {this.props.user.emails[0].address} <a onClick={this.removeUser.bind(this)} className='button'><T>admin.users.removeUser.label</T></a></li>
    );
  }
}
