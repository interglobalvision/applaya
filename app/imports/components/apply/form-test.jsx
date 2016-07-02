import React, { Component } from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { FormSchema } from '/imports/schemas/TestForm.js';
import { Upload } from '/imports/schemas/Upload.js';

// Import methods
import { saveApplicationSection, saveApplyPosition } from '/imports/api/methods.js';

// Component
export default class FormTest extends Component {
  savePosition() {
    saveApplyPosition.call({
      position: this.props.step,
      applicationId: this.props.applicationId,
    }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  componentDidMount() {
    this.savePosition();
  }

  onSubmit(doc) {
    let step = this.props.step;
    let applicationId = this.props.applicationId;
    let data = doc;

    saveApplicationSection.call({
      step,
      applicationId,
      data,
    }, (err) => {
      if (err) {
        return new Meteor.Error(err);
      }
    });
  }

  render() {
    // Get saved data
    return (
      <AutoForm 
        schema={FormSchema}
        model={this.props.model}
        onSubmit={this.onSubmit.bind(this)} 
      />
    );
  }
}
