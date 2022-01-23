import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from '.';

describe('<Input />', () => {
  it('should render input', () => {
    const inputId = 'new-input';
    const labelText = 'New Input';

    render(<Input id={inputId} type="text" label={labelText} />);
    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  });
});
