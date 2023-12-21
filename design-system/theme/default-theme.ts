import { ThemeProps } from './theme.types';

export const defaultTheme: ThemeProps = {
  theme: {
    colors: {
      primary: '#DC77F7',
      secondary: '#3B1259',
      tertiary: '#1B1622',
      quaternary: '#9590E2',
      quinary: '#F24E1E',
      senary: '#FEEC85',
      septenary: '#FFC701',
    },
    gradient: {
      radialGradientViolet:
        'radial-gradient(92.08% 92.08% at 48.75% 100%, #3C1171 0%, #DC77F7 100%);',
    },
  },
};

export type ThemeType = typeof defaultTheme;

export type ColorType = typeof defaultTheme.theme.colors;
