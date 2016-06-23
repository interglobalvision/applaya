import React, { Component } from 'react';

// Import apply steps
import Steps from '/imports/components/apply/steps.js';

export default class ApplyLayout extends Component {

  getApplySection() {

    // Check if logged in
    if (!this.props.user) {
      return <Accounts.ui.LoginForm />;
    }

    let step = this.props.section.step;

    if (step === undefined) {
      return ':('; // 404
    }

    // Steps is an array, so positions start at 0.
    // But the step numbers for the routs start at 1. So we
    // substract the offset to the step param received.
    step--;
    const StepComponent = Steps[step].component;

    return (
      <StepComponent
        applicationId={this.props.application._id}
        step={this.props.section.step}
        sectionId={this.props.section.id}
        model={this.props.section.data} />
    );

  }

  render() {
    return (
      <section className="apply-layout">
        { this.getApplySection() }
      </section>
    );
  }
}

ApplyLayout.protoTypes = {
  user: React.PropTypes.object,
  section: React.PropTypes.string,
  application: React.PropTypes.object,
};
