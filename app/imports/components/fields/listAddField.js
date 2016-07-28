import React            from 'react';
import {connectField}   from 'uniforms';
import {filterDOMProps} from 'uniforms';

const ListAdd = ({
  disabled,
  label,
  parent,
  value,
  ...props
}) => {
  const limitNotReached = !disabled && !(parent.maxCount <= value.length);
  const T = i18n.createComponent();

  return (
    <div class="buttons">
      <a
      {...filterDOMProps(props)}
      onClick={() => limitNotReached && parent.onChange(parent.value.concat([value]))}
      >
        <T>fields.list.add</T> {label}
      </a>
    </div>
  );
};

export default connectField(ListAdd, {includeParent: true, initialValue: false});
