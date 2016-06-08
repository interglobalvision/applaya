import React, { PropTypes } from 'react';

// Import apply parts
import TextTest from '/imports/components/apply/text-test.jsx';
import FormTest from '/imports/components/apply/form-test.jsx';

const applySections = {
  'text-test': <TextTest />,
  'form-test': <FormTest />,
};

const getApplySection = ( isLogged, user, section ) => {
  // Check if logged in
  if( !isLogged  ) {
    return <Accounts.ui.LoginForm />;
  }

  if( !!section ) {
    return applySections[section];
  }

};

export default ApplyLayout = ({ isLogged, user, apply }) => (
  <section className="applyLayout">
    { getApplySection(isLogged, user, apply.section) }
  </section>
);

ApplyLayout.protoTypes = {
  isLogged: React.PropTypes.bool,
  apply: React.PropTypes.object,
};
