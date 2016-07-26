import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '/imports/components/mainLayout.jsx';

import { PageApplicationsClosed } from '/imports/components/pages/pageApplicationsClosed.jsx';

import { ApplyContainer } from '/imports/containers/applyContainer.jsx';
import { AdminContainer } from '/imports/containers/adminContainer.jsx';

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

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ () => {
    if (!Meteor.loggingIn() || !Meteor.userId()) {
      FlowRouter.go('/login');
    }
  } ],
});

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
    let step = parseInt(params.section);

    mount(MainLayout, {
      content: <ApplyContainer section={step} />,
    });
  },
});

const adminRoutes = FlowRouter.group({
  name: 'adminRoutes',
  triggersEnter: [ () => {
    if (!Roles.userIsInRole(Meteor.userId(), 'superadmin')) {
      console.log(Roles.userIsInRole(Meteor.userId(), 'superadmin'));
      FlowRouter.go('/login');
    }
  } ],
});

adminRoutes.route('/admin', {
  name: 'admin',
  action() {
    mount(MainLayout, {
      content: <AdminContainer />,
    });
  },
});

//

FlowRouter.wait();

Tracker.autorun(() => {
  if (Roles.subscription.ready() && !FlowRouter._initialized) {
    FlowRouter.initialize();
  }
});