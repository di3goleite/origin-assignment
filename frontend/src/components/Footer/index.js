import React from 'react';

import icons from '../../assets/icons';
import './index.scss';

const Footer = () => {
  return (
    <div className="footer">
      <img src={icons.lock} alt="Lock icon representing security" />
      <p>
        Your financial information is encrypted and secure. We&apos;ll never
        share or sell any of your personal data.
      </p>
    </div>
  );
};

export default Footer;
