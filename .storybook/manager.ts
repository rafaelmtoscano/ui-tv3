import { addons } from '@storybook/manager-api';

addons.setConfig({
  enableShortcuts: true,
  sidebar: {
    showRoots: true,
  },
  initialActive: 'sidebar',
});
