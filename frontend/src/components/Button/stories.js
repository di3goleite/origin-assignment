import React from 'react';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    isSecondary: false,
    onClick: () => {}
  }
};

export const Primary = (args) => <Button {...args}>Continue</Button>;

export const Secondary = (args) => (
  <Button {...args} isSecondary>
    Return
  </Button>
);
