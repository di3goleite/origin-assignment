import React, { useState } from 'react';

import { IMaskInput } from 'react-imask';

import icons from '../../assets/icons';
import './index.scss';

const Input = ({ id, label, variant, error, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (value) => {
    setValue(value);
    onChange(value);
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
              placeholder="0"
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
