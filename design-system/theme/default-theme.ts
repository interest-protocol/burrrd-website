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
  },
};

export type ThemeType = typeof defaultTheme;

export type ColorType = typeof defaultTheme.theme.colors;
