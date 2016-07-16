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

  handleMouseUp() {
    this.props.onChange(this.canvas.toDataURL());
  }

  drawSignature() {
    let img = new Image();

    img.onload = function() {
      this.canvasContext.drawImage(img,0,0,img.width,img.height,0,0,this.canvas.width,this.canvas.height);
    }.bind(this);

    img.src = this.props.value;
  }

  handleResize() {
    let ratio = Math.max(window.devicePixelRatio || 1, 1);

    this.canvas.width = this.canvas.offsetWidth * ratio;
    this.canvas.height = this.canvas.offsetHeight * ratio;
    this.canvasContext.scale(ratio, ratio);

  }

  render() {
    return (
      <section {...this.props}>
        <canvas id={this.props.id} ref='signatureCanvas' onMouseUp={this.handleMouseUp.bind(this)}></canvas>
        <p>Sign here</p>
      </section>
    );
  }
}

export const SignatureField = connectField(SignatureComponent, {
  mapProps: props => {
    props.fileUrl = props.value.url || ''; 
    props.fileName = props.value.name || ''; 

    return props;
  },
});
