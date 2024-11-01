import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import Button, { ButtonProps } from './button';

vi.spyOn(window, 'open').mockImplementation(() => null);

describe('Button Component', () => {
	const defaultProps: ButtonProps = {
		link: { name: 'Github', url: 'https://github.com' },
	};

	afterEach(() => {
		vi.clearAllMocks();
	});

  it('renders the button with the correct text', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(defaultProps.link.name);
  })

  it('opens the link in a new tab on click if URL is provided', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(window.open).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(defaultProps.link.url, '_blank');
  })

  it('does not open a new tab if URL is empty', () => {
    const propsWithoutUrl = { link: { name: 'Github', url: '' } };
    render(<Button {...propsWithoutUrl} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(window.open).not.toHaveBeenCalled();
  })

  it('applies the correct aria-label for accessibility', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button', { name: /open github link in new tab/i} );
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', `Open ${defaultProps.link.name} link in new tab`);
  })

});
