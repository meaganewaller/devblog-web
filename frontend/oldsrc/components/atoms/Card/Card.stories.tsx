import { StoryFn, Meta } from "@storybook/react";
import { Card } from "./Card";
import { CardProps } from "./Card.types";

export default {
  title: "Atoms/Card",
  component: Card,
  argTypes: {
    children: { control: "text" },
    variant: {
      control: {
        type: "inline-radio",
        options: ["primary", "secondary", "tertiary", "accent-one", "accent-two"],
      },
    },
    size: {
      control: {
        type: "inline-radio",
        options: ["fit-content"],
      },
    },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args: CardProps) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
  size: "fit-content",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
  size: "fit-content",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  variant: "tertiary",
  size: "fit-content",
};
