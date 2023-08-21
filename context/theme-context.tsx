import { Global } from '@emotion/react';
import { createContext, useContext, useState } from 'react';

import { GlobalStyles } from '@/design-system/global-styles';
import { ColorType, defaultTheme } from '@/design-system/theme/default-theme';
import { ThemeProps } from '@/design-system/theme/theme.types';

interface ThemeContextType {
  theme: ThemeProps;
  setTheme: (theme: ThemeProps) => void;
  colors: ColorType;
  setColors: (colors: ColorType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeProps>(defaultTheme);
  const [colors, setColors] = useState<ColorType>(defaultTheme.theme.colors);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors, setColors }}>
      <Global styles={GlobalStyles} />
      {children}
    </ThemeContext.Provider>
  );
}
