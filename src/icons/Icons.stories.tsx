import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from './index';

const meta: Meta = {
  title: 'Design System/Icons',
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
};

export default meta;

const IconGrid = () => {
  const iconList = Object.entries(Icons).filter(([name]) => name.endsWith('Icon'));
  const sizes = [24, 48, 96];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '40px' }}>
      {iconList.map(([name, IconComponent]) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ color: '#FFF', margin: 0, fontFamily: 'Plus Jakarta Sans', fontSize: '20px' }}>{name}</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '32px' }}>
            {sizes.map((size) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <IconComponent size={size} color="#FFF" />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>{size}px</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const AllIcons: StoryObj = {
  render: () => <IconGrid />,
};
