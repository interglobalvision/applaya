import React from 'react';
import { AutoForm, AutoField, ErrorsField } from 'uniforms-unstyled';

// Import schemas
import { TermsSchema } from '/imports/schemas/terms.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

export class Terms extends ApplySection {
  render() {
    const T = i18n.createComponent();

    return (
      <section className="apply-section">
        <h2><T>apply.sections.terms.title</T></h2>
        <T>apply.sections.terms.description</T>
        <AutoForm
          autosave
          schema={TermsSchema}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model}
        >
          <AutoField name="name" />
          <AutoField name="date" disabled="true" value={Date()} />
          <AutoField name="signature" />
          <ErrorsField className="errors" />
        </AutoForm>
        <T>apply.sections.terms.agreement</T>
      </section>
    );
  }
}
