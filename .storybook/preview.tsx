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
    (Story) => {
      document.body.style.fontFamily = "'Plus Jakarta Sans', Inter, system-ui, -apple-system, sans-serif";
      document.body.style.webkitFontSmoothing = 'antialiased';
      return <Story />;
    },
  ],
};

export default preview;
