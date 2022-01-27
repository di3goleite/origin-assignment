import React from 'react';

import Input from '.';

export default {
  title: 'Input',
  component: Input,
  args: {
    id: 'currency-input',
    label: 'Annual income',
    variant: 'currency'
  }
};

export const Currency = (args) => <Input {...args} />;

export const CurrencyError = (args) => (
  <Input {...args} error="Annual income needs to be greater than zero" />
);
