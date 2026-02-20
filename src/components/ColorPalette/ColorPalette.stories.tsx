import type { Meta, StoryObj } from '@storybook/react';
import { ColorPalette } from './ColorPalette';

const meta: Meta<typeof ColorPalette> = {
  title: 'Foundation/Colors',
  component: ColorPalette,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const AllColors: Story = {};
