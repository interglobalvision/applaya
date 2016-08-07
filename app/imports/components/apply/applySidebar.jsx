import React, { Component } from 'react';
import Alert from 'react-s-alert';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';

import { StepsInfo } from '/imports/components/apply/steps.js';

import { submitApplication } from '/imports/api/methods/applicationMethods.js';

export class ApplySidebar extends Component {
  mapSteps(steps) {

    steps = steps.map((step, key) => {
      let applicationSection = ApplicationSections.findOne({ step: (key + 1) });

      // todo add boolean for if section is validated and complete
      //console.log(applicationSection);
      let validated = false;

      if (!_.isUndefined(applicationSection) && !_.isUndefined(applicationSection.validated)) {
        validated = applicationSection.validated;
      }

      return {
        name: step.name,
        url: '/apply/section/' + (key + 1),
        validated,
      };
    });

    return steps;
  }

  resubmitClick() {
    submitApplication.call(this.props.application._id, (err) => {
      if (err) {
        Alert.error(err.reason);
        console.log('submitApplication error:', err);
      } else {
        FlowRouter.go('/apply/thanks');
      }
    });
  }

  renderPayAndSubmit(application) {
    if (StepsInfo.length === application.progress) {
      if (application.status.paid) {
        return <a className="button" onClick={this.resubmitClick.bind(this)}>Re-Submit</a>
      } else {
        return <a href="/apply/pay" className="button">Submit & Pay</a>
      }
    }
  }

  render() {
    const steps = this.mapSteps(StepsInfo);

    return (
      <div className="content">
        <h4>Application Progress</h4>
        <ul>
          <li><a href="/apply/introduction">Introduction</a></li>
        {steps.map((step, key) => (
          <ApplySidebarStep name={step.name} url={step.url} validated={step.validated} key={key} />
        ))}
        </ul>
        {this.renderPayAndSubmit(this.props.application)}
      </div>
    );
  }
}

export class ApplySidebarStep extends Component {
  render() {
    return (
      <li><a href={this.props.url}>{this.props.name}{ this.props.validated ? ' ✔︎' : ''}</a></li>
    );
  }
}
