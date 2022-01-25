import React from 'react';

import CurrencyInput from '.';

export default {
  title: 'CurrencyInput',
  component: CurrencyInput,
  args: {
    id: 'currency-input',
    label: 'Annual income'
  }
};

export const Basic = (args) => <CurrencyInput {...args} />;
