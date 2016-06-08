import { composeWithTracker } from 'react-komposer';

import ApplyLayout from '/imports/components/apply/applyLayout.jsx';

const composer = ( props, onData ) => {
  let isLogged = !!Meteor.user() ? true : false;
  let user = !!Meteor.user ? Meteor.user() : null;
  let apply = { 
    section: props.section,
  };
  onData( null, { isLogged, user, apply } );
};

export default composeWithTracker(composer)(ApplyLayout);
