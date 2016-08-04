import React, { Component } from 'react';

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
        return new Meteor.Error(err);
      }
      FlowRouter.go('/apply/thanks');
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
      <nav className="fluid-col s-10 m-3 background-color-sidebar padding-top-small padding-bottom-small">
        <ul>
          <li><a href="/apply/introduction">Introduction</a></li>
        </ul>
        <ul>
          <li className="font-small-caps">Sections</li>
        {steps.map((step, key) => (
          <ApplySidebarStep name={step.name} url={step.url} validated={step.validated} key={key} />
        ))}
        </ul>
        {this.renderPayAndSubmit(this.props.application)}
      </nav>
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
