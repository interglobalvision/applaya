import React from 'react';

import { Header } from '/imports/components/header.jsx';
import { Footer } from '/imports/components/footer.jsx';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

export const MainLayout = ({ content }) => (
  <div id="main-container">
    <Header />
    <div id="main-content" className="container">
      {content}
    </div>
    <Footer />
    <Alert stack={{limit: 3}}  position='bottom-right' timeout={5000}/>
  </div>
);
