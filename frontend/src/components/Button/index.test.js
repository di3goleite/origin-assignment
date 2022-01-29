import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  it('should render button', () => {
    const buttonText = 'Continue';
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('should render a primary button', () => {
    const buttonText = 'Primary';
    const { container } = render(
      <Button variant="primary">{buttonText}</Button>
    );
    expect(container.firstChild).toHaveClass('btn-primary');
  });

  it('should render a secondary button', () => {
    const buttonText = 'Secondary';
    const { container } = render(
      <Button variant="secondary">{buttonText}</Button>
    );
    expect(container.firstChild).toHaveClass('btn-secondary');
  });

  it('should render a loading button', () => {
    const buttonText = 'Loading...';
    const { container } = render(<Button isLoading>{buttonText}</Button>);
    expect(container.firstChild).toHaveClass('is-loading');
  });
});
