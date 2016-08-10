import React, { Component } from 'react';

import { ApplySubmitAndPay } from '/imports/components/apply/applySubmitAndPay.jsx';

// Import Steps
import { StepsInfo } from '/imports/lib/steps.js';

export class ApplyPagination extends Component {
  render() {
    const step = this.props.step - 1;
    const prevStep = step - 1;
    const nextStep = step + 1;

    return (
      <nav className="margin-top-basic">
        { prevStep >= 0 ? <a className="button" href={'/apply/section/' + (prevStep + 1)}>← {StepsInfo[prevStep].name}</a> : false }
        { nextStep < StepsInfo.length ? <a className="button" href={'/apply/section/' + (nextStep + 1)}>{StepsInfo[nextStep].name} →</a> : false }
        <ApplySubmitAndPay status={this.props.applicationStatus} />
      </nav>
    );
  }
};
