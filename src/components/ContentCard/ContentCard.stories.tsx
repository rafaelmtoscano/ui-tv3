import type { Meta, StoryObj } from '@storybook/react';
import { ContentCard } from './ContentCard';

const meta: Meta<typeof ContentCard> = {
  title: 'Components/ContentCard',
  component: ContentCard,
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
      options: ['image', 'image-text'],
    },
    isLive: {
      control: 'boolean',
    },
    isFocused: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentCard>;

const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=564';

export const ImageOnly: Story = {
  args: {
    variant: 'image',
    image: SAMPLE_IMAGE,
  },
};

export const ImageWithText: Story = {
  args: {
    variant: 'image-text',
    image: SAMPLE_IMAGE,
    label: 'CATEGORIA',
    timestamp: 'Ontem • 2h 15m',
    title: 'Título do Conteúdo Principal',
  },
};

export const WithLiveTag: Story = {
  args: {
    variant: 'image-text',
    image: SAMPLE_IMAGE,
    isLive: true,
    label: 'AO VIVO',
    title: 'Evento Esportivo em Tempo Real',
  },
};

export const WithLogo: Story = {
  args: {
    variant: 'image-text',
    image: SAMPLE_IMAGE,
    logo: 'https://cdn.builder.io/api/v1/image/assets%2F8decac7d217b4e02a090384b68b42488%2F4cdf5193049149c09b1a696f271ac6ad?format=webp&width=800&height=1200',
    title: 'Conteúdo com Logo da Marca',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', padding: '64px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ color: '#FFF' }}>Idle</h3>
        <ContentCard variant="image" image={SAMPLE_IMAGE} />
        <ContentCard
          variant="image-text"
          image={SAMPLE_IMAGE}
          label="SÉRIE"
          timestamp="Temporada 1"
          title="O Grande Mistério"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ color: '#FFF' }}>Focus</h3>
        <ContentCard isFocused variant="image" image={SAMPLE_IMAGE} />
        <ContentCard
          isFocused
          variant="image-text"
          image={SAMPLE_IMAGE}
          label="FILME"
          timestamp="2024 • 1h 45m"
          title="Uma Aventura no Espaço"
          isLive
        />
      </div>
    </div>
  ),
};
