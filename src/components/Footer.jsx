import React from 'react';

const Footer = () => (
  <footer className="text-center p-10 pt-0 flex items-center flex-col flex-grow justify-end">
    <p>© 2019-{new Date().getFullYear()} Tim Keeler</p>
  </footer>
);

export default Footer;
