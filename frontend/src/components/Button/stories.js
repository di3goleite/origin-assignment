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
export const PrimaryDisabled = (args) => (
  <Button {...args} type="primary" disabled>
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
export const SecondaryDisabled = (args) => (
  <Button {...args} variant="secondary" disabled>
    Return
  </Button>
);
