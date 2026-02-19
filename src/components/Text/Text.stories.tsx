import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['display', 'headline', 'body', 'label'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body',
    size: 'medium',
  },
};

export const DisplayLarge: Story = {
  args: {
    children: 'Display Large',
    variant: 'display',
    size: 'large',
  },
};

export const HeadlineMedium: Story = {
  args: {
    children: 'Headline Medium',
    variant: 'headline',
    size: 'medium',
  },
};

export const BodySmall: Story = {
  args: {
    children: 'Body Small text for descriptive purposes',
    variant: 'body',
    size: 'small',
  },
};

export const LabelSmall: Story = {
  args: {
    children: 'LABEL SMALL',
    variant: 'label',
    size: 'small',
  },
};
