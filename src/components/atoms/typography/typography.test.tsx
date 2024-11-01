import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Typography, { TypographyProps } from './typography';
import styles from './typography.module.scss';

describe('Typography Component', () => {
	const baseProps: TypographyProps = {
    children: 'Hello World',
    variant: 'p',
  };

  it('renders an h1 element when variant is h1', () => {
    render(<Typography {...baseProps} variant="h1" />);
    const element = screen.getByText('Hello World');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('H1');
  });

  it('renders a p element when variant is p', () => {
    render(<Typography {...baseProps} variant="p" />);
    const element = screen.getByText('Hello World');
    expect(element.tagName).toBe('P');
  });

  it('applies the bold style when the bold prop is true', () => {
    render(<Typography {...baseProps} bold />);
    const element = screen.getByText('Hello World');
    expect(element).toHaveClass(styles.bold);
  });

  it('applies the regular weight when the bold prop is false or not provided', () => {
    render(<Typography {...baseProps} />);
    const element = screen.getByText('Hello World');
    expect(element).toHaveClass(styles.regular);
  });

  it('applies the green color when color prop is set to green', () => {
    render(<Typography {...baseProps} color="green" />);
    const element = screen.getByText('Hello World');
    expect(element).toHaveClass(styles.green);
  });

  it('applies the white color when color prop is set to white or by default', () => {
    render(<Typography {...baseProps} />);
    const element = screen.getByText('Hello World');
    expect(element).toHaveClass(styles.white);
  });
});
