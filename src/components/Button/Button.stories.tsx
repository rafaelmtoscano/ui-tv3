import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is interactive',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button {...args} variant="primary" size="small">Primary Small</Button>
        <Button {...args} variant="primary" size="medium">Primary Medium</Button>
        <Button {...args} variant="primary" size="large">Primary Large</Button>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button {...args} variant="secondary" size="small">Secondary Small</Button>
        <Button {...args} variant="secondary" size="medium">Secondary Medium</Button>
        <Button {...args} variant="secondary" size="large">Secondary Large</Button>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button {...args} variant="primary" disabled>Disabled Primary</Button>
        <Button {...args} variant="secondary" disabled>Disabled Secondary</Button>
      </div>
    </div>
  ),
};
