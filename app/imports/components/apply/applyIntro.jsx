import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

// Component
export class ApplyIntro extends Component {
  render() {
    const T = i18n.createComponent();

    return (
      <div>
        <T>apply.introduction</T>
      </div>
    );
  }
}
