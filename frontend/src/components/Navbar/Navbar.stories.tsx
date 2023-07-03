import type { StoryObj, Meta } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta = {
  title: "Navbar",
  component: Navbar,
} as Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const DefaultNavbar: Story = {};
