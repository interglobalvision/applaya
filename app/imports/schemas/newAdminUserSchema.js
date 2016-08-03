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
    ]
  }
});
