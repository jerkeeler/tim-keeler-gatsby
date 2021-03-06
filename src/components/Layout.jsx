import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-300 text-gray-800 flex flex-col">
      <div className="flex items-center flex-col bg-primary-dark text-gray-100 shadow-md h-xl">
        <Navbar />
        <div className="w-full max-w-screen-lg p-6 md:p-10 pt-0 md:pt-0">
          <h1 className="font-bold text-2xl">{title}</h1>
        </div>
      </div>
      <div className="flex justify-center -mt-56 flex-col items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
