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
      options: ['healthy', 'average', 'unhealthy'],
      control: { type: 'select' }
    }
  }
};

export const Basic = (args) => <Scorebar {...args} />;
export const Healthy = (args) => <Scorebar {...args} type="healthy" />;
export const Average = (args) => <Scorebar {...args} type="average" />;
export const Unhealthy = (args) => <Scorebar {...args} type="unhealthy" />;
