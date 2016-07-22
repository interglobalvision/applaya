import React from 'react';
import i18n from 'meteor/universe:i18n';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { GalleryInformationSchema } from '/imports/schemas/galleryInformation.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class GalleryInformation extends ApplySection {
  render() {
    const T = i18n.createComponent();

    return (
      <section>
        <h2><T>apply.sections.galleryInformation.title</T></h2>
        <T>apply.sections.galleryInformation.description</T>
        <AutoForm
          autosave
          schema={GalleryInformationSchema}
          onSubmit={this.onSubmit.bind(this)}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model}/>
      </section>
    );
  }
}
