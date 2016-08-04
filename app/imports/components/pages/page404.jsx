import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

export class Page404 extends Component {
  render() {
  	  const T = i18n.createComponent();

    return(
      <div className="row">
        <section className="fluid-col s-12">
          <h3><T>errors.codes.fourzerofour</T></h3>
        </section>
      </div>
    );
  }
};