import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { TermsSchema } from '/imports/schemas/terms.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

export class Terms extends ApplySection {
  render() {
    const T = i18n.createComponent();

    return (
      <section>
        <h2><T>apply.sections.terms.title</T></h2>
        <T>apply.sections.terms.description</T>
        <AutoForm
          autosave
          schema={TermsSchema}
          onSubmit={this.onSubmit.bind(this)}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model} />
        <T>apply.sections.terms.agreement</T>
      </section>
    );
  }
}
