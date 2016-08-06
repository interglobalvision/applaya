export const NewAdminUserSchema = new SimpleSchema({
  email: {
    type: String,
    label: () => i18n.__('admin.users.addUser.email.label'),
  },
  role: {
    type: String,
    label: () => i18n.__('admin.users.addUser.role.label'),
    allowedValues: [
      'Committee',
      'Admin'
    ],
    uniforms: {
      options: function () {
        // This use " to keep literal values
        return [
          {value: "", label: ""},
          {value: "Admin", label: i18n.__('admin.users.addUser.role.admin')},
          {value: "Committee", label: i18n.__('admin.users.addUser.role.committee')},
        ];
      },
    },
  },
});
