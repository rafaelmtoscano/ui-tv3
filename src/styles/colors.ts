export const colors = {
  light: {
    primaryBackground: '#FFF',
    colorBaseBackground: 'rgba(17, 23, 43, 0.04)',
    lineLight: 'rgba(17, 23, 43, 0.12)',
    textPrimary: '#11172B',
    textSecondary: 'rgba(17, 23, 43, 0.80)',
    textDisabled: 'rgba(17, 23, 43, 0.65)',
  },
  dark: {
    lineDark: 'rgba(255, 255, 255, 0.08)',
    primaryBackground: 'rgba(255, 255, 255, 0.04)',
    baseBackground: '#11172B',
    textPrimary: '#FFF',
    textSecondary: 'rgba(255, 255, 255, 0.75)',
    textDisabled: 'rgba(255, 255, 255, 0.50)',
  },
} as const;

export type ColorTheme = keyof typeof colors;
export type ColorToken<T extends ColorTheme> = keyof typeof colors[T];
