import React, { Component } from 'react';

// Import Steps
import { StepsInfo } from '/imports/lib/steps.js';

export class ApplyPagination extends Component {
  renderPayAndSubmit(status) {
    if (status.complete) {
      if (status.paid) {
        return <a href="/apply/submit" className="button">Re-Submit</a>
      } else {
        return <a href="/apply/submit" className="button">Submit & Pay</a>
      }
    }
  }

  render() {
    const step = this.props.step - 1;
    const prevStep = step - 1;
    const nextStep = step + 1;
    return (
      <nav className="margin-top-basic">
        { prevStep > 0 ? <a className="button" href={'/apply/section/' + (prevStep + 1)}>← {StepsInfo[prevStep].name}</a> : false }
        { nextStep < StepsInfo.length ? <a className="button" href={'/apply/section/' + (nextStep + 1)}>{StepsInfo[nextStep].name} →</a> : false }
        {this.renderPayAndSubmit(this.props.applicationStatus)}
      </nav>
    );
  }
};
