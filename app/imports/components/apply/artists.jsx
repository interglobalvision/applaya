import React from 'react';

import { AutoForm, AutoField, NestField, ErrorsField } from 'uniforms-unstyled';

import ListField from '/imports/components/fields/list/ListField.jsx';
import ListItemField from '/imports/components/fields/list/ListItemField.jsx';

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
          <ListField name="artists" className='apply-section-artists'>
            <ListItemField name="$">
              <NestField className='apply-section-artist'>
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
