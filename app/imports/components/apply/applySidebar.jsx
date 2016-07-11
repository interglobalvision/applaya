import React, { Component } from 'react';

import { StepsInfo } from '/imports/components/apply/steps.js';

import { ApplicationSections } from '/imports/collections/applicationSections.js';

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
        url: '/apply/' + (key + 1),
        validated,
      };
    });

    return steps;
  }

  render() {

    const steps = this.mapSteps(stepsInfo);

    return (
      <div class="content">
        <h3>Application Progress</h3>
        <ul>
        {steps.map((step, key) => (
          <ApplySidebarStep name={step.name} url={step.url} validated={step.validated} key={key} />
        ))}
        </ul>
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
