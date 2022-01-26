import React from 'react';

import components from '../../components';
import './index.scss';

const { Navbar } = components;

function Result() {
  return (
    <div className="result">
      <Navbar />
      <div className="container">
        <h1>Result</h1>
      </div>
    </div>
  );
}

export default Result;
