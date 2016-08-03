import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';

import { StepsInfo } from '/imports/components/apply/steps.js';

export class SingleLayout extends Component {
  localeChanged(locale) {
    this.localizeMessages(locale);
    this.forceUpdate();
  }

  localizeMessages(locale) {
    if (locale === 'en') {

    } else if (locale === 'es') {

    }
  }

  componentWillMount() {
    i18n.onChangeLocale(this.localeChanged.bind(this));
  }

  componentWillUnmount() {
    i18n.offChangeLocale(this.localeChanged.bind(this));
  }

  render() {
    if (!this.props.user) {
      return <Accounts.ui.LoginForm />;
    }

    let roleSpecificNav;
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      roleSpecificNav = <SingleAdminNav />;
    } else {
      roleSpecificNav = <SingleCommitteeNav />;
    }

    return (
      <section id="application-single">
        <h1>Single Application</h1>
        {this.props.sections.map((section, key) => (
          <SingleSection section={section} key={key} />
        ))}
        {roleSpecificNav}
      </section>
    );
  }
}

export class SingleSection extends Component {
  render() {

    let validatedString = this.props.section.validated.toString();

//     console.log(this.props.section);

    let stepIndex = this.props.section.step - 1;
    let step = StepsInfo[stepIndex];

    return (
      <div className="single-application-section">
        <h3>Section {this.props.section.step}: {step.name}</h3>
        <h5>Validated: {validatedString}</h5>
      </div>
    );
  }
}

export class SingleAdminNav extends Component {
  render() {

    return (
      <nav>
        <h3>Admin nav</h3>
        Here goes the same method buttons as the /applications index. And maybe also something more?
      </nav>
    );
  }
}

export class SingleCommitteeNav extends Component {
  render() {

    return (
      <nav>
        <h3>Committee nav</h3>
        Here goes comments and rating functions
      </nav>
    );
  }
}