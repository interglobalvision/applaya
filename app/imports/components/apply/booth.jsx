import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { BoothSchema } from '/imports/schemas/booth.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class Booth extends ApplySection {
  render() {
    return (
      <AutoForm
        autosave
        schema={BoothSchema}
        onSubmit={this.onSubmit.bind(this)}
        onValidate={this.onValidate.bind(this)}
        model={this.props.model}
      />
    );
  }
}
