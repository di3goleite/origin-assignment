import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from '.';

describe('<Input />', () => {
  it('should render input', () => {
    const inputId = 'input';
    const labelText = 'Currency';

    render(<Input id={inputId} label={labelText} />);
    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  });
});
