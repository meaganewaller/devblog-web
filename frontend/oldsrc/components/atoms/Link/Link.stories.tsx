import _ from 'lodash';
import type { Meta, StoryObj } from '@storybook/react';
import LinkComponent, { LinkSize, LinkVariant } from './Link';

const meta: Meta<typeof LinkComponent> = {
  title: 'Atoms/Link',
  component: LinkComponent,
  argTypes: {
    children: {
      name: 'text',
      control: 'text',
    },
    size: {
      options: _.keys(LinkSize),
      control: { type: 'radio' },
    },
    variant: {
      table: { disable: true },
      options: _.keys(LinkVariant),
      control: { type: 'radio', disable: true },
    },
  },
};

type LinkStory = StoryObj<typeof LinkComponent>;


interface LinkProps {
  children: string;
  size?: LinkSize;
  variant?: LinkVariant;
  href: string;
  target?: string;
}

export const Accent: LinkStory = {
  render: (args: LinkProps) => <LinkComponent {...args} />,
  args: {
    children: 'This is an accent link',
    size: LinkSize.default,
    variant: LinkVariant.accent,
    href: '#',
    target: '_blank',
  },
};

export const Primary: LinkStory = {
  render: (args: LinkProps) => <LinkComponent {...args} />,
  args: {
    children: 'This is a primary link',
    size: LinkSize.default,
    variant: LinkVariant.primary,
    href: '#',
    target: '_blank',
  },
};

export const Underlined: LinkStory = {
  render: (args: LinkProps) => <LinkComponent {...args} />,
  args: {
    children: 'This is an underlined link',
    size: LinkSize.default,
    variant: LinkVariant.underlined,
    href: '#',
    target: '_blank',
  },
};

export const Wavy: LinkStory = {
  render: (args: LinkProps) => <LinkComponent {...args} />,
  args: {
    children: 'This is a wavy link',
    size: LinkSize.default,
    variant: LinkVariant.wavy,
    href: '#',
    target: '_blank',
  },
};

export default meta;
