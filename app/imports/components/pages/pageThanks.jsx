import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

export class PageThanks extends Component {
  render() {
  	  const T = i18n.createComponent();

    return(
      <div className="row">
        <section className="fluid-col s-12">
          <p><T>apply.thanks</T></p>
        </section>
      </div>
    );
  }
};