import React          from 'react';
import {Children}     from 'react';
import {connectField} from 'uniforms';
import {joinName}     from 'uniforms';

import { AutoField } from 'uniforms-unstyled';
import ListDelField from './listDelField';

const ListItem = props =>
    <section>
        <ListDelField name={props.name} />

        {props.children ? (
            Children.map(props.children, child =>
                React.cloneElement(child, {
                    name: joinName(props.name, child.props.name),
                    label: null
                })
            )
        ) : (
            <AutoField {...props} />
        )}
    </section>
;

export default connectField(ListItem, {includeInChain: false});
