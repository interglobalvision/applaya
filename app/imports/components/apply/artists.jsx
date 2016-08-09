import React from 'react';
import { AutoForm, AutoField, ListField, ListItemField, NestField, ErrorsField } from 'uniforms-unstyled';

// Import schemas
import { ArtistsSchema } from '/imports/schemas/artists.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

// Component
export class Artists extends ApplySection {
  render() {
    const T = i18n.createComponent();

    return (
      <section className="apply-section">
        <h2><T>apply.sections.artists.title</T></h2>
        <AutoForm
          autosave
          autosaveDelay={Meteor.settings.public.autosaveDelay}
          schema={ArtistsSchema}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model}
        >
          <ListField name="artists">
            <ListItemField name="$">
              <NestField>
                <AutoField name="name" />
                <AutoField name="cv" />
                <AutoField name="work" />
              </NestField>
            </ListItemField>
          </ListField>
          <ErrorsField className="errors" />
        </AutoForm>
      </section>
    );
  }
}
