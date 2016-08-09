import React from 'react';
import { AutoForm, AutoField, ErrorsField } from 'uniforms-unstyled';

// Import schemas
import { ContactInformationSchema } from '/imports/schemas/contactInformation.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class ContactInformation extends ApplySection {
  render() {
    const T = i18n.createComponent();

    return (
      <section className="apply-section">
        <h2><T>apply.sections.contactInformation.title</T></h2>
        <T>apply.sections.contactInformation.description</T>
        <AutoForm
          autosave
          schema={ContactInformationSchema}
          onSubmit={this.onSubmit.bind(this)}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model}
        >
          <AutoField name="contactName" />
          <AutoField name="contactEmail" />
          <AutoField name="contactPhone" />
          <AutoField name="twitter" />
          <AutoField name="facebook" />
          <AutoField name="tumblr" />
          <AutoField name="instagram" />
          <ErrorsField className={'errors'} />
        </AutoForm>
      </section>
    );
  }
}
