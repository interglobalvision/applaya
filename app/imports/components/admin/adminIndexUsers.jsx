import React, { Component } from 'react';
import { AutoForm } from 'uniforms-unstyled';
import Alert from 'react-s-alert';

import { NewAdminUserSchema } from '/imports/schemas/newAdminUserSchema.js';

import { adminAddUser, removeUser } from '/imports/api/methods/adminMethods.js';

export class AdminIndexUsers extends Component {
  onSubmit(doc) {
    let _this = this;

    adminAddUser.call(doc, (err, res) => {

      console.log(this);

      if (err) {
        Alert.error(err.reason);
        console.log('adminAddUser error:', err);
      } else {
        Alert.success(res.message);
        // Reset Form
        _this.refs.addUserForm.reset();
      }
    });

  }

  render() {
    return (
      <section id="admin-users">
        <div className="grid-row">
          <div className="grid-item item-s-12 item-m-12">
            <h2>Users</h2>
          </div>
        </div>
        <div className='row margin-bottom-basic'>
          <div className="grid-item item-s-12 item-m-6">
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
            <AutoForm ref='addUserForm' schema={NewAdminUserSchema} onSubmit={this.onSubmit.bind(this)} />
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
      removeUser.call({ userId }, (err, res) => {

        if (err) {
          Alert.error(err.reason);
          console.log('removeUser error:', err);
        } else {
          Alert.success(res.message);
        }

      });
    }

  }

  render() {
    const T = i18n.createComponent();
    
    // Set display name as the email
    let displayName = this.props.user.emails[0].address;

    // If a Full Name is available, make it the displayName
    if (this.props.user.profile && this.props.user.profile.name) {
      displayName = this.props.user.profile.name;
    }

    return (
      <li>{displayName} <a onClick={this.removeUser.bind(this)} className='button'><T>admin.users.removeUser.label</T></a></li>
    );
  }
}
