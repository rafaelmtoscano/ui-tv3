import type { Meta, StoryObj } from '@storybook/react';
import { TileButton } from './TileButton';
import React from 'react';

const meta: Meta<typeof TileButton> = {
  title: 'Components/TileButton',
  component: TileButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['icon', 'icon-label', 'image'],
    },
    label: { control: 'text' },
    image: { control: 'text' },
    alt: { control: 'text' },
    onClick: { action: 'clicked' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#11172B' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TileButton>;

const BriefcaseIcon = (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.6667 20C26.6667 16.3181 29.6514 13.3333 33.3333 13.3333H46.6667C50.3486 13.3333 53.3333 16.3181 53.3333 20V26.6667H60C63.6819 26.6667 66.6667 29.6514 66.6667 33.3333V43.3333H13.3333V33.3333C13.3333 29.6514 16.3181 26.6667 20 26.6667H26.6667V20ZM33.3333 20V26.6667H46.6667V20H33.3333ZM13.3333 50V60C13.3333 63.6819 16.3181 66.6667 20 66.6667H60C63.6819 66.6667 66.6667 63.6819 66.6667 60V50H46.6667V53.3333C46.6667 55.1743 45.1743 56.6667 43.3333 56.6667H36.6667C34.8257 56.6667 33.3333 55.1743 33.3333 53.3333V50H13.3333Z"
      fill="currentColor"
    />
  </svg>
);

export const IconOnly: Story = {
  args: {
    variant: 'icon',
    icon: BriefcaseIcon,
    'aria-label': 'Briefcase',
  },
};

export const IconWithLabel: Story = {
  args: {
    variant: 'icon-label',
    icon: BriefcaseIcon,
    label: 'Semana Gov',
  },
};

export const ImageOnly: Story = {
  args: {
    variant: 'image',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/349beab2558e631de91afea4602c1a3285a63139?width=624',
    alt: 'Semana Gov',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        padding: '60px',
        background: '#11172B',
        minHeight: '400px',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <span style={{ color: '#FFF', fontSize: '14px', fontFamily: 'Plus Jakarta Sans' }}>Icon (Idle)</span>
          <TileButton variant="icon" icon={BriefcaseIcon} aria-label="Briefcase" isFocused={false} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <span style={{ color: '#FFF', fontSize: '14px', fontFamily: 'Plus Jakarta Sans' }}>Icon (Focus)</span>
          <TileButton variant="icon" icon={BriefcaseIcon} aria-label="Briefcase" isFocused={true} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <span style={{ color: '#FFF', fontSize: '14px', fontFamily: 'Plus Jakarta Sans' }}>Label (Idle)</span>
          <TileButton variant="icon-label" icon={BriefcaseIcon} label="Semana Gov" isFocused={false} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <span style={{ color: '#FFF', fontSize: '14px', fontFamily: 'Plus Jakarta Sans' }}>Label (Focus)</span>
          <TileButton variant="icon-label" icon={BriefcaseIcon} label="Semana Gov" isFocused={true} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <span style={{ color: '#FFF', fontSize: '14px', fontFamily: 'Plus Jakarta Sans' }}>Image (Idle)</span>
          <TileButton
            variant="image"
            image="https://api.builder.io/api/v1/image/assets/TEMP/349beab2558e631de91afea4602c1a3285a63139?width=624"
            alt="Semana Gov"
            isFocused={false}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <span style={{ color: '#FFF', fontSize: '14px', fontFamily: 'Plus Jakarta Sans' }}>Image (Focus)</span>
          <TileButton
            variant="image"
            image="https://api.builder.io/api/v1/image/assets/TEMP/349beab2558e631de91afea4602c1a3285a63139?width=624"
            alt="Semana Gov"
            isFocused={true}
          />
        </div>
      </div>
    </div>
  ),
};
