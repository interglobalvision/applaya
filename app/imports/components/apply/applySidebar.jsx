import React, { Component } from 'react';

import { StepsInfo } from '/imports/components/apply/steps.js';

import { ApplicationSections } from '/imports/collections/applicationSections.js';

export class ApplySidebar extends Component {
  render() {
    let steps = StepsInfo;

    steps = steps.map((step, key) => {
      let applicationSection = ApplicationSections.findOne({ step: (key + 1) });

      // todo add boolean for if section is validated and complete
      // console.log(applicationSection);

      return {
        name: step.name,
        url: '/apply/' + (key + 1),
      };
    });

    return (
      <div class="content">
        <h3>Application Progress</h3>
        <ul>
        {steps.map((step, key) => (
          <ApplySidebarStep name={step.name} url={step.url} key={key} />
        ))}
        </ul>
      </div>
    );
  }
}

export class ApplySidebarStep extends Component {
  render() {
    return (
      <li><a href={this.props.url}>{this.props.name}</a></li>
    );
  }
}
