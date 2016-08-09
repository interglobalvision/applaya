import React, { Component } from 'react';

export class ApplySubmitAndPay extends Component {
  render() {
    if (this.props.status.complete) {
      if (this.props.status.paid) {
        return (<a href="/apply/submit" className="button">Submit</a>);
      } else {
        return (<a href="/apply/submit" className="button">Submit & Pay</a>);
      }
    }
    return null;
  }
};
