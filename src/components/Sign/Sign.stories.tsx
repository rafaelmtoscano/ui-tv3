import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Sign } from './Sign';

const meta: Meta<typeof Sign> = {
  title: 'Components/Sign',
  component: Sign,
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
    variant: {
      control: 'select',
      options: ['icon', 'image'],
    },
    state: {
      control: 'select',
      options: ['idle', 'selected', 'disabled'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Sign>;

const SampleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const sampleImage = 'https://cdn.builder.io/api/v1/image/assets%2F8decac7d217b4e02a090384b68b42488%2F4cdf5193049149c09b1a696f271ac6ad?format=webp&width=800&height=1200';

export const WithIcon: Story = {
  args: {
    variant: 'icon',
    icon: <SampleIcon />,
    'aria-label': 'Download',
  },
};

export const WithImage: Story = {
  args: {
    variant: 'image',
    image: sampleImage,
    alt: 'Thumbnail',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h3 style={{ color: '#FFF', marginBottom: '20px', fontFamily: 'Plus Jakarta Sans' }}>Icon Variant</h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
             <Sign variant="icon" icon={<SampleIcon />} state="idle" />
             <span style={{ color: '#FFF', fontSize: '12px' }}>Idle</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
             <Sign variant="icon" icon={<SampleIcon />} state="selected" />
             <span style={{ color: '#FFF', fontSize: '12px' }}>Selected</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
             {/* Force focus via autoFocus or manual isFocused if component supports it */}
             <Sign variant="icon" icon={<SampleIcon />} autoFocus />
             <span style={{ color: '#FFF', fontSize: '12px' }}>Focus</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
             <Sign variant="icon" icon={<SampleIcon />} state="disabled" />
             <span style={{ color: '#FFF', fontSize: '12px' }}>Disabled</span>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ color: '#FFF', marginBottom: '20px', fontFamily: 'Plus Jakarta Sans' }}>Image Variant</h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
             <Sign variant="image" image={sampleImage} state="idle" />
             <span style={{ color: '#FFF', fontSize: '12px' }}>Idle</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
             <Sign variant="image" image={sampleImage} state="selected" />
             <span style={{ color: '#FFF', fontSize: '12px' }}>Selected</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
             <Sign variant="image" image={sampleImage} autoFocus />
             <span style={{ color: '#FFF', fontSize: '12px' }}>Focus</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
             <Sign variant="image" image={sampleImage} state="disabled" />
             <span style={{ color: '#FFF', fontSize: '12px' }}>Disabled</span>
          </div>
        </div>
      </div>
    </div>
  ),
};
