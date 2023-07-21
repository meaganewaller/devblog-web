import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";
import { AiSearch } from "react-icons/ai";

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

Input.displayName = "Input";

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const AtomInput = Template.bind({});

AtomInput.args = {
  placeholder: "Placeholder",
};

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  placeholder: "Placeholder",
  icon: AiSearch,
  full: false,
};

export const InputDisabled = Template.bind({});
InputDisabled.args = {
  placeholder: "Disabled",
  disabled: true,
};

export const InputSuccess = Template.bind({});
InputSuccess.args = {
  placeholder: "Success",
  success: {
    type: "success",
    message: "This should not be visible",
  },
};

export const InputWarning = Template.bind({});
InputWarning.args = {
  placeholder: "Warning",
  warning: {
    type: "warning",
    message: "This should not be visible",
  },
};

export const InputError = Template.bind({});
InputError.args = {
  placeholder: "Error",
  error: {
    type: "error",
    message: "This should not be visible",
  },
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  placeholder: "0123456789",
  number: true,
};
export const LongInput = Template.bind({});
LongInput.args = {
  placeholder: "52rem",
  long: true,
};
export const FullWidthInput = Template.bind({});
FullWidthInput.args = {
  placeholder: "100% of container",
  full: true,
};
export const AddressInput = Template.bind({});
AddressInput.args = {
  placeholder: "0x",
  address: true,
};
// import React, from 'react';
// import Input from './Input';
//
// export default {
//   title: 'Atoms/Input',
//   component: Input,
// }
//
// export const Default = () => {
//   const [value, onChangeValue] = useChange
// }
// // import React from "react";
// // import _ from "lodash";
// // import type { Meta, StoryObj } from "@storybook/react";
// // import InputComponent, { InputProps, InputSize, InputVariant } from "./Input";
// //
// // const meta: Meta<typeof InputComponent> = {
// //   title: "Atoms/Input",
// //   component: InputComponent,
// //   argTypes: {
// //     size: {
// //       options: _.keys(InputSize),
// //       control: { type: "radio" },
// //     },
// //     variant: {
// //       options: _.keys(InputVariant),
// //       control: { type: "radio" },
// //     },
// //     placeholder: {
// //       control: { type: "text" },
// //     },
// //     label: {
// //       control: { type: "text" },
// //     },
// //     type: {
// //       control: { type: "text" },
// //     },
// //     id: {
// //       control: { type: "text" },
// //     },
// //     error: {
// //       control: "boolean",
// //     },
// //     errorMessage: {
// //       control: { type: "text" },
// //     },
// //     name: {
// //       control: { type: "text" },
// //     },
// //   },
// // };
// //
// // type InputStory = StoryObj<typeof InputComponent>;
// //
// // export const Default: InputStory = {
// //   render: (args: InputProps) => <InputComponent {...args} />,
// //   args: {
// //     id: "defaultInput",
// //     name: "defaultInput",
// //     label: "Default Input",
// //     error: false,
// //     errorMessage: "",
// //     type: "text",
// //     size: InputSize.default,
// //     variant: InputVariant.primary,
// //     placeholder: "Placeholder",
// //   },
// // };
// //
// // export default meta;
