import React, { Component } from 'react';
import { AutoForm, AutoField, ErrorsField, SubmitField } from 'uniforms-unstyled';

import { ApplicationPaymentSchema } from '/imports/schemas/applicationPayment.js';
import { makePayment } from '/imports/api/methods/paymentMethods.js';

export class PaymentLayout extends Component {
  onSubmit(data) {
    Conekta.locale = i18n.getLocale();

    // Disable pay button
    
    // Tokenize card
    Conekta.token.create(data, response => {
      data.token = response.id;

      makePayment.call({
        amount: this.props.amount,
        description: this.props.description,
        card: data,
        locale: i18n.getLocale(),
      }, (err, res) => {
        if (err) {
          return console.log(err);
        }

        console.log(res);

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
      <section>
        <h2><T>apply.payment.title</T></h2>
        <T>apply.payment.description</T>
        <AutoForm
          schema={ApplicationPaymentSchema}
          onSubmit={this.onSubmit.bind(this)}
        >
          <AutoField name="name" />
          <AutoField name="number" />
          <AutoField name="cvc" />
          <AutoField name="exp_year" />
          <AutoField name="exp_month" />
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
          <p><b>{this.props.description}</b>: {this.formatAmount(this.props.amount)}</p>
          <ErrorsField />
          <SubmitField value="Pay"/>
        </AutoForm>
      </section>
    );
  }

}

