import { fireEvent, render, screen } from "@testing-library/react";
import Image, { ImageProps } from "./image";
import avatarPlaceholder from '@/assets/images/avatar-placeholder.webp';

describe('Image Component', () => {

  const defaultProps: ImageProps = {
    src: 'avatar-jessica.webp',
    alt: 'Valid profile picture',
  }

  it('render an image with a valid src', () => {
    render(<Image {...defaultProps} />);
    const image = screen.getByAltText(defaultProps.alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/src/assets/images/avatar-jessica.webp');
  })

  it('render a placeholder image with an invalid src', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render (<Image src="invalid.jpg" alt="placeholder" />);

    const image = screen.getByAltText('placeholder');
    fireEvent.error(image);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', avatarPlaceholder);
    expect(consoleSpy).toHaveBeenCalledWith('Image not found or failed to load: invalid.jpg');
    consoleSpy.mockRestore()
  })

  it('does not show the error message if the image loads successfully', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<Image {...defaultProps} />);
    const image = screen.getByAltText(defaultProps.alt);
    fireEvent.load(image);

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  })

});