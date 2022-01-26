import React from 'react';

import ScoreBar from '.';

export default {
  title: 'ScoreBar',
  component: ScoreBar
};

export const Basic = (args) => <ScoreBar {...args} />;
export const Healthy = (args) => <ScoreBar {...args} type="healthy" />;
export const Average = (args) => <ScoreBar {...args} type="average" />;
export const Unhealthy = (args) => <ScoreBar {...args} type="unhealthy" />;
