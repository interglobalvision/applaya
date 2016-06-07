import React from 'react';

const getApplySection = ( isLogged,  ) => {
  // Check if logged in
  if( !isLogged  ) {
    return <Accounts.ui.LoginForm />;
  }

  return 'Si, Applaya';
};

export default ApplyLayout = ({ isLogged }) => (
  <section className="applyLayout">
    { getApplySection(isLogged) }
  </section>
);

ApplyLayout.protoTypes = {
  isLogged: React.PropTypes.bool,
};
