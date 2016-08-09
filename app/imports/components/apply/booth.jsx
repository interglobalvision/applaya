import React from 'react';
import { AutoForm, AutoField, ErrorsField } from 'uniforms-unstyled';

// Import schemas
import { BoothSchema } from '/imports/schemas/booth.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class Booth extends ApplySection {
  render() {
    const T = i18n.createComponent();

    return (
      <section className="apply-section">
        <h2><T>apply.sections.booth.title</T></h2>
        <T>apply.sections.booth.description</T>
        <AutoForm
          autosave
          schema={BoothSchema}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model}
        >
          <AutoField name="boothSize" />
          <ErrorsField className="errors" />
        </AutoForm>
      </section>
    );
  }
}
