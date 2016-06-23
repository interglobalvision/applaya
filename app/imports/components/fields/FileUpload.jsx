import React from 'react';

import { BaseField, connectField } from 'uniforms';

const uploadFile = (value, onChange) => {
  console.log(value);
};

const FieldUpload = props =>
<div>
  <input type="file"
    name="uploadFile"
    onChange={event => uploadFile(event.target.value, props.onChange)}
  />
  <input type="text"
    name="file-url"
    value={props.value}
  />
  <input type="text"
    name="file-preview"
    value={props.preview}
  />
</div>
;

export default connectField(FieldUpload, {
  mapProps: x => x,     // Map field props. Useful to prepare different
    // props set for external components.
    // Example:
    //     mapProps: props => ({...props, change: props.onChange})

    baseField: BaseField, // connectField returns create HOC inherited from baseField class.

    initialValue: true,   // Pass true, to set initial value, when it is not defined.
    includeParent: false, // Pass true, to receive parent props.
    includeInChain: true  // Pass true, to stay visible, in nested fields.
});
