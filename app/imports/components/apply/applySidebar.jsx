import React, { Component } from 'react';
import Alert from 'react-s-alert';

import { Applications } from '/imports/collections/applications.js';
import { ApplicationSections } from '/imports/collections/applicationSections.js';
import { ApplySubmitAndPay } from '/imports/components/apply/applySubmitAndPay.jsx';

import { StepsInfo } from '/imports/lib/steps.js';

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
        <ApplySubmitAndPay status={this.props.application.status} />
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
