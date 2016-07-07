import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { ArtistsSchema } from '/imports/schemas/artists.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class Artists extends ApplySection {
  render() {
    return (
      <AutoForm
        autosave
        schema={ArtistsSchema}
        onSubmit={this.onSubmit.bind(this)}
        onValidate={this.onValidate.bind(this)}
        model={this.props.model}
      />
    );
  }
}
