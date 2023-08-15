import _ from 'lodash';
import type { Meta, StoryObj } from '@storybook/react';
import Title, { TitleSize, TitleVariant } from './Title';

const meta: Meta<typeof Title> = {
  title: 'Atoms/Title',
  component: Title,
  argTypes: {
    children: {
      name: 'text',
      control: 'text',
    },
    size: {
      options: _.keys(TitleSize),
      control: { type: 'radio' },
    },
    variant: {
      table: { disable: true },
      options: _.keys(TitleVariant),
      control: { type: 'radio', disable: true },
    },
  },
};

type TitleStory = StoryObj<typeof Title>;

interface TitleProps {
  children: string;
  size?: TitleSize;
  variant?: TitleVariant;
}

export const Primary: TitleStory = {
  render: (args: TitleProps) => <Title {...args} />,
  args: {
    children: 'This is the example title.',
    size: TitleSize.default,
    variant: TitleVariant.primary,
  },
};

export const Secondary: TitleStory = {
  render: (args: TitleProps) => <Title {...args} />,
  args: {
    children: 'This is the example title.',
    size: TitleSize.default,
    variant: TitleVariant.secondary,
  },
};

export const Accent: TitleStory = {
  render: (args: TitleProps) => <Title {...args} />,
  args: {
    children: 'This is the example title.',
    size: TitleSize.default,
    variant: TitleVariant.accent,
  },
};

export default meta;
