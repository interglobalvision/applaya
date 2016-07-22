import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { ProposalSchema } from '/imports/schemas/proposal.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class Proposal extends ApplySection {
  render() {
    const T = i18n.createComponent();

    return (
      <section>
        <h2><T>apply.sections.proposal.title</T></h2>
        <T>apply.sections.proposal.description</T>
        <AutoForm
          autosave
          schema={ProposalSchema}
          onSubmit={this.onSubmit.bind(this)}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model}/>
      </section>
    );
  }
}
