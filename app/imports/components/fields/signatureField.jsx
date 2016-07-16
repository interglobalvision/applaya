/* globals SignaturePad */
import React, { Component } from 'react';

import { connectField } from 'uniforms';

class SignatureComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.canvas = this.refs.signatureCanvas;
    this.canvasContext = this.canvas.getContext('2d');

    window.addEventListener('resize', this.handleResize.bind(this));

    this.drawSignature();

    new SignaturePad(this.canvas);
  }

  componentDidUpdate() {
    this.drawSignature();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  drawSignature() {
    // If signature is empty just clear the canvas
    console.log(this.props.value);
    if (this.props.value === '') {
      return this.canvasContext.clearRect(0, 0, this.canvas.width,this.canvas.height);
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

  handleMouseUp() {
    this.props.onChange(this.canvas.toDataURL());
  }

  handleResize() {
    let ratio = Math.max(window.devicePixelRatio || 1, 1);

    this.canvas.width = this.canvas.offsetWidth * ratio;
    this.canvas.height = this.canvas.offsetHeight * ratio;
    this.canvasContext.scale(ratio, ratio);

    this.drawSignature();
  }

  render() {
    return (
      <section {...this.props}>
        <canvas id={this.props.id} ref="signatureCanvas" onMouseUp={this.handleMouseUp.bind(this)}></canvas>
        <p>Sign here</p>
        { !!this.props.value ? <button onClick={this.clearSignature.bind(this)}>Clear</button> : '' }
      </section>
    );
  }
}

export const SignatureField = connectField(SignatureComponent);
