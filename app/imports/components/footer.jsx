import React from 'react';

const T = i18n.createComponent();

export const Footer = () => (
  <footer id="footer" className="background-color-compliment1 font-color-white margin-top-large padding-top-small padding-bottom-small font-smaller">
    <div className="container">
      <div className="row">
        <div className="fluid-col s-12">
          <em>Life's a beach, then you apply</em><br />
          <a href="http://interglobal.vision" rel="noopener" target="_blank"><T>footer.applaya</T></a>
        </div>
      </div>
    </div>
  </footer>
);
