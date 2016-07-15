import React, { Component } from 'react';

import { connectField } from 'uniforms';

class SignatureComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {


    let canvas = this.refs.signatureCanvas;
    let ctx = canvas.getContext('2d');
    let data = canvas.toDataURL();

    let resizeCanvas = () => {
      // When zoomed out to less than 100%, for some very strange reason,
      // some browsers report devicePixelRatio as less than 1
      // and only part of the canvas is cleared then.
      let ratio = Math.max(window.devicePixelRatio || 1, 1);
      let img = new Image();

      $('#signature-card').css('height', ($('#signature-card').width() * 0.4) );

      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      ctx.scale(ratio, ratio);

      img.onload = function(){
        ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
      };

      img.src = data;
    }

    window.onresize = resizeCanvas;

    resizeCanvas();

    canvas.onmouseup = function(e){
      data = canvas.toDataURL();
    };

    signaturePad = new SignaturePad(canvas);
  }

  render() {
    return (
      <section {...this.props}>
        <canvas id={this.props.id} ref='signatureCanvas'></canvas>
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
