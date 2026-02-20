import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ContentRail } from './ContentRail';
import { ContentRailGroup } from '../ContentRailGroup';

const meta: Meta<typeof ContentRail> = {
  title: 'Components/ContentRail',
  component: ContentRail,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#11172B' }],
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ContentRail>;

const sampleItems = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    title: 'Exploração Espacial',
    label: 'Documentário',
    timestamp: '45 min',
    isLive: true,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=800',
    title: 'Natureza Selvagem',
    label: 'Natureza',
    timestamp: '1h 20min',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800',
    title: 'Concerto ao Vivo',
    label: 'Música',
    timestamp: '2h 05min',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    title: 'Grande Festival',
    label: 'Evento',
    timestamp: '3h 30min',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
    title: 'Vida Noturna',
    label: 'Viagem',
    timestamp: '55 min',
  },
];

export const ImageVariant: Story = {
  args: {
    title: 'Canais Recomendados',
    variant: 'image',
    items: sampleItems.map(item => ({ id: item.id, image: item.image })),
  },
};

export const ImageTextVariant: Story = {
  args: {
    title: 'Continuar Assistindo',
    variant: 'image-text',
    items: sampleItems,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [focusedIndex, setFocusedIndex] = useState(0);
    return (
      <div style={{ padding: '64px 0' }}>
        <ContentRail
          {...args}
          focusedIndex={focusedIndex}
          onFocusedIndexChange={setFocusedIndex}
        />
      </div>
    );
  },
  args: {
    title: 'Navegação Interativa',
    variant: 'image-text',
    items: sampleItems,
  },
};

export const MultipleRails: Story = {
  render: () => {
    const [activeRail, setActiveRail] = useState(0);
    const [focusedIndices, setFocusedIndices] = useState([0, 0, 0]);

    const handleFocusedIndexChange = (railIndex: number, itemIndex: number) => {
      setActiveRail(railIndex);
      setFocusedIndices(prev => {
        const next = [...prev];
        next[railIndex] = itemIndex;
        return next;
      });
    };

    return (
      <ContentRailGroup style={{ padding: '64px 0' }}>
        <ContentRail
          title="TV ao vivo"
          variant="image"
          items={sampleItems.slice(0, 4)}
          focusedIndex={activeRail === 0 ? focusedIndices[0] : -1}
          onFocusedIndexChange={(idx) => handleFocusedIndexChange(0, idx)}
          onNavigateDown={() => setActiveRail(1)}
        />
        <ContentRail
          title="Documentários"
          variant="image-text"
          items={sampleItems}
          focusedIndex={activeRail === 1 ? focusedIndices[1] : -1}
          onFocusedIndexChange={(idx) => handleFocusedIndexChange(1, idx)}
          onNavigateUp={() => setActiveRail(0)}
          onNavigateDown={() => setActiveRail(2)}
        />
        <ContentRail
          title="Séries"
          variant="image-text"
          items={sampleItems.slice(2)}
          focusedIndex={activeRail === 2 ? focusedIndices[2] : -1}
          onFocusedIndexChange={(idx) => handleFocusedIndexChange(2, idx)}
          onNavigateUp={() => setActiveRail(1)}
        />
      </ContentRailGroup>
    );
  },
};
