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
