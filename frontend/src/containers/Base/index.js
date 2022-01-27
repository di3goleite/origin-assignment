import React from 'react';

import components from '../../components';

import './index.scss';

const { Navbar, Footer } = components;

function Base({ className, children }) {
  return (
    <div className={`base ${className}`}>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

export default Base;
