import React from 'react';
import { colors } from '../../styles/colors';

interface ColorSwatchProps {
  name: string;
  value: string;
}

const ColorSwatch = ({ name, value }: ColorSwatchProps) => {
  const isDarkColor = value.includes('#11172B') || (value.startsWith('rgba') && value.includes('255, 255, 255'));
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '160px' }}>
      <div style={{
        width: '100%',
        height: '80px',
        background: value,
        borderRadius: '8px',
        border: '1px solid rgba(17, 23, 43, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} />
      <span style={{ fontSize: '12px', fontWeight: 500, color: '#11172B' }}>{name}</span>
      <span style={{ fontSize: '11px', color: 'rgba(17, 23, 43, 0.65)' }}>{value}</span>
    </div>
  );
};

export const ColorPalette = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '40px', background: '#F8F9FA' }}>
    <div style={{ marginBottom: '16px' }}>
      <h1 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '32px', fontWeight: 600, color: '#11172B' }}>Color Palette</h1>
      <p style={{ fontFamily: 'Plus Jakarta Sans', color: 'rgba(17, 23, 43, 0.65)', marginTop: '8px' }}>
        Semantic color tokens for the design system.
      </p>
    </div>

    {(Object.entries(colors) as [keyof typeof colors, any][]).map(([category, tokens]) => (
      <div key={category}>
        <h2 style={{ 
          marginBottom: '24px', 
          fontFamily: 'Plus Jakarta Sans', 
          fontSize: '20px', 
          fontWeight: 600, 
          color: '#11172B',
          textTransform: 'capitalize',
          borderBottom: '1px solid rgba(17, 23, 43, 0.08)',
          paddingBottom: '12px'
        }}>
          {category} Tokens
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {Object.entries(tokens).map(([key, value]) => (
            <ColorSwatch key={key} name={key} value={value as string} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
