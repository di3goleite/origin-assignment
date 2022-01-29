import React from 'react';

import Input from '.';

export default {
  title: 'Input',
  component: Input,
  args: {
    id: 'currency-input',
    label: 'Annual income',
    variant: 'currency'
  },
  argTypes: {
    id: {
      description: 'Input identificator'
    },
    label: {
      description: 'Input text label'
    },
    variant: {
      description: 'Input type',
      options: ['currency'],
      control: { type: 'select' }
    }
  }
};

export const Currency = (args) => <Input {...args} />;

export const CurrencyError = (args) => (
  <Input {...args} error="Annual income needs to be greater than zero" />
);
