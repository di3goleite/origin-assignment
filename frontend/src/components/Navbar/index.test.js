import React from 'react';
import { render } from '@testing-library/react';

import Navbar from '.';

describe('<Navbar />', () => {
  it('should render navbar', () => {
    const { container } = render(<Navbar />);

    expect(container.firstChild).toHaveClass('navbar');
  });
});
