import React, { createContext, useContext, useState } from 'react';
import { Theme } from '../constants/theme';

type ThemeContextType = {
  currentTheme: Theme;
  toggleTheme: () => void;
};

type ThemeContextProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeContextProvider: React.FC<ThemeContextProps> = (
  props: ThemeContextProps,
) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.light);

  const toggleTheme = () => {
    const theme = currentTheme === Theme.dark ? Theme.light : Theme.dark;
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext should be used only with ThemeContextProvider',
    );
  }

  return context;
};

export { ThemeContextProvider, useThemeContext };
