import React from 'react';
import { render, screen } from '@testing-library/react';

import CurrencyInput from '.';

describe('<CurrencyInput />', () => {
  it('should render input', () => {
    const inputId = 'currency-input';
    const labelText = 'Currency';

    render(<CurrencyInput id={inputId} label={labelText} />);
    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  });
});
