import React from 'react';
import { render } from '@testing-library/react';

import Scorebar from '.';

describe('<Scorebar />', () => {
  it('should render scorebar', () => {
    const { container } = render(<Scorebar />);
    expect(container.firstChild).toHaveClass('scorebar');
  });
});
