import React from 'react';
import type { Preview } from '@storybook/react';

import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
