import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { SignatureSchema } from '/imports/schemas/signature.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class Signature extends ApplySection {
  render() {
    return (
      <AutoForm
        autosave
        schema={SignatureSchema}
        onSubmit={this.onSubmit.bind(this)}
        onValidate={this.onValidate.bind(this)}
        model={this.props.model}/>
    );
  }
}
