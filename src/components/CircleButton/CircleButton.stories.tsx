import type { Meta, StoryObj } from '@storybook/react';
import { CircleButton } from './CircleButton';

const meta: Meta<typeof CircleButton> = {
  title: 'Components/CircleButton',
  component: CircleButton,
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
    image: { control: 'text' },
    label: { control: 'text' },
    alt: { control: 'text' },
    onClick: { action: 'clicked' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
};

export default meta;
type Story = StoryObj<typeof CircleButton>;

const SAMPLE_IMAGE = 'https://api.builder.io/api/v1/image/assets/TEMP/349beab2558e631de91afea4602c1a3285a63139?width=624';

export const Default: Story = {
  args: {
    image: SAMPLE_IMAGE,
    alt: 'Sample Image',
  },
};

export const WithLabel: Story = {
  args: {
    image: SAMPLE_IMAGE,
    label: 'Circle Button',
    alt: 'Sample Image',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', padding: '100px' }}>
      <div>
        <h3 style={{ color: '#FFF', marginBottom: '40px', fontFamily: 'Plus Jakarta Sans' }}>Image Only</h3>
        <div style={{ display: 'flex', gap: '100px', alignItems: 'center' }}>
          <div>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px' }}>Idle</p>
            <CircleButton image={SAMPLE_IMAGE} alt="Sample" />
          </div>
          <div>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px' }}>Focused</p>
            <CircleButton image={SAMPLE_IMAGE} alt="Sample" isFocused />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ color: '#FFF', marginBottom: '40px', fontFamily: 'Plus Jakarta Sans' }}>With Label</h3>
        <div style={{ display: 'flex', gap: '100px', alignItems: 'center' }}>
          <div>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px' }}>Idle</p>
            <CircleButton image={SAMPLE_IMAGE} label="Category Name" alt="Sample" />
          </div>
          <div>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '16px' }}>Focused</p>
            <CircleButton image={SAMPLE_IMAGE} label="Category Name" alt="Sample" isFocused />
          </div>
        </div>
      </div>
    </div>
  ),
};
