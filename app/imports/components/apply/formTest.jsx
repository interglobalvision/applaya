import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { FormSchema } from '/imports/schemas/testForm.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component (extends ApplySection)
export class FormTest extends ApplySection {
  render() {
    return (
      <AutoForm
        autosave
        schema={FormSchema}
        onSubmit={this.onSubmit.bind(this)}
        onValidate={this.onValidate.bind(this)}
        model={this.props.model}
      />
    );
  }
}
