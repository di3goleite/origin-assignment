import React, { useState } from 'react';

import { IMaskInput } from 'react-imask';

import './index.scss';

const CurrencyInput = ({ id, label }) => {
  const [value, setValue] = useState('');

  const handleChange = (v) => {
    setValue(v);
    console.log(value);
  };

  return (
    <div className="currency-input">
      <label htmlFor={id}>{label}</label>
      <div>
        <span>$</span>
        <IMaskInput
          id={id}
          value={value}
          onAccept={handleChange}
          mask={Number}
          unmask={true}
          thousandsSeparator=","
        />
      </div>
    </div>
  );
};

export default CurrencyInput;
