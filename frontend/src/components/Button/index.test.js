import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  it('should render button', () => {
    const buttonText = 'Continue';

    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
});
