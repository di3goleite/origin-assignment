import React from 'react';
import { render } from '@testing-library/react';

import ScoreBar from '.';

describe('<ScoreBar />', () => {
  it('should render score bar', () => {
    const { container } = render(<ScoreBar />);
    expect(container.firstChild).toHaveClass('score-bar');
  });
});
