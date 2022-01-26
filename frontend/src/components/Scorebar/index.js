import React from 'react';

import './index.scss';

const Scorebar = ({ type }) => {
  return (
    <div className={`scorebar ${type}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Scorebar;
