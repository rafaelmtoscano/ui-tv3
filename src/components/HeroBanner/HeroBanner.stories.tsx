import type { Meta, StoryObj } from '@storybook/react';
import { HeroBanner } from './HeroBanner';
import type { HeroBannerSlide } from './HeroBanner';

const meta: Meta<typeof HeroBanner> = {
  title: 'Layout/HeroBanner',
  component: HeroBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#11172B' },
        { name: 'light', value: '#FFFFFF' },
      ],
    },
  },
  argTypes: {
    autoPlayInterval: {
      control: { type: 'number' },
      description: 'Interval in ms between slide transitions',
    },
    slides: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

const CANAL_GOV_LOGO =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Canal_Gov.svg/320px-Canal_Gov.svg.png';

const sampleSlides: HeroBannerSlide[] = [
  {
    id: '1',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920',
    logo: CANAL_GOV_LOGO,
    isLive: true,
    title: 'Brasil em dia',
    description:
      'Confira as notícias do Governo Federal e as políticas públicas que fazem diferença na sua vida.',
    buttonLabel: 'Assistir',
    onButtonClick: () => console.log('Assistir clicked'),
  },
  {
    id: '2',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920',
    title: 'Agenda Nacional',
    description:
      'Acompanhe os principais eventos e agendas do Governo Federal ao longo da semana.',
    buttonLabel: 'Assistir',
    onButtonClick: () => console.log('Assistir slide 2'),
  },
  {
    id: '3',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920',
    title: 'Serviços Públicos',
    description:
      'Conheça todos os serviços disponíveis para o cidadão através da Plataforma Gov.br.',
    buttonLabel: 'Saiba mais',
    onButtonClick: () => console.log('Saiba mais clicked'),
  },
  {
    id: '4',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1920',
    title: 'Programação Especial',
    description:
      'Documentários e programas especiais sobre cultura, educação e desenvolvimento do Brasil.',
    buttonLabel: 'Ver programação',
    onButtonClick: () => console.log('Ver programação clicked'),
  },
];

export const SingleSlide: Story = {
  args: {
    slides: [sampleSlides[0]],
    autoPlayInterval: 15000,
  },
};

export const MultipleSlides: Story = {
  args: {
    slides: sampleSlides,
    autoPlayInterval: 5000,
  },
};

export const WithLiveTag: Story = {
  args: {
    slides: [
      { ...sampleSlides[0], isLive: true, logo: CANAL_GOV_LOGO },
      ...sampleSlides.slice(1),
    ],
    autoPlayInterval: 8000,
  },
};

export const NoButton: Story = {
  args: {
    slides: sampleSlides.map(({ buttonLabel: _b, onButtonClick: _o, ...rest }) => rest),
    autoPlayInterval: 15000,
  },
};
