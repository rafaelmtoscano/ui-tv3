import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Introduction',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Welcome: StoryObj = {
  render: () => (
    <div style={{
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      color: '#11172B',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '48px 32px',
      lineHeight: '1.6',
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: 500, marginBottom: '8px' }}>
        tv-catalog-ui
      </h1>
      <p style={{ fontSize: '18px', color: 'rgba(17,23,43,0.65)', marginBottom: '48px' }}>
        Biblioteca de componentes para interfaces de TV 10-foot (controle remoto / teclado direcional)
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(17,23,43,0.12)', marginBottom: '48px' }} />

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '16px' }}>Instalação</h2>
        <p style={{ fontSize: '16px', color: 'rgba(17,23,43,0.65)', marginBottom: '16px' }}>
          Instale a biblioteca via NPM ou Yarn:
        </p>
        <pre style={{ background: '#11172B', color: '#FFF', padding: '24px', borderRadius: '12px', fontSize: '16px', overflowX: 'auto', marginBottom: '12px' }}>
          {`npm install tv-catalog-ui\n# ou\nyarn add tv-catalog-ui`}
        </pre>
        <p style={{ fontSize: '14px', color: 'rgba(17,23,43,0.65)' }}>
          📦 Disponível em: <a href="https://www.npmjs.com/package/tv-catalog-ui" target="_blank" style={{ color: '#1ea7fd' }}>npmjs.com/package/tv-catalog-ui</a>
        </p>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '16px' }}>Pré-requisitos</h2>
        <p style={{ fontSize: '16px', color: 'rgba(17,23,43,0.65)', marginBottom: '16px' }}>
          A biblioteca requer React 18+ como peer dependency. Certifique-se de ter instalado:
        </p>
        <pre style={{ background: '#11172B', color: '#FFF', padding: '24px', borderRadius: '12px', fontSize: '16px', overflowX: 'auto' }}>
          {`yarn add react react-dom\nyarn add -D @types/react @types/react-dom`}
        </pre>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '16px' }}>Como usar</h2>

        <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '12px' }}>TileButton</h3>
        <pre style={{ background: '#11172B', color: '#FFF', padding: '24px', borderRadius: '12px', fontSize: '15px', overflowX: 'auto', marginBottom: '32px' }}>
          {`import { TileButton } from 'tv-catalog-ui';

// Apenas ícone
<TileButton
  variant="icon"
  icon={<MyIcon />}
  aria-label="Serviços"
/>

// Ícone + texto
<TileButton
  variant="icon-label"
  icon={<MyIcon />}
  label="Semana Gov"
/>

// Imagem
<TileButton
  variant="image"
  image="https://url-da-imagem.jpg"
  alt="Categoria"
/>`}
        </pre>

        <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '12px' }}>CircleButton</h3>
        <pre style={{ background: '#11172B', color: '#FFF', padding: '24px', borderRadius: '12px', fontSize: '15px', overflowX: 'auto', marginBottom: '32px' }}>
          {`import { CircleButton } from 'tv-catalog-ui';

<CircleButton
  image="https://url-da-imagem.jpg"
  label="Nome da Categoria"
  alt="Categoria"
  onClick={() => console.log('clicked')}
/>`}
        </pre>

        <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '12px' }}>Text</h3>
        <pre style={{ background: '#11172B', color: '#FFF', padding: '24px', borderRadius: '12px', fontSize: '15px', overflowX: 'auto', marginBottom: '32px' }}>
          {`import { Text } from 'tv-catalog-ui';

<Text variant="display" size="large">Título Principal</Text>
<Text variant="headline" size="medium">Subtítulo</Text>
<Text variant="body" size="small">Texto de conteúdo</Text>
<Text variant="label" size="small">Legenda</Text>`}
        </pre>

        <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '12px' }}>Tokens de design</h3>
        <pre style={{ background: '#11172B', color: '#FFF', padding: '24px', borderRadius: '12px', fontSize: '15px', overflowX: 'auto' }}>
          {`import { colors, typography } from 'tv-catalog-ui';

// Cores
const style = {
  color: colors.text.primary,
  background: colors.background.primary,
};

// Tipografia
const headlineStyle = {
  ...typography.headline.large,
};`}
        </pre>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '24px' }}>Componentes disponíveis</h2>
        {[
          { name: 'TileButton', desc: 'Botão quadrado com variantes: icon, icon-label e image. Usado em grids de navegação.' },
          { name: 'CircleButton', desc: 'Botão circular com imagem e label. Usado em listas de categorias ou perfis.' },
          { name: 'Text', desc: 'Componente de tipografia com variantes: display, headline, body e label.' },
          { name: 'Button', desc: 'Botão de ação tradicional com variantes primary e secondary.' },
        ].map(({ name, desc }) => (
          <div key={name} style={{
            padding: '20px 24px',
            borderRadius: '12px',
            border: '1px solid rgba(17,23,43,0.12)',
            marginBottom: '12px',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
          }}>
            <code style={{
              background: 'rgba(17,23,43,0.06)',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}>{name}</code>
            <span style={{ fontSize: '16px', color: 'rgba(17,23,43,0.80)' }}>{desc}</span>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '24px' }}>Princípios da interface TV</h2>
        {[
          { title: '🚫 Sem hover', desc: 'Esta biblioteca é para TV. Não existem estados de hover — apenas idle e focus.' },
          { title: '⌨️ Navegação direcional', desc: 'Todos os componentes são navegáveis via teclado (Tab, setas, Enter, Space).' },
          { title: '🔵 Focus visível', desc: 'O estado de focus é sempre visível e forte — escala, sombra ou inversão de cor.' },
          { title: '🎨 Tokens centralizados', desc: 'Cores e tipografia nunca são hardcoded. Sempre use os tokens exportados.' },
        ].map(({ title, desc }) => (
          <div key={title} style={{
            padding: '20px 24px',
            borderRadius: '12px',
            background: 'rgba(17,23,43,0.04)',
            marginBottom: '12px',
          }}>
            <strong style={{ fontSize: '18px', display: 'block', marginBottom: '4px' }}>{title}</strong>
            <span style={{ fontSize: '16px', color: 'rgba(17,23,43,0.80)' }}>{desc}</span>
          </div>
        ))}
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(17,23,43,0.12)', marginBottom: '32px' }} />

      <p style={{ fontSize: '14px', color: 'rgba(17,23,43,0.65)', textAlign: 'center' }}>
        tv-catalog-ui — v1.0.0 · <a href="https://www.npmjs.com/package/tv-catalog-ui" target="_blank" style={{ color: '#1ea7fd' }}>NPM</a>
      </p>
    </div>
  ),
};
