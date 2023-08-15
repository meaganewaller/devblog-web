import { StoryFn, Meta } from "@storybook/react";
import { Avatar } from "./Avatar";
import { AvatarProps } from "./Avatar.types";

export default {
title: "Atoms/Avatar",
         component: Avatar,
         argTypes: {
variant: {
control: {
type: "inline-radio",
      options: ["primary", "secondary"],
         },
         },
size: {
control: {
type: "inline-radio",
      options: ["regular", "small"],
         },
      },
         },
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
variant: "primary",
         size: "regular",
         name: "Meagan Waller",
};

export const Secondary = Template.bind({});
Secondary.args = {
variant: "secondary",
         size: "regular",
         name: "Meagan Waller",
};
