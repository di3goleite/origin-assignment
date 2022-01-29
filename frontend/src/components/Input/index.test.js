import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from '.';

describe('<Input />', () => {
  it('should render input', () => {
    const label = 'Currency';
    render(<Input id="currency-input" label={label} variant="currency" />);
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it('should render input with error', () => {
    const label = 'Currency';
    const error = 'This field is required.';
    render(
      <Input
        id="currency-input"
        label={label}
        variant="currency"
        error={error}
      />
    );
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
