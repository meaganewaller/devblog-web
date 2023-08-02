import _ from 'lodash';
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./Button.types";
import { FcGoogle } from "react-icons/fc";

import "../../../styles/fonts.css";
import "../../../styles/globals.css";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    variant: {
      control: {
        type: "inline-radio",
        options: ["primary", "secondary"],
      }
    },
    size: {
      control: {
        type: "inline-radio",
        options: ["regular", "small"],
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
  size: "regular",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
  size: "small",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  variant: "primary",
  size: "regular",
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <>
      <Button.Icon icon={FcGoogle} className="text-primary-03" />
      Add Item
    </>
  ),
  variant: "primary",
  size: "regular",
};

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);
// import type { Meta, StoryObj } from '@storybook/react';
// import Button, { ButtonSize, ButtonVariant } from './Button';
//
// const meta: Meta<typeof Button> = {
//   title: 'Atoms/Button',
//   component: Button,
//   argTypes: {
//     children: {
//       name: 'text',
//       control: 'text',
//     },
//     isDisabled: {
//       name: 'is disabled',
//       control: 'boolean',
//     },
//     size: {
//       options: _.keys(ButtonSize),
//       control: { type: 'radio' },
//     },
//     variant: {
//       table: { disable: true },
//       options: _.keys(ButtonVariant),
//       control: { type: 'radio', disable: true },
//     },
//   },
// };
//
// type ButtonStory = StoryObj<typeof Button>;
//
// export const Primary: ButtonStory = {
//   render: (args) => <Button {...args} />,
//   args: {
//     children: 'BUTTON',
//     isDisabled: false,
//     size: ButtonSize.small,
//     variant: ButtonVariant.primary,
//   },
// };
//
// export const Secondary: ButtonStory = {
//   render: (args) => <Button {...args} />,
//   args: {
//     children: 'BUTTON',
//     isDisabled: false,
//     size: ButtonSize.small,
//     variant: ButtonVariant.secondary,
//   },
// };
//
// export const Accent: ButtonStory = {
//   render: (args) => <Button {...args} />,
//   args: {
//     children: 'BUTTON',
//     isDisabled: false,
//     size: ButtonSize.small,
//     variant: ButtonVariant.accent,
//   },
// };
//
// export default meta;
