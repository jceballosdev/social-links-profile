import { Meta, StoryFn } from "@storybook/react";
import Typography, { TypographyProps } from "./typography";

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['h1', 'p'],
      control: 'select',
      description: 'The HTML tag to use for the typography component',
    },
    color: {
      options: ['white', 'green'],
      control: { type: 'radio' },
      description: 'The color of the text',
    },
    bold: {
      control: 'boolean',
      description: 'Whether to apply bold styling to the text',
    }
  }
} as Meta<typeof Typography>;

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  children: 'Hello World',
  variant: 'h1',
  bold: true,
  color: 'white',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  children: 'Hello World',
  variant: 'p',
  bold: false,
  color: 'white',
};

export const BoldParagraph = Template.bind({});
BoldParagraph.args = {
  children: 'Hello World',
  variant: 'p',
  bold: true,
  color: 'green',
};