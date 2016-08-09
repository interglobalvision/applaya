import { Component } from 'react';

// Import methods
import { submitApplicationSection, saveApplyPosition } from '/imports/api/methods/applicationMethods.js';

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

  onValidate(model, error, callback) {
    let step = this.props.step;
    let applicationId = this.props.applicationId;
    let data = model;

    submitApplicationSection.call({
      step,
      applicationId,
      data,
    }, (err) => {
      if (err) {
        return new Meteor.Error(err);
      }
    });

    return callback();
  }

}
