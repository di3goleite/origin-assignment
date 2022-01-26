import React from 'react';

import './index.scss';

const Button = ({ children, variant, onClick }) => {
  return (
    <button
      className={`btn btn-${variant ? variant : 'primary'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
