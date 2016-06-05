import React from 'react';
import {mount} from 'react-mounter';

import { MainLayout } from '/imports/components/mainLayout.jsx';

FlowRouter.route("/", {
  action (){
    mount(MainLayout, {
      content: "Hello world!",
    });
  }
});

FlowRouter.route("/login", {
  action(params) {
    mount(MainLayout, {
      content: <Accounts.ui.LoginForm />,
    });
  }
});
