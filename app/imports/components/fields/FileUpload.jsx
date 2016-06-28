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
    } else if (url) {
      const file = {
        url: url,
        name: image.name,
      }
      onChange(file);
    }
  });
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
