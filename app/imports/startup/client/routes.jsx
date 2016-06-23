import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '/imports/components/mainLayout.jsx';

import { PageApplicationsClosed } from '/imports/components/pages/pageApplicationsClosed.jsx';

import ApplyContainer from '/imports/containers/applyContainer.jsx';

const publicRoutes = FlowRouter.group({ name: 'public' });

publicRoutes.route('/', {
  name: 'home',
  action () {
    mount(MainLayout, {
      content: 'Hello world!',
    });
  },
});

publicRoutes.route('/login', {
  name: 'login',
  action() {
    mount(MainLayout, {
      content: <Accounts.ui.LoginForm />,
    });
  },
});

publicRoutes.route('/logout', {
  name: 'logout',
  action() {
    Meteor.logout();
    FlowRouter.go('/login');
  },
});

publicRoutes.route('/applications-closed', {
  name: 'applications-closed',
  action() {
    mount(MainLayout, {
      content: <PageApplicationsClosed />,
    });
  },
});

const authenticatedRoutes = FlowRouter.group({ name: 'authenticated' });

authenticatedRoutes.route('/apply', {
  name: 'apply',
  action() {
    mount(MainLayout, {
      content: <ApplyContainer />,
    });
  },
});

authenticatedRoutes.route('/apply/:section', {
  name: 'apply',
  action(params) {
    mount(MainLayout, {
      content: <ApplyContainer section={params.section} />,
    });
  },
});

