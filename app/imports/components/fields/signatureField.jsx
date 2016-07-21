/* globals SignaturePad */
import React, { Component } from 'react';

import { connectField, filterDOMProps } from 'uniforms';

class SignatureComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.canvas = this.refs.signatureCanvas;
    this.canvasContext = this.canvas.getContext('2d');

    this.signaturePad = new SignaturePad(this.canvas, {
      onEnd: this.handleEndStroke.bind(this),
    });

    window.addEventListener('resize', this.handleResize.bind(this));

    this.drawSignature();

  }

  componentDidUpdate() {
    this.drawSignature();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  drawSignature() {
    // If signature is empty just clear the canvas
    if (this.props.value === '') {
      return this.signaturePad.clear();
    }

    let img = new Image();

    img.onload = function() {
      this.canvasContext.drawImage(img,0,0,img.width,img.height,0,0,this.canvas.width,this.canvas.height);
    }.bind(this);

    img.src = this.props.value;
  }

  clearSignature() {
    // maybe use a confirm() or something here
    this.props.onChange('');
  }

  handleEndStroke() {
    this.props.onChange(this.signaturePad.toDataURL());
  }

  handleResize() {
    let ratio = Math.max(window.devicePixelRatio || 1, 1);

    this.canvas.width = this.canvas.offsetWidth * ratio;
    this.canvas.height = this.canvas.offsetHeight * ratio;
    this.canvasContext.scale(ratio, ratio);

    this.drawSignature();
  }

  render() {
    const T = i18n.createComponent();

    return (
      <section>
        <canvas id={this.props.id} ref="signatureCanvas"></canvas>
        <p><T>fields.signature.callToAction</T></p>
        { !!this.props.value ? <button onClick={this.clearSignature.bind(this)}>Clear</button> : '' }
      </section>
    );
  }
}

export const SignatureField = connectField(SignatureComponent);
