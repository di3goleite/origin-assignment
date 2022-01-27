import React from 'react';

import icons from '../../assets/icons';
import './index.scss';

const Button = ({ children, variant, isLoading, onClick }) => {
  return (
    <button
      className={`btn btn-${variant ? variant : 'primary'} ${
        isLoading ? 'is-loading' : ''
      }`}
      onClick={onClick}
    >
      {isLoading ? (
        <img src={icons.loading} alt="Loading image spinning forever" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
