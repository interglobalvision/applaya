import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { ContactInformationSchema } from '/imports/schemas/contactInformation.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class ContactInformation extends ApplySection {
  render() {
    const T = i18n.createComponent();

    return (
      <section>
        <h2><T>apply.sections.contactInformation.title</T></h2>
        <T>apply.sections.contactInformation.description</T>
        <AutoForm
          autosave
          schema={ContactInformationSchema}
          onSubmit={this.onSubmit.bind(this)}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model}
        />
      </section>
    );
  }
}
