import React, { Component } from 'react';
import { AutoForm, AutoField, ErrorsField, SubmitField } from 'uniforms-unstyled';
import Alert from 'react-s-alert';

import { ApplicationPaymentSchema } from '/imports/schemas/applicationPayment.js';
import { makePayment } from '/imports/api/methods/paymentMethods.js';

export class PaymentLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processing: false,
    };
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      Conekta.setPublicKey(Meteor.settings.public.conekta_public);
    } else if (process.env.NODE_ENV === 'development') {
      Conekta.setPublicKey(Meteor.settings.public.conekta_public_sandbox);
    }
  }

  onSubmit(data) {
    let _this = this;
    Conekta.locale = i18n.getLocale();

    // Set processing state [to disable submission]
    this.setState({processing: true});

    // Tokenize card and call method
    Conekta.Token.create(data, response => {

      makePayment.call({
        card: response.id,
        details: data,
        locale: i18n.getLocale(),
        applicationId: _this.props.application._id,
      }, (err, res) => {
        if (err) {
          // Revert state
          _this.setState({processing: false});

          Alert.error(err.reason);
          console.log('makePayment error:', err);
        } else {
          Alert.success(i18n.__('notifications.payment.success'));
          FlowRouter.go('/apply/thanks');
        }

      });
    });
  }

  formatAmount(amount) {
    amount = amount.toString();
    const cents = amount.slice(amount.length - 2, amount.length);
    let dollars = amount.slice(0, amount.length - 2);

    while (/(\d+)(\d{3})/.test(dollars.toString())){
      dollars = dollars.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }

    return '$' + dollars + '.' + cents + ' USD';
  }

  render() {
    const T = i18n.createComponent();

    return (
      <section className='row'>
        <div className='fluid-col s-12'>
          <h2><T>apply.payment.title</T></h2>
          <p><T>apply.payment.description</T></p>
          <AutoForm
            schema={ApplicationPaymentSchema}
            onSubmit={this.onSubmit.bind(this)}
            ref='pay-form'
            disabled={this.state.processing}
          >
            <AutoField name="card.name" />
            <AutoField name="card.number" />
            <AutoField name="card.cvc" />
            <AutoField name="card.exp_year" />
            <AutoField name="card.exp_month" />
            <AutoField name="address.street1" />
            <AutoField name="address.street2" />
            <AutoField name="address.city" />
            <AutoField name="address.state" />
            <AutoField name="address.zip" />
            <AutoField name="address.country" />
            <AutoField name="phone" />
            <AutoField name="cellphone" />
            <hr />
            <h3>Totals</h3>
            <p><b>Application Fee</b>: {this.formatAmount(Meteor.settings.public.applicationFee)}</p>
            <ErrorsField />
            <SubmitField value="Pay" />
          </AutoForm>
        </div>
      </section>
    );
  }

}

