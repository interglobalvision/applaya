import React, { Component } from 'react';
import {AutoForm} from 'uniforms-unstyled';

// Import collections
import { ApplicationSections } from '/imports/collections/applicationSections.js';

// Import schemas
import { FormSchema } from '/imports/schemas/TestForm.js';

// Import methods
import { saveApplicationSection } from '/imports/api/methods.js';
import { saveApplyPosition } from '/imports/api/methods.js';

// Component
export default class FormTest extends Component {
  savePosition() {
    saveApplyPosition.call({
      position: this.props.type,
      applicationId: this.props.applicationId,
    }, (err, res) => {
      if (err) {
        console.error(err);
      }
    });
  }

  componentDidMount() {
    this.savePosition();
  }

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
