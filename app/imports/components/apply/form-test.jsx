import React, { Component } from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { FormSchema } from '/imports/schemas/TestForm.js';

// Import methods
import { saveApplicationSection, saveApplyPosition } from '/imports/api/methods.js';

// Component
export default class FormTest extends Component {
  savePosition() {
    saveApplyPosition.call({
      position: this.props.step,
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
    let step = this.props.step;
    let applicationId = this.props.applicationId;
    let data = doc;

    saveApplicationSection.call({
      step,
      applicationId,
      data,
    }, (err,res) => {
      if (err) {
        return new Meteor.Error(err);
      }
    });
  }

  render() {
    // Get saved data
    return (
      <AutoForm schema={FormSchema} autosave onSubmit={this.onSubmit.bind(this)} model={this.props.model}/>
    );
  }
}
