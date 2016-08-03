import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '/imports/components/mainLayout.jsx';

import { PageApplicationsClosed } from '/imports/components/pages/pageApplicationsClosed.jsx';
import { Page401 } from '/imports/components/pages/page401.jsx';
import { Page404 } from '/imports/components/pages/page404.jsx';

import { ApplyContainer } from '/imports/containers/applyContainer.jsx';
import { PaymentContainer } from '/imports/containers/paymentContainer.jsx';
import { AdminContainer } from '/imports/containers/adminContainer.jsx';
import { ApplicationsContainer } from '/imports/containers/applicationsContainer.jsx';

// Public Routes
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

publicRoutes.route('/not-found', {
  name: 'not-found',
  action() {
    mount(MainLayout, {
      content: <Page404 />,
    });
  },
});

publicRoutes.route('/unauthorized', {
  name: 'unauthorized',
  action() {
    mount(MainLayout, {
      content: <Page401 />,
    });
  },
});

// Authenticated Routes
const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
});

authenticatedRoutes.route('/apply', {
  name: 'apply',
  action() {
    mount(MainLayout, {
      content: <ApplyContainer />,
    });
  },
});

authenticatedRoutes.route('/apply/introduction', {
  name: 'apply',
  action() {
    let intro = true;

    mount(MainLayout, {
      content: <ApplyContainer intro={intro} />,
    });
  },
});

authenticatedRoutes.route('/apply/section/:section', {
  name: 'apply',
  action(params) {
    let step = parseInt(params.section);

    mount(MainLayout, {
      content: <ApplyContainer section={step} />,
    });
  },
});

authenticatedRoutes.route('/apply/pay', {
  name: 'pay-application',
  action(params, queryParams) {
    mount(MainLayout, {
      content: <PaymentContainer />,
    });
  }
});

// Admin Routes
const adminRoutes = FlowRouter.group({
  name: 'adminRoutes',
});

adminRoutes.route('/admin', {
  name: 'admin',
  action() {
    mount(MainLayout, {
      content: <AdminContainer />,
    });
  },
});

adminRoutes.route('/applications', {
  name: 'applications',
  action() {
    mount(MainLayout, {
      content: <ApplicationsContainer />,
    });
  },
});

adminRoutes.route('/applications/page/:page', {
  name: 'applications',
  action(params) {
    let page = parseInt(params.page);

    mount(MainLayout, {
      content: <ApplicationsContainer page={page} />,
    });
  },
});

// Other Routes stuff
FlowRouter.wait();

Tracker.autorun(() => {
  if (Roles.subscription.ready() && !FlowRouter._initialized) {
    FlowRouter.initialize();
  }
});
