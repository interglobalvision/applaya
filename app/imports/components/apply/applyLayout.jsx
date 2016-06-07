import React, { PropTypes } from 'react';

// Import apply parts
import TextTest from '/imports/components/apply/text-test.jsx';

import FormTest from '/imports/components/apply/form-test.jsx';

const getApplySection = ( isLogged, user, apply ) => {
  // Check if logged in
  if( !isLogged  ) {
    return <Accounts.ui.LoginForm />;
  }

  if( !!apply.section ) {
    switch(apply.section) {
      case 'text-test': return <TextTest />;
      case 'form-test': return <FormTest />;
      default: return ':('; // 404
    };
  }

};

export default ApplyLayout = ({ isLogged, user, apply }) => (
  <section className="applyLayout">
    { getApplySection(isLogged, user, apply) }
  </section>
);

ApplyLayout.protoTypes = {
  isLogged: React.PropTypes.bool,
  apply: React.PropTypes.object,
};
