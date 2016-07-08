import React, { Component } from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import methods
import { submitApplicationSection, saveApplicationSection, saveApplyPosition } from '/imports/api/methods.js';

// Component
export class ApplySection extends Component {
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

    submitApplicationSection.call({
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

}
