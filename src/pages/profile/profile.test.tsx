import { render, screen } from '@testing-library/react';
import Profile from './profile';
import { profiles } from '@/data';

describe('Profile Page', () => {
  it('renders ProfileCard with the correct profile data', () => {
    render(<Profile />);
    const nameElement = screen.getByText(profiles[0].name);
    expect(nameElement).toBeInTheDocument();
  });
});