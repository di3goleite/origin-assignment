import React from 'react';
import { render } from '@testing-library/react';

import Footer from '.';

describe('<Footer />', () => {
  it('should render footer', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toHaveClass('footer');
  });
});
