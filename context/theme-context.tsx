import { GlobalStyles } from '@/design-system/global-styles';
import { defaultTheme } from '@/design-system/theme/default-theme';
import { ThemeProps } from '@/design-system/theme/theme.types';
import { Global } from '@emotion/react';
import { createContext, useContext, useState } from 'react';

interface ThemeContextType {
  theme: ThemeProps;
  setTheme: (theme: ThemeProps) => void;
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

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Global styles={GlobalStyles} />
      {children}
    </ThemeContext.Provider>
  );
}
