import React, { Component } from 'react';
import { AutoForm, AutoField, ErrorsField, SubmitField } from 'uniforms-unstyled';

import { ApplicationPaymentSchema } from '/imports/schemas/applicationPayment.js';

export class ApplyPayment extends Component {

  render() {

    const T = i18n.createComponent();

    return (
      <section>
        <h2><T>apply.payment.title</T></h2>
        <T>apply.payment.description</T>
        <AutoForm
          autosave
          schema={ApplicationPaymentSchema}
        >
          <AutoField name="name" />
          <AutoField name="cardNumber" />
          <AutoField name="cvc" />
          <AutoField name="expirationMonth" />
          <AutoField name="expirationYear" />
          <AutoField name="address1" />
          <AutoField name="address2" />
          <AutoField name="city" />
          <AutoField name="state" />
          <AutoField name="postalCode" />
          <AutoField name="country" />
          <AutoField name="phone" />
          <AutoField name="cellphone" />
          <ErrorsField />
          <SubmitField value="Pay"/>
        </AutoForm>
      </section>
    );
  }

}

