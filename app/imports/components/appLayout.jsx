import React from 'react'

import Header from '/imports/components/header.jsx';
import Footer from '/imports/components/footer.jsx';

export const AppLayout = ({header, content, footer}) => (
  <div id="app-container">
    <Header />
    <div className="container">
      {content}
    </div>
    <Footer />
  </div>
);
