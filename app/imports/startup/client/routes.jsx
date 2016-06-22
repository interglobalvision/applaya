import React from 'react';
import {mount} from 'react-mounter';

import { MainLayout } from '/imports/components/mainLayout.jsx';
import ApplyContainer from '/imports/containers/applyContainer.jsx';

const publicRoutes = FlowRouter.group({ name: 'public'});

publicRoutes.route("/", {
  name: 'home',
  action (){
    mount(MainLayout, {
      content: "Hello world!",
    });
  }
});

publicRoutes.route("/login", {
  name: 'login',
  action(params) {
    mount(MainLayout, {
      content: <Accounts.ui.LoginForm />,
    });
  }
});

publicRoutes.route("/logout", {
  name: 'logout',
  action(params) {
    Meteor.logout();
    FlowRouter.go('/login');
  }
});

publicRoutes.route('/applications-closed', {
  name: 'applications-closed',
  action (){
    mount(MainLayout, {
      content: "Applications closed!!!",
    });
  }
});

const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

authenticatedRoutes.route("/apply", {
  name: 'apply',
  action(params) {
    mount(MainLayout, {
      content: <ApplyContainer />,
    });
  }
});

authenticatedRoutes.route("/apply/:section", {
  name: 'apply',
  action(params) {
    mount(MainLayout, {
      content: <ApplyContainer section={params.section} />,
    });
  }
});

