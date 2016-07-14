/* globals Slingshot _ */
import React from 'react';

import { connectField } from 'uniforms';

import '/imports/lib/slingshot.js';

const uploadFile = (event, onChange) => {
  const uploader = new Slingshot.Upload('imageUpload');

  const image = event.currentTarget.files[0];

  // Disable input field
  inputRef.disabled = true;

  // TODO: Show "Uploading…" or somthing

  uploader.send(image, function(error, url) {
    if (error) {  
      throw new Meteor.Error('upload-file-fail', error);
    } else {
      const file = {
        url: url,
        name: image.name,
      };
      
      onChange(file);
    }

    // Enable input field
    inputRef.disabled = false;
  });

};

const FieldUpload = ({
  id,
  value,
  onChange,
  name,
  ...props,
  }) =>

  <section {...props}>
    <input
      id={id}
      type="file"
      name={name}
      onChange={event => uploadFile(event, onChange)}
      ref={ref => inputRef = ref}
    />
    <img src={value.url} />
    <p>{value.name}</p>
  </section>
;

export const UploadField = connectField(FieldUpload);
