/* globals Slingshot _ */
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

  componentDidMount() {
    this.uploader = new Slingshot.Upload('imageUpload');
  }

  uploadFile() {
    var _this = this;
    this.setState({ uploading: true, });
    
    const image = this.refs.fileInput.files[0];
    this.uploader.send(image, (error, url) => {
      if (error) {  
        throw new Meteor.Error('upload-file-fail', error);
      } else {
        const file = {
          url: url,
          name: image.name,
        };

        _this.setState({ uploading: false });
        _this.props.onChange(file);
      }
    });
  }

  render() {
    return(
      <section {...this.props}>
        { this.state.uploading ? <p>Uploading...</p> : '' }
        <input
          id={this.props.id}
          type="file"
          name={this.props.name}
          onChange={this.uploadFile.bind(this)}
          ref="fileInput"
          disabled={this.state.uploading}
        />
        <FilePreview url={this.props.fileUrl} name={this.props.fileName} />
      </section>
    );
  } 
}

const FilePreview = (props) => {
  return(
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
  }
});
