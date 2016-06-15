import React, { Component } from 'react';
import {AutoForm} from 'uniforms-unstyled';

// Import collections
import { ApplicationSections } from '/imports/collections/applicationSections.js';

// Import schemas
import { FormSchema } from '/imports/schemas/TestForm.js';

// Import methods
import { saveApplicationSection } from '/imports/api/methods.js';

// Component
export default class FormTest extends Component {
  onSubmit(doc) {
    let type = this.props.type;
    let applicationId = this.props.applicationId;
    let data = doc;

    saveApplicationSection.call({
      type,
      applicationId,
      data,
    }, (err,res) => {
      if (err) {
        alert(err);
      }
    });
  }

  render() {
    // Get saved data
    return (
      <AutoForm schema={FormSchema} autosave={true} onSubmit={this.onSubmit.bind(this)} model={this.props.model}/>
    );
  }
};
