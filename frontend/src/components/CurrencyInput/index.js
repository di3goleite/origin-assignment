import React, { useState } from 'react';

import { IMaskInput } from 'react-imask';

const CurrencyInput = ({ id, label }) => {
  const [value, setValue] = useState('');

  const handleChange = (v) => {
    setValue(v);
    console.log(value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <IMaskInput
        id={id}
        value={value}
        onAccept={handleChange}
        mask={Number}
        unmask={true}
        thousandsSeparator=","
      />
    </div>
  );
};

export default CurrencyInput;
