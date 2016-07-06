import React, { Component } from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { FormSchema } from '/imports/schemas/testForm.js';

// Import methods
import { submitApplicationSection, saveApplicationSection, saveApplyPosition } from '/imports/api/methods.js';

// Component
export class FormTest extends Component {
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

    submitApplicationSection.call({
      step,
      applicationId,
      data,
    }, (err) => {
      if (err) {
        return new Meteor.Error(err);
      }
    });
  }

  onValidate(model, error, callback) {
    let step = this.props.step;
    let applicationId = this.props.applicationId;
    let data = model;

    saveApplicationSection.call({
      step,
      applicationId,
      data,
      validated: false,
    }, (err) => {
      if (err) {
        return new Meteor.Error(err);
      }
    });

    return callback();
  }

  isValidated() {
    if (this.props.validated === false) {
      return 'Not Validated';
    }

    return 'Validated';
  }

  render() {
    // Get saved data
    return (
      <div>
        <p>{this.isValidated()}</p>
        <AutoForm
          autosave
          schema={FormSchema}
          onSubmit={this.onSubmit.bind(this)}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model}
        />
      </div>
    );
  }
}
