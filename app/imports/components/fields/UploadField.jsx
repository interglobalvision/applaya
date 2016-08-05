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
      if (error) {
        throw new Meteor.Error('upload-file-fail', error);
      } else {
        const file = {
          url: url,
          name: uploadFile.name,
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

  filePreview() {
    return (
      <div className='margin-bottom-tiny'>
        <a rel='noopener' target='_blank' href={this.props.fileUrl}>{'📄'} {this.props.fileName}</a>
      </div>
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
            { this.state.uploading ? 'Uploading...' : 'Choose File' }
          </a>
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
    return (
      <div className='margin-bottom-tiny'>
        <img src={this.props.fileUrl} />
        <a rel='noopener' target='_blank' href={this.props.fileUrl}>{'📄'} {this.props.fileName}</a>
      </div>
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
