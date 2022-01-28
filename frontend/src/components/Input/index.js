import React, { useState } from 'react';

import { IMaskInput } from 'react-imask';

import icons from '../../assets/icons';
import './index.scss';

const Input = ({ id, label, variant, error, placeholder, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  const renderInput = (variant) => {
    switch (variant) {
      case 'currency':
      default:
        return (
          <>
            <img src={icons.dollar} alt="Dollar currency symbol" />
            <IMaskInput
              id={id}
              value={value}
              onAccept={handleChange}
              mask={Number}
              unmask={true}
              thousandsSeparator=","
              placeholder={placeholder}
            />
          </>
        );
    }
  };

  return (
    <div className={`input ${error ? 'error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <div className="input-wrapper">{renderInput(variant)}</div>
      <span className="input-error">{error}</span>
    </div>
  );
};

export default Input;
