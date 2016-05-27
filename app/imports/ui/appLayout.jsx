import React from 'react'

export const AppLayout = ({header, content, footer}) => (
  <div id="app-container">
    {header}
    <div className="container">
      {content}
    </div>
    {footer}
  </div>
);
