import React from 'react';
import {mount} from 'react-mounter';

import { AppLayout } from '/imports/components/appLayout.jsx';

FlowRouter.route("/", {
  action (){
    mount(AppLayout, {
      content: "Hello world!",
    });
  }
});

FlowRouter.route("/login", {
  action(params) {
    mount(AppLayout, {
      content: <Accounts.ui.LoginForm />,
    });
  }
});
