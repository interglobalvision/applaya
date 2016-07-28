import React            from 'react';
import {connectField}   from 'uniforms';
import {filterDOMProps} from 'uniforms';

const ListDel = ({
  disabled,
  name,
  parent,
  label,
  ...props
}) => {
  const fieldIndex      = +name.slice(1 + name.lastIndexOf('.'));
  const limitNotReached = !disabled && !(parent.minCount >= parent.value.length);
  const T = i18n.createComponent();

  return (
    <div className="buttons">
      <a className="listFieldDel"
      {...filterDOMProps(props)}
      onClick={() => limitNotReached && parent.onChange([].concat(parent.value.slice(0,  fieldIndex)).concat(parent.value.slice(1 + fieldIndex)))}
      >
       <T name={props.field.label}>fields.list.del</T> {label}
      </a>
    </div>
  );
};

export default connectField(ListDel, {includeParent: true, initialValue: false});
