import React from 'react';

import images from '../../assets/images';
import './index.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={images.originLogo} alt="Origin Financial Logo" />
    </div>
  );
};

export default Navbar;
