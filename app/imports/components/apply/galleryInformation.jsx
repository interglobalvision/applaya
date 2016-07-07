import React, { Component } from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { GalleryInformationSchema } from '/imports/schemas/galleryInformation.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class GalleryInformation extends ApplySection {
  render() {
    return (
      <AutoForm
        autosave
        schema={GalleryInformationSchema}
        onSubmit={this.onSubmit.bind(this)}
        onValidate={this.onValidate.bind(this)}
        model={this.props.model}/>
    );
  }
}
