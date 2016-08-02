import React, { Component } from 'react';
import { AutoForm, AutoField, ErrorsField, SubmitField } from 'uniforms-unstyled';

import { ApplicationPaymentSchema } from '/imports/schemas/applicationPayment.js';
import { makePayment } from '/imports/api/methods/paymentMethods.js';

export class PaymentLayout extends Component {
  componentDidMount() {
    Conekta.setPublicKey(Meteor.settings.public.conekta_public);
  }

  onSubmit(data) {
    let _this = this;
    Conekta.locale = i18n.getLocale();

    // Disable pay button
    
    // Tokenize card
    Conekta.Token.create(data, response => {

      makePayment.call({
        amount: _this.props.amount,
        description: _this.props.description,
        card: response.id,
        details: data,
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

    const info = {
      card: {
        name: 'Carlos Solares',
        number: 4242424242424242,
        cvc: 123,
        exp_year: 2020,
        exp_month: 2,
      },
      address: {
        street1: 'Ayuntamiento 132',
        street2: 'Int 15, Col Centro.',
        city: 'Cuauhtemoc',
        state: 'Ciudad de México',
        zip: '06040',
        country: 'Mexico',
      },
      phone: '1726069',
      cellphone: '5518393308',
    }

    return (
      <section>
        <h2><T>apply.payment.title</T></h2>
        <T>apply.payment.description</T>
        <AutoForm
          schema={ApplicationPaymentSchema}
          onSubmit={this.onSubmit.bind(this)}
          ref='pay-form'
          model={info}
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
          <p><b>{this.props.description}</b>: {this.formatAmount(this.props.amount)}</p>
          <ErrorsField />
          <SubmitField value="Pay"/>
        </AutoForm>
      </section>
    );
  }

}

