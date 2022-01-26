import React from 'react';

import Card from '.';

export default {
  title: 'Card',
  component: Card
};

export const Basic = (args) => (
  <Card {...args}>
    <h1>Card</h1>
  </Card>
);
