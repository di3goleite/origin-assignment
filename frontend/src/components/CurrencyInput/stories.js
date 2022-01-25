import React from 'react';

import CurrencyInput from '.';

export default {
  title: 'CurrencyInput',
  component: CurrencyInput,
  args: {
    id: 'currency-input',
    label: 'Currency'
  }
  // argTypes: {
  //   type: {
  //     options: ['text', 'number'],
  //     control: { type: 'radio' }
  //   }
  // }
};

export const Basic = (args) => <CurrencyInput {...args} />;
