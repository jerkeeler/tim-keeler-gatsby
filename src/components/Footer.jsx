import React from 'react';

import Icon from './Icon';
import ExternalLink from './ExternalLink';

const Footer = () => (
  <footer className="text-center p-10 pt-0 flex items-center flex-col flex-grow justify-end">
    <p>© {new Date().getFullYear()} Tim Keeler</p>
    <p>
      View code on{' '}
      <ExternalLink to="https://github.com/jerkeeler/tim-keeler-gatsby">
        <Icon icon="github" className="inline w-5" />
      </ExternalLink>
    </p>
  </footer>
);

export default Footer;
