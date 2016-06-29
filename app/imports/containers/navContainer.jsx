import { composeWithTracker } from 'react-komposer';

import { Navbar } from '/imports/components/navbar.jsx';

const composer = (props, onData) => {
  let isLogged = !!Meteor.user() ? true : false;

  onData(null, { isLogged });
};

export const NavContainer = composeWithTracker(composer)(Navbar);
