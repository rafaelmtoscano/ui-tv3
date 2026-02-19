import React from 'react';
import { colors } from '../../styles/colors';

interface ColorSwatchProps {
  name: string;
  value: string;
}

const ColorSwatch = ({ name, value }: ColorSwatchProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '160px' }}>
    <div style={{
      width: '100%',
      height: '80px',
      background: value,
      borderRadius: '8px',
      border: '1px solid rgba(17, 23, 43, 0.12)',
    }} />
    <span style={{ fontSize: '12px', fontWeight: 500, color: '#11172B' }}>{name}</span>
    <span style={{ fontSize: '11px', color: 'rgba(17, 23, 43, 0.65)' }}>{value}</span>
  </div>
);

export const ColorPalette = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '24px' }}>
    <div>
      <h2 style={{ marginBottom: '24px', fontFamily: 'Plus Jakarta Sans' }}>Light Mode</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {Object.entries(colors.light).map(([key, value]) => (
          <ColorSwatch key={key} name={key} value={value} />
        ))}
      </div>
    </div>
    <div style={{ background: '#11172B', padding: '24px', borderRadius: '12px' }}>
      <h2 style={{ marginBottom: '24px', fontFamily: 'Plus Jakarta Sans', color: '#FFF' }}>Dark Mode</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {Object.entries(colors.dark).map(([key, value]) => (
          <ColorSwatch key={key} name={key} value={value} />
        ))}
      </div>
    </div>
  </div>
);
