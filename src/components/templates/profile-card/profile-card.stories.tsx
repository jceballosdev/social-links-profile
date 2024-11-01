import { Meta, StoryObj } from '@storybook/react';
import ProfileCard, { ProfileCardProps } from './profile-card';
import { profiles } from '@/data';

export default {
  title: 'Templates/ProfileCard',
  component: ProfileCard,
  argTypes: {
    profile: {
      control: 'object',
      description: 'The profile data to display',
    },
  }
} as Meta<typeof ProfileCard>;


type Story = StoryObj<ProfileCardProps>;

export const Default: Story = {
	args: {
		profile: profiles[0],
	},
};