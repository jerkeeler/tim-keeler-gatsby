/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';

const Layout = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
      <div className="min-h-screen bg-gray-300 text-gray-800">
        <div className="flex items-center flex-col bg-primary-dark text-gray-100 shadow-md h-xl">
          <Navbar />
          <div className="w-full max-w-screen-lg p-10 pt-6">
            <h1 className="font-bold text-2xl uppercase">{title}</h1>
          </div>
        </div>
        <div className="flex justify-center -mt-48 flex-col items-center">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
