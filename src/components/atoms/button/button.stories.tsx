import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    link: { 
      control: 'object', 
      description: 'The link object containing the name and URL of the link'
    },
  }
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const WithURL = Template.bind({});
WithURL.args = {
  link: {
    name: 'GitHub',
    url: 'https://github.com',
  },
};

export const WithoutURL = Template.bind({});
WithoutURL.args = {
  link: {
    name: 'GitHub',
    url: '',
  },
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  link: {
    name: 'Frontend Mentor',
    url: 'https://www.frontendmentor.io',
  },
};
CustomLabel.storyName = 'Custom Button Label';
CustomLabel.parameters = {
  docs: {
    description: {
      story: 'A button with a custom label for the Frontend Mentor website.',
    },
  },
};