import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { SectionSchema } from '/imports/schemas/sectionSchema.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class Section extends ApplySection {
  render() {
    return (
      <AutoForm
        autosave
        schema={SectionSchema}
        onSubmit={this.onSubmit.bind(this)}
        onValidate={this.onValidate.bind(this)}
        model={this.props.model}/>
    );
  }
}
