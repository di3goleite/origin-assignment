import React from 'react';

import Input from '.';

export default {
  title: 'Input',
  component: Input,
  args: {
    id: 'new-input',
    label: 'New Input'
  },
  argTypes: {
    type: {
      options: ['text', 'number'],
      control: { type: 'radio' }
    }
  }
};

export const Basic = (args) => <Input {...args} />;
