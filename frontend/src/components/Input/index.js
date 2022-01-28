import React, { useState } from 'react';

import { IMaskInput } from 'react-imask';

import { validationMessages } from '../../utils/constraints';
import icons from '../../assets/icons';
import './index.scss';

const Input = ({ id, label, variant, isRequired, onChange, onError }) => {
  const [error, setError] = useState('');
  const [value, setValue] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);

    if (isRequired && !newValue) {
      setError(validationMessages.required);
      onError(true);
    } else {
      setError('');
      onError(false);
    }
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
