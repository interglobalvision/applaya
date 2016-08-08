/* globals Slingshot */
import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

import Alert from 'react-s-alert';

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
        Alert.error(error.message);
        throw new Meteor.Error('upload-file-fail', error);
      } else {
        const file = {
          url: url,
          name: image.name,
        };

        this.setState({
          uploading: false,
        });

        Alert.success(i18n.__('notifications.upload.success', {
          filename: file.name,
        }));
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
    return (
      <section className="upload-container">
        <input
          id={this.props.id}
          type='file'
          name={this.props.name}
          onChange={this.uploadFile.bind(this)}
          ref='fileInput'
          disabled={this.state.uploading}
          style={{display:'none'}}
        />
        <FilePreview url={this.props.fileUrl} name={this.props.fileName} />
        <div className='buttons'>
          <a onClick={this.handleClick.bind(this)}>
            { this.state.uploading ? 'Uploading...' : 'Choose File' }
          </a>
        </div>
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
