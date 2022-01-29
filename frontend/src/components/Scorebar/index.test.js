import React from 'react';
import { render } from '@testing-library/react';

import Scorebar from '.';

describe('<Scorebar />', () => {
  it('should render scorebar', () => {
    const { container } = render(<Scorebar />);
    expect(container.firstChild).toHaveClass('scorebar');
  });

  it('should render a scorebar with healthy state', () => {
    const { container } = render(<Scorebar type={'healthy'} />);
    expect(container.firstChild).toHaveClass('scorebar healthy');
  });

  it('should render a scorebar with medium state', () => {
    const { container } = render(<Scorebar type={'medium'} />);
    expect(container.firstChild).toHaveClass('scorebar medium');
  });

  it('should render a scorebar with low state', () => {
    const { container } = render(<Scorebar type={'low'} />);
    expect(container.firstChild).toHaveClass('scorebar low');
  });
});
