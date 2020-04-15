import React from 'react';

const ExternalLink = ({ to, children }) => (
  <a href={to} className="text-primary hover:text-primary-lighter underline">
    {children}
  </a>
);

export default ExternalLink;
