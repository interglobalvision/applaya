/* globals Slingshot */
import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

import Alert from 'react-s-alert';

import { connectField } from 'uniforms';

import '/imports/startup/slingshot.js';

const T = i18n.createComponent();

class FieldUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploading: false,
    };
  }

  getSlingshowUploader() {
    return new Slingshot.Upload('fileUpload');
  }

  uploadFile() {
    const uploadFile = this.refs.fileInput.files[0];
    const uploader = this.getSlingshowUploader();

    this.setState({
      uploading: true,
    });

    uploader.send(uploadFile, function(error, url) {
      this.setState({uploading: false,});

      if (error) {
        Alert.error(error.message);
        console.log(error);
        throw new Meteor.Error('upload-file-fail', error);

      } else {
        const file = {
          url: url,
          name: uploadFile.name,
        };

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

  filePreview() {
    if (this.props.fileUrl) {
      return (
        <div className='margin-bottom-tiny'>
          <a rel='noopener' target='_blank' href={this.props.fileUrl}>{'📄'} {this.props.fileName}</a>
        </div>
      );
    } else {
      return null
    }
  }

  renderSpecs() {
    return (
      <T>upload.specs.file</T>
    );
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
        {this.filePreview()}
        <div className='buttons'>
          <a onClick={this.handleClick.bind(this)}>
            { this.state.uploading ? <T>upload.chooseFile</T> : <T>upload.chooseFile</T> }
          </a> <span className='font-smaller'>{this.renderSpecs()}</span>
        </div>
      </section>
    );
  }
}

class FieldUploadImage extends FieldUpload {
  getSlingshowUploader() {
    return new Slingshot.Upload('imageUpload');
  }

  filePreview() {
    if (this.props.fileUrl) {
      return (
        <div className='margin-bottom-tiny'>
          <img src={this.props.fileUrl} /><br/>
          <a rel='noopener' target='_blank' href={this.props.fileUrl}>{'📄'} {this.props.fileName}</a>
        </div>
      );
    } else {
      return null
    }
  }

  renderSpecs() {
    return (
      <T>upload.specs.images</T>
    );
  }
}

export const UploadField = connectField(FieldUpload, {
  mapProps: props => {
    props.fileUrl = props.value.url || '';
    props.fileName = props.value.name || '';

    return props;
  },
});

export const UploadFieldImage = connectField(FieldUploadImage, {
  mapProps: props => {
    props.fileUrl = props.value.url || '';
    props.fileName = props.value.name || '';

    return props;
  },
});
