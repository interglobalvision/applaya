/* globals Slingshot */
import React, { Component } from 'react';

import { connectField } from 'uniforms';

import '/imports/startup/slingshot.js';

class FieldUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploading: false,
    };
  }

  uploadFile() {
    const image = this.refs.fileInput.files[0];
    const uploader = new Slingshot.Upload('imageUpload');

    this.setState({
      uploading: true,
    });
    
    uploader.send(image, function(error, url) {
      if (error) {  
        throw new Meteor.Error('upload-file-fail', error);
      } else {
        const file = {
          url: url,
          name: image.name,
        };

        this.setState({
          uploading: false,
        });

        this.props.onChange(file);
      }
    }.bind(this));
  }

  handleClick() {
    this.refs.fileInput.dispatchEvent(new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    }));
  }

  render() {
    let displayTrigger = !this.state.uploading || _.isEmpty(this.props.fileUrl) ? 'block' : 'none';

    return (
      <section className="upload-container">
        { this.state.uploading ? <p>Uploading...</p> : '' }
        <input
          id={this.props.id}
          type="file"
          name={this.props.name}
          onChange={this.uploadFile.bind(this)}
          ref="fileInput"
          disabled={this.state.uploading}
          style={{display:'none'}}
        />
        <div onClick={this.handleClick.bind(this)} style={{display: displayTrigger}}>Trigger</div>
        <FilePreview url={this.props.fileUrl} name={this.props.fileName} />
      </section>
    );
  } 
}

const FilePreview = (props) => {
  return (
    <div>
      <img src={props.url} />
      <p>{props.name}</p>
    </div>
  );
};

export const UploadField = connectField(FieldUpload, {
  mapProps: props => {
    props.fileUrl = props.value.url || ''; 
    props.fileName = props.value.name || ''; 

    return props;
  },
});
