import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

export class PageFrontpage extends Component {
  onLanguageEn() {
    i18n.setLocale('en');
    FlowRouter.go('/signup');
  }

  onLanguageEs() {
    i18n.setLocale('es');
    FlowRouter.go('/signup');
  }

  render() {
    const T = i18n.createComponent();

    return(
      <div className="row">
        <section className="fluid-col s-12">
          <h1><T>frontpage.title</T></h1>
          <T>frontpage.introduction</T>
          <p>
            <a className='button' onClick={this.onLanguageEn}>English</a>
            <a className='button' onClick={this.onLanguageEs}>Español</a>
          </p>
          <T>frontpage.returningUsers</T>
          <a className='button' href='/login'><T>users.login.title</T></a>
        </section>
      </div>
    );
  }
};