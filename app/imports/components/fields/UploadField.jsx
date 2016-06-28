import React from 'react';

import { BaseField, connectField } from 'uniforms';

import '/imports/lib/slingshot.js';

const uploadFile = (event, onChange) => {
  const uploader = new Slingshot.Upload("imageUpload");

  const image = event.currentTarget.files[0];

  // TODO: Disable input
  // TODO: Show "Loading…" or somthing

  uploader.send(image, function(error, url) {
    if (error) {  
      throw new Meteor.Error('upload-file-fail', error);
    } else {
      const file = {
        url: url,
        name: image.name,
      }
      onChange(file);
    }
  });

  /*
  const file = {
    name : "Screen Shot 2016-06-28 at 4.16.50 PM.png",
    url : "https://material-art-fair.s3.amazonaws.com/pCG9PriKwoZhZJq6K/image/aYyp_screenshot20160628at41650pm.png" url: url,
  }
  onChange(file);
  */
};

const FieldUpload = ({
  id,
  value,
  onChange,
  name,
  ...props
  }) =>

  <section {...props}>
    <input type="file"
      name="uploadFile"
      onChange={event => uploadFile(event, onChange)}
    />
    <img src={value.url} />
    <p>{value.name}</p>
  </section>
;

export default connectField(FieldUpload);
