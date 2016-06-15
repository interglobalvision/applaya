import React, { Component, PropTypes } from 'react';

// Import apply parts
import TextTest from '/imports/components/apply/text-test.jsx';

import FormTest from '/imports/components/apply/form-test.jsx';

export default class ApplyLayout extends Component {
  getApplySection() {

    // Check if logged in
    if( !this.props.user  ) {
      return <Accounts.ui.LoginForm />;
    }

    if( !!this.props.section ) {

      // This switch need a btter and nicer way to be declared.
      // I found out that trying to use an array doesn't work.
      // I wanna try to return react components dinamicaly by
      // using component name (String) or something like that
      switch(this.props.section.type) {
        case '1': return (
          <FormTest
            applicationId={this.props.application._id}
            type={this.props.section.type}
            sectionId={this.props.section.id}
            model={this.props.section.data} />
        );
        default: return ':('; // 404
      };
    }

  }

  render() {
    return (
      <section className="apply-layout">
        { this.getApplySection() }
      </section>
    );
  }
};

ApplyLayout.protoTypes = {
  user: React.PropTypes.object,
  section: React.PropTypes.string,
  application: React.PropTypes.object,
};