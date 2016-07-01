import React, { Component } from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { BoothSchema } from '/imports/schemas/booth.js';

// Import methods
import { saveApplicationSection, saveApplyPosition } from '/imports/api/methods.js';

// Component
export class Booth extends Component {
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

  // This function gets called after the deafult SimpleSchema validation
  // more: https://github.com/vazco/uniforms/#asynchronous-validation
  onValidate(model, error, callback) {

    // You can pass additional validation if an error is already there
    if (error) {
      return callback();
    }

    // Check if at least on booth is selected by checking if
    // model is empty {} (initial state) or all values are false
    if ( _.isEmpty(model) || _.isEmpty(_.filter(model, val => val ) ) ) {

      // Return a validated error with a custom type. This type
      // is used to return a proper validation message (declated
      // within the schema/ Ex. /imports/schemas/booth.js
      return callback(new ValidationError([ {
        name: 'booth', // Type of error, can be mapped to a nice message on the client.
        type: 'emptyCheckboxes', // Type of error, can be mapped to a nice message on the client.
      } ]));
    }

    // Call the callback to continue the form cycle
    callback();
  }

  onSubmit(doc) {
    console.log('submit');
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
        schema={BoothSchema}
        onValidate={this.onValidate}
        onSubmit={this.onSubmit.bind(this)}
        model={this.props.model}
        />
    );
  }
}
