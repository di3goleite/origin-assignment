import React from 'react';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    variant: '',
    onClick: () => {}
  },
  argTypes: {
    variant: {
      description: 'Button type',
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    }
  }
};

export const Primary = (args) => (
  <Button {...args} type="primary">
    Continue
  </Button>
);

export const Loading = (args) => (
  <Button {...args} type="primary" isLoading>
    Loading...
  </Button>
);

export const Secondary = (args) => (
  <Button {...args} variant="secondary">
    Return
  </Button>
);
