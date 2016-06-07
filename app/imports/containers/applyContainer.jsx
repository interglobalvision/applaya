import { composeWithTracker } from 'react-komposer';

import ApplyLayout from '/imports/components/apply/applyLayout.jsx';

const composer = ( props, onData ) => {
  let isLogged = !!Meteor.user() ? true : false;
  onData( null, { isLogged } );
};

export default composeWithTracker(composer)(ApplyLayout);
