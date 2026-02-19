import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ActionButton } from './ActionButton';

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 21L16.65 16.65"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof ActionButton> = {
  title: 'Components/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#11172B' }],
    },
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'icon-text'],
    },
    state: {
      control: 'select',
      options: ['idle', 'selected', 'disabled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const TextOnly: Story = {
  args: {
    variant: 'text',
    label: 'Pesquisa',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'icon-text',
    label: 'Pesquisa',
    icon: <SearchIcon />,
  },
};

export const Selected: Story = {
  args: {
    variant: 'icon-text',
    label: 'Pesquisa',
    icon: <SearchIcon />,
    state: 'selected',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'icon-text',
    label: 'Pesquisa',
    icon: <SearchIcon />,
    state: 'disabled',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#FFF', marginBottom: '12px', fontSize: '14px' }}>Idle</p>
        <ActionButton variant="icon-text" label="Pesquisa" icon={<SearchIcon />} state="idle" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#FFF', marginBottom: '12px', fontSize: '14px' }}>Selected</p>
        <ActionButton variant="icon-text" label="Pesquisa" icon={<SearchIcon />} state="selected" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#FFF', marginBottom: '12px', fontSize: '14px' }}>Disabled</p>
        <ActionButton variant="icon-text" label="Pesquisa" icon={<SearchIcon />} state="disabled" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#FFF', marginBottom: '12px', fontSize: '14px' }}>Focused (Ref-based)</p>
        <ActionButton variant="icon-text" label="Pesquisa" icon={<SearchIcon />} autoFocus />
      </div>
    </div>
  ),
};
