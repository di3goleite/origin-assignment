import React from 'react';
import { render } from '@testing-library/react';

import Card from '.';

describe('<Card />', () => {
  it('should render card', () => {
    const { container } = render(<Card />);

    expect(container.firstChild).toHaveClass('card');
  });
});
