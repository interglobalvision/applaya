import React, { Component } from 'react';

import { Page404 } from '/imports/components/pages/page404.jsx';
import { ApplySidebar } from '/imports/components/apply/applySidebar.jsx';

import { ApplyIntro } from '/imports/components/apply/applyIntro.jsx';

// Import apply steps
import { Steps } from '/imports/components/apply/steps.js';

export class ApplyLayout extends Component {
  localeChanged(locale) {
    this.localizeMessages(locale);
    this.forceUpdate();
  }

  localizeMessages(locale) {
    if(locale === 'en') {
      SimpleSchema.messages({
        required: "[label] is required",
        minString: "[label] must be at least [min] characters",
        minNumber: "[label] must be at least [min]",
        maxNumber: "[label] cannot exceed [max]",
        minDate: "[label] must be on or after [min]",
        maxDate: "[label] cannot be after [max]",
        badDate: "[label] is not a valid date",
        minCount: "You must specify at least [minCount] values",
        maxCount: "You cannot specify more than [maxCount] values",
        noDecimal: "[label] must be an integer",
        notAllowed: "[value] is not an allowed value",
        expectedString: "[label] must be a string",
        expectedNumber: "[label] must be a number",
        expectedBoolean: "[label] must be a boolean",
        expectedArray: "[label] must be an array",
        expectedObject: "[label] must be an object",
        expectedConstructor: "[label] must be a [type]",
        regEx: [
          {msg: "[label] failed regular expression validation"},
          {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
          {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
          {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
          {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
          {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
          {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
          {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
          {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
          {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
        ],
        keyNotInSchema: "[key] is not allowed by the schema"
      });
    } else if (locale === 'es') {
      SimpleSchema.messages({
        required: "[label] es obligatorio",
        minString: "[label] tiene que tener por lo menos [min] caracteres",
        maxString: "[label] no puede tener mas de [max] caracteres",
        minNumber: "[label] tiene que ser por lo menos [min]",
        maxNumber: "[label] no puede exceder [max]",
        minNumberExclusive: "[label] tiene que ser mas grande que [min]",
        maxNumberExclusive: "[label] tiene que ser mas chico que [max]",
        minDate: "[label] tiene que ser antes de [min]",
        maxDate: "[label] no puede ser despues de [max]",
        badDate: "[label] no es una fecha válida",
        minCount: "Tiene que especificar por lo menos [minCount] valores",
        maxCount: "No puede especificar mas de [maxCount] valores",
        noDecimal: "[label] tiene que ser un numero entero",
        notAllowed: "[value] no es un valor permitido",
        expectedString: "[label] tiene que ser una cadena de caracteres",
        expectedNumber: "[label] tiene que ser un numero",
        expectedBoolean: "[label] tiene que ser de tipo 'si/no'",
        expectedArray: "[label] tiene que ser un vector",
        expectedObject: "[label] tiene que ser un objeto",
        expectedConstructor: "[label] tiene que ser de tipo [type]",
        keyNotInSchema: "[key] no esta permitido por el esquema",
        regEx: [
          { "msg": "[label] falló la validación por Expresión Regular (Regex)" },
          { exp: SimpleSchema.RegEx.Email, msg: "[label] tiene que ser una direccion de correo electronico válida" },
          { exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] tiene que ser una direccion de correo electronico válida" },
          { exp: SimpleSchema.RegEx.Domain, msg: "[label] tiene que ser un nombre de dominio válido" },
          { exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] tiene que ser un nombre de dominio válido" },
          { exp: SimpleSchema.RegEx.IP, msg: "[label] tiene que ser una dirreción de IPv4 o IPv6 válida" },
          { exp: SimpleSchema.RegEx.IPv4, msg: "[label] tiene que ser una dirreción de IPv4 válida" },
          { exp: SimpleSchema.RegEx.IPv6, msg: "[label] tiene que ser una dirreción de IPv6 válida" },
          { exp: SimpleSchema.RegEx.Url, msg: "[label] tiene que ser una URL válida" },
          { exp: SimpleSchema.RegEx.Id, msg: "[label] tiene que ser un ID alfanumerico" }
        ]
      });
    }
  }

  componentWillMount() {
    i18n.onChangeLocale(this.localeChanged.bind(this));
  }

  componentWillUnmount() {
    i18n.offChangeLocale(this.localeChanged.bind(this));
  }


  getApplySection() {

    let step = this.props.section.step;

    // Steps is an array, so positions start at 0.
    // But the step numbers for the routs start at 1. So we
    // substract the offset to the step param received.
    step--;
    const StepComponent = Steps[step].component;

    return (
      <StepComponent
        applicationId={this.props.application._id}
        step={this.props.section.step}
        sectionId={this.props.section.id}
        model={this.props.section.data}
        validated={this.props.validated}
      />
    );

  }

  render() {
    // Check if logged in
    if (!this.props.user) {
      return <Accounts.ui.LoginForm />;
    }

    return (
      <div className="row">
        <section className="apply-layout fluid-col s-10 m-9">
          { this.props.showIntro ?
            <ApplyIntro />
          : this.getApplySection()
          }
        </section>
        <ApplySidebar application={this.props.application} />
      </div>
    );
  }
}

ApplyLayout.protoTypes = {
  user: React.PropTypes.object,
  section: React.PropTypes.string,
  application: React.PropTypes.object,
  validated: React.PropTypes.bool,
};
