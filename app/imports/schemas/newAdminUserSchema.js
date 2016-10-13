import React from 'react';

export const NewAdminUserSchema = new SimpleSchema({
  name: {
    type: String,
    label: () => i18n.__('admin.users.addUser.name.label'),
  },
  email: {
    type: String,
    label: () => i18n.__('admin.users.addUser.email.label'),
  },
  role: {
    type: String,
    label: () => i18n.__('admin.users.addUser.role.label'),
    allowedValues: [
      'committee',
      'admin'
    ],
    uniforms: {
      options: function () {
        // This use " to keep literal values
        return [
          {value: "", label: ""},
          {value: "admin", label: i18n.__('admin.users.addUser.role.admin'),},
          {value: "committee", label: i18n.__('admin.users.addUser.role.committee'),},
        ];
      },
    },
  },
});
