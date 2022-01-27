import React, { useState } from 'react';

import { IMaskInput } from 'react-imask';

import icons from '../../assets/icons';
import './index.scss';

const CurrencyInput = ({ id, label, error }) => {
  const [value, setValue] = useState('');

  const handleChange = (v) => {
    setValue(v);
    console.log(value);
  };

  return (
    <div className={`currency-input ${error ? 'error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <div className="currency-input-wrapper">
        <img src={icons.dollar} alt="Dollar currency symbol" />
        <IMaskInput
          id={id}
          value={value}
          onAccept={handleChange}
          mask={Number}
          unmask={true}
          thousandsSeparator=","
          placeholder="0"
        />
      </div>
      <span className="currency-input-error">{error}</span>
    </div>
  );
};

export default CurrencyInput;
