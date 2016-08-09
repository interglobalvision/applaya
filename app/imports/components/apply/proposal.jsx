import React from 'react';
import { AutoForm, AutoField, ErrorsField } from 'uniforms-unstyled';

// Import schemas
import { ProposalSchema } from '/imports/schemas/proposal.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class Proposal extends ApplySection {
  render() {
    const T = i18n.createComponent();

    return (
      <section className="apply-section">
        <h2><T>apply.sections.proposal.title</T></h2>
        <T>apply.sections.proposal.description</T>
        <AutoForm
          autosave
          schema={ProposalSchema}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model}
        >
          <AutoField name="galleryHistory" />
          <AutoField name="artistsRepresented" />
          <AutoField name="galleryYear" />
          <AutoField name="participation" />
          <AutoField name="standProposal" />
          <ErrorsField className="errors" />
        </AutoForm>
      </section>
    );
  }
}
