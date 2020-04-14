import React from 'react';

const Content = ({ children }) => (
  <div className="w-full max-w-screen-lg bg-white m-6 rounded shadow-md">
    <main className="p-10 text-lg">{children}</main>
  </div>
);

export default Content;
