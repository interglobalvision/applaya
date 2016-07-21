import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { BoothSchema } from '/imports/schemas/booth.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class Booth extends ApplySection {
  render() {
    const T = i18n.createComponent();

    return (
      <section>
        <h2><T>apply.sections.booth.title</T></h2>
        <T>apply.sections.booth.description</T>
        <AutoForm
          autosave
          schema={BoothSchema}
          onSubmit={this.onSubmit.bind(this)}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model}
        />
      </section>
    );
  }
}
