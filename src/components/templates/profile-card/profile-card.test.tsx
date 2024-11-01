import { render, screen, fireEvent } from '@testing-library/react';
import ProfileCard, { ProfileCardProps } from './profile-card';
import { Profile } from '@/types';

const mockProfile: Profile = {
  name: 'Jane Doe',
  city: 'New York',
  country: 'USA',
  avatar: 'avatar-jessica.webp',
  bio: 'Software developer and coffee enthusiast.',
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/'
    }
  ]
}

describe('ProfileCard Component', () => {

  const defaultProps: ProfileCardProps = {  profile: mockProfile };

  it('renders the profile name, location, and bio', () => {
		render(<ProfileCard {...defaultProps} />);
		expect(screen.getByText(mockProfile.name)).toBeInTheDocument();
		expect(
			screen.getByText(`${mockProfile.city}, ${mockProfile.country}`)
		).toBeInTheDocument();
		expect(screen.getByText(`"${mockProfile.bio}"`)).toBeInTheDocument();
	});

  it('renders the profile image with correct alt text', () => {
		render(<ProfileCard {...defaultProps} />);
		const image = screen.getByAltText(`Avatar of ${mockProfile.name}`);
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('src', expect.stringContaining(mockProfile.avatar));
	});

  it('renders all social links with correct names', () => {
		render(<ProfileCard {...defaultProps} />);
		mockProfile.social.forEach((socialLink) => {
			expect(screen.getByText(socialLink.name)).toBeInTheDocument();
		});
	});

  it('opens social link in new tab when clicked', () => {
		render(<ProfileCard {...defaultProps} />);
		const githubLink = screen.getByText(mockProfile.social[0].name);
		window.open = vi.fn(); // Mock window.open
		fireEvent.click(githubLink);
		expect(window.open).toHaveBeenCalledWith(
			mockProfile.social[0].url,
			'_blank'
		);
	});
});