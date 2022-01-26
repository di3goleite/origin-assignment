import React from 'react';

import './index.scss';

const ScoreBar = ({ type }) => {
  return (
    <div className={`score-bar ${type}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ScoreBar;
