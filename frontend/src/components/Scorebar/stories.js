import React from 'react';

import Scorebar from '.';

export default {
  title: 'Scorebar',
  component: Scorebar,
  args: {
    type: ''
  },
  argTypes: {
    type: {
      options: ['healthy', 'medium', 'low'],
      control: { type: 'select' }
    }
  }
};

export const Basic = (args) => <Scorebar {...args} />;
export const Healthy = (args) => <Scorebar {...args} type="healthy" />;
export const Medium = (args) => <Scorebar {...args} type="medium" />;
export const Low = (args) => <Scorebar {...args} type="low" />;
