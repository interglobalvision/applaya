import React, { Component } from 'react';

import { Page404 } from '/imports/components/pages/page404.jsx';
import { ApplySidebar } from '/imports/components/apply/applySidebar.jsx';

// Import apply steps
import { Steps } from '/imports/components/apply/steps.js';

export class ApplyLayout extends Component {

  getApplySection() {

    // Check if logged in
    if (!this.props.user) {
      return <Accounts.ui.LoginForm />;
    }

    let step = this.props.section.step;

    if (step === undefined) {
      return <Page404 />;
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
        model={this.props.section.data}
        validated={this.props.validated}
      />
    );

  }

  render() {
    return (
      <div className="row">
        <section className="apply-layout fluid-col s-10 m-7">
          { this.getApplySection() }
        </section>
        <nav className="fluid-col s-10 m-3 background-color-sidebar">
          <ApplySidebar />
        </nav>
      </div>
    );
  }
}

ApplyLayout.protoTypes = {
  user: React.PropTypes.object,
  section: React.PropTypes.string,
  application: React.PropTypes.object,
  validated: React.PropTypes.bool,
};
