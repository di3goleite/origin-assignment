import React from 'react';

import './index.scss';

const Button = ({ children, isSecondary, onClick }) => {
  return (
    <button
      className={`btn btn-${isSecondary ? 'secondary' : 'primary'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
