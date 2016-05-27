import React from 'react';
import {mount} from 'react-mounter';

import { AppLayout } from '/imports/ui/appLayout.jsx';
import Content from '/imports/ui/content.jsx';
import Header from '/imports/ui/header.jsx';
import Footer from '/imports/ui/footer.jsx';

FlowRouter.route("/", {
  action (){
    mount(AppLayout, {
      header: <Header />,
      footer: <Footer />,
    });
  }
});
