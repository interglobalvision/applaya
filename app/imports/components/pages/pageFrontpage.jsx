import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

export class PageFrontpage extends Component {
  componentWillMount() {
    // Conditional routing for logged in users
    if (Meteor.userId()) {
      if (Roles.userIsInRole(Meteor.userId(), 'applicant')) {
        FlowRouter.go('/apply');
      } else if (Roles.userIsInRole(Meteor.userId(), 'committee')) {
        FlowRouter.go('/applications');
      } else if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
        FlowRouter.go('/admin');
      }
    }
  }

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
          <a className='button' onClick={this.onLanguageEn}>English</a>
          <a className='button' onClick={this.onLanguageEs}>Español</a>
        </section>
      </div>
    );
  }
};