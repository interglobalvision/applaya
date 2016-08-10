import React, { Component } from 'react';

import { SingleSection } from '/imports/components/single/singleLayout.jsx';

import { submitApplication } from '/imports/api/methods/applicationMethods.js';

export class SubmitLayout extends Component {
  onSubmit() {
    let applicationId = this.props.application._id;

    submitApplication.call(applicationId, (err, res) => {
      if (err) {
        return console.log(err);
      }
      FlowRouter.go('/apply/pay');
    });

  }

  render() {
    const T = i18n.createComponent();

    return (
      <section className='row'>
        <div className='fluid-col s-12'>
          <h2><T>apply.submit.title</T></h2>
          <p><T>apply.submit.description</T></p>
          <div>
            {this.props.sections.map((section, key) => (
              <SingleSection section={section} key={key} />
            ))}
          </div>
          <div className='margin-top-large'>
          <p><T>apply.submit.confirmation</T></p>
          <a className="button" onClick={this.onSubmit.bind(this)}><T>apply.submit.button</T></a>
          </div>
        </div>
      </section>
    );
  }

}