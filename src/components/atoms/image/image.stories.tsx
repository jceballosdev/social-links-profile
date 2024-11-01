import { Meta, StoryFn } from "@storybook/react";
import Image, { ImageProps } from "./image";

export default {
  title: "Atoms/Image",
  component: Image,
  argTypes: {
    src: {
      control: {
        type: "text",
        description: "The source filename of the image located in the assets/images folder",
      },
    },
    alt: {
      control: {
        type: "text",
        description: "The alternative text for the image",
      },
    },
  },
} as Meta<typeof Image>;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const ValidImage = Template.bind({});
ValidImage.args = {
  src: "avatar-jessica.webp",
  alt: "Valid profile picture",
};

export const PlaceholderImage = Template.bind({});
PlaceholderImage.args = {
  src: "invalid.jpg",
  alt: "placeholder",
};