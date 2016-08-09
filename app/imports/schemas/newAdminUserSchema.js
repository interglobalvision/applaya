import React from 'react';

const T = i18n.createComponent();

export const NewAdminUserSchema = new SimpleSchema({
  email: {
    type: String,
    label: () => <T>{'admin.users.addUser.email.label'}</T>,
  },
  role: {
    type: String,
    label: () => <T>{'admin.users.addUser.role.label'}</T>,
    allowedValues: [
      'committee',
      'admin'
    ],
    uniforms: {
      options: function () {
        // This use " to keep literal values
        return [
          {value: "", label: ""},
          {value: "admin", label: () => <T>{'admin.users.addUser.role.admin'}</T>,},
          {value: "committee", label: () => <T>{'admin.users.addUser.role.committee'}</T>,},
        ];
      },
    },
  },
});
