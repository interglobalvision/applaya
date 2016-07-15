import React, { Component } from 'react';

import { connectField } from 'uniforms';

class SingaturePad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section {...this.props}>
        <canvas></canvas>
      </section>
    );
  }
}

export const SignatureField = connectField(SingaturePad);
