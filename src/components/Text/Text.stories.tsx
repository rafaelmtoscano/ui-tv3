import React from 'react';
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
      description: 'The typographic variant',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: 'The size of the text within the variant',
    },
    as: {
      control: 'text',
      description: 'The HTML element to render',
    },
    children: {
      control: 'text',
      description: 'The content of the text component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Display: Story = {
  args: {
    children: 'Display Text',
    variant: 'display',
    size: 'large',
  },
};

export const Headline: Story = {
  args: {
    children: 'Headline Text',
    variant: 'headline',
    size: 'medium',
  },
};

export const Body: Story = {
  args: {
    children: 'Body Text Content',
    variant: 'body',
    size: 'medium',
  },
};

export const Label: Story = {
  args: {
    children: 'LABEL TEXT',
    variant: 'label',
    size: 'small',
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div>
        <h3 style={{ marginBottom: '10px', color: '#666' }}>Display</h3>
        <Text {...args} variant="display" size="large">Display Large</Text>
        <Text {...args} variant="display" size="medium">Display Medium</Text>
        <Text {...args} variant="display" size="small">Display Small</Text>
      </div>
      <div>
        <h3 style={{ marginBottom: '10px', color: '#666' }}>Headline</h3>
        <Text {...args} variant="headline" size="large">Headline Large</Text>
        <Text {...args} variant="headline" size="medium">Headline Medium</Text>
        <Text {...args} variant="headline" size="small">Headline Small</Text>
      </div>
      <div>
        <h3 style={{ marginBottom: '10px', color: '#666' }}>Body</h3>
        <Text {...args} variant="body" size="large">Body Large</Text>
        <Text {...args} variant="body" size="medium">Body Medium</Text>
        <Text {...args} variant="body" size="small">Body Small</Text>
      </div>
      <div>
        <h3 style={{ marginBottom: '10px', color: '#666' }}>Label</h3>
        <Text {...args} variant="label" size="small">Label Small</Text>
      </div>
    </div>
  ),
};
