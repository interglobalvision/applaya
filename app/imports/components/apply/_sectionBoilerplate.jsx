import React, { Component } from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { SectionSchema } from '/imports/schemas/sectionSchema.js';

// Import methods
import { saveApplicationSection, saveApplyPosition } from '/imports/api/methods.js';

// Component
export class Section extends Component {
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
      <AutoForm schema={SectionSchema} autosave onSubmit={this.onSubmit.bind(this)} model={this.props.model}/>
    );
  }
}
