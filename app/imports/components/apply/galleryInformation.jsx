import React from 'react';
import i18n from 'meteor/universe:i18n';
import { AutoForm, AutoField, ErrorsField } from 'uniforms-unstyled';

// Import schemas
import { GalleryInformationSchema } from '/imports/schemas/galleryInformation.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class GalleryInformation extends ApplySection {
  render() {
    const T = i18n.createComponent();

    return (
      <section className="apply-section">
        <h2><T>apply.sections.galleryInformation.title</T></h2>
        <AutoForm
          autosave
          autosaveDelay={Meteor.settings.public.autosaveDelay}
          schema={GalleryInformationSchema}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model}
        >
          <AutoField name="galleryName" />
          <AutoField name="address1" />
          <AutoField name="address2" />
          <AutoField name="city" />
          <AutoField name="state" />
          <AutoField name="postalCode" />
          <AutoField name="country" />
          <AutoField name="galleryPhone" placeholder="+1-541-754-3010" />
          <AutoField name="galleryEmail" />
          <AutoField name="website" placeholder="thegallery.com" />
          <AutoField name="twitter" placeholder="@theGallery" />
          <AutoField name="facebook" placeholder="facebook.com/theGallery" />
          <AutoField name="instagram" placeholder="@theGallery" />
          <ErrorsField className="errors" />
        </AutoForm>
      </section>
    );
  }
}
