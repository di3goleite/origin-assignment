import React from 'react';

import CurrencyInput from '.';

export default {
  title: 'Input',
  component: CurrencyInput,
  args: {
    id: 'currency-input',
    label: 'Annual income'
  }
};

export const Currency = (args) => <CurrencyInput {...args} />;

export const CurrencyError = (args) => (
  <CurrencyInput
    {...args}
    error="Annual income needs to be greater than zero"
  />
);
