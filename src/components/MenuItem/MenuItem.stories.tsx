import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './MenuItem';

const SearchIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const meta: Meta<typeof MenuItem> = {
  title: 'Components/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#11172B' },
        { name: 'light', value: '#FFFFFF' },
      ],
    },
    layout: 'centered',
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['idle', 'selected', 'disabled'],
    },
    expanded: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Idle: Story = {
  args: {
    icon: <SearchIcon />,
    label: 'Pesquisa',
    expanded: false,
    state: 'idle',
  },
};

export const IdleExpanded: Story = {
  args: {
    icon: <SearchIcon />,
    label: 'Pesquisa',
    expanded: true,
    state: 'idle',
  },
};

export const Selected: Story = {
  args: {
    icon: <SearchIcon />,
    label: 'Pesquisa',
    expanded: false,
    state: 'selected',
  },
};

export const SelectedExpanded: Story = {
  args: {
    icon: <SearchIcon />,
    label: 'Pesquisa',
    expanded: true,
    state: 'selected',
  },
};

export const Disabled: Story = {
  args: {
    icon: <SearchIcon />,
    label: 'Pesquisa',
    expanded: true,
    state: 'disabled',
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '48px',
        padding: '40px',
        background: '#11172B',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '80px' }}>
        <h3 style={{ color: '#FFF', fontSize: '14px', marginBottom: '8px' }}>Collapsed</h3>
        <MenuItem icon={<SearchIcon />} label="Idle" state="idle" expanded={false} />
        <MenuItem icon={<SearchIcon />} label="Selected" state="selected" expanded={false} />
        <MenuItem icon={<SearchIcon />} label="Disabled" state="disabled" expanded={false} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <h3 style={{ color: '#FFF', fontSize: '14px', marginBottom: '8px' }}>Expanded</h3>
        <MenuItem icon={<SearchIcon />} label="Idle" state="idle" expanded={true} />
        <MenuItem icon={<SearchIcon />} label="Selected" state="selected" expanded={true} />
        <MenuItem icon={<SearchIcon />} label="Disabled" state="disabled" expanded={true} />
      </div>
    </div>
  ),
};
